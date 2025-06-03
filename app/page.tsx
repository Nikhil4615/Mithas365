import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import MenuPreview from "@/components/sections/MenuPreview";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SpecialOffers from "@/components/sections/SpecialOffers";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <MenuPreview />
      <SpecialOffers />
      <Testimonials />
      <Contact />
    </>
  );
}