'use client'
import React from 'react'
import SuccessDialog from "../../components/SuccessDialog"
import { redirect } from 'next/navigation';
import { SESSION_ID } from 'sanity';
interface Props {
    searchParams: { session_id?: string };
}
const PaymentSuccess = async ({ searchParams }: { searchParams: Promise<Props> }) => {
    const { session_id } = (await searchParams).searchParams
    console.log(session_id);


    if (!session_id) {
        redirect('/cart')
    }
    return (
        <SuccessDialog />
    )
}

export default PaymentSuccess
