"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function About() {
  const features = [
    "Small Batches (Max 20 students)",
    "Weekly Tests & Performance Tracking",
    "Regular Parent-Teacher Meetings",
    "Highly Affordable Fees",
    "Specific preparation for Competitive Exams",
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-syne font-bold text-white mb-6"
            >
              Why <span className="text-cyan">Focus Academy?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              We believe that every student has the potential to excel given the right environment and guidance. At Focus Academy, we provide targeted education for ICSE, CBSE, and JAC boards from Class I to XII. Our commitment is to quality education over quantity.
            </motion.p>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle className="text-violet shrink-0" size={24} />
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet/20 blur-[50px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan/20 blur-[50px] rounded-full" />
            
            <h3 className="text-2xl font-syne font-bold text-white mb-6 relative z-10">Batch Timings & Details</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-[#0D0D0D] border border-violet/30 p-5 rounded-2xl flex items-center justify-between group hover:border-violet transition-colors">
                <div>
                  <h4 className="text-white font-bold mb-1">Morning Batches</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat</p>
                </div>
                <div className="text-cyan font-bold text-xl glow-border">5:00 AM - 8:00 AM</div>
              </div>
              
              <div className="bg-[#0D0D0D] border border-cyan/30 p-5 rounded-2xl flex items-center justify-between group hover:border-cyan transition-colors">
                <div>
                  <h4 className="text-white font-bold mb-1">Evening Batches</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat</p>
                </div>
                <div className="text-violet font-bold text-xl">3:00 PM - 8:00 PM</div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#333] flex justify-center gap-4">
                <span className="px-4 py-2 rounded-lg bg-gray-800 text-sm font-medium">CBSE</span>
                <span className="px-4 py-2 rounded-lg bg-gray-800 text-sm font-medium">ICSE</span>
                <span className="px-4 py-2 rounded-lg bg-gray-800 text-sm font-medium">JAC</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
