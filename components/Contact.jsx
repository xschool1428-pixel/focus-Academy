"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", class: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.phone || formData.phone.length < 10) err.phone = "Valid phone is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", class: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have questions? Ready to enroll? Reach out to us directly or visit our center."
          accent="violet"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Info & Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-[#141414] border border-[#222] rounded-3xl p-8">
              <h3 className="text-2xl font-syne font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-violet/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-violet" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Address</h4>
                    <p className="text-gray-400">Sugia Bazar Tand<br />Jharkhand, India</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone Number</h4>
                    <a href="tel:9934406625" className="text-cyan text-lg font-bold hover:underline">9934406625</a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Center Timings</h4>
                    <p className="text-gray-400">Morning: 5 AM - 8 AM<br />Evening: 3 PM - 8 PM<br />(Sun: Closed)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-3xl overflow-hidden bg-[#222] border border-[#333] relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
              {/* Google Maps Embed Placeholder - Actual iframe would go here */}
              <div className="absolute inset-0 bg-black/40 z-10 hidden" />
              <div className="text-center p-6 text-gray-400">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <p>Google Maps Location Embed</p>
                <p className="text-xs mt-2">Sugia Bazar Tand</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#111] border border-violet/20 rounded-3xl p-8 lg:p-10 shadow-[0_0_30px_rgba(124,58,237,0.05)] h-full flex flex-col">
              <h3 className="text-2xl font-syne font-bold text-white mb-2">Send us a message</h3>
              <p className="text-gray-400 mb-8 text-sm">We&apos;ll get back to you as soon as possible.</p>

              <div className="space-y-5 flex-1">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className={`w-full bg-[#1A1A1A] border ${errors.name ? 'border-red-500' : 'border-[#333] focus:border-violet'} rounded-xl px-4 py-4 text-white focus:outline-none transition-colors `}
                    value={formData.name}
                    onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: null}) }}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 ml-2">{errors.name}</span>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (10 digits)"
                    className={`w-full bg-[#1A1A1A] border ${errors.phone ? 'border-red-500' : 'border-[#333] focus:border-violet'} rounded-xl px-4 py-4 text-white focus:outline-none transition-colors `}
                    value={formData.phone}
                    onChange={(e) => { setFormData({...formData, phone: e.target.value}); setErrors({...errors, phone: null}) }}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</span>}
                </div>

                <div>
                  <select 
                    className="w-full bg-[#1A1A1A] border border-[#333] focus:border-violet rounded-xl px-4 py-4 text-white focus:outline-none transition-colors appearance-none"
                    value={formData.class}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                  >
                    <option value="" disabled className="text-gray-500">Select Class Interested In</option>
                    <option value="Class I-V">Class I - V</option>
                    <option value="Class VI-X">Class VI - X</option>
                    <option value="Class XI-XII">Class XI - XII</option>
                    <option value="Competitive">Competitive Exams</option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message (Optional)"
                    rows={4}
                    className="w-full bg-[#1A1A1A] border border-[#333] focus:border-violet rounded-xl px-4 py-4 text-white focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 mt-6 rounded-xl bg-violet text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
