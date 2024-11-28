import React, { useState } from "react";
import CategorySelector from './CategorySelector';
import ProductGrid from './ProductGrid';
const Category = () => {
  const [products, setProducts] = useState([]); // Products for selected category

  const handleCategorySelect = async (category) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex space-x-8">
        {/* Sidebar for Categories */}
        <div className="w-1/4">
          <CategorySelector onSelectCategory={handleCategorySelect} />
        </div>

        {/* Product Grid */}
        <div className="w-3/4">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default Category