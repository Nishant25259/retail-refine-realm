
import { useState } from "react";
import { ShoppingCart, Search, User, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const categories = [
    { name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop", count: "500+ Items" },
    { name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop", count: "200+ Items" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", count: "300+ Items" },
    { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", count: "150+ Items" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Running Shoes",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "Shoes",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "Watches",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Shoes",
      badge: "New"
    },
    {
      id: 4,
      name: "Classic Leather Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 67,
      category: "Watches",
      badge: "Sale"
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StyleHub
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Men</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Women</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kids</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sale</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for products..." 
                  className="pl-10 w-80 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Collections
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50/20 to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections designed to match your unique style and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">{category.name}</h4>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked items that represent the perfect blend of style, quality, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                      {product.badge}
                    </Badge>
                  )}
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h4>
                  
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                StyleHub
              </h4>
              <p className="text-gray-400">
                Your destination for premium fashion and accessories. Quality meets style.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watches</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale Items</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
