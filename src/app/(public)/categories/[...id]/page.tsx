// import ProductListing from '@/components/Product/ProductListing'
import NotFound from '@/app/not-found';
import ProductListing from '@/components/Product/ProductListing';
import { Product } from '@/interfaces/Product';
import React from 'react'

const fetchProductsByCategory = async (id: string): Promise<Product[]> => {
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
}


// export const metadata: Metadata = {
//   title: "All Categories | Furniro",
//   description: "Browse all furniture categories at Furniro and find the perfect piece for your home.",
// };

const CategoryProducts = async ({ params }: { params: Promise<{ id: string[], }> }) => {
  const { id } = await params
  if (id.length < 2 || id.length > 2) {
    // console.log(id);
    return <NotFound />
  }
  const [category, categoryId] = id;
  const cateProducts = await fetchProductsByCategory(categoryId)
  console.log(category);
  console.log(cateProducts);


  return (
    <div className='mt-10 px-6'>
      {
        cateProducts.length > 0 ?
          <>
            <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <ProductListing products={cateProducts} />
          </>
          : <h1 className='md:text-3xl text-2xl text-black font-extrabold mb-5 text-center my-5'>
            No Product found of category {category}
          </h1>
      }
    </div>
  )
}

export default CategoryProducts
