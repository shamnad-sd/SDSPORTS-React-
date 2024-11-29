import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Banner from '../components/Banner'

const Products = () => {
    const [products, SetProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/category/mobile-accessories');
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
            <div className="flex flex-col items-center text-center py-8 bg-white">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    TOP OF THE WISHLIST KICKS
                </h1>
                <p className="text-sm font-medium text-gray-500 mt-2">
                    All-time icons and sport-inspired gifts to make everyone on your list look and feel their best.
                </p>
                <button className="px-4 py-2 mt-4 rounded-full bg-gray-700 text-white hover:bg-gray-800">
                    Shop Kicks
                </button>
            </div>

            <div className='flex flex-wrap justify-center space-x-4 space-y-4 mb-16 '>
                {products.map((productitems) => (
                    <Product key={productitems.id} product={productitems} />
                ))}
            </div>
        </div>
    )
}

export default Products