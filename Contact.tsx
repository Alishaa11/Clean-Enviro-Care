import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission since this is a static site
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Our team will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-foreground text-white py-20 pt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get in touch with our team for emergency services, quotes, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Get in Touch</h2>
                
                <div className="space-y-8">
                  {/* Phone & Emergency */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-muted-foreground text-sm mb-2">24/7 Emergency Support Available</p>
                      <a href="tel:0524192236" className="text-lg font-medium text-foreground hover:text-primary transition-colors block">
                        052 419 2236
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground text-sm mb-2">Direct messaging</p>
                      <a href="https://wa.me/971586160989" target="_blank" rel="noreferrer" className="text-lg font-medium text-foreground hover:text-[#25D366] transition-colors block">
                        058 616 0989
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm mb-2">For quotes and business inquiries</p>
                      <a href="mailto:sales.cleanenvirocare@gmail.com" className="text-lg font-medium text-foreground hover:text-secondary transition-colors block break-all">
                        sales.cleanenvirocare@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Dubai, United Arab Emirates<br />
                        Operating across all Emirates
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Operating Hours</h4>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Emergency Services:</span> 24/7<br />
                        <span className="font-medium text-foreground">Office Hours:</span> Mon - Sat, 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form & Map */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                
                <h3 className="text-2xl font-heading font-bold mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="h-12 bg-gray-50 border-transparent focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input id="company" placeholder="Acme LLC" className="h-12 bg-gray-50 border-transparent focus:bg-white" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-12 bg-gray-50 border-transparent focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required placeholder="+971 50 123 4567" className="h-12 bg-gray-50 border-transparent focus:bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select 
                      id="service" 
                      className="flex h-12 w-full items-center justify-between rounded-md border border-transparent bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white"
                      required
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="drain-block">Drain Block Removal</option>
                      <option value="tank-cleaning">Tank Cleaning (Sewage/Sump)</option>
                      <option value="kitchen-hood">Kitchen Hood Cleaning</option>
                      <option value="warehouse">Warehouse Deep Cleaning</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Please describe your requirements..." 
                      className="min-h-[150px] bg-gray-50 border-transparent focus:bg-white resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="xl" 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-medium h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                  </Button>
                </form>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 rounded-3xl overflow-hidden shadow-md h-[300px] bg-gray-200 relative"
              >
                {/* Static map representation */}
                <div className="absolute inset-0 bg-[#e5e3df]">
                  {/* Grid lines to simulate map */}
                  <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  {/* Fake map features */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#a3ccff] rounded-full blur-3xl opacity-40"></div>
                  <div className="absolute top-1/2 left-1/3 w-64 h-8 bg-white/60 -rotate-12 rounded-full"></div>
                  <div className="absolute top-1/3 left-1/2 w-48 h-8 bg-white/60 rotate-45 rounded-full"></div>
                  
                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-white p-2 rounded-lg shadow-lg mb-2 font-bold text-sm">Dubai, UAE</div>
                    <MapPin className="w-10 h-10 text-primary drop-shadow-md animate-bounce" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}