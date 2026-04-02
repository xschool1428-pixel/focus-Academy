"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { DiscountCard } from "./DiscountCard";
import { Gift, Phone } from "lucide-react";
import discountsData from "../data/discounts.json";
import Link from "next/link";

export function Discounts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="discount" className="py-24 relative overflow-hidden flex flex-col items-center border-y border-violet/20">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Special Offers & Discounts" 
          subtitle="We believe quality education should be accessible to everyone."
          accent="violet"
          icon={Gift}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {discountsData.map(discount => (
            <DiscountCard key={discount.id} discount={discount} />
          ))}
        </motion.div>

        {/* Bottom CTA Strip */}
        <div className="max-w-4xl mx-auto bg-[#161616] border border-cyan/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-cyan/10 to-transparent right-0 group-hover:from-cyan/20 transition-all duration-500 pointer-events-none" />
          
          <div className="flex flex-col md:items-start text-center md:text-left z-10 w-full md:w-2/3">
            <h4 className="text-xl font-syne text-white font-bold mb-2">Have questions about discounts?</h4>
            <p className="text-gray-400 mb-4">Call us directly to check your eligibility</p>
            <a href="tel:9934406625" className="flex items-center justify-center md:justify-start gap-3 text-3xl font-black text-cyan hover:text-white transition-colors">
              <Phone className="text-cyan group-hover:animate-bounce" />
              9934406625
            </a>
          </div>

          <div className="w-full md:w-1/3 z-10 flex justify-center md:justify-end">
             <Link 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-violet text-white font-bold whitespace-nowrap hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all"
            >
              Enroll Now
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
