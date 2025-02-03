// import ProductListing from '@/components/Product/ProductListing'
import React from 'react'

const CategoryProducts =async ({params}:{params:Promise<{slug:string,}>}) => {
    const { slug } = await params
    
    console.log(slug);
    
    return (
    <div>
        {/* <ProductListing /> */}
    </div>
  )
}

export default CategoryProducts
