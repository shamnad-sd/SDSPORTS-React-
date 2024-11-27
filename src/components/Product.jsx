import React, { useContext} from 'react'
import { Star, ShoppingCart, Eye, X } from 'lucide-react';
import { CartContext } from '../Features/ContextProvider';

const Product = ({ product }) => {
    const {dispatch} = useContext(CartContext)

    const handleAddToCart = () => {
        dispatch(
            {
                type:"Add",
                product: product
            }
        )
    };


    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mt-5">
            <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Quick view"
                >
                    <Eye className="h-4 w-4 text-gray-600" />
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(Number(product.rating.rate)) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <span className="ml-2 text-gray-600">({Number(product.rating.rate).toFixed(1)})</span>
                </div>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors"
                >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product