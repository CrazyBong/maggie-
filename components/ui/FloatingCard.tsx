"use client";

import { motion } from "framer-motion";
import { FloatLoop } from "../animations/FloatLoop";
import { PromptChip } from "./PromptChip";

interface FloatingCardProps {
  rotation: number;
  delay?: number;
  promptChip?: string;
  className?: string;
  bgClass?: string;
  children: React.ReactNode;
}

export function FloatingCard({
  rotation,
  delay = 0,
  promptChip,
  className,
  bgClass = "bg-bg-dark",
  children,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      style={{ rotate: rotation }}
      className={`relative neo-card overflow-hidden ${className} ${bgClass}`}
      whileHover={{ scale: 1.03 }}
    >
      <FloatLoop delay={delay} duration={3 + Math.random() * 2}>
        {children}
      </FloatLoop>
      {promptChip && <PromptChip text={promptChip} className="-bottom-4 -right-4" />}
    </motion.div>
  );
}
