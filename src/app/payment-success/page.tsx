'use client'
import React from 'react'
import SuccessDialog from "../../components/SuccessDialog"
import { useCart } from '@/context/CartContext'
import { useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

const PaymentSuccess = () => {
    const { emptyCart } = useCart()
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {

        const sessionId = searchParams.get("session_id")

        if (!sessionId) {
            // agar session_id nahi hai to cart page bhej do
            router.replace("/cart")
        }
        emptyCart();
        console.log("Cart after clear:", localStorage.getItem("cart"));
    }, [searchParams, router]);

    return (
        <SuccessDialog />
    )
}

export default PaymentSuccess
