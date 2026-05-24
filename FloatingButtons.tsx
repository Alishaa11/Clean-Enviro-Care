import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/971586160989" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
        data-testid="fab-whatsapp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      {/* Emergency Phone Button with Pulse */}
      <a 
        href="tel:0524192236"
        className="relative w-14 h-14 rounded-full bg-destructive text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Call Emergency Number"
        data-testid="fab-emergency"
      >
        <div className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none" />
        <PhoneCall className="w-6 h-6 animate-pulse" />
      </a>
    </div>
  );
}