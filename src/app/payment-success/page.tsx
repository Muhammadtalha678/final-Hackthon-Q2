// app/payment-success/page.tsx
import SuccessDialog from "@/components/SuccessDialog";
import { redirect } from "next/navigation";

interface Props {
    searchParams?: { session_id?: string };
}

// This is a server component, no 'use client'
const PaymentSuccess = ({ searchParams }: Props) => {
    const session_id = searchParams?.session_id;

    // redirect if session_id missing
    if (!session_id) {
        redirect("/cart");
    }

    return <SuccessDialog />;
};

export default PaymentSuccess;
