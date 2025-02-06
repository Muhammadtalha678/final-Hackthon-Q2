
'use client'
import { Product } from "@/interfaces/Product";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useCart } from '@/context/CartContext'
import { useEffect, useState } from "react";
import { cartObject } from "@/lib/object";
import { Star } from "lucide-react";

export default function ProductDetailsComp({ ProductDetail }: { ProductDetail: Product }) {
    //use the state to change the image if user selected that image
    const [selectedImage, setSelectedImage] = useState(ProductDetail.thumbnail)
    // console.log(selectedImage);

    const { addProdToCart, cart } = useCart()
    const [addedToCart, setAddedToCart] = useState(false) //use state to show if item is already in cart or not

    // create hanlde cart to store data in cart first pass from cartobj
    const handleCart = (prod: Product) => {
        const obj = cartObject(prod)
        addProdToCart(obj)
    }

    //use useeffect for any change in cart context cause the addedToCart become true and not allow again to store in cart
    useEffect(() => {
        const findProdInCart = cart.find((c) => c.productId === ProductDetail._id)
        if (findProdInCart) {
            setAddedToCart(true)
        }
    }, [cart])


    return (
        <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
            {/* Left Side - Image Gallery */}
            <div className="flex gap-4 lg:w-1/2 flex-col md:flex-row">
                <div className="flex md:flex-col flex-row gap-4 order-2 md:order-1">
                    {
                        ProductDetail.images.map((prod, ind) => (
                            <Image key={ind + 1} src={urlFor(prod).url()} alt={ProductDetail.name} className="w-16 h-16 rounded-lg bg-cream object-cover" width={300} height={300}
                                onClick={() => setSelectedImage(prod)} />
                        ))
                    }
                </div>
                <div className="bg-cream p-4 rounded-lg order-1 md:order-2 w-full">
                    {
                        <Image src={urlFor(selectedImage).url()} alt={ProductDetail.name} className="w-full h-96 rounded-lg object-cover" width={300} height={300} />

                    }
                </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="flex flex-col gap-4 lg:w-1/2">
                <h1 className="text-3xl font-bold">{ProductDetail.name}</h1>
                <p className="text-gray-500 text-lg">Rs. {ProductDetail.discountPrice > 0 ? ProductDetail.discountPrice : ProductDetail.price}</p>
                <div className="flex items-center gap-2">
                    <span className="text-yellow-500 flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className={i < ProductDetail.rating ? "fill-[#ffff00]" : "text-gray-400 flex"}
                            />
                        ))}
                    </span>
                    <span className="text-gray-400">{ProductDetail.reviews.length} Customer Review</span>
                </div>
                <p className="text-gray-600">
                    {
                        ProductDetail.description
                    }
                </p>

                {/* Size Selection */}
                <div>
                    <h2 className="text-sm font-semibold">Size</h2>
                    <div className="flex gap-2 mt-1 ">
                        {
                            ProductDetail.sizes.map((size, ind) => (
                                <button key={ind} className="px-3 py-1 border rounded-lg bg-yellow-600 text-white">
                                    {size}
                                </button>

                            ))
                        }
                        {/* <button className="px-3 py-1 border rounded-lg">XL</button>
                        <button className="px-3 py-1 border rounded-lg">XS</button> */}
                    </div>
                </div>

                {/* Color Selection */}
                <div>
                    <h2 className="text-sm font-semibold">Color</h2>
                    <div className="flex gap-2 mt-1">
                        {
                            ProductDetail.colors.map((color, ind) => (

                                <span className={`w-6 h-6 rounded-full block`}
                                    style={{ background: color }} key={ind}></span>
                            ))
                        }
                        {/* <span className="w-6 h-6 rounded-full bg-black block"></span>
                        <span className="w-6 h-6 rounded-full bg-yellow-600 block"></span> */}
                    </div>
                </div>

                {/* Quantity and Buttons */}
                <div className="flex items-center gap-4 mt-4 flex-col md:flex-row">
                    {/* <div className="flex items-center border rounded-lg">
                        <button className="px-3 py-2">-</button>
                        <span className="px-4">1</span>
                        <button className="px-3 py-2">+</button>
                    </div> */}
                    <button className={`px-6 py-3 border rounded-lg ${addedToCart ? 'bg-yellow-600' : ''}`}
                        disabled={addedToCart} onClick={() => handleCart(ProductDetail)}>
                        Add To Cart
                    </button>
                    <button className="px-6 py-3 border rounded-lg">+ Compare</button>
                </div>

                {/* Product Meta Info */}
                <div className="text-gray-500 text-sm mt-4">
                    <p><strong>SKU:</strong> {ProductDetail.sku}</p>
                    <p><strong>Category:</strong> {ProductDetail.category._ref}</p>
                    <p><strong>Tags:</strong> {ProductDetail.tags.join(',')}</p>
                    <p><strong>Share:</strong> <span className="text-black">●</span> <span className="text-black">●</span> <span className="text-black">●</span></p>
                </div>
            </div>
        </div>
    );
}