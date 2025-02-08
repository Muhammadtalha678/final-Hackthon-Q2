'use client'

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
export default function CheckoutSummary() {
    const { cart } = useCart()
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    const handleSubmit = () => {
        setLoading(true); //first time set true to show loader

        const form = document.getElementById('billingForm') //get form by id
        if (form) {
            // agr form ha to event dipatch krdo
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }

        setTimeout(() => {
            // thodi der rukhein taake validation errors check ho sakein
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        const amount = cart.reduce((total: number, item) => total + (item.productPrice * item.productQuantity), 0)
        // console.log(amount >= 10000);

        setTotal(amount)
    }, [cart])
    return (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
            {/* Product & Subtotal */}
            <div className="flex justify-between font-semibold text-lg">
                <h2>Product</h2>
                <h2>Subtotal</h2>
            </div>
            {
                cart.map((e, index) => (
                    <div className="flex justify-between text-gray-600 mt-2" key={index + 1}>

                        <span>{`${e.productName} x ${e.productQuantity}`}</span>
                        <span>{`Rs. ${e.productPrice * e.productQuantity}`}</span>

                    </div>
                ))
            }

            {/* Total */}
            <div className="flex justify-between mt-4 text-lg font-semibold">
                <span>Delivery Fees</span>
                {
                    total < 10000 ? <span>Rs. 200</span> : <span>Free</span>
                }
            </div>
            <div className="flex justify-between mt-4 text-lg font-semibold">
                <span>Subtotal</span>
                <span>Rs. {total >= 10000 ? total : total + 200}</span>
            </div>
            <div className="flex justify-between mt-2 text-xl font-bold text-yellow-700">
                <span>Total</span>
                <span>Rs. {total >= 10000 ? total : total + 200}</span>
            </div>

            <hr className="my-4" />

            {/* Payment Methods */}
            <div className="space-y-3">
                <label className="flex items-center gap-2 font-medium">
                    <input type="radio" name="payment" defaultChecked />
                    Direct Bank Transfer
                </label>
                <p className="text-gray-500 text-sm">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    Your order will not be shipped until the funds have cleared in our account.
                </p>

                <label className="flex items-center gap-2 text-gray-400">
                    <input type="radio" name="payment" disabled />
                    Direct Bank Transfer
                </label>

                <label className="flex items-center gap-2 text-gray-400">
                    <input type="radio" name="payment" disabled />
                    Cash On Delivery
                </label>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 mt-4">
                Your personal data will be used to support your experience throughout this website, to manage access to your
                account, and for other purposes described in our <span className="font-bold">privacy policy</span>.
            </p>

            {/* Place Order Button */}
            <button className="mt-6 w-full py-3 border rounded-lg font-medium text-lg hover:bg-gray-100" onClick={handleSubmit} disabled={loading}>
                {loading ? "Loding...." : "Place Order"}
            </button>
        </div>
    );
}
