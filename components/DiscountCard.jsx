"use client";

import { motion } from "framer-motion";
import { Clock, Gift, Users, Star } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export function DiscountCard({ discount }) {
  // Map icon string to component
  let IconComponent = Gift;
  if (discount.icon === "female") IconComponent = Star;
  if (discount.icon === "clock") IconComponent = Clock;
  if (discount.icon === "users") IconComponent = Users;

  const getBadgeColor = (color) => {
    switch(color) {
      case 'green': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'amber': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      case 'violet': return 'bg-violet/20 text-violet border-violet/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getPercentageColor = (color) => {
    switch(color) {
      case 'green': return 'text-cyan';
      case 'amber': return 'text-amber-400';
      case 'violet': return 'text-violet';
      default: return 'text-white';
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      className="bg-[#131313] rounded-2xl p-6 border-2 border-[#202020] hover:border-violet border-[rgba(124,58,237,0.3)] transition-colors relative overflow-hidden group glow-border"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet/10 rounded-full blur-2xl group-hover:bg-violet/20 transition-colors" />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl bg-opacity-10 bg-white`}>
          <IconComponent className="text-white" size={28} />
        </div>
        <div className={`px-3 py-1 text-xs font-bold rounded-full border flex items-center gap-2 ${getBadgeColor(discount.badgeColor)}`}>
          {discount.badgeColor === 'amber' && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
          {discount.badge}
        </div>
      </div>
      
      <div className={`text-4xl font-black mb-2 ${getPercentageColor(discount.badgeColor)}`}>
        {discount.percentage > 0 ? `${discount.percentage}% OFF` : 'FREE'}
      </div>
      
      <h3 className="text-xl font-syne font-bold text-white mb-2">{discount.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{discount.description}</p>
    </motion.div>
  );
}
