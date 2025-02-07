import { Product } from '@/interfaces/Product';
import React from 'react'
import Breadcrumb from './ProductBreadCrumb';
import { Metadata } from 'next';
import ProductDetailsComp from '@/components/Product/ProductDetails';

const fetchSingleProduct = async (id: string): Promise<{ product: Product | null, error: string | null }> => {
    try {
        if (!process.env.NEXT_PUBLIC_BASE_URL) {
            return { error: "Base URL is not defined.", product: null };
            // throw new Error("Base Url is not given!.");
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`,
            {
                cache: 'no-store'
            }
        )
        if (!response.ok) {
            return { error: `API request failed with status ${response.status}`, product: null };

        }
        const { error, message, data }: { error: boolean, message: string, data: Product } = await response.json()
        if (error) {
            return { error: message, product: null };
        }
        return { error: null, product: data };
    } catch (error) {
        const err = error as Error
        return { error: err.message, product: null };

    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string, }> }): Promise<Metadata> {
    const { id } = await params
    if (id) {
        return {
            title: `${id} | Furniro`,
            description: `Explore our selection of ${id} at Furniro. Shop now!`,
        };

    }
    return {
        title: `Error | Furniro`,
        description: `Error`,
    };
}

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const { error, product } = await fetchSingleProduct(id)

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center my-6 text-center">
                <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
                <p className="text-gray-600">{error}</p>
            </div>
        );
    }
    if (!product) {
        return <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5 text-center my-5'>
            No Product Found
        </h1>
    }
    return (
        <div>
            <Breadcrumb prodName={product.name} />
            <ProductDetailsComp ProductDetail={product} />
            {/*
            <ProductDescriptionTabBr /> */}

        </div>
    )
}

export default ProductDetail
