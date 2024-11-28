import React from "react";

const ProductGrid = ({ products }) => {
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
            <h3 className="text-lg font-semibold mt-2">{product.title.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-blue-700 font-bold">${product.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductGrid;
