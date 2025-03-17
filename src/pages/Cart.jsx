import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiTrash, HiPlus, HiMinus } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Premium Olive Oil Collection',
      price: 39.99,
      quantity: 1,
      image: 'PLACEHOLDER',
      'data-image-request': 'premium olive oil bottles elegantly arranged',
    },
    {
      id: '2',
      name: 'Artisanal Cheese Selection',
      price: 49.99,
      quantity: 2,
      image: 'PLACEHOLDER',
      'data-image-request': 'gourmet cheese selection on wooden board',
    }
  ]);

  const handleUpdateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <div className="mb-8">
          <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
            <HiArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        <h1 className="heading-lg mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-medium">Shopping Cart ({cartItems.length} items)</h2>
                  </div>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex flex-grow flex-col sm:flex-row sm:justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-primary-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end gap-6">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, -1)}
                                className="p-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <HiMinus className="w-4 h-4" />
                              </button>
                              <span className="w-10 text-center">{item.quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, 1)}
                                className="p-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <HiPlus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                              aria-label="Remove item"
                            >
                              <HiTrash className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-soft overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full justify-center mb-4 cursor-pointer">
                    Proceed to Checkout
                  </button>
                  
                  <div className="text-center text-gray-500 text-sm">
                    <p>Secure checkout powered by Stripe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-soft">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
                Browse our auctions and co-buying opportunities to find something you'll love!
              </p>
              <div className="space-x-4">
                <Link to="/auctions" className="btn btn-primary cursor-pointer">
                  Shop Auctions
                </Link>
                <Link to="/co-buying" className="btn btn-secondary cursor-pointer">
                  Shop Co-Buying
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}