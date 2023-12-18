'use client';
import React from 'react';
import { useCart } from '../../lib/cart-context'; // Import the hook
import { useState } from 'react';

const ToCart = ({ product }) => {
  const { addToCart } = useCart(); // Use the hook
  const [message, setMessage] = useState(null);

  const handleAddToCart = (e) => {
    try{
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
      setMessage('Added to cart!');
    } catch (error) {
      setMessage('Error adding to cart!');
    }
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="bg-blue1 rounded-md hover:shadow">
        <div className="flex flex-row items-center">
          <div className="flex">
            <i className="fa-solid fa-cart-arrow-down text-white1 m-2" />
          </div>
          <div>
            <p className="text-white1 text-h6">Do Kosiku</p>
          </div>
        </div>
      </button>
      {message && <p className={`text-${message.includes('úspešne') ? 'green' : 'red'}-600 mt-2`}>{message}</p>}
    </div>
  );
};
export default ToCart;
