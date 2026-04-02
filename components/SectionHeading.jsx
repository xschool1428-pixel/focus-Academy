"use client";

import { motion } from "framer-motion";

export function SectionHeading({ title, subtitle, icon: Icon, accent = "cyan" }) {
  const underlineColor = accent === "cyan" ? "bg-cyan" : "bg-violet";

  return (
    <div className="flex flex-col items-center text-center mb-16">
      {Icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-4 text-amber-400"
        >
          <Icon size={40} />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-syne font-bold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 mt-6 ${underlineColor} rounded-full`}
      />
    </div>
  );
}
