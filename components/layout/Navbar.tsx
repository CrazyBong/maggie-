"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { NeoButton } from "../ui/NeoButton";
import { Menu } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[rgba(245,240,224,0.95)] backdrop-blur-md border-b-2 border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌼</span>
          <span className="font-grotesk font-bold text-xl tracking-tight">daisy</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NeoButton variant="outline" size="sm">
            Join the Waitlist &rarr;
          </NeoButton>
        </div>

        <div className="md:hidden">
          <button className="p-2 border-2 border-border rounded shadow-[2px_2px_0px_#0D0D0D] bg-bg-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0D0D0D] transition-all">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
