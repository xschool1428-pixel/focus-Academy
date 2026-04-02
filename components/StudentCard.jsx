"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function StudentCard({ student }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="shrink-0 w-80 h-40 bg-[#161616] border-l-4 border-violet rounded-xl p-5 flex items-center gap-4 transition-all"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 shrink-0">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col flex-1 h-full justify-center">
        <div className="flex text-amber-400 mb-1">
          {[...Array(student.rating)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-300 italic text-sm line-clamp-2 mb-2">&quot;{student.quote}&quot;</p>
        <div className="mt-auto">
          <h4 className="text-white font-syne font-bold text-sm">{student.name}</h4>
          <span className="text-cyan text-xs">{student.class}</span>
        </div>
      </div>
    </motion.div>
  );
}
