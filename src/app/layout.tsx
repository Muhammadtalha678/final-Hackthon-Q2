import { CartContextProvider } from '@/context/CartContext';
import { WishListProvider } from '@/context/WishListContext';
import { poppins } from '@/lib/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react'

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <ClerkProvider>
                    <CartContextProvider>
                        <WishListProvider>

                            <div className="max-w-[1440px] mx-auto">
                                {children}
                            </div>
                        </WishListProvider>

                    </CartContextProvider>

                </ClerkProvider>
            </body>
        </html>
    )
}

export default RootLayout
