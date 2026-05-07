"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren, StaggerItem } from "../animations/StaggerChildren";
import { NeoCard } from "../ui/NeoCard";
import { FloatLoop } from "../animations/FloatLoop";

export function FeatureCards() {
  const features = [
    "Throw your thoughts onto an infinite canvas and watch them evolve",
    "Turn scattered ideas into coherent plans with your AI collaborator",
    "Save anything that sparks your creativity from across the web",
    "Experience the blissful feeling of a perfectly organised junk drawer",
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 border-t-2 border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <FadeInUp>
            <span className="font-mono text-xs uppercase tracking-[0.15em] border border-black px-2 py-1 inline-block mb-6">
              / FEATURES
            </span>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl mb-12">
              Transform chaos into creativity
            </h2>
          </FadeInUp>

          <StaggerChildren className="space-y-4">
            {features.map((text, i) => (
              <StaggerItem key={i}>
                <NeoCard hover className="p-5 font-mono text-sm leading-relaxed transition-colors hover:bg-accent-yellow">
                  {text}
                </NeoCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div className="relative h-[500px] bg-bg-white border-2 border-border shadow-xl overflow-hidden rounded">
          {/* Surreal Collage Mockup */}
          <div className="absolute inset-0 bg-[#E8A598]/20" />
          <FloatLoop duration={5.5} delay={0}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-accent-purple border-4 border-border rotate-3 flex items-center justify-center font-display text-4xl text-white">Mona Lisa</div>
          </FloatLoop>
          <FloatLoop duration={4} delay={1}>
            <div className="absolute top-10 right-10 w-24 h-24 bg-white border-2 border-border rounded-full flex items-center justify-center font-bold text-lg">Ghost</div>
          </FloatLoop>
          <FloatLoop duration={3} delay={0.5}>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-blue border-2 border-border rotate-[-12deg] flex items-center justify-center font-bold text-lg">Balloon</div>
          </FloatLoop>
        </div>
      </div>
    </section>
  );
}
