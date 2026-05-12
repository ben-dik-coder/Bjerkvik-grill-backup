import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export const metadata: Metadata = {
  title: "Hurtigvalg — boks-stiler",
  robots: { index: false, follow: false },
};

type BoksStil = {
  name: string;
  blurb: string;
  link: (i: number) => string;
  overlay: string;
  chevron: string;
};

const BOKS_STILER: BoksStil[] = [
  {
    name: "A · Dagens",
    blurb: "rounded-2xl, ring, dyp skygge.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden px-4 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.38)] ring-1 ring-black/45 border border-accent/40 ${
        i % 2 === 0 ? "bg-[#5f5045]" : "bg-[#544539]"
      } rounded-2xl`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/62 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent drop-shadow-md",
  },
  {
    name: "B · Flat",
    blurb: "Tynn kant, nesten uten løft.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden rounded-xl border border-white/12 px-4 py-3 shadow-sm ${
        i % 2 === 0 ? "bg-[#55483e]" : "bg-[#4e4339]"
      }`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-xl bg-gradient-to-r from-black/48 to-transparent",
    chevron: "h-6 w-6 shrink-0 text-accent/90",
  },
  {
    name: "C · Glass",
    blurb: "Blur + lys kant.",
    link: () =>
      "relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border border-white/14 bg-white/[0.07] px-4 py-4 shadow-lg backdrop-blur-md",
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/40 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-white/90",
  },
  {
    name: "D · Skarp",
    blurb: "Små hjørner, tydelig kant.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden rounded-md border-2 border-accent/35 px-3 py-3 ${
        i % 2 === 0 ? "bg-[#4a3f37]" : "bg-[#42382f]"
      } shadow-md`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-md bg-gradient-to-r from-black/58 to-transparent",
    chevron: "h-6 w-6 shrink-0 text-accent",
  },
  {
    name: "E · Myk kapsel",
    blurb: "Store runde hjørner.",
    link: () =>
      "relative flex min-h-[92px] items-center overflow-hidden rounded-3xl border border-accent/28 bg-[#55483e] px-5 py-4 shadow-xl",
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-gradient-to-r from-black/52 to-transparent",
    chevron: "h-8 w-8 shrink-0 text-accent",
  },
  {
    name: "F · Gull-glød",
    blurb: "Halo rundt kortet.",
    link: () =>
      "relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border border-accent/45 bg-[#5a4b41] px-4 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.35),0_0_22px_rgba(184,137,61,0.22)] ring-1 ring-accent/25",
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/55 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-[#f0d9a8] drop-shadow-[0_0_6px_rgba(184,137,61,0.45)]",
  },
  {
    name: "G · Venstrestripe",
    blurb: "Gull-linje på venstre kant.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden rounded-r-2xl rounded-l-lg border border-accent/25 border-l-[5px] border-l-accent px-3 py-4 shadow-md ${
        i % 2 === 0 ? "bg-[#52453c]" : "bg-[#4a3f37]"
      }`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-r-2xl rounded-l-lg bg-gradient-to-r from-black/55 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent",
  },
  {
    name: "H · Stiplet",
    blurb: "Klassisk «utkast»-følelse.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border-2 border-dashed border-accent/45 px-4 py-4 ${
        i % 2 === 0 ? "bg-[#4e4239]/80" : "bg-[#463b33]/80"
      }`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/50 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent",
  },
  {
    name: "I · Innfelt",
    blurb: "Myk dyp skygge innover.",
    link: (i) =>
      `relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border border-black/30 px-4 py-4 shadow-[inset_0_2px_12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] ${
        i % 2 === 0 ? "bg-[#483d35]" : "bg-[#40362f]"
      }`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/48 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent",
  },
  {
    name: "J · Dobbel ring",
    blurb: "Ring + offset mot bakgrunn.",
    link: () =>
      "relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border-2 border-accent/50 bg-[#3a322c] px-4 py-4 shadow-lg ring-2 ring-accent/20 ring-offset-2 ring-offset-[#2a2420]",
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/50 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent",
  },
  {
    name: "K · Outline",
    blurb: "Svak fyll, tydelig ramme.",
    link: () =>
      "relative flex min-h-[88px] items-center overflow-hidden rounded-2xl border-2 border-accent/55 bg-transparent px-4 py-4",
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/42 to-transparent",
    chevron: "h-7 w-7 shrink-0 text-accent",
  },
  {
    name: "L · Hårfin",
    blurb: "Nesten bare linje + type.",
    link: (i) =>
      `relative flex min-h-[84px] items-center overflow-hidden rounded-lg border border-white/10 px-3 py-3 ${
        i % 2 === 0 ? "bg-[#453b33]" : "bg-[#3f3630]"
      }`,
    overlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-lg bg-gradient-to-r from-black/40 to-transparent",
    chevron: "h-6 w-6 shrink-0 text-white/70",
  },
];

export default function HurtigvalgBoksValgPage() {
  return (
    <div className="min-h-screen bg-[#1a1512] px-4 py-8 text-[#ece7df] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1900px]">
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Forhåndsvisning
            </p>
            <h1 className="font-serif mt-1 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
              Ulike «bokser» til hurtigvalg-kortene
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/55">
              Samme tre kategorier (Burgere, Kebab, Pizza), men ulik ramme, skygge og avrunding. Velg bokstav{" "}
              <strong className="text-white/80">A–L</strong> når du vil at vi skal bruke den på forsiden.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 rounded-full border border-accent/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent transition hover:bg-accent/10"
          >
            ← Til forsiden
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {BOKS_STILER.map((stil) => (
            <div key={stil.name} className="flex flex-col">
              <div className="mb-2 rounded-lg border border-white/10 bg-black/35 px-2.5 py-2">
                <p className="text-xs font-semibold text-[#f5f0e8]">{stil.name}</p>
                <p className="text-[10px] leading-snug text-white/45">{stil.blurb}</p>
              </div>
              <div className="space-y-2 rounded-xl bg-[#4a3c33] p-2 ring-1 ring-black/30">
                {LV_MENU.map((c, i) => (
                  <Link key={`${stil.name}-${c.key}`} href={c.menyHref} className={stil.link(i)}>
                    <LvMenuCoverImage
                      img={c.img}
                      sizes="280px"
                      className="object-cover object-center"
                    />
                    <div className={stil.overlay} aria-hidden />
                    <div className="relative z-10 flex w-full items-center justify-between gap-2 px-0.5">
                      <div className="min-w-0 max-w-[11rem]">
                        <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-accent">
                          Meny
                        </p>
                        <p className="font-serif mt-0.5 text-base font-semibold leading-tight text-[#f5f0e8]">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-snug text-[#ece7df]/90">{c.sub}</p>
                      </div>
                      <ChevronRight className={stil.chevron} aria-hidden />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
