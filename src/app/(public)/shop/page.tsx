import React from 'react'

const Shop = async () => {
  if (!process.env.base_url) {
    throw new Error("Base Url is not given.");
    
  }
  // const response = await fetch(process.env.base_url) 
  return (
    <div>
      
    </div>
  )
}

export default Shop
