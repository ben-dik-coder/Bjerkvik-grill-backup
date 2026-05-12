import { AboutSection } from "@/components/AboutSection";
import { BottomNav } from "@/components/BottomNav";
import { ForsidePlakatBakgrunnSkall } from "@/components/ForsidePlakatBakgrunnSkall";
import { Hero } from "@/components/Hero";
import { FacebookFeed } from "@/components/FacebookFeed";
import { LocationSection } from "@/components/LocationSection";
import { Reviews } from "@/components/Reviews";
import { forsidePlakatBakgrunnAktivert } from "@/lib/forside-plakat-bakgrunn-rollout";

export default function Home() {
  const plakatForside = forsidePlakatBakgrunnAktivert();

  const innhold = (
    <>
      <main className="pb-[calc(9.5rem+env(safe-area-inset-bottom))] lg:pb-[calc(10rem+env(safe-area-inset-bottom))]">
        <Hero synkMenyBakgrunn={plakatForside} />
        <div className="relative mx-auto max-w-7xl">
          <FacebookFeed />
          <Reviews />
          <AboutSection />
          <LocationSection />
        </div>
      </main>
      <BottomNav />
    </>
  );

  if (!plakatForside) {
    return <div className="min-h-screen bg-background">{innhold}</div>;
  }

  return <ForsidePlakatBakgrunnSkall>{innhold}</ForsidePlakatBakgrunnSkall>;
}
