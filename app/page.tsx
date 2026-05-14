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

  const main = (
    <main className="pb-[calc(7.5rem+env(safe-area-inset-bottom,0px))] lg:pb-[calc(8rem+env(safe-area-inset-bottom,0px))]">
      <Hero synkMenyBakgrunn={plakatForside} />
      <div className="relative mx-auto max-w-7xl">
        <FacebookFeed />
        <Reviews />
        <AboutSection />
        <LocationSection />
      </div>
    </main>
  );

  /** `BottomNav` er `fixed` til viewport — må ligge utenfor plakat-/overflow-shell. Ytre div har IKKE `overflow-x-clip`. */
  if (!plakatForside) {
    return (
      <div className="relative min-h-dvh w-full">
        <div className="min-h-screen min-h-dvh w-full overflow-x-clip bg-background">{main}</div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh w-full">
      <ForsidePlakatBakgrunnSkall>{main}</ForsidePlakatBakgrunnSkall>
      <BottomNav />
    </div>
  );
}
