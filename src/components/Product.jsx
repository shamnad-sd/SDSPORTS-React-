import React, { useContext } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { CartContext } from '../Features/ContextProvider';

const Product = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({
            type: "Add",
            product: product
        });
    };

    // Function to truncate the title
    const truncateTitle = (title, maxLength) => {
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 mt-5 mx-1 px-4"> {/* Set a fixed width and center the card */}
            <div className="relative">
                <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-contain" /> {/* Reduced height to 32 */}
                <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Quick view"
                >
                    <Eye className="h-4 w-4 text-gray-600" />
                </button>
            </div>
            <div className="p-2"> {/* Reduced padding */}
                <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                    {truncateTitle(product.title, 20)} {/* Truncate title to 20 characters */}
                </h2>
                <div className="flex items-center justify-center mb-2"> {/* Center the rating */}
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(Number(product.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <span className="ml-2 text-gray-600">({Number(product.rating).toFixed(1)})</span>
                </div>
                <p className="text-gray-600 mb-2 text-center">₹{product.price.toFixed(2)}</p> {/* Center the price */}
                <p className="text-gray-500 text-sm mb-2 line-clamp-2 text-center">{product.description}</p> {/* Center the description */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors"
                >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;