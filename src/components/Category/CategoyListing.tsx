import { CategoryInterface } from '@/interfaces/Category'
import React from 'react'
import { CategoryCard } from './CategoryCard'
import { urlFor } from '@/sanity/lib/image'

const CategoyListing = ({ categories }: { categories: CategoryInterface[] }) => {
    return (
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-10 px-4 lg:px-16'>
            {
                categories.map((cat, ind) => (
                    <CategoryCard key={ind + 1} title={cat.title} image={urlFor(cat.image).url()} id={cat._id} />
                ))
            }
        </div>
    )
}

export default CategoyListing
