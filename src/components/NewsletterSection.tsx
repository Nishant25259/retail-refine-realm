
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay in Style</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and style tips.
        </p>
        <div className="flex max-w-md mx-auto gap-4">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
