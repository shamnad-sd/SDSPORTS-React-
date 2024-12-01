// src/components/ProductDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Features/ContextProvider';
import { Star, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
    dispatch({
      type: "Add",
      product: { ...product, quantity: 1 } // Adjust based on your context
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-w-1 aspect-h-1 w-full lg:mt-0">
            <img
              src={product.thumbnail} alt={product.title}
              className="h-full w-full object-cover  object-center"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0  ">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>
            <div className="flex"> {/* Center the rating */}
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(Number(product.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                        />
                    ))}
                </div>
            <p className="text-3xl tracking-tight text-gray-900">₹{product.price}</p>
            <p className="mt-6 text-base text-gray-700">{product.description}</p>
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent py-2 px-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
              >
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;