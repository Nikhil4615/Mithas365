"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Award, Heart } from "lucide-react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Mithas 365</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the passion, tradition, and culinary excellence that defines our journey in bringing authentic flavors to your table.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Our Story Section */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to celebrate the rich culinary heritage of India, Mithas 365 began as a humble endeavor to bring authentic flavors and traditional recipes to food enthusiasts. Our name "Mithas," meaning sweetness in Hindi, reflects our commitment to adding sweetness to every meal and every moment.
                </p>
                <p>
                  What started as a small family kitchen has grown into a beloved destination for those seeking genuine Indian cuisine. We believe that food is not just sustenance, but a bridge that connects cultures, creates memories, and brings people together around the dining table.
                </p>
                <p>
                  Every dish we serve carries the essence of traditional cooking methods passed down through generations, combined with fresh, locally-sourced ingredients and a touch of modern presentation.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Traditional Indian cooking"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </motion.section>

        {/* Mission Section - From Original About */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with decorative elements - From Original About */}
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
            
            {/* Content - From Original About */}
            <div className="space-y-6">
              <div>
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
              
              {/* Statistics from Original About */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Mission & Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are driven by core values that shape every aspect of our culinary journey and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Authenticity</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                We preserve traditional recipes and cooking methods to deliver genuine flavors.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Quality</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                Every ingredient is carefully selected, and every dish is prepared with meticulous attention to detail.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Community</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                We believe in creating a welcoming space where food brings people together.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Tradition</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                We honor time-tested recipes while embracing innovation to create memorable experiences.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Chef's Philosophy */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Chef preparing food"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Chef's <span className="text-primary">Philosophy</span>
                </h2>
                <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  "Cooking is not just about feeding the body; it's about nourishing the soul. Each spice tells a story, every recipe carries tradition, and every meal is an opportunity to create joy."
                </blockquote>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our culinary team believes in the power of authentic ingredients and traditional techniques. We source our spices directly from their regions of origin, ensuring that every dish captures the true essence of Indian cuisine.
                  </p>
                  <p>
                    From the bustling streets of Mumbai to the royal kitchens of Rajasthan, our recipes are inspired by diverse regional flavors, bringing you a complete journey through India's culinary landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience the <span className="text-primary">Mithas 365</span> Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us on a culinary journey that celebrates tradition, embraces innovation, and creates unforgettable dining experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <Button size="lg" className="px-8 py-3">
                  View Our Menu
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Browse Gallery
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 