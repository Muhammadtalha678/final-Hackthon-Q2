'use client'

import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from '@/context/CartContext'
import { useEffect } from "react";
export default function PaymentSuccessDialog() {
    const { emptyCart } = useCart()
    useEffect(() => {
        emptyCart()
    }, []);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full">
                        <CheckIcon className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Title & Description */}
                <div className="text-center mt-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Order Placed Successfully</h3>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-6">
                    <Link href={'/shop'}
                        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 text-center"
                    >
                        Continue Shopping
                    </Link>
                    <Link href={'/order-details'}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                        Order details
                    </Link>
                </div>
            </div>
        </div>
    );
}
