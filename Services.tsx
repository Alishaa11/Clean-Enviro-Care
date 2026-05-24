import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { Button } from "react-day-picker";

export default function Services() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-20 pt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive industrial cleaning and drainage solutions for the UAE's demanding infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="h-full cursor-pointer overflow-hidden border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-white flex flex-col">
                    <div className="relative h-56 overflow-hidden shrink-0">
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
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">{service.shortDescription}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-border">
                        <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:underline">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Need a custom cleaning solution?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
              Our experts can design a specialized maintenance program tailored to your facility's unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href="tel:0524192236">
                <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full font-medium text-lg px-8 h-14 w-full sm:w-auto">
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button size="xl" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border border-white/30 rounded-full font-medium text-lg px-8 h-14 w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}