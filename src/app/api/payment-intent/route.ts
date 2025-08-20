import { client } from "@/sanity/lib/client";
import { CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'
import { auth } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const base_url = process.env.NODE_ENV === "production" ? "https://furnirohackathonq2.vercel.app" : "http://localhost:3000"


export async function POST(request: NextRequest) {
    try {
        const user = (await auth()).userId
        const { formData }: { formData: CheckOutValidationSchema } = await request.json();
        // console.log(amount);

        // store data in sanity and make payment status pending
        const orderDraft = await client.create({
            _type: "sales",
            customerId: user,
            deliveryAddress: {
                name: `${formData.firstname} ${formData.lastname}`,
                address: formData.address,
                city: formData.town,
                country: formData.country,
                zipcode: formData.zipcode
            },
            paymentStatus: 'pending',
            deliveryStatus: "pending",
            sales_price: formData.sales_price,
            product_detail: formData.product_detail
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            // line_items: formData.product_detail.map(item => (

            //     {
            //         price_data: {
            //             currency: "pkr",
            //             product_data: { name: item.productName },
            //             unit_amount: item.productPrice * 100,

            //         },
            //         quantity: item.quantity_sold
            //     }
            // )), to show multiple orders and quantity with each product

            line_items: [
                {
                    price_data: {
                        currency: "pkr",
                        product_data: { name: "Furniro order", },
                        unit_amount: formData.sales_price * 100
                    },
                    quantity: 1
                }
            ],
            success_url: `${base_url}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${base_url}/cart`,
            metadata: { orderId: orderDraft._id }
        })
        // console.log(session);

        return NextResponse.json({ id: session.id });

        // return NextResponse.json({
        //     clientSecret: paymentIntent.client_secret
        // })
    } catch (error: unknown) {
        if (error instanceof Error) {
            // console.log(error.message);
            return NextResponse.json({
                status: 500, body: { error: error.message }
            })
        }
    }
}

// export async function POST(request: NextRequest) {
//     try {
//         const { amount } = await request.json();
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "usd",
//             automatic_payment_methods: { enabled: true }
//         })

//         return NextResponse.json({
//             clientSecret: paymentIntent.client_secret
//         })
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             return NextResponse.json({
//                 status: 500, body: { error: error.message }
//             })
//         }
//     }
// }