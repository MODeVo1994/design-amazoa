import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params=useParams()
  const{slug}=params
  return (

    <div>
      <p>{slug} </p>
      <p></p>

    </div>
  )
}

export default ProductDetails