"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ToastNotification from "@/components/ToastNotification";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  // If product not found
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-dark mb-4">Product Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The product you are looking for does not exist.</p>
            <Link 
              href="/products"
              className="inline-block bg-secondary text-light font-medium rounded-md px-8 py-3 hover:bg-accent transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!isClient) return;
    
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    setShowToast(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-accent">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-accent">
                  Products
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-dark font-medium">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-dark mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-accent mb-6">${product.price.toFixed(2)}</p>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium text-dark mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium text-dark mb-2">Category</h2>
                <p className="text-gray-600 capitalize">{product.category}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium text-dark mb-2">Quantity</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="bg-gray-100 text-dark px-4 py-2 rounded-l-md hover:bg-gray-200"
                    disabled={!isClient}
                  >
                    -
                  </button>
                  <span className="bg-gray-100 text-dark px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="bg-gray-100 text-dark px-4 py-2 rounded-r-md hover:bg-gray-200"
                    disabled={!isClient}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-secondary text-light rounded-md font-medium hover:bg-accent transition-colors disabled:opacity-70"
                disabled={!isClient}
              >
                Add to Cart
              </button>
              
              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs sm:text-sm">
                <div className="p-3 border border-gray-200 rounded">
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-gray-500">On orders over $100</p>
                </div>
                <div className="p-3 border border-gray-200 rounded">
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-gray-500">30-day returns</p>
                </div>
                <div className="p-3 border border-gray-200 rounded">
                  <p className="font-medium">Secure Checkout</p>
                  <p className="text-gray-500">Safe payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <ToastNotification 
        message={`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 