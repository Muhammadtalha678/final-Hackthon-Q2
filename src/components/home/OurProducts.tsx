
import { Product } from '@/interfaces/Product';
import React from 'react'
import ProductCard from '../Product/ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProductCardSkeleton from '../Skeletons/Product/ProductCardSkeleton';
const OurProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
    {
      cache: 'no-store'
    }
  )
  if (!response.ok) {
    throw new Error("Error Fetching Products");
  }
  const { error, message, data }: { error: boolean, message: string, data: Product[] } =
    await response.json()
  if (error) {
    throw new Error(message);

  }
  return (
    <div className="container mx-auto mt-16 px-4 lg:px-16 text-center py-6">
      <h2 className="font-bold text-[32px] leading-[48px]">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {
          data.length > 0 ?
            data.slice(0, 8).map((product, index) => (
              <ProductCard product={product} key={index + 1} />
            )) :
            Array(8).fill(null).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))

        }
      </div>
      {
        data.length > 0 &&
        <Link href={'/shop'}>
          <Button variant={'btnPrimary'} className='mt-5'>Show More</Button>
        </Link>
      }
    </div>
  )
}

export default OurProducts
