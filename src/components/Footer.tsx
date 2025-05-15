import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MensStyle</h3>
          <p className="text-sm">
            Premium men's fashion store with the latest trends in clothing and accessories.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm hover:text-accent">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/shipping" className="text-sm hover:text-accent">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-sm hover:text-accent">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:text-accent">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-secondary mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} MensStyle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 