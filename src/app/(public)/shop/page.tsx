import ProductListing from '@/components/Product/ProductListing';
import { Product } from '@/interfaces/Product';
import React from 'react'
// {searchParamas}:{searchParamas:Promise<{q:string}>}
const Shop = async ({searchParams}:{searchParams:Promise<{[id:string]:string | string[] | undefined}>}) => {
// const Shop = async ({searchParam}:{searchParam:Promise<{q:string}>}) => {
  const {page} = await searchParams 
  console.log(page);
  
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("Base Url is not given!.");
    
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`)
  if (!response.ok) {
    throw new Error("Some thing went wrong");
    
  }
  // create the responsse interface 
  const {error,message,data}:{error:boolean,message:string,data:Product[]} = await response.json()
  console.log(error,message);
  
  if (error) {
    console.log("error",error);
    
    throw new Error(message);
    
  }
  
  
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
