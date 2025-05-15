import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 text-light">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Premium Quality Men's Fashion</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We offer a carefully curated selection of men's clothing and accessories, crafted from the finest materials and designed for the modern gentleman.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-primary/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
                <p>On all orders over $100</p>
              </div>
              <div className="bg-primary/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
                <p>30-day money-back guarantee</p>
              </div>
              <div className="bg-primary/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Secure Checkout</h3>
                <p>Safe & protected payment</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
