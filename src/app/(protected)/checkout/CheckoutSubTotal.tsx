'use client'

import { useState } from "react";

export default function CheckoutSummary() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true); //first time set true to show loader

        const form = document.getElementById('billingForm') //get form by id
        if (form) {
            // agr form ha to event dipatch krdo
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }

        setTimeout(() => {
            // hodi der rukhein taake validation errors check ho sakein
            setLoading(false)
        }, 1000);
    }
    return (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
            {/* Product & Subtotal */}
            <div className="flex justify-between font-semibold text-lg">
                <h2>Product</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
                <span>Asgaard Sofa x 1</span>
                <span>Rs. 250,000.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between mt-4 text-lg font-semibold">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mt-2 text-xl font-bold text-yellow-700">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
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
