import React, { useContext, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'
import { Search, ShoppingCart, Menu, X } from 'lucide-react';


const Navbar = () => {

  const {cart} = useContext(CartContext);
  // return (
  //   <div className='flex justify-center  bg-slate-900 justify-between text-white py-3 px-5'>
  //       <Link to="/" className='navbar-brand fs-4'>Shop</Link>
  //       <Link to="/cart"className='navbar-link fs-3 text-white no-underline'><BsCart className='absolute'/><span className='relative text-xl bottom-5 left-5 bg-slate-900 rounded-full min-w-20'>{cart.length}</span></Link>
  //   </div>
  // )

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/" className='navbar-brand'><span className='text-blue-900  font-extrabold text-xl'>EShop</span></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline">Home</Link>
              <Link href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline">Shop</Link>
              <Link href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline">Categories</Link>
              <div className="relative group">
                <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Trending
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-full py-2 px-6 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:block">
            <button className="p-2">
              <Link to="/cart"className='navbar-link fs-3 text-white no-underline'><ShoppingCart className="h-6 w-6 text-gray-800 absolute" /><span className='relative text-xl bottom-5 left-5 bg-white text-black rounded-full min-w-20'>{cart.length}</span></Link>
            </button>
          </div>

          
        </div>
      </div>
    </nav>
  );





  
}

export default Navbar