// import ProductListing from '@/components/Product/ProductListing'
import NotFound from '@/app/not-found';
import ProductListing from '@/components/Product/ProductListing';
import { Product } from '@/interfaces/Product';
import { Metadata } from 'next';
import React from 'react'

const fetchProductsByCategory = async (id: string): Promise<Product[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      throw new Error("Base Url is not given!.");
    }
    console.log(process.env.NEXT_PUBLIC_BASE_URL);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${id}`)
    if (!response.ok) {
      throw new Error("Something went wrong.");

    }
    const { error, message, data }: { error: boolean, message: string, data: Product[] } = await response.json()
    if (error) {
      throw new Error(message);
    }
    return data

  } catch (error) {
    const err = error as Error
    throw new Error(err.message);
  }
}


export async function generateMetadata({ params }: { params: Promise<{ id: string[], }> }): Promise<Metadata> {
  const { id } = await params
  if (id.length === 2) {
    const [category] = id;
    return {
      title: `${category} | Furniro`,
      description: `Explore our selection of ${category.toLowerCase()} at Furniro. Shop now!`,
    };

  }
  return {
    title: `Error | Furniro`,
    description: `Error`,
  };
}

const CategoryProducts = async ({ params }: { params: Promise<{ id: string[], }> }) => {
  const { id } = await params
  if (id.length < 2 || id.length > 2) {
    // console.log(id);
    return <NotFound />
  }
  const [category, categoryId] = id;
  const cateProducts = await fetchProductsByCategory(categoryId)


  return (
    <div className='mt-10 px-6'>
      {
        cateProducts.length > 0 ?
          <div>
            <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <ProductListing products={cateProducts} />
          </div>
          : <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5 text-center my-5'>
            No Product found of category {category}
          </h1>
      }
    </div>
  )
}

export default CategoryProducts
