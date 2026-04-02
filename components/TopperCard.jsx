"use client";

import { motion } from "framer-motion";

export function TopperCard({ topper }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="shrink-0 w-64 h-80 bg-[#1A1A1A] rounded-2xl flex flex-col items-center p-6 text-center relative overflow-hidden group hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] shimmer-bg"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
      
      <div className="relative w-24 h-24 mt-4 mb-3 rounded-full border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] overflow-hidden bg-black">
        <img
          src={topper.avatar}
          alt={topper.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <span className="bg-amber-500/20 text-amber-500 text-xs font-bold px-3 py-1 rounded-full mb-2">
        {topper.rank}
      </span>
      
      <h3 className="font-syne font-bold text-lg text-white">{topper.name}</h3>
      <div className="text-4xl font-black text-cyan my-2">{topper.score}</div>
      <p className="text-gray-400 text-sm">{topper.class} | {topper.board}</p>
      <p className="text-gray-500 text-xs mt-1">Batch of {topper.year}</p>
    </motion.div>
  );
}
