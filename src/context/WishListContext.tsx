'use client'
import { Cart } from "@/interfaces/Cart";
import React, { createContext, useContext, useEffect, useState } from "react";
interface WishListContextType {
    wishList: Cart[],
    addProdToWishList: (item: Cart) => void
    removeItem: (id: string) => void
}

const WishListContext = createContext<WishListContextType | undefined>(undefined)



export const WishListProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishList, setWishList] = useState<Cart[]>([])
    useEffect(() => {
        const wishListData = localStorage.getItem('wishList')
        // console.log(wishListData);

        if (wishListData) {
            setWishList(JSON.parse(wishListData))
        }
    }, [])


    useEffect(() => {
        // console.log(wishList);

        // localStorage.setItem('wishList', JSON.stringify(wishList))
        if (wishList.length > 0) localStorage.setItem('wishList', JSON.stringify(wishList))
        else { localStorage.removeItem('wishList') }
    }, [wishList])

    const addProdToWishList = (item: Cart) => {
        // check if product is already in cart
        const prodInWishList = wishList.find((prod) => prod.productId == item.productId)
        if (!prodInWishList) {
            setWishList([...wishList, item])
        }

    }

    const removeItem = (id: string) => {
        const prodExists = wishList.find((e) => e.productId === id)
        console.log(prodExists);

        if (prodExists) {
            const filterWishList = wishList.filter((e) => e.productId !== id)
            console.log(filterWishList);

            setWishList(filterWishList)

        }
    }
    return (
        <WishListContext.Provider value={{ wishList, addProdToWishList, removeItem }}>
            {children}
        </WishListContext.Provider>)
}

export const useWishList = (): WishListContextType => {
    const context = useContext(WishListContext);
    if (!context) {
        throw new Error('useWishList must be used within a WishListProvider');
    }
    return context;
};