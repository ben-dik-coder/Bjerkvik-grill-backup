import Link from "next/link";
import type { Metadata } from "next";

import { MenyGrainPanelOverlay } from "@/components/meny/MenyGrainBackdrop";
import type { ForsideTypoLayoutPreset } from "@/lib/forside-typografi-layout-presets";
import { FORSIDE_TYPO_LAYOUT_PRESETS } from "@/lib/forside-typografi-layout-presets";
import { FORSIDE_PLAKAT_BAKGRUNN_STIL } from "@/lib/plakat-bakgrunn";

export const metadata: Metadata = {
  title: "15 typer & layout — forhåndsvisning",
  description: "Sammenlign fonter og layout med samme bakgrunn og korn som forsiden.",
  robots: "noindex, nofollow",
};

function VariantMiniHero({ preset }: { preset: ForsideTypoLayoutPreset }) {
  const p = preset;
  return (
    <div className={`relative z-[2] flex h-full flex-col ${p.shellClass}`}>
      <p className={p.tagClass}>Grill • Pizza • Kebab</p>
      <h2 className={p.titleClass}>Velkommen til Bjerkvik Grill</h2>
      <p className={p.bodyClass}>God mat og hyggelig stemning i hjertet av Bjerkvik.</p>
      <p className={p.ratingClass}>
        <span className="text-accent">★</span> <span className="font-semibold text-[#f5f0e8]">4,6</span>{" "}
        <span className="opacity-75">(266 på Google)</span>
      </p>
      <div className={p.linksRowClass}>
        <span className={p.linkClass}>Ring oss</span>
        <span className={p.linkClass}>Åpne kart</span>
      </div>
    </div>
  );
}

export default function ForsidePlakatVarianterPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pb-16 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 px-4 py-4 backdrop-blur-md md:px-8">
        <p className="text-sm font-semibold">15 eksempler · font og layout</p>
        <p className="mt-1 max-w-2xl text-xs text-white/65">
          Alle kort har <strong className="text-white/90">samme bakgrunn</strong> som forsiden nå (
          <span className="font-mono text-white/50">{String(FORSIDE_PLAKAT_BAKGRUNN_STIL.backgroundColor)}</span>) og{" "}
          <strong className="text-white/90">samme korn</strong> som{" "}
          <Link href="/meny" className="underline decoration-white/30 underline-offset-2 hover:text-accent">
            /meny
          </Link>
          . Bare typografi og oppbygging er forskjellig. Si hvilket <strong className="text-white/90">nummer</strong>{" "}
          du liker best.
        </p>
        <p className="mt-2 text-[11px] text-white/45">Fontene er de dere har i prosjektet: sans, serif, display og card.</p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:px-6">
        {FORSIDE_TYPO_LAYOUT_PRESETS.map((preset) => (
          <article key={preset.nr} className="flex flex-col gap-2">
            <div
              className="relative isolate aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              style={FORSIDE_PLAKAT_BAKGRUNN_STIL}
            >
              <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
                <MenyGrainPanelOverlay />
              </div>
              <VariantMiniHero preset={preset} />
            </div>
            <div className="px-0.5">
              <p className="text-xs font-bold text-white">
                {preset.nr}. {preset.navn}
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-white/55">{preset.beskrivelse}</p>
            </div>
          </article>
        ))}
      </div>

      <footer className="border-t border-white/10 px-4 py-8 text-center md:px-8">
        <Link href="/" className="text-sm text-accent underline-offset-4 hover:underline">
          ← Til forsiden
        </Link>
      </footer>
    </div>
  );
}
