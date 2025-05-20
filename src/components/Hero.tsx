
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero-background min-h-screen flex items-center" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Harness the Power of the Sun with Aditya Solar
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Premium rooftop solar solutions for homes and businesses across India. 
            Save money, reduce your carbon footprint, and take control of your energy production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-sun-500 hover:bg-sun-600 text-white text-lg px-8 py-6"
              aria-label="Request a free solar quotation"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              aria-label="Browse solar products"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="1000+" label="Installations" />
            <Stat value="25+" label="Years Experience" />
            <Stat value="35%" label="Average Savings" />
            <Stat value="100%" label="Customer Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <p className="text-sun-400 font-bold text-2xl md:text-3xl">{value}</p>
      <p className="text-white text-sm md:text-base">{label}</p>
    </div>
  );
};

export default Hero;
