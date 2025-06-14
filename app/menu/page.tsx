"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";

// Extended menu data with images
const menuData = {
  "South Indian": {
    hindi: "साउथ इंडियन",
    items: [
      { 
        name: "Plain Dosa", 
        hindi: "साफ दोसा", 
        price: "₹40",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Crispy rice and lentil crepe"
      },
      { 
        name: "Masala Dosa", 
        hindi: "मसाला दोसा", 
        price: "₹50",
        image: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Dosa filled with spiced potato curry"
      },
      { 
        name: "Mysore Dosa", 
        hindi: "मैसूर दोसा", 
        price: "₹60",
        image: "https://images.pexels.com/photos/5560762/pexels-photo-5560762.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Spicy chutney spread dosa"
      },
      { 
        name: "Rava Dosa", 
        hindi: "रवा दोसा", 
        price: "₹60",
        image: "https://images.pexels.com/photos/14111749/pexels-photo-14111749.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Crispy semolina dosa with vegetables"
      },
      { 
        name: "Idli (2 pieces)", 
        hindi: "इडली (2 पीस)", 
        price: "₹35",
        image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Steamed rice cakes with chutney"
      },
      { 
        name: "Uttapam", 
        hindi: "उत्तपम", 
        price: "₹45",
        image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Thick pancake with vegetables"
      }
    ]
  },
  "Chinese": {
    hindi: "चायनीज",
    items: [
      { 
        name: "Veg Hakka Noodles", 
        hindi: "वेज हक्का नूडल्स", 
        price: "₹60",
        image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Stir-fried noodles with vegetables"
      },
      { 
        name: "Veg Fried Rice", 
        hindi: "वेज फ्राइड राइस", 
        price: "₹55",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Wok-fried rice with mixed vegetables"
      },
      { 
        name: "Veg Manchurian", 
        hindi: "वेज मंचूरियन", 
        price: "₹60",
        image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Deep-fried vegetable balls in sauce"
      },
      { 
        name: "Paneer Chilli", 
        hindi: "पनीर चिली", 
        price: "₹80",
        image: "https://images.pexels.com/photos/14486011/pexels-photo-14486011.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Spicy cottage cheese in chili sauce"
      },
      { 
        name: "Spring Roll", 
        hindi: "स्प्रिंग रोल", 
        price: "₹50",
        image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Crispy rolls with vegetable filling"
      }
    ]
  },
  "Spicy Chaat": {
    hindi: "चटपटी चाट",
    items: [
      { 
        name: "Bhel Puri", 
        hindi: "भेल पूरी", 
        price: "₹20",
        image: "https://images.pexels.com/photos/6461698/pexels-photo-6461698.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Puffed rice with chutneys and vegetables"
      },
      { 
        name: "Pani Puri", 
        hindi: "पानी पूरी", 
        price: "₹30",
        image: "https://images.pexels.com/photos/6461699/pexels-photo-6461699.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Crispy shells with spiced water"
      },
      { 
        name: "Samosa Chaat", 
        hindi: "समोसा चाट", 
        price: "₹40",
        image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Broken samosa with yogurt and chutneys"
      },
      { 
        name: "Raj Kachori", 
        hindi: "राज कचौरी", 
        price: "₹40",
        image: "https://images.pexels.com/photos/6461703/pexels-photo-6461703.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Large puri filled with multiple chutneys"
      }
    ]
  },
  "Sweets": {
    hindi: "मिठाई",
    items: [
      { 
        name: "Gulab Jamun", 
        hindi: "गुलाब जामुन", 
        price: "₹50",
        image: "https://images.pexels.com/photos/12419484/pexels-photo-12419484.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Fried milk balls in sugar syrup"
      },
      { 
        name: "Kaju Katli", 
        hindi: "काजू कतली", 
        price: "₹500/kg",
        image: "https://images.pexels.com/photos/15412230/pexels-photo-15412230.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Diamond-shaped cashew fudge"
      },
      { 
        name: "Jalebi", 
        hindi: "जलेबी", 
        price: "₹300/kg",
        image: "https://images.pexels.com/photos/13170918/pexels-photo-13170918.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Spiral-shaped sweet soaked in syrup"
      },
      { 
        name: "Rasgulla", 
        hindi: "रसगुल्ला", 
        price: "₹45",
        image: "https://images.pexels.com/photos/7625264/pexels-photo-7625264.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Spongy cottage cheese balls in syrup"
      }
    ]
  },
  "Beverages": {
    hindi: "पेय पदार्थ",
    items: [
      { 
        name: "Mango Lassi", 
        hindi: "आम लस्सी", 
        price: "₹50",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Sweet yogurt drink with mango"
      },
      { 
        name: "Masala Tea", 
        hindi: "मसाला चाय", 
        price: "₹18",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Spiced tea with milk"
      },
      { 
        name: "Fresh Lime Water", 
        hindi: "नींबू पानी", 
        price: "₹25",
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Refreshing lime juice with mint"
      },
      { 
        name: "Cold Coffee", 
        hindi: "कोल्ड कॉफी", 
        price: "₹45",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Chilled coffee with milk and ice cream"
      }
    ]
  },
  "Snacks": {
    hindi: "नाश्ता",
    items: [
      { 
        name: "Samosa", 
        hindi: "समोसा", 
        price: "₹15",
        image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Crispy pastry with spiced potato filling"
      },
      { 
        name: "Kachori", 
        hindi: "कचौरी", 
        price: "₹20",
        image: "https://images.pexels.com/photos/7625203/pexels-photo-7625203.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Fried pastry with lentil filling"
      },
      { 
        name: "Pakoda", 
        hindi: "पकौड़ा", 
        price: "₹35",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Deep-fried vegetable fritters"
      },
      { 
        name: "Bread Pakoda", 
        hindi: "ब्रेड पकौड़ा", 
        price: "₹25",
        image: "https://images.pexels.com/photos/7625104/pexels-photo-7625104.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2",
        description: "Fried bread stuffed with spiced filling"
      }
    ]
  }
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  const categories = ["All", ...Object.keys(menuData)];

  const getFilteredItems = () => {
    let allItems: any[] = [];
    
    if (selectedCategory === "All") {
      Object.entries(menuData).forEach(([categoryKey, category]) => {
        category.items.forEach((item: any) => {
          allItems.push({ ...item, category: categoryKey, categoryHindi: category.hindi });
        });
      });
    } else {
      const category = menuData[selectedCategory as keyof typeof menuData];
      if (category) {
        allItems = category.items.map((item: any) => ({
          ...item,
          category: selectedCategory,
          categoryHindi: category.hindi
        }));
      }
    }

    if (searchTerm) {
      allItems = allItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hindi.includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allItems;
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Filters and Search */}
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete <span className="text-primary">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of authentic Indian cuisine, Chinese specialties, 
            and refreshing beverages - all prepared with fresh ingredients and traditional recipes.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count and Pagination Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)} of {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Menu Items Grid - Smaller Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
          {currentItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${startIndex + index}`}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image - Smaller */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-2 left-2">
                  <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-primary text-primary-foreground">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="px-2 py-1 rounded text-sm font-bold bg-white/90 text-primary">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Content - Compact */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{item.hindi}</p>
                <p className="text-xs text-muted-foreground/80 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or select a different category
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setCurrentPage(1);
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {generatePageNumbers().map((pageNum, index) => (
              <div key={index}>
                {pageNum === "..." ? (
                  <span className="px-3 py-2 text-sm text-muted-foreground">...</span>
                ) : (
                  <button
                    onClick={() => setCurrentPage(pageNum as number)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === pageNum
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    {pageNum}
                  </button>
                )}
              </div>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {/* Menu Summary */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Complete Menu Collection
          </h3>
          <p className="text-muted-foreground">
            {Object.keys(menuData).length} Categories • {' '}
            {Object.values(menuData).reduce((total, category) => total + category.items.length, 0)} Items
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            All dishes are prepared fresh with quality ingredients • Prices may vary
          </p>
        </div>
      </div>
    </div>
  );
} 