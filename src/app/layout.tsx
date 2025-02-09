import { CartContextProvider } from '@/context/CartContext';
import { WishListProvider } from '@/context/WishListContext';
import { poppins } from '@/lib/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'
import React from 'react'

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${poppins.className} poppins_afb8ecac-module__Cn2Q3q__className`}>
                <ClerkProvider>
                    <CartContextProvider>
                        <WishListProvider>
                            {children}
                        </WishListProvider>

                    </CartContextProvider>

                </ClerkProvider>
            </body>
        </html>
    )
}

export default RootLayout
