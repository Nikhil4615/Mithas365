"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";

const specialOffers = [
  {
    id: 1,
    title: "Festival Special",
    description: "Curated gift boxes with premium assorted sweets, perfect for celebrations",
    image: "https://images.pexels.com/photos/3619258/pexels-photo-3619258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "₹999 onwards",
    badge: "Limited Time",
  },
  {
    id: 2,
    title: "Family Thali Combo",
    description: "A complete meal experience with variety of dishes that serves 4 people",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "₹899",
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Sweet & Savory Box",
    description: "Perfect balance of sweets and snacks in an elegant packaging",
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "₹599",
    badge: "New",
  },
];

export default function SpecialOffers() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate specials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % specialOffers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            Special Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Today's <span className="text-primary">Specials</span>
          </h3>
          <p className="text-muted-foreground">
            Discover our featured items and limited-time offerings crafted 
            with premium ingredients and traditional recipes.
          </p>
        </div>

        {/* Special Offers Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  zIndex: activeIndex === index ? 10 : 0 
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-3">
                    {offer.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    {offer.description}
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {offer.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Special Promotions & Offerings
              </h4>
              <p className="text-muted-foreground">
                At Mithas 365, we take pride in creating exceptional culinary experiences 
                for all occasions. Our special offers are crafted with care to bring you 
                the finest in Indian sweets and savory delights.
              </p>
            </div>
            
            {/* Offer Selector Tabs */}
            <div className="space-y-4">
              {specialOffers.map((offer, index) => (
                <button
                  key={offer.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center w-full p-4 rounded-lg transition-all ${
                    activeIndex === index 
                      ? "bg-primary/10 border-l-4 border-primary" 
                      : "bg-card hover:bg-muted border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex-grow text-left">
                    <h5 className="font-medium">{offer.title}</h5>
                    <p className="text-sm text-muted-foreground">{offer.price}</p>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`transition-transform ${
                      activeIndex === index ? "translate-x-0 text-primary" : "-translate-x-2 opacity-0"
                    }`} 
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}