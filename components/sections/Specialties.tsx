import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, UtensilsCrossed, Coffee, Sparkles } from "lucide-react";

const specialties = [
  {
    title: "Signature Sweets",
    description: "Handcrafted delicacies made with pure ghee, finest nuts, and authentic flavors",
    icon: <Cake className="h-6 w-6 text-primary" />,
    image: "https://images.pexels.com/photos/4226892/pexels-photo-4226892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Traditional Indian sweets",
  },
  {
    title: "Restaurant Delights",
    description: "From North to South, experience the rich culinary diversity of authentic Indian cuisine",
    icon: <UtensilsCrossed className="h-6 w-6 text-primary" />,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Indian thali meal",
  },
  {
    title: "Café & Beverages",
    description: "Refreshing drinks, specialty teas, and barista-crafted coffees to complement your meal",
    icon: <Coffee className="h-6 w-6 text-primary" />,
    image: "https://images.pexels.com/photos/4916565/pexels-photo-4916565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Indian beverages and drinks",
  },
  {
    title: "Festive Specials",
    description: "Celebrate occasions with our special hampers and catering services",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    image: "https://images.pexels.com/photos/6646233/pexels-photo-6646233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Festive sweets and decorations",
  },
];

export default function Specialties() {
  return (
    <section id="sweets\" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our Culinary <span className="text-primary">Specialties</span>
          </h3>
          <p className="text-muted-foreground">
            From traditional sweets to savory delights, we take pride in creating 
            authentic flavors that transport you to the heart of India's diverse cuisine.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="group menu-card">
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={specialty.image}
                  alt={specialty.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  {specialty.icon}
                  <h4 className="text-xl font-bold">{specialty.title}</h4>
                </div>
                <p className="text-muted-foreground">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}