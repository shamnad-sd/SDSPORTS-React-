import { useContext } from "react";
import { CartContext } from "../../Features/ContextProvider";
import { Star, ShoppingCart, Eye } from 'lucide-react';

const ProductGrid = ({ products }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({
      type: "Add",
      product: { ...product, quantity: 1 } // Add the quantity property with a value of 1
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2 line-clamp-1">{product.title}</h3>
            <p className="text-gray-500 text-sm mb-2 line-clamp-2 text-center">{product.description}</p>
            <p className="text-gray-900 font-bold">₹{product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)} // Pass the product to the handler
              className="mt-2 w-full text-white py-2 rounded-md bg-gray-900 hover:bg-gray-800">
               <span className="text-center justify-center items-center flex font-bold"><ShoppingCart className="mr-2" /></span>
            </button>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center text-center">
          <p className="text-center items-center text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;