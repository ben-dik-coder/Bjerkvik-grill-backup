import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, Menu, Phone, Star } from "lucide-react";
import { Logo } from "@/components/Logo";
import { IMG, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hero-varianter (forhåndsvisning)",
  description: "Internt: sammenlign fem visuelle retninger før vi låser design.",
  robots: { index: false, follow: false },
};

type Variant = {
  id: number;
  title: string;
  blurb: string;
};

const VARIANTS: Variant[] = [
  {
    id: 1,
    title: "Luftig",
    blurb: "Outline «Se meny», mer padding — roligere, mindre «app-blokk».",
  },
  {
    id: 2,
    title: "Glass",
    blurb: "Frostet / glass-knapp over foto — moderne premium.",
  },
  {
    id: 3,
    title: "Editorial",
    blurb: "Magasin-følelse: tynn dekorlinje, mykere vekt, mindre knapp-støy.",
  },
  {
    id: 4,
    title: "Varm dual",
    blurb: "Varmere bakplate; Kart med hel strek (ikke stiplet).",
  },
  {
    id: 5,
    title: "Cinematic",
    blurb: "Mørkere overlay, liten sentrert meny-knapp — «filmplakat».",
  },
];

function MiniHeader() {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-accent/20 bg-background px-3 py-2.5">
      <Logo className="scale-[0.85] origin-left" />
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-sunken text-[#ece7df]"
        aria-hidden
      >
        <Menu className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    </div>
  );
}

export default function HeroValgPage() {
  return (
    <div className="min-h-screen bg-[#1a1512] px-4 py-8 text-[#ece7df] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Forhåndsvisning
            </p>
            <h1 className="font-serif mt-1 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
              Fem hero-valg
            </h1>
            <p className="mt-2 max-w-xl text-sm text-white/55">
              Åpne denne siden på mobil eller smal vindu. Velg nummer (1–5), si det i chat,
              så kan vi flytte vinneren inn i den ekte forsiden.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 rounded-full border border-accent/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent transition hover:bg-accent/10"
          >
            ← Til forsiden
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {VARIANTS.map((v) => (
            <article
              key={v.id}
              className="flex flex-col overflow-hidden rounded-2xl ring-1 ring-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            >
              <div className="border-b border-white/10 bg-black/40 px-3 py-2">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                  Valg {v.id}
                </p>
                <p className="text-sm font-semibold text-[#f5f0e8]">{v.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/50">{v.blurb}</p>
              </div>

              <div className="bg-background">
                <MiniHeader />

                {/* Felles «mobil»-bredde slice: hero + kort tekst */}
                <div
                  className={
                    v.id === 4
                      ? "bg-[#3a3028]"
                      : "bg-background"
                  }
                >
                  <div className="relative aspect-[4/3] w-full bg-black">
                    <Image
                      src={IMG.hero1}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="280px"
                      unoptimized
                    />
                    {/* Overlays + CTA per variant */}
                    {v.id === 1 ? (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-6 z-[1] flex justify-center px-4">
                          <span className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2 rounded-md border-2 border-accent bg-transparent px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent shadow-none">
                            <BookOpen className="h-3.5 w-3.5" aria-hidden />
                            Se meny
                          </span>
                        </div>
                      </>
                    ) : null}
                    {v.id === 2 ? (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-6 z-[1] flex justify-center px-4">
                          <span className="inline-flex min-h-[44px] w-full max-w-[240px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#faf6ef] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
                            <BookOpen className="h-3.5 w-3.5" aria-hidden />
                            Se meny
                          </span>
                        </div>
                      </>
                    ) : null}
                    {v.id === 3 ? (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-5 z-[1] flex flex-col items-center gap-2 px-4 text-center">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70">
                            Bjerkvik
                          </p>
                          <span className="inline-flex items-center gap-2 border-b border-accent/80 pb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
                            <BookOpen className="h-3 w-3" aria-hidden />
                            Se meny
                          </span>
                        </div>
                      </>
                    ) : null}
                    {v.id === 4 ? (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a221c]/90 via-transparent to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-6 z-[1] flex justify-center px-4">
                          <span className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2 rounded-md border border-[#c9a55c] bg-[#c9a55c]/95 px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a221c] shadow-lg">
                            <BookOpen className="h-3.5 w-3.5" aria-hidden />
                            Se meny
                          </span>
                        </div>
                      </>
                    ) : null}
                    {v.id === 5 ? (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70"
                          aria-hidden
                        />
                        <div className="absolute inset-x-0 bottom-8 z-[1] flex justify-center px-4">
                          <span className="inline-flex min-h-[36px] w-auto min-w-[7.5rem] items-center justify-center gap-1.5 rounded-sm border border-accent/80 bg-black/50 px-4 text-[9px] font-bold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
                            <BookOpen className="h-3 w-3" aria-hidden />
                            Meny
                          </span>
                        </div>
                        <p className="pointer-events-none absolute bottom-3 left-3 z-[1] max-w-[70%] text-[8px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/80">
                          Gode smaker
                          <span className="mt-0.5 block text-[10px] normal-case tracking-normal text-white/90">
                            I trivelige omgivelser
                          </span>
                        </p>
                      </>
                    ) : null}
                  </div>

                  <div
                    className={
                      v.id === 1
                        ? "space-y-3 px-5 py-8"
                        : v.id === 3
                          ? "space-y-3 px-6 py-7"
                          : "space-y-3 px-5 py-6"
                    }
                  >
                    <p
                      className={
                        v.id === 3
                          ? "text-[9px] uppercase tracking-[0.45em] text-accent/80"
                          : "text-[9px] uppercase tracking-[0.4em] text-accent/75"
                      }
                    >
                      Grill · Pizza · Kebab
                    </p>
                    <h2
                      className={
                        v.id === 3
                          ? "font-serif text-balance text-xl font-medium leading-snug tracking-tight text-[#f5f0e8]"
                          : "font-serif text-balance text-lg font-semibold leading-tight text-[#f5f0e8]"
                      }
                    >
                      Velkommen til Bjerkvik Grill
                    </h2>
                    <div
                      className={
                        v.id === 3
                          ? "h-px w-12 bg-accent/45"
                          : "h-px w-full max-w-[10rem] bg-accent/30"
                      }
                      aria-hidden
                    />
                    <p className="text-[11px] leading-relaxed text-[#d7cfc4]/88">
                      Kort smakebit av brødtekst — samme innhold, ulik rytme.
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <Star className="h-3 w-3 fill-accent text-accent" aria-hidden />
                      <span className="font-medium text-[#f5f0e8]">{SITE.rating}</span>
                      <span className="text-white/45">Google</span>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <span
                        className={
                          v.id === 3
                            ? "flex flex-1 items-center justify-center gap-1.5 rounded-full border border-accent/35 py-2.5 text-[9px] font-bold uppercase tracking-wider text-accent"
                            : "flex flex-1 items-center justify-center gap-1.5 rounded-md border border-accent bg-accent py-2.5 text-[9px] font-bold uppercase tracking-wider text-ink"
                        }
                      >
                        <Phone className="h-3 w-3" aria-hidden />
                        Ring
                      </span>
                      <span
                        className={
                          v.id === 4
                            ? "flex flex-1 items-center justify-center gap-1.5 rounded-md border border-solid border-accent/60 bg-transparent py-2.5 text-[9px] font-bold uppercase tracking-wider text-accent"
                            : "flex flex-1 items-center justify-center gap-1.5 rounded-md border border-dashed border-accent/45 bg-transparent py-2.5 text-[9px] font-bold uppercase tracking-wider text-[#d7cfc4]"
                        }
                      >
                        <MapPin className="h-3 w-3" aria-hidden />
                        Kart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
