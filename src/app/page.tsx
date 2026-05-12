import { ContentSection } from "@/components/landing/content-section";
import { HeroSection } from "@/components/landing/hero-section";
import { RevealObserver } from "@/components/landing/reveal-observer";

export default function Home() {
  return (
    <div className="min-h-full">
      <RevealObserver />
      <HeroSection />
      <ContentSection />
    </div>
  );
}
