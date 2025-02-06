import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <div className="p-4 border rounded-lg shadow-md animate-pulse">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded-md"></div>
        </div>
    )
}

export default ProductCardSkeleton
