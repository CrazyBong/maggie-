"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../animations/FadeInUp";

export function ProductPreview() {
  return (
    <section className="bg-bg-dark text-white pt-24 pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeInUp className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight">
            Turn midnight musings into morning action plans
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <FadeInUp>
              <h3 className="font-grotesk font-bold text-4xl md:text-5xl leading-tight mb-6">
                Wide open spaces
              </h3>
              <p className="font-sans text-white/70 text-lg leading-relaxed">
                Your ideas need room to breathe. The infinite canvas lets you arrange text, images, and AI outputs exactly how you see them in your head.
              </p>
            </FadeInUp>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] bg-[#222222] border-2 border-border shadow-[8px_8px_0px_var(--accent-green)] rounded overflow-hidden"
            >
              {/* Product Screenshot Placeholder */}
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-48 border-r-2 border-[#333] p-4 flex flex-col gap-4">
                  <div className="w-full h-8 bg-[#333] rounded" />
                  <div className="w-3/4 h-4 bg-[#333] rounded" />
                  <div className="w-2/3 h-4 bg-[#333] rounded" />
                </div>
                {/* Canvas */}
                <div className="flex-1 p-8 relative">
                  <div className="absolute top-10 left-10 w-48 h-32 bg-white/10 rounded border border-white/20 p-3" />
                  <div className="absolute top-20 left-64 w-64 h-40 bg-white/10 rounded border border-white/20 p-3" />
                  <div className="absolute top-48 left-32 w-56 h-48 bg-white/10 rounded border border-white/20 p-3" />
                </div>
                {/* AI Panel */}
                <div className="w-64 border-l-2 border-[#333] p-4 flex flex-col justify-end gap-4">
                  <div className="w-5/6 h-12 bg-accent-green/20 border-2 border-accent-green rounded self-end" />
                  <div className="w-full h-12 bg-[#333] rounded" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
