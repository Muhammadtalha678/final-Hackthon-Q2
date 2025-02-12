import { Metadata } from 'next';
import React from 'react'
import CheckoutSummary from './CheckoutSubTotal';
import BillingDetails from './BillingDetails';

export const metadata: Metadata = {
  title: "Checkout | Furniro",
};




const Checkout = () => {
  return (
    <div className="w-full mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
      <BillingDetails />
    </div>
  )
}

export default Checkout

