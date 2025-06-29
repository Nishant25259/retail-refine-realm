
import { Card } from "@/components/ui/card";

const CategoriesSection = () => {
  const categories = [
    { name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop", count: "500+ Items" },
    { name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop", count: "200+ Items" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", count: "300+ Items" },
    { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", count: "150+ Items" }
  ];

  return (
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
  );
};

export default CategoriesSection;
