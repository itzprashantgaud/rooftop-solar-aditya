
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Lightbulb, Home } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Premium Solar Panels",
    description: "High-efficiency monocrystalline solar panels with 25+ year warranty",
    image: "/solar-panel.jpg",
    features: ["22% Efficiency Rate", "Anti-reflective Coating", "Weather Resistant", "Low Light Performance"],
    icon: <Home className="w-10 h-10 text-solar-500" />
  },
  {
    id: 2,
    title: "Power Storage Solutions",
    description: "Store excess energy with our advanced battery systems for 24/7 power",
    image: "/solar-battery.jpg",
    features: ["10kWh Capacity", "Smart Management", "Backup Power", "Compact Design"],
    icon: <Battery className="w-10 h-10 text-solar-500" />
  },
  {
    id: 3,
    title: "Smart Inverters",
    description: "Intelligent inverters that optimize power conversion and system monitoring",
    image: "/solar-inverter.jpg",
    features: ["99% Efficiency", "Mobile Monitoring", "Grid Integration", "Overload Protection"],
    icon: <Lightbulb className="w-10 h-10 text-solar-500" />
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-sky-50" aria-labelledby="products-heading">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="products-heading" className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Solar Products</h2>
          <p className="text-lg text-gray-600">
            Cutting-edge solar technology designed for maximum efficiency, durability, and energy production for Indian homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="h-48 overflow-hidden relative bg-solar-100">
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          {product.icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-solar-600 transition-colors">
          {product.title}
        </CardTitle>
        <CardDescription className="text-gray-500">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {product.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-sun-500 mr-2" aria-hidden="true"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-solar-600 hover:bg-solar-700">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
