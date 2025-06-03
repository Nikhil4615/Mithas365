"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Enthusiast",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    content: "The sweets at Mithas 365 remind me of my grandmother's cooking. The authentic flavors and traditional recipes make this place truly special. Their Kaju Katli is absolutely divine!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Restaurant Critic",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    content: "As someone who has traveled across India, I can confidently say that Mithas 365 offers some of the most authentic regional cuisines. Their attention to detail and commitment to tradition is commendable.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Regular Customer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 4,
    content: "I've been ordering festival sweets from Mithas 365 for over 5 years now. Their quality is consistent, and the packaging is always beautiful. Perfect for gifting during Diwali and other celebrations.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Corporate Client",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    content: "We regularly order from Mithas 365 for our office events. Their catering service is impeccable, with a wide variety of options that please everyone. Highly recommended for corporate functions!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides to show
  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [updateSlidesToShow]);

  const totalSlides = testimonials.length;
  const maxIndex = totalSlides - slidesToShow;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < maxIndex) return prev + 1;
        return 0; // Reset to beginning when reaching the end
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            What People Say
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-primary">Testimonials</span>
          </h3>
          <p className="text-muted-foreground">
            Hear from our satisfied customers about their experiences with our sweets, 
            meals, and service at Mithas 365.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={cn(
                    "flex-shrink-0 px-3 transition-opacity duration-300",
                    { "w-full": slidesToShow === 1 },
                    { "w-1/2": slidesToShow === 2 },
                    { "w-1/3": slidesToShow === 3 }
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-md border border-border/50 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.stars ? "fill-primary text-primary" : "text-muted"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground italic flex-grow">"{testimonial.content}"</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev} 
            disabled={currentIndex === 0}
            className={cn(
              "absolute top-1/2 -left-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md",
              "hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext} 
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute top-1/2 -right-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md",
              "hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === i ? "bg-primary w-6" : "bg-muted-foreground/30"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}