
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedProductsSectionProps {
  onAddToCart: (productId: number) => void;
}

const FeaturedProductsSection = ({ onAddToCart }: FeaturedProductsSectionProps) => {
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

  return (
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
                  onClick={() => onAddToCart(product.id)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
