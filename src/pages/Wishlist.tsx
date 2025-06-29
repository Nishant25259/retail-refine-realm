
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Premium Running Shoes",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      category: "Shoes",
      inStock: true
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Watches",
      inStock: false
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      category: "Shoes",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            StyleHub
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">My Wishlist</h2>
            <p className="text-gray-600 mt-2">{wishlistItems.length} items saved for later</p>
          </div>
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                {!item.inStock && (
                  <Badge className="absolute top-3 left-3 bg-red-500">
                    Out of Stock
                  </Badge>
                )}
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                    <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  disabled={!item.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.inStock ? 'Add to Cart' : 'Notify When Available'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
