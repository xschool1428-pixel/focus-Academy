"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TeacherCard({ teacher }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="shrink-0 w-72 h-96 bg-[#161616] border border-violet/30 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-lg hover:border-violet/80 transition-colors"
    >
      <div className="relative w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-r from-violet to-cyan glow-border">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-xl font-syne font-bold text-white mb-2">{teacher.name}</h3>
      <span className="px-3 py-1 bg-cyan/20 text-cyan text-sm rounded-full mb-4">
        {teacher.subject}
      </span>
      <p className="text-gray-400 text-sm mb-6 flex-1">{teacher.bio}</p>
      
      <button className="w-full py-2 rounded-lg border border-violet text-violet hover:bg-violet hover:text-white transition-all shadow-[0_0_10px_rgba(124,58,237,0)] hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
        View Profile
      </button>
    </motion.div>
  );
}
