import CartTable from '@/components/cart/cartTable/cartTable'
import Services from '@/components/resuable/Services'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Your Cart | Furniro",
  description: "View and manage your selected furniture items before checkout.",
};

const Cart = () => {
  return (
    <>
      <CartTable />
      <Services />
    </>
  )
}

export default Cart