import { Metadata } from 'next';
import React from 'react'
import BillingDetails from './BillingDetails';
import CheckoutSummary from './CheckoutSubTotal';

export const metadata: Metadata = {
  title: "Checkout | Furniro",
};




const Checkout = () => {
  return (
    <div className='px-14 space-x-2 flex md:flex-row flex-col'>
      <div className='md:w-[50%] w-full'>
        <BillingDetails />
      </div>
      <div className='md:w-[50%] w-full'>
        <CheckoutSummary />
      </div>

    </div>
  )
}

export default Checkout

