'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
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
        {/* Overlay gradient - adjusted for better text visibility with the busy background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 min-h-[100dvh] flex flex-col justify-center items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight size={24} className="text-white transform rotate-90" />
        </div>
      </div>
    </section>
  );
}