import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Banner from '../components/Banner'

const Products = () => {
    const [products, SetProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const Data = await response.data.products; // Extract the products array
            SetProducts(Data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <span className='text-black font-extrabold text-2xl p-5 text-center items-center justify-center flex'>Shop Your Favorites</span>
            <div className='flex flex-wrap justify-center space-x-4 space-y-4 mb-16 '>
                {products.map((productitems) => (
                    <Product key={productitems.id} product={productitems} />
                ))}
            </div>
        </div>
    )
}

export default Products