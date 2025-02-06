import { Product } from '@/interfaces/Product';
import { Metadata } from 'next';
import React from 'react'
import Breadcrumb from './ProductBreadCrumb';

const fetchSingleProduct = async (id: string): Promise<Product> => {
    try {
        if (!process.env.NEXT_PUBLIC_BASE_URL) {
            throw new Error("Base Url is not given!.");
        }
        console.log(process.env.NEXT_PUBLIC_BASE_URL);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`)
        if (!response.ok) {
            throw new Error("Something went wrong.");

        }
        const { error, message, data }: { error: boolean, message: string, data: Product } = await response.json()
        if (error) {
            throw new Error(message);
        }
        return data
    } catch (error) {
        const err = error as Error
        throw new Error(err.message);
    }
}

// export async function generateMetadata({ params }: { params: Promise<{ id: string, }> }): Promise<Metadata> {
//     const { id } = await params
//     if (id) {
//         const [category] = id;
//         return {
//             title: `${category} | Furniro`,
//             description: `Explore our selection of ${category.toLowerCase()} at Furniro. Shop now!`,
//         };

//     }
//     return {
//         title: `Error | Furniro`,
//         description: `Error`,
//     };
// }

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const product = await fetchSingleProduct(id)

    if (!product) {
        return <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5 text-center my-5'>
            No Product Found
        </h1>
    }
    return (
        <div>
            <Breadcrumb prodName={product.name} />
            {/* <ProductDetailsComp />
            <ProductDescriptionTabBr /> */}

        </div>
    )
}

export default ProductDetail
