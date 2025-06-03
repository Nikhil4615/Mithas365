"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "@/lib/motion";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/16103886/pexels-photo-16103886/free-photo-of-close-up-of-rasgulla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Traditional sweets",
    category: "Sweets",
  },
  {
    src: "https://images.pexels.com/photos/8472103/pexels-photo-8472103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Restaurant interior",
    category: "Ambiance",
  },
  {
    src: "https://images.pexels.com/photos/5560879/pexels-photo-5560879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Special thali",
    category: "Meals",
  },
  {
    src: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-indian-traditional-sweets-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Assorted sweets platter",
    category: "Sweets",
  },
  {
    src: "https://images.pexels.com/photos/13219666/pexels-photo-13219666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Making traditional sweets",
    category: "Process",
  },
  {
    src: "https://images.pexels.com/photos/6544987/pexels-photo-6544987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Chai and snacks",
    category: "Cafe",
  },
  {
    src: "https://images.pexels.com/photos/18852824/pexels-photo-18852824/free-photo-of-jalebi-an-indian-sweet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Freshly made jalebi",
    category: "Sweets",
  },
  {
    src: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Festive celebration",
    category: "Events",
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: number) => {
    const newIndex = (currentImage + direction + galleryImages.length) % galleryImages.length;
    setCurrentImage(newIndex);
  };

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            Visual Delight
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our Food <span className="text-primary">Gallery</span>
          </h3>
          <p className="text-muted-foreground">
            A glimpse into our world of exquisite treats, inviting ambiance, and 
            memorable culinary experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[80vh]"
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium">{galleryImages[currentImage].alt}</p>
              <p className="text-sm text-white/70">{galleryImages[currentImage].category}</p>
            </div>
          </div>
          
          <button
            onClick={() => navigateLightbox(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            aria-label="Previous image"
          >
            ←
          </button>
          
          <button
            onClick={() => navigateLightbox(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}