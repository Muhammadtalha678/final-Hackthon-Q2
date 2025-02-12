'use client'

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
export default function CheckoutSummary() {
    const { cart } = useCart()
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const amount = cart.reduce((total: number, item) => total + (item.productPrice * item.productQuantity), 0)
        // console.log(amount >= 10000);

        setTotal(amount)
    }, [cart])
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="border-b pb-2">
                {
                    cart.map((e, i) => (
                        <p className="flex justify-between" key={i + 1}>
                            <span>{`${e.productName} x ${e.productQuantity}`}</span>
                            <span>Rs. {e.productPrice * e.productQuantity}</span>
                        </p>

                    ))
                }
            </div>

            <div className="border-b py-2">
                <p className="flex justify-between">
                    <span className="font-medium">Delivery Fees</span>
                    <span>{total >= 10000 ? "Free" : "Rs. 200"}</span>
                </p>
            </div>

            <div className="mt-4">
                <p className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rs. {total >= 10000 ? total : total + 200}</span>
                </p>
            </div>

            <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="payment" className="w-4 h-4" />
                        <span>Direct Bank Transfer</span>
                    </label>
                    <p className="text-sm text-gray-600">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                        Your order will not be shipped until the funds have cleared in our account.
                    </p>
                </div>
            </div>
        </div>
    );
}
