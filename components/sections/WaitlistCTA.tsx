"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WaitlistSchema, WaitlistInput } from "@/packages/shared-types";
import { FadeInUp } from "../animations/FadeInUp";
import { FloatLoop } from "../animations/FloatLoop";

export function WaitlistCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(WaitlistSchema),
  });

  const onSubmit = async (data: WaitlistInput) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/v1/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
      {/* Decorative Stickers */}
      <div className="absolute top-20 left-[10%] hidden md:block">
        <FloatLoop delay={0.2} duration={5}>
          <div className="w-16 h-16 bg-accent-yellow rounded-full border-4 border-border flex items-center justify-center text-3xl shadow-[4px_4px_0px_#0D0D0D]">🌟</div>
        </FloatLoop>
      </div>
      <div className="absolute bottom-20 right-[15%] hidden md:block">
        <FloatLoop delay={0.7} duration={4}>
          <div className="w-20 h-20 bg-accent-pink rounded-full border-4 border-border flex items-center justify-center text-4xl shadow-[4px_4px_0px_#0D0D0D]">⚡</div>
        </FloatLoop>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <FadeInUp>
          <h2 className="font-display text-4xl md:text-6xl mb-12">
            Ready to glow up your ideas?
          </h2>

          {status === "success" ? (
            <div className="bg-accent-green text-bg-dark border-4 border-border p-6 font-grotesk font-bold text-2xl rounded shadow-[8px_8px_0px_#0D0D0D] animate-in fade-in zoom-in">
              🌼 You&apos;re on the list! We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row border-4 border-white shadow-[8px_8px_0px_white] rounded overflow-hidden transition-all focus-within:shadow-[4px_4px_0px_white] focus-within:translate-y-1 focus-within:translate-x-1">
                <input
                  {...register("email")}
                  className="flex-1 bg-transparent text-white px-6 py-4 md:border-r-4 border-white outline-none placeholder-white/50 font-sans text-lg"
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-accent-green text-bg-dark font-grotesk font-bold px-8 py-4 text-xl md:w-auto w-full hover:bg-accent-green/90 transition-colors disabled:opacity-70"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist \u2192"}
                </button>
              </div>
              {errors.email && (
                <span className="text-accent-pink text-left font-mono text-sm mt-2 block">
                  {errors.email.message}
                </span>
              )}
              {status === "error" && (
                <span className="text-accent-pink text-left font-mono text-sm mt-2 block">
                  Something went wrong. Please try again.
                </span>
              )}
            </form>
          )}

          <p className="mt-8 font-mono text-sm text-white/50 tracking-wide">
            ✦ No credit card &middot; Free beta access ✦
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
