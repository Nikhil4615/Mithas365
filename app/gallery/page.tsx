"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "@/lib/motion";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Traditional Dosa",
    category: "South Indian",
    title: "Crispy Dosa",
    description: "Golden crispy dosa served with coconut chutney"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Hakka Noodles",
    category: "Chinese",
    title: "Hakka Noodles",
    description: "Stir-fried noodles with fresh vegetables"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6461698/pexels-photo-6461698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Bhel Puri",
    category: "Chaat",
    title: "Mumbai Bhel Puri",
    description: "Street-style bhel puri with tangy chutneys"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/12419484/pexels-photo-12419484.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Gulab Jamun",
    category: "Sweets",
    title: "Gulab Jamun",
    description: "Soft milk dumplings in rose-flavored syrup"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Masala Tea",
    category: "Beverages",
    title: "Masala Chai",
    description: "Aromatic spiced tea with milk"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Samosa",
    category: "Snacks",
    title: "Golden Samosa",
    description: "Crispy triangular pastries with spiced filling"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/14676464/pexels-photo-14676464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Masala Dosa",
    category: "South Indian",
    title: "Masala Dosa",
    description: "Dosa stuffed with spiced potato curry"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Fried Rice",
    category: "Chinese",
    title: "Vegetable Fried Rice",
    description: "Wok-tossed rice with fresh vegetables"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/6461699/pexels-photo-6461699.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Pani Puri",
    category: "Chaat",
    title: "Pani Puri",
    description: "Crispy puris with spiced water and fillings"
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/13170918/pexels-photo-13170918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Jalebi",
    category: "Sweets",
    title: "Fresh Jalebi",
    description: "Spiral-shaped sweets soaked in sugar syrup"
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Cold Coffee",
    category: "Beverages",
    title: "Cold Coffee",
    description: "Chilled coffee with milk and ice cream"
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/4958644/pexels-photo-4958644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Dhokla",
    category: "Snacks",
    title: "Steamed Dhokla",
    description: "Soft and spongy steamed gram flour cakes"
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Idli",
    category: "South Indian",
    title: "Soft Idli",
    description: "Steamed rice cakes with coconut chutney"
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Manchurian",
    category: "Chinese",
    title: "Veg Manchurian",
    description: "Vegetable balls in spicy Indo-Chinese sauce"
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/15412230/pexels-photo-15412230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Kaju Katli",
    category: "Sweets",
    title: "Kaju Katli",
    description: "Diamond-shaped cashew fudge delicacy"
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Lime Water",
    category: "Beverages",
    title: "Fresh Lime Water",
    description: "Refreshing lime water with mint"
  },
  {
    id: 17,
    src: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Spring Rolls",
    category: "Snacks",
    title: "Crispy Spring Rolls",
    description: "Golden fried rolls with vegetable filling"
  },
  {
    id: 18,
    src: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    alt: "Pizza",
    category: "Italian",
    title: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella and basil"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

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
              Food <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual feast showcasing our delicious creations, authentic flavors, 
              and the artistry behind every dish we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-foreground">{selectedImage.title}</h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                  {selectedImage.category}
                </span>
              </div>
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
} 