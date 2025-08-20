'use client'
import React from 'react'
import SuccessDialog from "../../components/SuccessDialog"
import { redirect } from 'next/navigation';
interface Props {
    searchParams: { session_id?: string };
}
const PaymentSuccess = async ({ searchParams }: { searchParams: Promise<Props> }) => {
    const { session_id } = (await searchParams).searchParams

    if (!session_id) {
        redirect('/cart')
    }
    return (
        <SuccessDialog />
    )
}

export default PaymentSuccess
