import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarqueeStrip />
      <FeatureCards />
      <ProductPreview />
      <HowItWorks />
      <Testimonials />
      <WaitlistCTA />
    </main>
  );
}
