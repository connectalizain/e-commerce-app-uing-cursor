"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleCheckout = () => {
    if (!isClient) return;
    
    // In a real application, this would integrate with a payment gateway
    // For demo purposes, we'll just simulate a successful checkout
    setCheckoutSuccess(true);
    clearCart();
  };
  
  if (checkoutSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-16 px-4">
            <div className="mb-6 text-green-500 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-dark mb-4">Order Successful!</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Thank you for your purchase. Your order has been placed successfully.
            </p>
            <Link
              href="/products"
              className="inline-block bg-secondary text-light font-medium rounded-md px-8 py-3 hover:bg-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-dark mb-8">Your Shopping Cart</h1>
          
          {!isClient || cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link
                href="/products"
                className="inline-block bg-secondary text-light font-medium rounded-md px-8 py-3 hover:bg-accent transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Cart Items */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li key={item.id} className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                          <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded bg-gray-100 overflow-hidden mr-0 sm:mr-6 mb-4 sm:mb-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="text-lg font-medium text-dark mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-1">{item.description}</p>
                            
                            <div className="flex flex-wrap items-center justify-between">
                              <div className="flex items-center mb-3 sm:mb-0">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="bg-gray-100 text-dark px-3 py-1 rounded-l-md hover:bg-gray-200"
                                >
                                  -
                                </button>
                                <span className="bg-gray-100 text-dark px-4 py-1">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="bg-gray-100 text-dark px-3 py-1 rounded-r-md hover:bg-gray-200"
                                >
                                  +
                                </button>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <p className="font-bold text-accent">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700"
                                  aria-label="Remove item"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                {/* Order Summary */}
                <div className="bg-white shadow rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-dark mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{totalPrice > 100 ? "Free" : "$10.00"}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-dark">
                        <span>Total</span>
                        <span>${(totalPrice + (totalPrice > 100 ? 0 : 10)).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {totalPrice > 100 ? "Free shipping applied" : "Free shipping on orders over $100"}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-secondary text-light rounded-md font-medium hover:bg-accent transition-colors disabled:opacity-70"
                    disabled={!isClient}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={() => clearCart()}
                    className="w-full mt-4 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors disabled:opacity-70"
                    disabled={!isClient}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 