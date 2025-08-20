'use client'
import React from 'react'
import SuccessDialog from "../../components/SuccessDialog"
import { redirect } from 'next/navigation';
interface Props {
    searchParams: { session_id?: string };
}
const PaymentSuccess = ({ searchParams }: Props) => {
    const sessionId = searchParams.session_id

    if (!sessionId) {
        redirect('/cart')
    }
    return (
        <SuccessDialog />
    )
}

export default PaymentSuccess
