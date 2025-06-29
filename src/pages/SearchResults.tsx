
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Star, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [cartItems, setCartItems] = useState(0);
  const query = searchParams.get('q') || '';

  // Mock search results - in a real app, this would be fetched from an API
  const searchResults = [
    {
      id: 1,
      name: "Premium Running Shoes",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "Shoes"
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "Watches"
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Shoes"
    }
  ];

  const filteredResults = searchResults.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header cartItems={cartItems} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            {filteredResults.length} products found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <Input placeholder="Min" type="number" />
                      <Input placeholder="Max" type="number" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {["Shoes", "Watches", "Accessories"].map((category) => (
                        <label key={category} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Rating</h4>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((stars) => (
                        <label key={stars} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <div className="flex items-center">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm ml-1">& Up</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            {filteredResults.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search terms or filters
                </p>
                <Link to="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Browse All Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((product) => (
                  <Card key={product.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </Link>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                      </div>
                      
                      <Link to={`/product/${product.id}`}>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h4>
                      </Link>
                      
                      <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">${product.price}</span>
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
