
import { useState } from "react";
import { ShoppingCart, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartItems: number;
}

const Header = ({ cartItems }: HeaderProps) => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleHub
            </Link>
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
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
