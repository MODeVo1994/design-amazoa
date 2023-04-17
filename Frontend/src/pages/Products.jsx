import React from 'react'
import MediaCard from './ProductCart'
import "./products.css"
import { data } from '../data'
 
  
const Products = () => {

  return (
    <div className="products_main_container">
      <h1 className='our_products'>OUR PRODUCTS</h1>
      <div className='products_cntrn'>
      {
          data.products.map((product)=>{

            return <MediaCard key={product.slug} product={product} />
          })
            
          
      
     
     
     
           
          }
          </div>

 

    </div>
  )
}

export default Products