'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
interface WishList { productId: string }
interface WishListContextType {
    wishList: WishList[],
    addProdToWishList: (item: WishList) => void
}

const WishListContext = createContext<WishListContextType | undefined>(undefined)



export const WishListProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishList, setWishList] = useState<WishList[]>([])
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

    const addProdToWishList = (item: WishList) => {
        // check if product is already in cart
        const prodInWishList = wishList.find((prod) => prod.productId == item.productId)
        if (!prodInWishList) {
            setWishList([...wishList, item])
        }

    }
    return (
        <WishListContext.Provider value={{ wishList, addProdToWishList }}>
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