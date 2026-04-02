"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle, Share2, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1a1a1a] pt-16 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="text-2xl font-syne font-bold mb-6">
              <span className="text-cyan">Focus</span> <span className="text-white">Academy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A commitment to academic excellence. Empowering students with the knowledge and confidence to conquer board and competitive exams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet transition-all"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500 transition-all"><Mail size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan transition-all"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500 transition-all"><Share2 size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-syne font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-cyan text-sm transition-colors">About Us</Link></li>
              <li><Link href="#teachers" className="text-gray-400 hover:text-cyan text-sm transition-colors">Our Teachers</Link></li>
              <li><Link href="#toppers" className="text-gray-400 hover:text-cyan text-sm transition-colors">Hall of Fame</Link></li>
              <li><Link href="#discount" className="text-gray-400 hover:text-cyan text-sm transition-colors">Special Offers</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-cyan text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-syne font-bold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              <li><Link href="#courses" className="text-gray-400 hover:text-violet text-sm transition-colors">Class I - V Foundation</Link></li>
              <li><Link href="#courses" className="text-gray-400 hover:text-violet text-sm transition-colors">Class VI - X Secondary</Link></li>
              <li><Link href="#courses" className="text-gray-400 hover:text-violet text-sm transition-colors">Class XI - XII Science</Link></li>
              <li><Link href="#courses" className="text-gray-400 hover:text-violet text-sm transition-colors">JEE / NEET Prep</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-white font-syne font-bold text-lg mb-6">Center Timings</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-[#222] pb-2">
                <span>Monday - Saturday:</span>
                <span className="text-cyan">5 AM - 8 AM</span>
              </li>
              <li className="flex justify-between border-b border-[#222] pb-2">
                <span>Monday - Saturday:</span>
                <span className="text-violet">3 PM - 8 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#222] pb-2">
                <span>Sunday:</span>
                <span className="text-gray-500">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1a1a1a] text-xs text-gray-500">
          <p>© 2026 Focus Academy. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-6 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10 backdrop-blur-sm transition-all shadow-lg hidden md:flex"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
