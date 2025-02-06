import React from 'react'

const Loading = () => {
    return (
        <div>
            {/* Hero Section Skeleton */}
            <div className="w-full h-48 bg-gray-300 animate-pulse mb-6"></div>

            {/* Filter Toolbar Skeleton */}
            <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg mb-10 animate-pulse">
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-8 bg-gray-300 rounded-md"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
                    <div className="w-32 h-6 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded-md"></div>
                    <div className="w-24 h-8 bg-gray-300 rounded-md"></div>
                </div>
            </div>

            {/* Product Listing Skeleton */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="p-4 border rounded-lg shadow-md animate-pulse">
                        <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
                        <div className="w-3/4 h-6 bg-gray-300 rounded-md mb-2"></div>
                        <div className="w-1/2 h-6 bg-gray-300 rounded-md"></div>
                    </div>
                ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="flex justify-center mb-10 animate-pulse">
                <div className="w-8 h-8 bg-gray-300 rounded-md mx-2"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-md mx-2"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-md mx-2"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-md mx-2"></div>
            </div>
        </div>
    )
}

export default Loading
