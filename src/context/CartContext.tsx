'use client'
import { Cart } from "@/interfaces/Cart";
import React, { createContext, useContext, useEffect, useState } from "react";



interface CartContextType {
    cart: Cart[],
    addProdToCart: (item: Cart) => void
    decreaseItemQuan: (id: string) => void
    removeItem: (id: string) => void,
    emptyCart: () => void
}
const CartContext = createContext<CartContextType | undefined>(undefined)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Cart[]>([])

    // first time check when application is open wheter data is in local storage the fetch from local storage and spread in all over application where context use
    useEffect(() => {
        const cartData = localStorage.getItem('cart')

        if (cartData) {
            setCart(JSON.parse(cartData))
        }
    }, [])

    //if side effect happens in cart then save in localstorage 
    useEffect(() => {
        if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart))
        else { localStorage.removeItem('cart') }
    }, [cart])

    //add data to local storage function
    const addProdToCart = (item: Cart) => {
        // check if product is already in cart
        const prodInCart = cart.find((prod) => prod.productId == item.productId)
        if (!prodInCart) {
            setCart([...cart, item])
        }
        else {
            setCart(
                cart.map((cartItem) => cartItem.productId == item.productId ?
                    { ...cartItem, productQuantity: cartItem.productQuantity + 1 } : cartItem
                )
            )
        }
    }


    //decrease quantity of item in local storage
    const decreaseItemQuan = (id: string) => {

        if (id) {
            const findProd = cart.find((prod) => prod.productId === id)
            if (findProd) {
                setCart(
                    cart.map((item) =>
                        item.productId === findProd.productId ? { ...item, productQuantity: item.productQuantity - 1 } : item

                    )
                )
            }
        }
    }

    //remove item form cart

    const removeItem = (id: string) => {
        const prodExists = cart.find((e) => e.productId === id)
        console.log(prodExists);

        if (prodExists) {
            const filterCart = cart.filter((e) => e.productId !== id)
            console.log(filterCart);

            setCart([])
            localStorage.removeItem('cart')

        }
    }

    //empty cart

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addProdToCart, decreaseItemQuan, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
export { CartContextProvider, useCart }