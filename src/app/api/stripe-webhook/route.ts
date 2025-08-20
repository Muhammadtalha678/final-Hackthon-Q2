
import { client } from "@/sanity/lib/client";
import { CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
    const body = await req.text()
    const sig = req.headers.get('stripe-signature')!
    let event: Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret)

    } catch (err: any) {
        console.error("Webhook signature verification failed:", err.message);
        return NextResponse.json({ body: { error: "Invalid signature" }, status: 400 });
    }
    console.log(event.type);

    const session = event.data.object as Stripe.Checkout.Session
    const orderId = session.metadata?.orderId
    switch (event.type) {
        case "checkout.session.completed":
            if (orderId) {
                //mark paid order
                await client.patch(orderId).set({
                    paymentStatus: "Paid"
                }).commit()
                //fetch sales data of recent create order id
                const sale = await client.fetch(`*[_type == 'sales' && _id == $id][0]`, { id: orderId })

                if (sale.product_detail?.length) {
                    sale.product_detail?.map(async (item: any) => {
                        const productData = await client.fetch(`*[_type == 'products' && _id == $id][0]`, { id: item.productId })
                        if (productData?.stock !== undefined) {
                            const stockUpdate = productData.stock - item.quantity_sold

                            await client.patch(item.productId).set({ stock: stockUpdate }).commit()

                        }
                    })
                }

            }
            break;
        case "checkout.session.expired":
        case "checkout.session.async_payment_failed":
            console.log("hello");

            if (orderId) {
                await client.delete(orderId)
            }
            break

        default:
            console.log(`Unhandled event type: ${event.type}`);
            break;
    }
    // if (event.type === "checkout.session.completed") {
    //     const session = event.data.object as Stripe.Checkout.Session
    //     const formData:CheckOutValidationSchema = JSON.parse(session.metadata?.formData ||
    //         "{}")

    //     console.log(session);
    //     try {
    //         await client.create({
    //             _type: "sales",
    //             customerId: session.metadata?.customerId,
    //             deliveryAddress: {
    //                 name: `${formData.firstname} ${formData.lastname}`,
    //                 address: formData.address,
    //                 city: formData.town,
    //                 country: formData.country,
    //                 zipcode: formData.zipcode,
    //             },
    //             paymentStatus: "Paid",
    //             deliveryStatus: "pending",
    //             sales_price: formData.sales_price,
    //             product_detail: formData.product_detail,
    //         });

    //         console.log("✅ Order saved in Sanity");
    //     } catch (err) {
    //         console.error("❌ Failed to save order:", err);
    //     }
    // }
    return NextResponse.json({ received: true })


}