'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2531200/pexels-photo-2531200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Indian sweets and dishes"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-primary">Mithas</span> 365
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Indulge in authentic flavors where tradition meets culinary excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-medium text-base"
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Menu
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-medium text-base"
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