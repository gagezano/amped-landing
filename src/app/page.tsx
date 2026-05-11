import { ContentSection } from "@/components/landing/content-section";
import { HeroSection } from "@/components/landing/hero-section";

export default function Home() {
  return (
    <div className="min-h-full">
      <HeroSection />
      <ContentSection />
    </div>
  );
}
