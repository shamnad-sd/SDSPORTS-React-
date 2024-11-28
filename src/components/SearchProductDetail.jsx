import React, { useContext, useEffect, useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Features/ContextProvider';

const SearchProductDetail = () => {
  const {dispatch}= useContext(CartContext)
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data); // Set product details in state
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProductDetails();
  }, [id]); // Re-run effect if ID changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  const handleAddToCart = () => {
    dispatch({
        type: "Add",
        product: product
    });
};

const truncateTitle = (title, maxLength) => {
  return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
};
  // Render product details
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 mt-5 mx-1 px-4"> {/* Set a fixed width and center the card */}
            <div className="relative">
                <img src={product.images} alt={product.title} className="w-full h-32 object-contain" /> {/* Reduced height to 32 */}
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
};

export default SearchProductDetail;