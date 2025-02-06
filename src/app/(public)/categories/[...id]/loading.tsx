import ProductCardSkeleton from '@/components/Skeletons/Product/ProductCardSkeleton'
import React from 'react'

const CategoryProdSkeleton = () => {
    return (
        <div>
            {/* Hero Section Skeleton */}
            {/* <div className="w-full h-48 bg-gray-300 animate-pulse mb-6"></div> */}

            {/* Filter Toolbar Skeleton */}
            {/* <ToolBarSkeleton /> */}

            {/* Product Listing Skeleton */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {[...Array(8)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>

            {/* Pagination Skeleton */}
            {/* <PaginationSeketon /> */}
        </div>
    )
}

export default CategoryProdSkeleton
