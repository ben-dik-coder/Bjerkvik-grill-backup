import { AboutSection } from "@/components/AboutSection";
import { BottomNav } from "@/components/BottomNav";
import { Hero } from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import { LocationSection } from "@/components/LocationSection";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-[calc(9.5rem+env(safe-area-inset-bottom))] lg:pb-[calc(10rem+env(safe-area-inset-bottom))]">
        <Hero />
        <div className="relative mx-auto max-w-7xl">
          <InstagramFeed />
          <LocationSection />
          <Reviews />
          <AboutSection />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
