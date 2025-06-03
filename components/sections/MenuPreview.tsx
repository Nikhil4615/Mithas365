"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";

const menuCategories = [
  "All",
  "Sweets",
  "Breakfast",
  "Main Course",
  "Snacks",
  "Beverages",
];

const menuItems = [
  {
    id: 1,
    name: "Kaju Katli",
    description: "Diamond-shaped cashew fudge with silver varq",
    price: "₹450/500g",
    image: "https://images.pexels.com/photos/15412230/pexels-photo-15412230/free-photo-of-kaju-katli-or-kaju-barfi-is-a-traditional-indian-dessert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Sweets",
  },
  {
    id: 2,
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup",
    price: "₹350/kg",
    image: "https://images.pexels.com/photos/12419484/pexels-photo-12419484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Sweets",
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Crispy rice pancake with spiced potato filling",
    price: "₹120",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Breakfast",
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich tomato gravy",
    price: "₹250",
    image: "https://images.pexels.com/photos/14486011/pexels-photo-14486011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Main Course",
  },
  {
    id: 5,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: "₹30/piece",
    image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Snacks",
  },
  {
    id: 6,
    name: "Mango Lassi",
    description: "Sweet yogurt drink blended with fresh mangoes",
    price: "₹110",
    image: "https://images.pexels.com/photos/8472100/pexels-photo-8472100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beverages",
  },
  {
    id: 7,
    name: "Jalebi",
    description: "Spiral-shaped sweet soaked in sugar syrup",
    price: "₹300/kg",
    image: "https://images.pexels.com/photos/13170918/pexels-photo-13170918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Sweets",
  },
  {
    id: 8,
    name: "Biryani",
    description: "Fragrant rice dish with aromatic spices and vegetables",
    price: "₹220",
    image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Main Course",
  },
];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            Delicious Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Menu</span>
          </h3>
          <p className="text-muted-foreground">
            From traditional sweets to hearty meals, discover our diverse selection of
            handcrafted delicacies prepared with love and authentic recipes.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="menu-card group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Button size="lg">
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
}