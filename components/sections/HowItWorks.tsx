"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren, StaggerItem } from "../animations/StaggerChildren";
import { NeoCard } from "../ui/NeoCard";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Capture",
      description: "your ideas",
    },
    {
      number: "2",
      title: "Organise",
      description: "with AI",
    },
    {
      number: "3",
      title: "Elevate",
      description: "and share",
    },
  ];

  return (
    <section className="py-24 bg-bg-cream max-w-[1200px] mx-auto px-6 border-t-2 border-border">
      <FadeInUp className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.15em] border border-black px-2 py-1 inline-block mb-6">
          / HOW IT WORKS
        </span>
      </FadeInUp>

      <StaggerChildren className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
        {steps.map((step, i) => (
          <StaggerItem key={i} className="w-full md:w-1/3 z-10">
            <NeoCard bg="bg-accent-yellow" className="p-8 text-center flex flex-col items-center">
              <span className="text-4xl font-black font-mono border-2 border-black bg-white w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-[2px_2px_0px_#0D0D0D]">
                {step.number}
              </span>
              <h3 className="font-grotesk font-bold text-2xl mb-2">{step.title}</h3>
              <p className="font-sans text-text-muted">{step.description}</p>
            </NeoCard>
          </StaggerItem>
        ))}
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-border -translate-y-1/2 z-0" />
      </StaggerChildren>
    </section>
  );
}
