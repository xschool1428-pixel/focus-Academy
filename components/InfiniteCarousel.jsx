"use client";

import { motion } from "framer-motion";

export function InfiniteCarousel({ children, direction = "left", speed = 30, pauseOnHover = true }) {
  const slideDistance = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative w-full overflow-hidden py-4 flex" style={{ width: "100%" }}>
      {/* Container that has 2x children to loop seamlessly */}
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: slideDistance }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        <div className="flex gap-6">{children}</div>
        <div className="flex gap-6">{children}</div>
      </motion.div>
    </div>
  );
}
