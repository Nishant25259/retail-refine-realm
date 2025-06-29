
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Discover Your Perfect Style
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in">
            Explore our curated collection of premium shoes, watches, and accessories. 
            Elevate your fashion game with the latest trends.
          </p>
          <div className="flex space-x-4 animate-fade-in">
            <Link to="/search?q=">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Shop Now
              </Button>
            </Link>
            <Link to="/search?q=collection">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
