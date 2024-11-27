import React from 'react'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';

const OrderSummary = () => {
  return (
    <div className="md:col-span-1 mt-5">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Total Items </span>
        
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
        <span>Total</span>
        
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700 transition-colors">
        Proceed to Checkout
      </button>
    </div>
    <a href="/" className="text-blue-600 hover:underline flex items-center justify-center mt-6">
      <ArrowLeft size={20} className="mr-2" />
      Continue Shopping
    </a>
  </div>
  )
}

export default OrderSummary