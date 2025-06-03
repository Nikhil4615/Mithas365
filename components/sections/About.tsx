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
                src="https://images.pexels.com/photos/3252055/pexels-photo-3252055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Traditional sweet making"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative patterns */}
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-primary rounded-2xl -z-0"></div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <p className="text-sm text-muted-foreground">Serving since</p>
              <p className="text-3xl font-bold text-primary">2005</p>
            </div>
          </div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                A Sweet Legacy of <span className="text-primary">Tradition</span> & Excellence
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Established in 2005, Mithas 365 began as a small family-owned sweet shop with recipes passed down through generations. Our commitment to authentic flavors and traditional methods quickly earned us a reputation for excellence.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Today, we've expanded to include a full-service restaurant and café, but our philosophy remains unchanged: to create memorable food experiences using the finest ingredients and time-honored techniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">50+</h4>
                <p className="text-sm text-muted-foreground">Sweet Varieties</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">100+</h4>
                <p className="text-sm text-muted-foreground">Menu Items</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                <h4 className="text-3xl font-bold text-primary mb-1">20K+</h4>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" variant="default">
                Our Philosophy
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}