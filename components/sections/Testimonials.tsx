"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren, StaggerItem } from "../animations/StaggerChildren";
import { NeoCard } from "../ui/NeoCard";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Creative Director",
      text: "Daisy turned my chaotic Notion graveyard into actual working creative briefs.",
      bg: "bg-accent-green",
    },
    {
      name: "Marcus J.",
      role: "Freelance Designer",
      text: "It feels like having an intern who actually understands my unhinged 3AM thoughts.",
      bg: "bg-accent-pink",
    },
    {
      name: "Elena R.",
      role: "Content Creator",
      text: "The infinite canvas is a game changer. I've never been this organised.",
      bg: "bg-bg-white",
    },
    {
      name: "David T.",
      role: "Product Manager",
      text: "Finally, a tool that doesn't force me into a rigid folder structure.",
      bg: "bg-accent-yellow",
    },
    {
      name: "Aisha M.",
      role: "Writer",
      text: "It's the perfect mix of playful and powerful. Absolutely love it.",
      bg: "bg-accent-purple",
    },
    {
      name: "Tom H.",
      role: "Art Director",
      text: "The aesthetic alone makes me want to use it every day. Brilliant.",
      bg: "bg-accent-blue",
    },
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 border-t-2 border-border">
      <FadeInUp className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.15em] border border-black px-2 py-1 inline-block mb-6">
          / WHAT PEOPLE SAY
        </span>
      </FadeInUp>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
        {testimonials.map((t, i) => (
          <StaggerItem key={i}>
            <NeoCard bg={t.bg} hover className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-border/20">
                <div className="w-12 h-12 rounded-full border-2 border-border bg-white overflow-hidden flex items-center justify-center">
                  {/* Abstract Avatar Placeholder */}
                  <div className={`w-full h-full opacity-50 bg-gradient-to-tr from-transparent to-black/20`} />
                </div>
                <div>
                  <div className="font-bold font-grotesk">{t.name}</div>
                  <div className="text-sm opacity-70">{t.role}</div>
                </div>
              </div>
              <p className="font-sans font-medium text-lg leading-snug">&ldquo;{t.text}&rdquo;</p>
            </NeoCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
