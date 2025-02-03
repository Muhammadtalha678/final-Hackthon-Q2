import ProductListing from '@/components/Product/ProductListing';
import { Hero2 } from '@/components/resuable/Hero2';
import { Product } from '@/interfaces/Product';
import React from 'react'
import ProductToolbar from './Filter';
import Pagination from '@/components/Pagination';
import Services from '@/components/resuable/Services';

const Shop = async () => {
  // const { page } = await searchParams
  
  
  
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
       <Hero2
                title="Shop"
                backgroundImage="/images/hero2.jpg"
                links={[
                    { name: "Home", href: "/" },
                    { name: "Shop", href: "/shop" },
                ]}
      />
      <ProductToolbar/>
      {
        data.length > 0 ?
          <ProductListing products={data}/>  
          : <h1>Product Not Found</h1>
      }  
      <Pagination />
      
      <Services/>
    </div>
  )
}

export default Shop
