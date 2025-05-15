"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  // Only display the first 4 products
  const featuredProducts = products.slice(0, 4);
  
  // Set isClient to true once component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our handpicked selection of premium men's fashion items
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={isClient ? addToCart : () => {}}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-block bg-secondary text-light font-medium rounded-md px-8 py-3 hover:bg-accent transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 