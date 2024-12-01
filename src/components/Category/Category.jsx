import React, { useState, useEffect } from "react";
import CategorySelector from './CategorySelector';
import ProductGrid from './ProductGrid';

const Category = () => {
  const [products, setProducts] = useState([]); // Products for selected category

  // Function to fetch products based on category
  const fetchProducts = async (category) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Automatically fetch beauty products when the component mounts
  useEffect(() => {
    fetchProducts("mens-shoes"); // Fetch beauty products by default
  }, []);

  const handleCategorySelect = (category) => {
    fetchProducts(category); // Fetch products for the selected category
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

export default Category;