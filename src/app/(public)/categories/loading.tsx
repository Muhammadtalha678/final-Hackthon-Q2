import CategoryCardSkeleton from '@/components/Skeletons/Category/CategoryCardSkeleton'
import React from 'react'

const Loading = () => {
    return (
        <div>
            {/* Hero Section Skeleton */}
            <div className="w-full h-48 bg-gray-300 animate-pulse mb-6"></div>


            {/* Product Listing Skeleton */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {[...Array(8)].map((_, i) => (
                    <CategoryCardSkeleton key={i + 1} />
                ))}
            </div>

        </div>
    )
}

export default Loading
