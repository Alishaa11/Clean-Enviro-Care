import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, Target, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-20 pt-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">About Clean Enviro Care</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The UAE's most trusted partner for industrial cleaning and drainage management.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our Story</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Setting the Standard in Facility Management</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to revolutionize industrial cleaning in the UAE, Clean Enviro Care has grown into a commanding force in facility management. We recognized early on that property developers, municipalities, and industrial complexes needed more than just a cleaning service—they needed a reliable partner.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Today, we operate a vast fleet of specialized vehicles and employ hundreds of highly trained professionals. Our commitment to precision, safety, and environmental responsibility has earned us the trust of the region's most demanding clients.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-accent/50 p-6 rounded-2xl border border-primary/10">
                    <Target className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-heading font-bold text-xl mb-2">Our Mission</h4>
                    <p className="text-sm text-muted-foreground">To provide unparalleled environmental cleaning and drainage solutions that protect infrastructure and public health.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-secondary/10">
                    <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
                    <h4 className="font-heading font-bold text-xl mb-2">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">To be the unquestioned leader in industrial sanitation across the Middle East, driving innovation and sustainability.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/warehouse-deep-cleaning.png" alt="Warehouse cleaning" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
                  <img src="/images/waste-water-removal.png" alt="Tanker fleet" className="rounded-2xl shadow-lg object-cover h-64 w-full translate-y-8" />
                  <img src="/images/community-sewage-line.png" alt="Sewage line maintenance" className="rounded-2xl shadow-lg object-cover h-64 w-full col-span-2 mt-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why UAE Trusts Us */}
      <section className="py-24 bg-accent/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Why the UAE Trusts Us</h2>
            <p className="text-lg text-muted-foreground">
              When enterprise clients need assurance that critical infrastructure will be handled with absolute professionalism, they call Clean Enviro Care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Excellence",
                desc: "Fully compliant with Dubai Municipality and UAE federal environmental regulations. We hold all necessary permits for waste transport and disposal."
              },
              {
                icon: Users,
                title: "Expert Teams",
                desc: "Our technicians undergo rigorous training in confined space entry, hazard identification, and advanced machinery operation."
              },
              {
                icon: MapPin,
                title: "Nationwide Reach",
                desc: "With a strategically distributed fleet, we provide rapid response times across all Emirates, ensuring your operations never stop."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Partner with the Industry Leaders</h2>
          <Link href="/contact">
            <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full font-medium text-lg px-10 h-14">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}