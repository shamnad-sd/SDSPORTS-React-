// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../components/CartProduct';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-8">
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} /> 
            ))}
          </div>
          <div className="col-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;