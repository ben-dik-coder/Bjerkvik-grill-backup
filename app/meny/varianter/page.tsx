import type { Metadata } from "next";
import Link from "next/link";

import { MENY_VIS_TEMA_NAVN } from "@/lib/meny-vis-tema";

export const metadata: Metadata = {
  title: "Velg meny-stil · Bjerkvik Grill",
  description: "Ti forskjellige utseender på menyen — velg den du liker best.",
};

const previewStripe: Record<number, string> = {
  1: "from-amber-900 via-stone-800 to-amber-950",
  2: "from-white via-neutral-100 to-neutral-300",
  3: "from-slate-950 via-cyan-950 to-fuchsia-950",
  4: "from-[#e8e4dc] via-[#f7f4ed] to-neutral-300",
  5: "from-teal-200 via-rose-100 to-sky-200",
  6: "from-yellow-300 via-white to-neutral-900",
  7: "from-black via-amber-950 to-stone-900",
  8: "from-sky-100 via-violet-100 to-orange-100",
  9: "from-red-600 via-white to-blue-800",
  10: "from-[#c4ae8c] via-[#faf6ed] to-amber-900",
};

export default function MenyVarianterOversiktPage() {
  return (
    <div className="min-h-screen bg-stone-950 px-4 py-10 text-stone-100 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {MENY_VIS_TEMA_NAVN.map((navn, i) => {
            const id = i + 1;
            return (
              <Link
                key={navn}
                href={`/meny/varianter/${id}`}
                className="group overflow-hidden rounded-2xl border border-stone-700 bg-stone-900/80 shadow-lg transition hover:border-amber-600/50 hover:shadow-xl"
              >
                <div className={`h-3 bg-gradient-to-r ${previewStripe[id] ?? "from-stone-600 to-stone-800"}`} aria-hidden />
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
