import CategoyListing from '@/components/Category/CategoyListing';
import { Hero2 } from '@/components/resuable/Hero2';
import Services from '@/components/resuable/Services';
import { CategoryInterface } from '@/interfaces/Category';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "All Categories | Furniro",
    description: "Browse all furniture categories at Furniro and find the perfect piece for your home.",
};

// const fetchCategories = async (): Promise<CategoryInterface[]> => {
//     if (!process.env.NEXT_PUBLIC_BASE_URL) {
//         throw new Error("Base Url is not given!.");
//     }
//     console.log(process.env.NEXT_PUBLIC_BASE_URL);

//     try {

//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
//         if (!response.ok) {
//             throw new Error("Something went wrong.");

//         }
//         const { error, message, data }: { error: boolean, message: string, data: CategoryInterface[] } = await response.json()
//         if (error) {
//             throw new Error(message);
//         }
//         return data
//     } catch (error) {
//         const err = error as Error
//         throw new Error(err.message);

//     }
// }

const Categories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
    if (!response.ok) {
        throw new Error("Something went wrong.");

    }
    const { error, message, data }: { error: boolean, message: string, data: CategoryInterface[] } = await response.json()
    if (error) {
        throw new Error(message);
    }
    const categories = data
    return (
        <div>
            <Hero2
                title="Categories"
                backgroundImage="/images/hero2.jpg"
            />
            {/* <ProductToolbar totalLength={data.length} /> */}
            {
                categories.length > 0 ?
                    <CategoyListing categories={categories} />
                    : <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5 text-center my-5'>
                        No Category founds</h1>
            }


            <Services />
        </div>
    )
}

export default Categories
