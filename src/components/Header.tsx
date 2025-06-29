
import { useState } from "react";
import { ShoppingCart, Search, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  cartItems: number;
}

const Header = ({ cartItems }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#men", label: "Men" },
    { href: "#women", label: "Women" },
    { href: "#kids", label: "Kids" },
    { href: "#sale", label: "Sale" }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleHub
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-80 bg-gray-50 border-0 focus:bg-white transition-colors"
              />
            </form>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="flex justify-around border-t pt-4">
              <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="flex flex-col items-center space-y-1">
                  <Heart className="w-5 h-5" />
                  <span className="text-xs">Wishlist</span>
                </Button>
              </Link>
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="flex flex-col items-center space-y-1">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Profile</span>
                </Button>
              </Link>
              <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="flex flex-col items-center space-y-1 relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-xs">Cart</span>
                  {cartItems > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-4 h-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
