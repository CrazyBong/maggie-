"use client";

import { motion } from "framer-motion";

export function MarqueeStrip() {
  const items = [
    "CAPTURE IDEAS",
    "ORGANISE THOUGHTS",
    "ELEVATE CREATIVITY",
    "AI COLLABORATOR",
  ];

  return (
    <div className="overflow-hidden bg-[#0D0D0D] border-y-2 border-border py-3 select-none flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center w-max"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-accent-yellow font-grotesk font-bold uppercase text-lg mx-8">
              {item}
            </span>
            <span className="text-white text-xl">🌼</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
