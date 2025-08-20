// app/payment-success/page.tsx
import SuccessDialog from "@/components/SuccessDialog";
import { redirect } from "next/navigation";

interface Props {
    searchParams?: { session_id?: string };
}

// This is a server component, no 'use client'
const PaymentSuccess = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const searchParam = await searchParams
    const sessionId = await searchParam.session_id

    // redirect if session_id missing
    if (!sessionId) {
        redirect("/cart");
    }

    return <SuccessDialog />;
};

export default PaymentSuccess;
