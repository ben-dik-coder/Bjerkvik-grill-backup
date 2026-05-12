import type { Metadata } from "next";
import Link from "next/link";
import { STIL_TEMPLATES } from "@/lib/stiler-templates";

export const metadata: Metadata = {
  title: "Velg stil — Bjerkvik Grill",
  description:
    "Tjue ulike uttrykk for samme sted: velg én vi kan bygge videre på.",
};

export default function StilerHubPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Forhåndsvisning
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Tjue helt ulike uttrykk for Bjerkvik Grill
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Åpne én og én side. Se om du liker teksten, fargene, layouten og
          knappene. Når du har valgt favoritten, sier du bare hvilket nummer —
          så bygger vi videre derfra.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STIL_TEMPLATES.map((s) => (
            <Link
              key={s.id}
              href={`/stiler/${s.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-400/50 hover:bg-white/[0.07]"
            >
              <span className="text-xs font-bold text-orange-400">
                Stil {s.id}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-orange-200">
                {s.navn}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {s.vibe}
              </p>
              <span className="mt-4 inline-flex text-xs font-semibold text-white/80">
                Åpne forhåndsvisning →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-zinc-500">
          <Link href="/" className="text-orange-400 underline-offset-4 hover:underline">
            Tilbake til vanlig forsiden
          </Link>
        </p>
      </div>
    </div>
  );
}
