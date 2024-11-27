import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
    const [products, SetProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const Data = await response.data;
            SetProducts(Data);
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <div className='flex flex-wrap justify-center space-x-4 space-y-4'>  
            {products.map((productitems) => (
                <Product key={productitems.id} product={productitems} />
            ))}
        </div>
    )
}

export default Products