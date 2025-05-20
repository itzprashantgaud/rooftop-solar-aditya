
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        action: (
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        ),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our solar products or installation services? 
              Contact us today for a free consultation and personalized quote.
            </p>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<Phone />}
                title="Call Us"
                content="+91 9876543210"
              />
              <ContactInfo 
                icon={<Mail />}
                title="Email Us"
                content="info@adityasolar.com"
              />
              <ContactInfo 
                icon={<MapPin />}
                title="Visit Us"
                content="123 Solar Street, Green Park, New Delhi - 110016"
              />
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-solar-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in installing solar panels..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-solar-600 hover:bg-solar-700 text-white" 
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-solar-100 p-3 rounded-full text-solar-600 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Contact;
