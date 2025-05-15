import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-primary text-light">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Men's fashion"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Elevate Your Style
          </h1>
          <p className="text-xl max-w-lg mb-8">
            Discover our premium collection of men's fashion essentials, crafted for the modern gentleman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link 
              href="/products"
              className="inline-block bg-accent text-light font-medium rounded-md px-8 py-3 text-center hover:bg-secondary transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              href="/about"
              className="inline-block bg-transparent border border-light text-light font-medium rounded-md px-8 py-3 text-center hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 