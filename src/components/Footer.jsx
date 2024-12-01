import React from 'react'
import { Facebook, Twitter, Instagram, YoutubeIcon as YouTube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Sale</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">All Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors no-underline text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-black hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 ">
              <a href="#" className="hover:text-blue-400 text-white transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-white" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-white" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors text-white" aria-label="YouTube">
                <YouTube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="" className="flex items-center hover:text-blue-400 transition-colors no-underline text-white">
              <Mail className="mr-2 " />
              sdsports@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer