import React, { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { CartContext } from '../Features/ContextProvider';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="md:col-span-1 mt-5">
      {totalQuantity === 0 ? (
        <div className=" text-center justify-center item bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p>Your cart is empty.</p>
          <Link to="/" className="text-gray-900 flex items-center justify-center mt-6">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="md:col-span-1 mt-5">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items: {totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total Price: ₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
            <span>Final Total: ₹{totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-gray-900 text-white py-2 px-4 rounded mt-6 hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </button>
        </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;