
import { Sun, Instagram, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-solar-950 text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-sun-500" />
              <span className="text-xl font-bold text-white">
                Aditya Solar System
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Leading provider of high-quality solar solutions for residential and commercial properties across India.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Home" />
              <FooterLink href="#products" text="Solar Products" />
              <FooterLink href="#benefits" text="Benefits" />
              <FooterLink href="#installation" text="Installation Process" />
              <FooterLink href="#testimonials" text="Testimonials" />
              <FooterLink href="#contact" text="Contact Us" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Residential Solar" />
              <FooterLink href="#" text="Commercial Solar" />
              <FooterLink href="#" text="Solar Maintenance" />
              <FooterLink href="#" text="Energy Consultation" />
              <FooterLink href="#" text="Solar Financing" />
              <FooterLink href="#" text="System Monitoring" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="rounded-r-none bg-solar-900 border-solar-800 text-white"
              />
              <Button className="rounded-l-none bg-sun-500 hover:bg-sun-600">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-solar-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aditya Solar System. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a href={href} className="text-gray-300 hover:text-sun-500 transition-colors">
      {text}
    </a>
  </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="bg-solar-800 hover:bg-sun-500 transition-colors p-2 rounded-full"
  >
    {icon}
  </a>
);

export default Footer;
