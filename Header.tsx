import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b" 
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-1.5 text-xs font-medium hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:sales.cleanenvirocare@gmail.com" className="hover:text-primary-foreground/80 transition-colors">
              sales.cleanenvirocare@gmail.com
            </a>
            <span className="opacity-50">|</span>
            <span>Serving across the UAE</span>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/971586160989" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
              <span>WhatsApp: 0586160989</span>
            </a>
            <a href="tel:0524192236" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
              <span>24/7 Emergency: 0524192236</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img
              src="/logo.png"
              alt="Clean Enviro Care"
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === '/' ? 'text-primary' : 'text-foreground/80'}`}>
                Home
              </span>
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link href="/services">
                <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1 ${location.startsWith('/services') ? 'text-primary' : 'text-foreground/80'}`}>
                  Services
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </span>
              </Link>
              
              {/* Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <span className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                           {/* Icon placeholder since we don't dynamically map lucide icons well here, just use a dot */}
                           <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 pt-2 border-t border-gray-100">
                    <Link href="/services">
                      <span className="text-sm text-primary font-medium hover:underline text-center block w-full cursor-pointer">
                        View All Services &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about">
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === '/about' ? 'text-primary' : 'text-foreground/80'}`}>
                About
              </span>
            </Link>
            
            <Link href="/contact">
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === '/contact' ? 'text-primary' : 'text-foreground/80'}`}>
                Contact
              </span>
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex">
            <a href="tel:0524192236">
              <Button size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all" data-testid="button-header-call">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4">
            <Link href="/">
              <span className="p-4 border-b text-foreground font-medium cursor-pointer block">Home</span>
            </Link>
            
            <div className="p-4 border-b">
              <Link href="/services">
                <span className="text-foreground font-medium cursor-pointer block mb-2">Services</span>
              </Link>
              <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-gray-100">
                {services.map((service) => (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <span className="text-sm text-foreground/70 py-1 block cursor-pointer">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link href="/about">
              <span className="p-4 border-b text-foreground font-medium cursor-pointer block">About</span>
            </Link>
            
            <Link href="/contact">
              <span className="p-4 text-foreground font-medium cursor-pointer block">Contact</span>
            </Link>
            
            <div className="p-4 mt-2">
              <a href="tel:0524192236" className="w-full">
                <Button className="w-full" size="lg">Call 052 419 2236</Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}