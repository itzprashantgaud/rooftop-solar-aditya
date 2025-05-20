
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-sun-500" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-solar-950' : 'text-white'}`}>
            Aditya Solar System
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
          {/* <Button className="bg-sun-500 hover:bg-sun-600 text-white">
            Get Free Quote
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-solar-950' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-solar-950' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container py-4 flex flex-col space-y-4">
            <NavLinks isMobile={true} isScrolled={true} />
            {/* <Button className="bg-sun-500 hover:bg-sun-600 text-white w-full">
              Get Free Quote
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isMobile = false, isScrolled = false }) => {
  const linkClasses = `font-medium hover:text-sun-500 transition-colors ${
    isMobile ? 'block py-2' : ''
  } ${isScrolled || isMobile ? 'text-solar-950' : 'text-white'}`;

  const links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Benefits", href: "#benefits" },
    { name: "Installation", href: "#installation" },
    // { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a key={link.name} href={link.href} className={linkClasses}>
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
