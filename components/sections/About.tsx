"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with decorative elements */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden relative z-10">
              <Image
                src="/images/about_img.jpg"
                alt="Spreading sweetness through traditional sweets"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative patterns */}
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-primary rounded-2xl -z-0"></div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <p className="text-sm text-muted-foreground">Spreading Joy Since</p>
              <p className="text-3xl font-bold text-primary">2018</p>
            </div>
          </div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, transform: "translateX(20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
                Our Mission
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Adding <span className="text-primary">Sweetness</span> to Every Life
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              At Mithas 365, we believe that sweetness has the power to bring joy, create connections, and make every moment special. Since 2018, we've been on a mission to spread happiness through our authentic sweets and delicacies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our vision extends beyond just creating delicious treats – we aim to be catalysts of joy in society. Every sweet we craft is a testament to our commitment to enriching lives, celebrating traditions, and creating moments of pure happiness for everyone who walks through our doors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">100K+</h4>
                <p className="text-sm text-muted-foreground">Smiles Delivered</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">50+</h4>
                <p className="text-sm text-muted-foreground">Sweet Traditions</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">365</h4>
                <p className="text-sm text-muted-foreground">Days of Sweetness</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" variant="default">
                Join Our Sweet Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}