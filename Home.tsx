import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Droplets, ShowerHead, BrushCleaning, Funnel, Users, Shield, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

// Water bubble animation elements
const Bubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute bottom-0 rounded-full bg-primary/15 animate-bubble border border-primary/20"
        style={{
          width: `${Math.random() * 40 + 10}px`,
          height: `${Math.random() * 40 + 10}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 8 + 7}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

// Floating icons
const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <ShowerHead className="absolute top-[20%] right-[12%] w-14 h-14 text-primary animate-float" style={{ animationDelay: '0s' }} />
    <BrushCleaning className="absolute top-[55%] right-[28%] w-12 h-12 text-secondary animate-float" style={{ animationDelay: '1.5s' }} />
    <Funnel className="absolute top-[30%] left-[8%] w-10 h-10 text-secondary animate-float" style={{ animationDelay: '3s' }} />
    <Droplets className="absolute top-[65%] left-[18%] w-10 h-10 text-primary animate-float" style={{ animationDelay: '2s' }} />
    <ShowerHead className="absolute top-[15%] left-[42%] w-8 h-8 text-primary animate-float" style={{ animationDelay: '4s' }} />
    <BrushCleaning className="absolute bottom-[20%] right-[10%] w-9 h-9 text-secondary animate-float" style={{ animationDelay: '0.8s' }} />
  </div>
);

// Particles
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-primary/30 animate-particle"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-28 pb-20">
        <Bubbles />
        <FloatingIcons />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-foreground border border-primary/30 mb-6 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                UAE's Premier Industrial Cleaning
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-foreground">
                Precision Cleaning &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Drainage Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/65 mb-8 max-w-2xl leading-relaxed">
                Authoritative facility management for top property developers and municipalities. 
                We deliver ultra-modern, high-tech industrial cleaning with unmatched reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="xl" className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-lg px-8 h-14 shadow-[0_0_20px_rgba(157,196,26,0.35)] hover:shadow-[0_0_30px_rgba(157,196,26,0.55)] transition-all">
                    Explore Services <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:0524192236">
                  <Button size="xl" variant="outline" className="rounded-full font-medium text-lg px-8 h-14 border-secondary/40 text-secondary hover:bg-secondary/5">
                    <Phone className="w-5 h-5 mr-2" /> 24/7 Emergency
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave svg at bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,121.72,201.5,114.54,242.7,110.36,283.5,99.9,321.39,56.44Z" className="fill-muted"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background relative z-10 -mt-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">5k+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Done</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-heading font-bold text-destructive mb-2 flex justify-center items-center gap-2">
                  <Phone className="w-8 h-8" /> 24/7
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background relative">
        <Particles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Comprehensive Industrial Cleaning</h3>
            <p className="text-muted-foreground text-lg">
              We leverage advanced technology and highly trained professionals to tackle the most demanding cleaning and drainage challenges in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="h-full cursor-pointer overflow-hidden border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-white">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{service.shortDescription}</p>
                      <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:underline">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" className="rounded-full shadow-md bg-secondary hover:bg-secondary/90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Why Clean Enviro Care</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">The Trusted Choice for UAE's Infrastructure</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  We don't just clean; we manage, protect, and enhance your vital systems. Our commitment to excellence has made us the preferred partner for leading developers and municipalities.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Advanced Technology", desc: "State-of-the-art jetting and vacuum equipment", icon: Factory },
                    { title: "Certified Professionals", desc: "Highly trained teams adhering to strict safety standards", icon: Users },
                    { title: "Eco-Friendly Approach", desc: "Sustainable practices and approved waste disposal", icon: Shield }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img 
                  src="/images/drainage-system-cleaning.png" 
                  alt="Professional cleaning team" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white object-cover aspect-square"
                />
                
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xl text-foreground">Dubai Municipality</div>
                      <div className="text-sm text-muted-foreground">Approved Contractor</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <Bubbles />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Experience True Cleanliness?</h2>
            <p className="text-xl text-white/70 mb-10">
              Contact our experts today for a comprehensive assessment of your industrial cleaning and drainage needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="xl" className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-lg px-10 h-14 w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/971586160989" target="_blank" rel="noreferrer">
                <Button size="xl" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-medium text-lg px-10 h-14 w-full sm:w-auto border-none">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}