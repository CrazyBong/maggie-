"use client";

import { motion } from "framer-motion";

interface FloatLoopProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  amplitude?: number;
}

export function FloatLoop({
  children,
  delay = 0,
  duration = 4,
  amplitude = 10,
}: FloatLoopProps) {
  return (
    <motion.div
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
