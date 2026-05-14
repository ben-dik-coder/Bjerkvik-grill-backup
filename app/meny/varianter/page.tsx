import type { Metadata } from "next";
import Link from "next/link";

import { MenyStilMiniPreview } from "@/components/meny/MenyStilMiniPreview";
import { MENY_VIS_TEMA_NAVN } from "@/lib/meny-vis-tema";
import { INTERNAL_PREVIEW_ROBOTS } from "@/lib/seo-internal";

export const metadata: Metadata = {
  title: "Velg meny-stil · Bjerkvik Grill",
  description: "Ti forskjellige utseender på menyen — velg den du liker best.",
  robots: INTERNAL_PREVIEW_ROBOTS,
};

export default function MenyVarianterOversiktPage() {
  return (
    <div className="min-h-screen bg-stone-950 px-4 py-10 text-stone-100 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-card text-xs uppercase tracking-[0.25em] text-amber-500/90">
          Forhåndsvisning
        </p>
        <h1 className="mt-2 text-center font-display text-3xl font-bold uppercase tracking-wide text-stone-50 sm:text-4xl">
          Velg hvordan menyen skal se ut
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center font-card text-sm leading-relaxed text-stone-400">
          Her er ti stiler. <strong className="text-stone-200">Stil 1</strong> er den mørke plakat-menyen som brukes på{" "}
          <Link href="/meny" className="text-amber-500 underline-offset-2 hover:underline">
            /meny
          </Link>{" "}
          nå. De andre er bare for å sammenligne.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-center font-card text-xs text-stone-500">
          Kortene under viser <strong className="text-stone-400">farger og ramme</strong> som fullskjerm — trykk for å se hele menyen.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {MENY_VIS_TEMA_NAVN.map((navn, i) => {
            const id = i + 1;
            return (
              <Link
                key={navn}
                href={`/meny/varianter/${id}`}
                className="group overflow-hidden rounded-2xl border border-stone-700 bg-stone-900/80 shadow-lg transition hover:border-amber-600/50 hover:shadow-xl"
              >
                <MenyStilMiniPreview variantId={id} />
                <div className="px-5 py-4">
                  <p className="font-mono text-xs text-amber-600/90">Stil {id}</p>
                  <p className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-stone-100 group-hover:text-amber-100">
                    {navn}
                  </p>
                  <p className="mt-2 font-card text-xs text-stone-500">
                    {id === 1 ? "Samme som /meny (live) →" : "Åpne full meny →"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-center font-card text-sm text-stone-500">
          <Link href="/meny" className="text-amber-500 underline-offset-4 hover:text-amber-400 hover:underline">
            Til vanlig meny
          </Link>
          {" · "}
          <Link href="/" className="text-amber-500 underline-offset-4 hover:text-amber-400 hover:underline">
            Til forsiden
          </Link>
        </p>
      </div>
    </div>
  );
}
