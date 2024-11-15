import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/shopcontext'
const Product = () => {
  const {Productid} = useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)

  const fetchProduct = async () => {
   productData.map((item) => {
    if(item.id === Productid){
      setProductData(item)
    return null
    }
   })
  }
useEffect(() => {
fetchProduct()
}, [Productid,products])
  return (
    <div className='text-sm' >Product</div>
  )
}

export default Product