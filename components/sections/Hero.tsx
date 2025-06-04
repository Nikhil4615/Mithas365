'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/masonry_collage_final.jpg"
          alt="Indian food collage"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
        />
        {/* Premium overlay with subtle gradient - showing more of the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Center spotlight effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />
        {/* Premium glass morphism effect */}
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/35 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 min-h-screen flex flex-col justify-center items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to <span className="text-primary">Mithas</span> 365
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-lg">
            Indulge in authentic flavors where tradition meets culinary excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-medium text-base w-full sm:w-auto"
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Menu
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base w-full sm:w-auto"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium border glow effect */}
      <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
    </section>
  );
}
