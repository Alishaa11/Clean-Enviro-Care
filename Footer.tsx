import React from "react";
import { Link } from "wouter";
import { Droplet, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl leading-none text-white tracking-tight">Clean Enviro Care</div>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Professional industrial cleaning and drainage services across the UAE. We deliver precision, reliability, and unparalleled facility management solutions.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">ig</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/"><span className="text-white/70 hover:text-primary transition-colors cursor-pointer text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Home</span></Link></li>
              <li><Link href="/about"><span className="text-white/70 hover:text-primary transition-colors cursor-pointer text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</span></Link></li>
              <li><Link href="/services"><span className="text-white/70 hover:text-primary transition-colors cursor-pointer text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" /> All Services</span></Link></li>
              <li><Link href="/contact"><span className="text-white/70 hover:text-primary transition-colors cursor-pointer text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary"></span> Core Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span className="text-white/70 hover:text-primary transition-colors cursor-pointer text-sm line-clamp-1 block">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services">
                  <span className="text-primary hover:text-white transition-colors cursor-pointer text-sm font-medium">
                    View All Services &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary"></span> Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates<br/>Serving all Emirates</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <a href="tel:0524192236" className="hover:text-primary transition-colors block">052 419 2236</a>
                  <a href="tel:0586160989" className="hover:text-primary transition-colors block">058 616 0989 (WhatsApp)</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:sales.cleanenvirocare@gmail.com" className="hover:text-primary transition-colors break-all">
                  sales.cleanenvirocare@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 Clean Enviro Care. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-white/50 text-sm">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}