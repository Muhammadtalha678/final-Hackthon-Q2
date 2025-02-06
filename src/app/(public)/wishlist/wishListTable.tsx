'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useWishList } from '@/context/WishListContext'
import { urlFor } from '@/sanity/lib/image'
import { Trash2 } from 'lucide-react' // Import trash icon
import { useCart } from '@/context/CartContext'
import { Cart } from '@/interfaces/Cart'
import { cartObject } from '@/lib/object'

const WishListTable = () => {
    const { wishList, removeItem } = useWishList() // Access remove function
    const { addProdToCart, cart } = useCart() // Access remove function


    const handleCart = (item: Cart) => {
        const obj: Cart = cartObject(item)
        addProdToCart(obj)
    }

    return (
        wishList.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishList.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                        {/* Image (Fixed size) */}
                        <div className="w-32 h-32">
                            <Image
                                src={urlFor(item.productImage).url() || "/placeholder.png"}
                                alt={item.productName}
                                width={128}
                                height={128}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg font-semibold mt-3 text-center">{item.productName}</h3>

                        {/* Buttons - FIXED INSIDE THE CARD */}
                        <div className="flex gap-2 mt-3 w-full justify-center">
                            <Button
                                variant={cart.find((e) => e.productId === item.productId) ? 'btnSecondary' : 'btnPrimary'}

                                className="px-4 py-2 rounded-lg"
                                onClick={() => handleCart(item)}
                                disabled={cart.find((e) => e.productId === item.productId) ? true : false}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="btnPrimary"
                                className="px-3 py-2 flex items-center gap-1 "
                                onClick={() => removeItem(item.productId)}
                            >
                                <Trash2 size={18} /> Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        )


    )
}

export default WishListTable
