'use client';
import Image from 'next/image'


import { Product } from "@/interfaces/Product";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { urlFor } from '@/sanity/lib/image';
import { discountPercentage } from '@/lib/dicountPercentage';


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="relative">
      <Image 
  src={urlFor(product.thumbnail).url()} 
  alt={product.name} 
  width={500} // Increase resolution
  height={500}
  className="w-full h-64 object-cover"
  quality={100} // Ensures the highest quality
  priority // Improves loading speed and sharpness
  unoptimized // Disables Next.js optimization (optional, test with and without)
  loading="lazy" // Ensures better performance
/>


      {/* Discount or New Label */}
      <div className="absolute top-4  flex justify-between items-center w-full  px-2">
         {product.discountPrice > 0 && (
        <span className=" bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {discountPercentage(product.price,product.discountPrice)}
        </span>
      )}
      {product.isNew && (
        <span className=" bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          New
        </span>
      )}

      </div>
     </div>

      {/* Hover Overlay (Now controlled via group-hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-4 py-2 text-sm rounded-md font-semibold">
          Add to cart
        </button>
        <div className="flex gap-4 text-white">
          <button className="flex items-center gap-1 text-sm">
            <Share2 size={16} /> Share
          </button>
          <button className="flex items-center gap-1 text-sm">
            <ShoppingCart size={16} /> Compare
          </button>
          <button className="flex items-center gap-1 text-sm">
            <Heart size={16} /> Like
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm truncate">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black font-bold">{product.discountPrice > 0 ? product.discountPrice : product.price }</span>
          {product.discountPrice > 0 && (
            <span className="text-gray-400 line-through">{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProductCard