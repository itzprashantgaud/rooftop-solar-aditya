
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    quote: "Aditya Solar System transformed our energy consumption. Our electricity bills have dropped by 85%, and the installation team was incredibly professional and efficient.",
    image: "/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Bangalore",
    quote: "I was skeptical about solar power, but the team at Aditya made the process so seamless. The system has been performing beyond my expectations for over two years now.",
    image: "/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Anand Patel",
    location: "Delhi",
    quote: "The quality of solar panels and the expertise of the installation team were exceptional. Our home now runs almost entirely on solar power throughout the year.",
    image: "/testimonial3.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    location: "Chennai",
    quote: "From consultation to installation, the entire process was smooth and transparent. Aditya Solar System delivered exactly what they promised, and we couldn't be happier.",
    image: "/testimonial4.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-solar-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about their solar experience.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-solar-100 text-solar-600 hover:bg-solar-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-solar-100 text-solar-600 hover:bg-solar-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <Card className="h-full flex flex-col animate-fade-in">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? "fill-sun-500 text-sun-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 italic mb-6 flex-1">"{testimonial.quote}"</p>
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 rounded-full bg-solar-200 flex items-center justify-center text-solar-700 font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
