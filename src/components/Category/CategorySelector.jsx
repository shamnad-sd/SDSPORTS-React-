import React, { useEffect, useState } from "react";

const CategorySelector = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const formattedCategories = data.map(category => ({
          slug: category.slug,
          name: category.name,
        }));
        setCategories(formattedCategories);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="mb-4 mt-4">
      <h2 className="text-lg font-extrabold mb-4 uppercase ">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectCategory(category.slug)} // Use slug for category selection
              className="uppercase border bg-white text-black font-bold w-60 hover:bg-blue-100 focus:outline-none focus:bg-blue-950 focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg px-4 py-2 transition duration-200"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;