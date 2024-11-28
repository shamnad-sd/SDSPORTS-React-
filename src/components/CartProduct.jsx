import React, { useContext } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartContext } from '../Features/ContextProvider';

const CartProduct = ({ product }) => {
    const { cart, dispatch } = useContext(CartContext);
    const quantity = product.quantity || 1; // This is now correctly set in the reducer

    const Increase = (id) => {
        dispatch({ type: 'Increase', id });
    }
    const Decrease = (id) => {
        dispatch({ type: 'Decrease', id });
    }
    const onRemove = (id) => {
        dispatch({ type: 'Remove', id });
    }

    return (
        <div className='flex justify-between items-center py-4 border-b'>
            <div className="flex items-center">
                <img src={product.images} alt={product.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-grow ml-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
                </div>
            </div>
            
            <div className="flex items-center">
                <button
                    onClick={() => Decrease(product.id)}
                    className="p-1 rounded-full hover:bg-gray-200"
                    aria-label="Decrease quantity"
                >
                    <Minus size={16} />
                </button>
                <span className="mx-2 w-8 text-center">{quantity}</span>
                <button
                    onClick={() => Increase(product.id)}
                    className="p-1 rounded-full hover:bg-gray-200"
                    aria-label="Increase quantity"
                >
                    <Plus size={16} />
                </button>
                <button
                    onClick={() => onRemove(product.id)} // Make sure to use product.id here
                    className="ml-4 p-2 text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    )
}

export default CartProduct;