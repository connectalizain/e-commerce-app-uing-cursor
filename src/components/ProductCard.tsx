"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ToastNotification from "./ToastNotification";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Set isClient to true once component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };
  
  return (
    <>
      <div 
        className={`bg-light rounded-lg shadow-md overflow-hidden ${isClient && isHovered ? 'transform -translate-y-1' : ''} transition-transform duration-300 h-full flex flex-col`}
        onMouseEnter={() => isClient && setIsHovered(true)}
        onMouseLeave={() => isClient && setIsHovered(false)}
      >
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-300"
            priority
          />
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-dark mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-700 mb-2 line-clamp-2">{product.description}</p>
          <p className="text-accent font-bold mt-auto">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="p-4 pt-0 flex space-x-2">
          <button 
            onClick={handleAddToCart}
            className="w-full py-2 bg-secondary text-light rounded hover:bg-accent transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
          
          <Link 
            href={`/products/${product.id}`}
            className="py-2 px-4 border border-secondary text-secondary rounded hover:bg-secondary hover:text-light transition-colors"
            aria-label={`View details for ${product.name}`}
          >
            Details
          </Link>
        </div>
      </div>
      
      <ToastNotification 
        message={`${product.name} added to cart!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default ProductCard; 