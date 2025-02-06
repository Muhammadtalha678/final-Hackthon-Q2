// import ProductListing from '@/components/Product/ProductListing'
import React from 'react'


// export const metadata: Metadata = {
//   title: "All Categories | Furniro",
//   description: "Browse all furniture categories at Furniro and find the perfect piece for your home.",
// };

const CategoryProducts = async ({ params }: { params: Promise<{ slug: string, }> }) => {
  const slug = await params

  console.log(slug);

  return (
    <div>
      {/* <ProductListing /> */}
    </div>
  )
}

export default CategoryProducts
