import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface NeoButtonProps extends Omit<HTMLMotionProps<"button">, "size" | "children"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-grotesk font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-accent-green border-2 border-border shadow-[4px_4px_0px_#0D0D0D] hover:shadow-[2px_2px_0px_#0D0D0D] hover:translate-x-[2px] hover:translate-y-[2px] rounded-[4px]",
      outline: "bg-transparent border-2 border-border shadow-[4px_4px_0px_#0D0D0D] hover:shadow-[2px_2px_0px_#0D0D0D] hover:translate-x-[2px] hover:translate-y-[2px] rounded-[4px]",
      ghost: "hover:underline underline-offset-4 decoration-2 decoration-accent-pink",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(variant !== "ghost" ? { whileTap: { scale: 0.98 } } : {})}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);
NeoButton.displayName = "NeoButton";
