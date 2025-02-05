'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from '@/context/CartContext'
import { cartObject } from "@/lib/object";
import { Cart } from "@/interfaces/Cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartTable = () => {
    const router = useRouter()
    // import contexts from cart
    const { cart, addProdToCart, decreaseItemQuan, removeItem } = useCart();

    //use state to update 
    const [cartTotal, setCartTotal] = useState(0)

    //add to cart
    const handleCart = (item: Cart) => {
        const obj: Cart = cartObject(item)
        addProdToCart(obj)
    }

    //decrease item from cart
    const handleDecrease = (id: string) => {
        decreaseItemQuan(id)
    }

    //any effect in cart run  total calculation and crtTotal use to show price update in summary and in total   
    useEffect(() => {
        const total = cart.reduce((total: number, item) => (total + (item.productPrice * item.productQuantity)), 0)
        setCartTotal(total)
    }, [cart])


    return (
        cart.length > 0 ?
            (<div className="p-6 flex flex-col md:flex-row gap-8">
                {/* Cart Table */}
                <div className="w-full md:w-2/3">
                    <div className="bg-beige-100 p-4 rounded-xl shadow-md">
                        <div className="grid grid-cols-4 font-semibold text-gray-600 p-2">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="border-t my-2"></div>
                        {cart.map((cartItem, index) => (
                            <div key={index + 1} className="grid grid-cols-4 items-center gap-4 p-2">
                                {cartItem.productImage && (
                                    <Image
                                        width={64}
                                        height={64}
                                        src={urlFor(cartItem.productImage).url() || "/placeholder.png"}
                                        alt={cartItem.productName}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                )}
                                {/* <span className="text-gray-500">{cartItem.productName}</span> */}
                                <span className="text-gray-500">Rs. {cartItem.productPrice}</span>
                                <span className="text-gray-500">{cartItem.productQuantity}</span>
                                <span className="text-gray-500">{cartItem.productQuantity * cartItem.productPrice}</span>
                                <div className="flex items-center gap-2">
                                    <Button variant={'btnPrimary'} className="p-1" size="icon"
                                        onClick={() => handleDecrease(cartItem.productId)}
                                        disabled={cartItem.productQuantity <= 1}>
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="w-8 text-center">{cartItem.productQuantity}</span>

                                    <Button variant={'btnPrimary'} className="p-1" size="icon"
                                        onClick={() => handleCart(cartItem)}>
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                    <Button variant={'btnSecondary'} className="p-1" size="icon"
                                        onClick={() => removeItem(cartItem.productId)}>
                                        <Trash2 className="text-gold-500 cursor-pointer" />

                                    </Button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Cart Totals */}
                <Card className="w-full md:w-1/3 bg-beige-100 p-6 rounded-xl shadow-md">
                    <CardContent className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">Cart Totals</h2>
                        <div className="flex justify-between text-gray-500">
                            <span>Subtotal</span>
                            <span>Rs. {cartTotal}</span>
                        </div>
                        {cartTotal >= 10000 ? (
                            <div className="flex justify-center font-bold text-gold-500 text-lg">
                                <span>Free Delivery</span>
                            </div>
                        ) : (
                            <div className="flex justify-between font-bold text-gold-500 text-lg">
                                <span>Delivery</span>
                                <span>Rs. 200</span>
                            </div>
                        )}
                        <div className="flex justify-between font-bold text-gold-500 text-lg">
                            <span>Total</span>
                            <span>Rs. {cartTotal >= 10000 ? cartTotal : cartTotal + 200}</span>
                        </div>


                        <Button variant={'btnPrimary'} className="w-full  py-2 rounded-lg"
                            onClick={() => router.push('/checkout')}>
                            Check Out
                        </Button>
                    </CardContent>
                </Card>
            </div>) :
            (<h1 className="flex justify-center items-center md:text-2xl text-xl">Your Cart is Empty</h1>)
    );
};

export default CartTable;