"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Comprehensive menu structure based on the Hindi menu image
const menuData = {
  "South Indian": {
    hindi: "साउथ इंडियन",
    items: [
      { name: "Plain Dosa", hindi: "साफ दोसा", price: "₹40" },
      { name: "Masala Dosa", hindi: "मसाला दोसा", price: "₹50" },
      { name: "Mysore Dosa", hindi: "मैसूर दोसा", price: "₹60" },
      { name: "Rava Dosa", hindi: "रवा दोसा", price: "₹60" },
      { name: "Paneer Dosa", hindi: "पनीर दोसा", price: "₹75" },
      { name: "Cheese Dosa", hindi: "चीज दोसा", price: "₹65" },
      { name: "Paper Masala Dosa", hindi: "पेपर मसाला दोसा", price: "₹70" },
      { name: "Ghee Dosa", hindi: "घी दोसा", price: "₹55" },
      { name: "Uttapam", hindi: "उत्तपम", price: "₹45" },
      { name: "Idli (2 pieces)", hindi: "इडली (2 पीस)", price: "₹35" }
    ]
  },
  "Chinese": {
    hindi: "चायनीज",
    items: [
      { name: "Veg Hakka Noodles", hindi: "वेज हक्का नूडल्स", price: "₹60" },
      { name: "Veg Fried Rice", hindi: "वेज फ्राइड राइस", price: "₹55" },
      { name: "Veg Schezwan Noodles", hindi: "वेज शेजवान नूडल्स", price: "₹70" },
      { name: "Mixed Fried Rice", hindi: "मिक्स फ्राइड राइस", price: "₹65" },
      { name: "Veg Manchurian", hindi: "वेज मंचूरियन", price: "₹60" },
      { name: "Paneer Chilli", hindi: "पनीर चिली", price: "₹80" },
      { name: "Honey Chilli Potato", hindi: "हनी चिली पोटेटो", price: "₹70" },
      { name: "Spring Roll", hindi: "स्प्रिंग रोल", price: "₹50" }
    ]
  },
  "Spicy Chaat": {
    hindi: "चटपटी चाट",
    items: [
      { name: "Bhel Puri", hindi: "भेल पूरी", price: "₹20" },
      { name: "Sev Puri", hindi: "सेव पूरी", price: "₹25" },
      { name: "Pani Puri", hindi: "पानी पूरी", price: "₹30" },
      { name: "Dahi Puri", hindi: "दही पूरी", price: "₹35" },
      { name: "Samosa Chaat", hindi: "समोसा चाट", price: "₹40" },
      { name: "Aloo Tikki Chaat", hindi: "आलू टिक्की चाट", price: "₹40" },
      { name: "Raj Kachori", hindi: "राज कचौरी", price: "₹40" },
      { name: "Papdi Chaat", hindi: "पापड़ी चाट", price: "₹30" }
    ]
  },
  "Special Falooda": {
    hindi: "स्पेशल फालूदा",
    items: [
      { name: "Royal Falooda", hindi: "रॉयल फालूदा", price: "₹100" },
      { name: "Kulfi Falooda", hindi: "कुल्फी फालूदा", price: "₹80" },
      { name: "Rabdi Falooda", hindi: "रबड़ी फालूदा", price: "₹85" },
      { name: "Fruit Falooda", hindi: "फ्रूट फालूदा", price: "₹90" },
      { name: "Rose Falooda", hindi: "रोज़ फालूदा", price: "₹75" }
    ]
  },
  "Shakes": {
    hindi: "शेक",
    items: [
      { name: "Mango Shake", hindi: "आम शेक", price: "₹50" },
      { name: "Banana Shake", hindi: "केला शेक", price: "₹45" },
      { name: "Chocolate Shake", hindi: "चॉकलेट शेक", price: "₹55" },
      { name: "Strawberry Shake", hindi: "स्ट्रॉबेरी शेक", price: "₹60" },
      { name: "Vanilla Shake", hindi: "वेनिला शेक", price: "₹50" },
      { name: "Cold Coffee", hindi: "कोल्ड कॉफी", price: "₹45" }
    ]
  },
  "Rice": {
    hindi: "राईस",
    items: [
      { name: "Plain Rice", hindi: "प्लेन राइस", price: "₹50" },
      { name: "Jeera Rice", hindi: "जीरा राइस", price: "₹60" },
      { name: "Veg Pulao", hindi: "वेज पुलाव", price: "₹75" },
      { name: "Biryani", hindi: "बिरयानी", price: "₹95" },
      { name: "Lemon Rice", hindi: "नींबू राइस", price: "₹65" },
      { name: "Curd Rice", hindi: "दही राइस", price: "₹55" }
    ]
  },
  "Snacks": {
    hindi: "रजवंस",
    items: [
      { name: "Samosa", hindi: "समोसा", price: "₹60" },
      { name: "Kachori", hindi: "कचौरी", price: "₹50" },
      { name: "Dhokla", hindi: "ढोकला", price: "₹40" },
      { name: "Pakoda", hindi: "पकौड़ा", price: "₹45" },
      { name: "Spring Roll", hindi: "स्प्रिंग रोल", price: "₹50" },
      { name: "Bread Pakoda", hindi: "ब्रेड पकौड़ा", price: "₹35" }
    ]
  },
  "Soup": {
    hindi: "सूप",
    items: [
      { name: "Tomato Soup", hindi: "टमाटर सूप", price: "₹60" },
      { name: "Sweet Corn Soup", hindi: "स्वीट कॉर्न सूप", price: "₹70" },
      { name: "Hot & Sour Soup", hindi: "हॉट एंड साउर सूप", price: "₹65" },
      { name: "Manchow Soup", hindi: "मंचाऊ सूप", price: "₹60" },
      { name: "Lemon Coriander Soup", hindi: "लेमन धनिया सूप", price: "₹60" }
    ]
  },
  "Pizza": {
    hindi: "पिज्जा",
    items: [
      { name: "Margherita Pizza", hindi: "मार्गेरिटा पिज्जा", price: "₹85" },
      { name: "Cheese Pizza", hindi: "चीज पिज्जा", price: "₹95" },
      { name: "Veg Pizza", hindi: "वेज पिज्जा", price: "₹110" },
      { name: "Paneer Pizza", hindi: "पनीर पिज्जा", price: "₹125" },
      { name: "Corn Pizza", hindi: "कॉर्न पिज्जा", price: "₹100" }
    ]
  },
  "Beverages": {
    hindi: "पेय पदार्थ",
    items: [
      { name: "Tea", hindi: "चाय", price: "₹15" },
      { name: "Coffee", hindi: "कॉफी", price: "₹20" },
      { name: "Green Tea", hindi: "ग्रीन टी", price: "₹25" },
      { name: "Lemon Tea", hindi: "लेमन टी", price: "₹20" },
      { name: "Masala Tea", hindi: "मसाला चाय", price: "₹18" },
      { name: "Fresh Lime Water", hindi: "नींबू पानी", price: "₹25" }
    ]
  },
  "Parathas": {
    hindi: "पराठा",
    items: [
      { name: "Plain Paratha", hindi: "प्लेन पराठा", price: "₹50" },
      { name: "Aloo Paratha", hindi: "आलू पराठा", price: "₹60" },
      { name: "Paneer Paratha", hindi: "पनीर पराठा", price: "₹75" },
      { name: "Gobi Paratha", hindi: "गोभी पराठा", price: "₹65" },
      { name: "Mix Veg Paratha", hindi: "मिक्स वेज पराठा", price: "₹70" }
    ]
  },
  "Sweets": {
    hindi: "मिठाई",
    items: [
      { name: "Gulab Jamun", hindi: "गुलाब जामुन", price: "₹50" },
      { name: "Rasgulla", hindi: "रसगुल्ला", price: "₹45" },
      { name: "Kaju Katli", hindi: "काजू कतली", price: "₹500/kg" },
      { name: "Jalebi", hindi: "जलेबी", price: "₹300/kg" },
      { name: "Barfi", hindi: "बर्फी", price: "₹400/kg" },
      { name: "Ladoo", hindi: "लड्डू", price: "₹350/kg" }
    ]
  }
};

const quickCategories = [
  "All",
  "South Indian",
  "Chinese", 
  "Spicy Chaat",
  "Sweets",
  "Beverages",
  "Snacks"
];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleShowComplete = () => {
    setShowAllCategories(true);
    setActiveCategory("All");
    // Expand all categories
    setExpandedCategories(new Set(Object.keys(menuData)));
  };

  const getFilteredCategories = () => {
    if (activeCategory === "All") {
      return showAllCategories ? Object.keys(menuData) : quickCategories.slice(1, 7);
    }
    return [activeCategory];
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            Delicious Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Complete Menu</span>
          </h3>
          <p className="text-muted-foreground">
            From traditional Indian sweets to international cuisines, discover our diverse selection of
            handcrafted delicacies prepared with authentic recipes and fresh ingredients.
          </p>
        </div>

        {/* Quick Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {quickCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                if (category !== "All") {
                  setShowAllCategories(false);
                  setExpandedCategories(new Set([category]));
                }
              }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Complete Menu Button */}
        {!showAllCategories && (
          <div className="text-center mb-12">
            <Link href="/menu">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
              >
                View Complete Menu
              </Button>
            </Link>
          </div>
        )}

        {/* Menu Categories and Items */}
        <div className="space-y-8">
          {getFilteredCategories().map((categoryKey) => {
            const category = menuData[categoryKey as keyof typeof menuData];
            if (!category) return null;

            const isExpanded = expandedCategories.has(categoryKey);
            
            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl shadow-sm border border-border/50 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="w-full px-6 py-4 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-between"
                >
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-foreground">{categoryKey}</h4>
                    <p className="text-sm text-muted-foreground">{category.hindi}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      {category.items.length} items
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>

                {/* Category Items */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, transform: "translateX(-20px)" }}
                          animate={{ opacity: 1, transform: "translateX(0px)" }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </h5>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.hindi}
                              </p>
                            </div>
                            <span className="text-primary font-bold ml-4">
                              {item.price}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Menu Summary */}
        {showAllCategories && (
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center p-6 bg-primary/5 rounded-2xl"
          >
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Complete Menu Collection
            </h4>
            <p className="text-muted-foreground">
              {Object.keys(menuData).length} Categories • {' '}
              {Object.values(menuData).reduce((total, category) => total + category.items.length, 0)} Items
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              All items are freshly prepared with quality ingredients • Prices may vary
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}