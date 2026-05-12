import type { CSSProperties, ReactNode } from "react";

import { MenyGrainPanelOverlay } from "@/components/meny/MenyGrainBackdrop";
import { FORSIDE_PLAKAT_BAKGRUNN_STIL } from "@/lib/plakat-bakgrunn";

/**
 * Barn som bruker `bg-background` (f.eks. Hero) får transparent bakgrunn så den samme
 * gradienten som på `/meny` synes. `raised` / `sunken` tones ned mot meny-paletten.
 */
const FORSIDE_SYNK_MED_MENY_VARIABLER = {
  "--background": "transparent",
  "--foreground": "#f2eee8",
  "--raised": "#2c2621",
  "--sunken": "#1c1815",
} as CSSProperties;

/**
 * Litt lysere plakat-bakgrunn enn `/meny`, samme korn/noise (`MenyGrainPanelOverlay`).
 */
export function ForsidePlakatBakgrunnSkall({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative isolate min-h-screen w-full text-[#f2eee8]"
      style={{ ...FORSIDE_PLAKAT_BAKGRUNN_STIL, ...FORSIDE_SYNK_MED_MENY_VARIABLER }}
    >
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <MenyGrainPanelOverlay />
      </div>
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
