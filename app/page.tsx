import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import MenuPreview from "@/components/sections/MenuPreview";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SpecialOffers from "@/components/sections/SpecialOffers";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <MenuPreview />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}