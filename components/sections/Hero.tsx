"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren } from "../animations/StaggerChildren";
import { FloatingCard } from "../ui/FloatingCard";
import { NeoButton } from "../ui/NeoButton";
import { FloatLoop } from "../animations/FloatLoop";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #0D0D0D 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] mb-6">
            Give your ideas a glow up. Meet your new <mark className="bg-transparent border-b-4 border-accent-pink text-text-primary px-1">AI creative collaborator.</mark>
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Capture, organise, and elevate your ideas across work, life, and leisure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeoButton variant="primary" size="lg">Join the Waitlist &nearr;</NeoButton>
            <NeoButton variant="ghost" size="lg">See how it works</NeoButton>
          </div>
        </FadeInUp>

        <StaggerChildren staggerDelay={0.15} className="relative h-[400px] hidden md:block">
          <div className="absolute top-10 left-[10%] z-20">
            <FloatingCard rotation={-8} delay={0.1} promptChip="Help me promote our new neighbourhood book club" className="w-[280px] h-[360px]" bgClass="bg-[#2A4B3C]">
              {/* Placeholder for Book Club poster */}
              <div className="w-full h-full flex flex-col items-center justify-center text-white/50 p-6 text-center font-display text-2xl">Book Club</div>
            </FloatingCard>
          </div>
          
          <div className="absolute top-0 right-[20%] z-10">
            <FloatingCard rotation={5} delay={0.25} className="w-[300px] h-[400px]" bgClass="bg-accent-green">
              {/* Placeholder for Yoga flyer */}
              <div className="w-full h-full flex flex-col items-center justify-center text-black/50 p-6 text-center font-sans font-bold text-xl">Let it Flow</div>
            </FloatingCard>
          </div>

          <div className="absolute top-32 left-[40%] z-30">
            <FloatingCard rotation={-3} delay={0.4} promptChip="Create a blog post outline about dopamine decorating" className="w-[360px] h-[260px]" bgClass="bg-[#E8A598]">
              {/* Placeholder for Interior mood board */}
              <div className="w-full h-full flex items-center justify-center text-black/50 font-sans font-bold">Interior Mood Board</div>
            </FloatingCard>
          </div>

          <div className="absolute -top-10 right-[5%] z-40">
            <FloatLoop delay={0.6} duration={4.5}>
              <div className="w-[120px] h-[120px] rounded-full bg-accent-yellow border-4 border-border flex items-center justify-center font-bold text-center rotate-12 shadow-[4px_4px_0px_#0D0D0D]">
                Coming Soon
              </div>
            </FloatLoop>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
