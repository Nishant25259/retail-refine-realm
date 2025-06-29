
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header cartItems={cartItems} />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection onAddToCart={addToCart} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
