import { Hero2 } from '@/components/resuable/Hero2'
import React from 'react'
import ProductComparisionComp from './ProductComparision'
import ProductComparisonGrid from './ProductComparisionComp'

const ProductComparision = () => {
  return (
    <div>
      <Hero2 title='Product Comaprision' backgroundImage="/images/hero2.jpg" />
      <ProductComparisionComp />

      <ProductComparisonGrid />

    </div>
  )
}

export default ProductComparision