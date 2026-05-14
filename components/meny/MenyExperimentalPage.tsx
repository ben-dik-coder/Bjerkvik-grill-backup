import { MenyPlakatReferanse } from "./MenyPlakatReferanse";

/** Eksperimentell meny: varm mørkere beige bakgrunn (`MenyPlakatReferanse` matcher). */
export function MenyExperimentalPageContent() {
  return (
    <div className="relative isolate flex min-h-screen min-h-dvh w-full flex-col overflow-x-hidden bg-[#d9d4cc] text-[#1c1917] antialiased">
      <div className="flex min-h-dvh flex-1 flex-col overflow-y-auto overscroll-y-contain">
        <MenyPlakatReferanse />
      </div>
    </div>
  );
}
