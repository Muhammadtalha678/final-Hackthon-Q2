"use server";

import { Product } from "@/interfaces/Product";
import { client } from "@/sanity/lib/client";
// import { client } from "@/sanity/lib/client";
import { CheckOutValidationSchema } from "@/utils/validations/checkoutValidation";
import { auth } from "@clerk/nextjs/server";
export async function checkoutAction(prevState: unknown, formData: CheckOutValidationSchema) {
    const user = (await auth()).userId
    if (!user) {
        return {
            error: true, message: 'User not authenticate'
        }
    }
    try {
        await Promise.all(
            [
                client.create({
                    _type: 'sales',
                    customerId: user,
                    deliveryAddress: {
                        name: `${formData.firstname} ${formData.lastname}`,
                        address: formData.address,
                        city: formData.town,
                        country: formData.country,
                        zipcode: formData.zipcode
                    },
                    paymentStatus: 'Cash on delivery',
                    deliveryStatus: "pending",
                    sales_price: formData.sales_price,
                    product_detail: formData.product_detail

                })
                ,
                // update inventory
                formData.product_detail.map(async (e) => {
                    const productData = await client.fetch(`*[_type == 'products' && _id == $id][0]`, { id: e.productId })
                    const stockUpdate = productData.stock - e.quantity_sold

                    await client.patch(e.productId)
                        .set({ stock: stockUpdate })
                        .commit()

                }),
            ]
        )

        return {
            message: "Order Placed Successfully",
            error: false,
        }

    } catch (error) {
        const err = error as Error
        return {
            message: err.message,
            error: true,
        }

    }


    // client.delete({
    //     query: `*[_type == "sales"]`
    // })



}
