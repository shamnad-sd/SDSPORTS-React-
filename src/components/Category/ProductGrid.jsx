import { useContext } from "react";
import { CartContext } from "../../Features/ContextProvider";
import { Star, ShoppingCart, Eye } from 'lucide-react';
const ProductGrid = ({ products }) => {
  const { dispatch } = useContext(CartContext)

  const handleAddToCart = () => {
    dispatch({
        type: "Add",
        product: products
    });
};


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
            <p className="text-blue-700 font-bold">${product.price}</p>
            <button 
            onClick={handleAddToCart}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add to Cart
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


            //   <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white"> {/* Set a fixed width and center the card */}
        //     <div className="relative">
        //         <img src={product.thumbnail} alt={product.title.name} className="w-full h-32 object-contain" /> {/* Reduced height to 32 */}
        //         <button
        //             className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        //             aria-label="Quick view"
        //         >
        //             <Eye className="h-4 w-4 text-gray-600" />
        //         </button>
        //     </div>
        //     <div className="p-2"> {/* Reduced padding */}
        //         <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
        //             {product.title} {/* Truncate title to 20 characters */}
        //         </h2>
        //         <div className="flex items-center justify-center mb-2"> {/* Center the rating */}
        //             {[...Array(5)].map((_, i) => (
        //                 <Star
        //                     key={i}
        //                     className={`h-5 w-5 ${i < Math.floor(Number(product.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        //                         }`}
        //                 />
        //             ))}
        //             <span className="ml-2 text-gray-600">({Number(product.rating).toFixed(1)})</span>
        //         </div>
        //         <p className="text-gray-600 mb-2 text-center">₹{product.price.toFixed(2)}</p> {/* Center the price */}
        //         <p className="text-gray-500 text-sm mb-2 line-clamp-2 text-center">{product.description}</p> {/* Center the description */}
        //         <button
        //             onClick={handleAddToCart}
        //             className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors"
        //         >
        //             <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        //         </button>
        //     </div>
        // </div>



export default ProductGrid;
