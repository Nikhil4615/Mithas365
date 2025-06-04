import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import MenuPreview from "@/components/sections/MenuPreview";
import Testimonials from "@/components/sections/Testimonials";
import SpecialOffers from "@/components/sections/SpecialOffers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <MenuPreview />
      <SpecialOffers />
      <Testimonials />
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience <span className="text-primary">Mithas 365</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us for orders, catering, or any questions. We're here to make your culinary experience unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9111930000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@mithas365.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}