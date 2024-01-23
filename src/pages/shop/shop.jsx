import React from 'react'
import {PRODUCTS } from "../../products"
import { Product } from './product'
import  "./shop.css"
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='ShopTitle'>
            <h1>Electronics Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </div>
        
    </div>
  )
}


