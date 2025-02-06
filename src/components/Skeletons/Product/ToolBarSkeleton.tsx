import React from 'react'

const ToolBarSkeleton = () => {
    return (
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
    )
}

export default ToolBarSkeleton
