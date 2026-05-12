import { MENY_PLAKAT_BAKGRUNN_STIL } from "@/lib/plakat-bakgrunn";

import { MenyPlakatReferanse } from "./MenyPlakatReferanse";

/**
 * Eksperimentell meny: mørk bakgrunn; korn ligger på plakatflaten (MenyGrainPanelOverlay i MenyPlakatReferanse).
 */
export function MenyExperimentalPageContent() {
  return (
    <div className="relative isolate min-h-screen w-full text-[#f2eee8]" style={MENY_PLAKAT_BAKGRUNN_STIL}>
      <MenyPlakatReferanse />
    </div>
  );
}
