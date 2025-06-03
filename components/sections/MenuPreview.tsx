"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Comprehensive menu structure with images for preview
const menuData = {
  "South Indian": {
    hindi: "साउथ इंडियन",
    items: [
      { 
        name: "Plain Dosa", 
        hindi: "साफ दोसा", 
        price: "₹40",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Masala Dosa", 
        hindi: "मसाला दोसा", 
        price: "₹50",
        image: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Mysore Dosa", 
        hindi: "मैसूर दोसा", 
        price: "₹60",
        image: "https://images.pexels.com/photos/5560762/pexels-photo-5560762.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Rava Dosa", 
        hindi: "रवा दोसा", 
        price: "₹60",
        image: "https://images.pexels.com/photos/14111749/pexels-photo-14111749.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Idli (2 pieces)", 
        hindi: "इडली (2 पीस)", 
        price: "₹35",
        image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Uttapam", 
        hindi: "उत्तपम", 
        price: "₹45",
        image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
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
        image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Veg Fried Rice", 
        hindi: "वेज फ्राइड राइस", 
        price: "₹55",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Veg Schezwan Noodles", 
        hindi: "वेज शेजवान नूडल्स", 
        price: "₹70",
        image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Mixed Fried Rice", 
        hindi: "मिक्स फ्राइड राइस", 
        price: "₹65",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Veg Manchurian", 
        hindi: "वेज मंचूरियन", 
        price: "₹60",
        image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Paneer Chilli", 
        hindi: "पनीर चिली", 
        price: "₹80",
        image: "https://images.pexels.com/photos/14486011/pexels-photo-14486011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
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
        image: "https://images.pexels.com/photos/6461698/pexels-photo-6461698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Sev Puri", 
        hindi: "सेव पूरी", 
        price: "₹25",
        image: "https://images.pexels.com/photos/6461698/pexels-photo-6461698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Pani Puri", 
        hindi: "पानी पूरी", 
        price: "₹30",
        image: "https://images.pexels.com/photos/6461699/pexels-photo-6461699.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Dahi Puri", 
        hindi: "दही पूरी", 
        price: "₹35",
        image: "https://images.pexels.com/photos/6461699/pexels-photo-6461699.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Samosa Chaat", 
        hindi: "समोसा चाट", 
        price: "₹40",
        image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Aloo Tikki Chaat", 
        hindi: "आलू टिक्की चाट", 
        price: "₹40",
        image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Special Falooda": {
    hindi: "स्पेशल फालूदा",
    items: [
      { 
        name: "Royal Falooda", 
        hindi: "रॉयल फालूदा", 
        price: "₹100",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Kulfi Falooda", 
        hindi: "कुल्फी फालूदा", 
        price: "₹80",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Rabdi Falooda", 
        hindi: "रबड़ी फालूदा", 
        price: "₹85",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Fruit Falooda", 
        hindi: "फ्रूट फालूदा", 
        price: "₹90",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Rose Falooda", 
        hindi: "रोज़ फालूदा", 
        price: "₹75",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Shakes": {
    hindi: "शेक",
    items: [
      { 
        name: "Mango Shake", 
        hindi: "आम शेक", 
        price: "₹50",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Banana Shake", 
        hindi: "केला शेक", 
        price: "₹45",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Chocolate Shake", 
        hindi: "चॉकलेट शेक", 
        price: "₹55",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Strawberry Shake", 
        hindi: "स्ट्रॉबेरी शेक", 
        price: "₹60",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Vanilla Shake", 
        hindi: "वेनिला शेक", 
        price: "₹50",
        image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Cold Coffee", 
        hindi: "कोल्ड कॉफी", 
        price: "₹45",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Rice": {
    hindi: "राईस",
    items: [
      { 
        name: "Plain Rice", 
        hindi: "प्लेन राइस", 
        price: "₹50",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Jeera Rice", 
        hindi: "जीरा राइस", 
        price: "₹60",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Veg Pulao", 
        hindi: "वेज पुलाव", 
        price: "₹75",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Biryani", 
        hindi: "बिरयानी", 
        price: "₹95",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Lemon Rice", 
        hindi: "नींबू राइस", 
        price: "₹65",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Curd Rice", 
        hindi: "दही राइस", 
        price: "₹55",
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Snacks": {
    hindi: "रजवंस",
    items: [
      { 
        name: "Samosa", 
        hindi: "समोसा", 
        price: "₹15",
        image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Kachori", 
        hindi: "कचौरी", 
        price: "₹20",
        image: "https://images.pexels.com/photos/7625203/pexels-photo-7625203.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Dhokla", 
        hindi: "ढोकला", 
        price: "₹40",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Pakoda", 
        hindi: "पकौड़ा", 
        price: "₹35",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Spring Roll", 
        hindi: "स्प्रिंग रोल", 
        price: "₹50",
        image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Bread Pakoda", 
        hindi: "ब्रेड पकौड़ा", 
        price: "₹25",
        image: "https://images.pexels.com/photos/7625104/pexels-photo-7625104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Soup": {
    hindi: "सूप",
    items: [
      { 
        name: "Tomato Soup", 
        hindi: "टमाटर सूप", 
        price: "₹60",
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Sweet Corn Soup", 
        hindi: "स्वीट कॉर्न सूप", 
        price: "₹70",
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Hot & Sour Soup", 
        hindi: "हॉट एंड साउर सूप", 
        price: "₹65",
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Manchow Soup", 
        hindi: "मंचाऊ सूप", 
        price: "₹60",
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Lemon Coriander Soup", 
        hindi: "लेमन धनिया सूप", 
        price: "₹60",
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Pizza": {
    hindi: "पिज्जा",
    items: [
      { 
        name: "Margherita Pizza", 
        hindi: "मार्गेरिटा पिज्जा", 
        price: "₹85",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Cheese Pizza", 
        hindi: "चीज पिज्जा", 
        price: "₹95",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Veg Pizza", 
        hindi: "वेज पिज्जा", 
        price: "₹110",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Paneer Pizza", 
        hindi: "पनीर पिज्जा", 
        price: "₹125",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Corn Pizza", 
        hindi: "कॉर्न पिज्जा", 
        price: "₹100",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Beverages": {
    hindi: "पेय पदार्थ",
    items: [
      { 
        name: "Tea", 
        hindi: "चाय", 
        price: "₹15",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Coffee", 
        hindi: "कॉफी", 
        price: "₹20",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Green Tea", 
        hindi: "ग्रीन टी", 
        price: "₹25",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Lemon Tea", 
        hindi: "लेमन टी", 
        price: "₹20",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Masala Tea", 
        hindi: "मसाला चाय", 
        price: "₹18",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Fresh Lime Water", 
        hindi: "नींबू पानी", 
        price: "₹25",
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
    ]
  },
  "Parathas": {
    hindi: "पराठा",
    items: [
      { 
        name: "Plain Paratha", 
        hindi: "प्लेन पराठा", 
        price: "₹50",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Aloo Paratha", 
        hindi: "आलू पराठा", 
        price: "₹60",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Paneer Paratha", 
        hindi: "पनीर पराठा", 
        price: "₹75",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Gobi Paratha", 
        hindi: "गोभी पराठा", 
        price: "₹65",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Mix Veg Paratha", 
        hindi: "मिक्स वेज पराठा", 
        price: "₹70",
        image: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
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
        image: "https://images.pexels.com/photos/12419484/pexels-photo-12419484.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Rasgulla", 
        hindi: "रसगुल्ला", 
        price: "₹45",
        image: "https://images.pexels.com/photos/7625264/pexels-photo-7625264.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Kaju Katli", 
        hindi: "काजू कतली", 
        price: "₹500/kg",
        image: "https://images.pexels.com/photos/15412230/pexels-photo-15412230.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Jalebi", 
        hindi: "जलेबी", 
        price: "₹300/kg",
        image: "https://images.pexels.com/photos/13170918/pexels-photo-13170918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Barfi", 
        hindi: "बर्फी", 
        price: "₹400/kg",
        image: "https://images.pexels.com/photos/15412230/pexels-photo-15412230.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      },
      { 
        name: "Ladoo", 
        hindi: "लड्डू", 
        price: "₹350/kg",
        image: "https://images.pexels.com/photos/15412230/pexels-photo-15412230.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
      }
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

  // Filter to only show these 6 categories
  const allowedCategories = ["South Indian", "Chinese", "Spicy Chaat", "Sweets", "Beverages", "Snacks"];
  
  // Get representative images for each allowed category
  const getCategoryPreview = (categoryKey: string) => {
    if (!allowedCategories.includes(categoryKey)) return null;
    
    const category = menuData[categoryKey as keyof typeof menuData];
    if (!category) return null;
    
    return {
      name: categoryKey,
      hindi: category.hindi,
      itemCount: category.items.length,
      image: category.items[0]?.image || "",
      priceRange: `₹${Math.min(...category.items.map(item => parseInt(item.price.replace('₹', ''))))} - ₹${Math.max(...category.items.map(item => parseInt(item.price.replace('₹', ''))))}`
    };
  };

  const categoryPreviews = Object.keys(menuData)
    .filter(key => allowedCategories.includes(key))
    .map(getCategoryPreview)
    .filter(Boolean);

  return (
    <section id="menu" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            Delicious Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Popular Categories</span>
          </h3>
          <p className="text-muted-foreground">
            From traditional Indian sweets to international cuisines, discover our diverse selection of
            handcrafted delicacies prepared with authentic recipes and fresh ingredients.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryPreviews.map((category: any, index: number) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, transform: "translateY(30px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{category.name}</h4>
                  <p className="text-sm opacity-90 mb-2">{category.hindi}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.itemCount} items
                    </span>
                    <span className="text-xs font-medium">
                      {category.priceRange}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Call-to-Action */}
        <div className="text-center">
          <Link href="/menu">
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              View Complete Menu
              <span className="ml-2">→</span>
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Discover all our delicious offerings with detailed descriptions and prices
          </p>
        </div>
      </div>
    </section>
  );
}