import ProductListing from '@/components/Product/ProductListing';
import { Product } from '@/interfaces/Product';
import React from 'react'

const Shop = async () => {
  if (!process.env.base_url) {
    throw new Error("Base Url is not given!.");
    
  }

  const response = await fetch(`${process.env.base_url}/api/product`)
  if (!response.ok) {
    throw new Error("Some thing wen wrong");
    
  }
  // create the responsse interface 
  const {error,message,data}:{error:boolean,message:string,data:Product[]} = await response.json()
  
  console.log(data);
  
  
  return (

    <div>
      {
        data.length > 0 ?
          <ProductListing products={data}/>  
          : <h1>Product Not Found</h1>
      }  
    </div>
  )
}

export default Shop
