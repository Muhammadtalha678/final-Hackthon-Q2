import React from 'react';

const CategoryCardSkeleton = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden animate-pulse">
            <div className="w-full md:h-[480px] h-[360px] bg-gray-300 rounded-lg"></div>
            <div className="p-4">
                <div className="w-3/4 h-9 bg-gray-300 rounded-md"></div>
            </div>
        </div>
    );
};

export default CategoryCardSkeleton;
