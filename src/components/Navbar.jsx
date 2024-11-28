import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState(""); // Search query
  const [results, setResults] = useState([]); // Search results
  const [showResults, setShowResults] = useState(false); // Toggle results dropdown

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setResults([]);
      setShowResults(false);
      return;
      
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${e.target.value}`
      );
      const data = await response.json();
      setResults(data.products || []);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
 
  const handleResultClick = (product) => {
    setQuery(""); // Clear the input
    setResults([]); // Clear the results
    setShowResults(false); // Hide the dropdown
    // Optionally, you can navigate to the product page
    // You can use useHistory from react-router-dom to programmatically navigate
    // or simply return the product object if needed
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="navbar-brand">
              <span className="text-blue-900 font-extrabold text-2xl">
                EShop
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Shop
            </Link>
            <Link
              to="/category"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Categories
            </Link>
            <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              Trending
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block flex-1 max-w-xs mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onKeyDown={handleKeyDown}
              onChange={handleSearch}
              className="w-full bg-gray-100 rounded-full py-2 px-6 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            {showResults && results.length > 0 && (
              <div className="absolute bg-white border rounded-md shadow-lg w-full mt-2 z-10 max-h-64 overflow-y-auto">
                {results.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    onClick={() => handleResultClick(product)} // Add click handler
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
            {showResults && results.length === 0 && (
              <div className="absolute bg-white border rounded-md shadow-lg w-full mt-2 z-10">
                <p className="px-4 py-2 text-sm text-gray-700">
                  No results found.
                </p>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-800" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
