import type { ReactNode } from "react";

import { FORSIDE_OG_MENY_PLAKAT_UTKANT_STIL } from "@/lib/plakat-bakgrunn";

/**
 * Samme ytre plakat-bakgrunn som `/meny`. Korn/noise i hero: `MenyGrainPanelOverlay` e.l.
 */
export function ForsidePlakatBakgrunnSkall({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative isolate min-h-screen min-h-dvh w-full overflow-x-clip text-[#f5f1eb]"
      style={FORSIDE_OG_MENY_PLAKAT_UTKANT_STIL}
    >
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
