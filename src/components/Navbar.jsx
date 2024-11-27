import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'



const Navbar = () => {

  const {cart} = useContext(CartContext);

  return (
    <div className='flex justify-center  bg-slate-900 justify-between text-white py-3 px-5'>
        <Link to="/" className='navbar-brand fs-4'>Shop</Link>
        <Link to="/cart"className='navbar-link fs-3 text-white no-underline'><BsCart className='absolute'/><span className='relative text-xl bottom-5 left-5 bg-slate-900 rounded-full min-w-20'>{cart.length}</span></Link>
    </div>
  )
}

export default Navbar