"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet/40 to-cyan/40 rounded-full blur-[100px] -z-10"
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], rotate: [0, 90, 180] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-[10%] w-24 h-24 border border-cyan/30 rounded-lg -z-10"
      />
      
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, -90, -180] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-[10%] w-32 h-32 border-2 border-violet/20 rounded-full -z-10"
      />

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet/50 bg-violet/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-sm text-violet-200 font-medium tracking-wide text-violet">Opening 15 April 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-syne font-bold leading-tight mb-6"
        >
          <span className="text-white block">A Different Approach</span>
          <span className="text-cyan block mt-2 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            To Learning
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-inter"
        >
          Join Focus Academy — Small batches, expert teachers, proven results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] border border-transparent hover:border-cyan transition-all"
          >
            Enroll Now
          </Link>
          <Link
            href="#toppers"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-cyan text-cyan font-bold text-lg hover:bg-cyan/10 transition-colors"
          >
            View Toppers
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <Link href="#about">
            <ArrowDown size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
