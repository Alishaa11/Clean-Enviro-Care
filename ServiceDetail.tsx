import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import NotFound from "./not-found";

export default function ServiceDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const service = services.find(s => s.id === params.id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Home</span></Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Services</span></Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{service.title}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Content Column */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Service Overview</h2>
                <div className="prose prose-lg prose-blue max-w-none mb-12">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="bg-accent/50 rounded-3xl p-8 mb-12 border border-primary/10">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Key Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Our Process</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-border">
                        <p className="text-foreground font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28 space-y-6">
                <div className="bg-foreground text-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-heading font-bold mb-2">Need this service?</h3>
                  <p className="text-white/70 mb-8">Get a fast, competitive quote for your facility today.</p>
                  
                  <div className="space-y-4">
                    <a href="tel:0524192236" className="w-full block">
                      <Button size="xl" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 justify-start px-6">
                        <Phone className="w-5 h-5 mr-3" /> Call 052 419 2236
                      </Button>
                    </a>
                    
                    <a href="https://wa.me/971586160989" target="_blank" rel="noreferrer" className="w-full block">
                      <Button size="xl" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl h-14 justify-start px-6">
                        <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp Us
                      </Button>
                    </a>
                    
                    <Button size="xl" variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 rounded-xl h-14" onClick={() => setLocation('/contact')}>
                      Request via Email
                    </Button>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center">
                  <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h4 className="font-bold text-red-900 mb-2">Emergency Service</h4>
                  <p className="text-red-700 text-sm mb-4">We offer 24/7 emergency response for critical blockages and spills.</p>
                  <a href="tel:0524192236" className="font-bold text-red-600 hover:text-red-800 text-lg">
                    Dial Now
                  </a>
                </div>
                
                {/* Other Services Links */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                  <h4 className="font-heading font-bold text-lg mb-4">Other Services</h4>
                  <ul className="space-y-3">
                    {services.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.id}`}>
                          <span className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 cursor-pointer">
                            <ChevronRight className="w-4 h-4" /> {s.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <span className="text-primary hover:underline text-sm font-medium mt-4 block cursor-pointer">
                      View all &rarr;
                    </span>
                  </Link>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}