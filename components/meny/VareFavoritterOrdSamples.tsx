import Link from "next/link";
import type { ReactNode } from "react";

type Sample = { id: number; title: string; blurb: string; preview: ReactNode };

const PREVIEW_SHELL = "rounded-lg border border-white/[0.08] bg-[#1a1612] px-4 py-6 md:px-5 md:py-7";

export function VareFavoritterOrdSamples() {
  const samples: Sample[] = [
    {
      id: 1,
      title: "Klassisk serif (dagens)",
      blurb: "Som på forsiden nå: Cormorant, lys krem, rolig størrelse.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-serif text-xl font-semibold tracking-tight text-[#f5f0e8] md:text-2xl">Våre favoritter</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Display — gullgradient",
      blurb: "Oswald, store bokstaver, gull som gløder mot mørk bakgrunn.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-display bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-2xl font-bold uppercase leading-none tracking-wide text-transparent md:text-3xl">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tynn elegant italic",
      blurb: "Lett serif, mye luft — mer «restaurant fin». ",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-serif text-2xl font-light italic tracking-wide text-stone-200 md:text-3xl">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Black komprimert",
      blurb: "Oswald ekstra tett og tung — nesten plakat-typo.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-display text-3xl font-black uppercase leading-[0.92] tracking-tighter text-[#f2eee8] md:text-4xl">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Små caps mono",
      blurb: "Teknisk, «meny tavle»-følelse med monospace og bred sporing.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.42em] text-accent md:text-xs">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "To-linje hierarki",
      blurb: "Liten «Våre» over stor «favoritter» — tydelig blikkfang.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <div className="flex flex-col gap-0 leading-none" aria-label="Våre favoritter">
            <span className="font-card text-[10px] font-semibold uppercase tracking-[0.28em] text-accent/90">
              Våre
            </span>
            <span className="font-display text-3xl font-bold uppercase tracking-tight text-[#f5f0e8] md:text-4xl">
              favoritter
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Neon kiosk",
      blurb: "Glødende kant — passer hvis dere vil ha litt «gatekjøkken sci-fi».",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p
            className="font-sans text-2xl font-bold uppercase tracking-wide text-cyan-100 md:text-3xl"
            style={{
              textShadow:
                "0 0 12px rgba(34,211,238,0.45), 0 0 28px rgba(34,211,238,0.2), 0 2px 0 rgba(0,0,0,0.6)",
            }}
          >
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 8,
      title: "Tykk understrek",
      blurb: "Gullstripe under — enkel og trygg «premium bar».",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="inline-block border-b-[3px] border-accent pb-1 font-serif text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 9,
      title: "Innrammet plate",
      blurb: "Myk boks med kant — skiller seg tydelig fra ren tekst.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="inline-block rounded-lg border border-accent/35 bg-white/[0.04] px-4 py-2.5 font-serif text-xl font-semibold tracking-tight text-[#f5f0e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:text-2xl">
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 10,
      title: "Stempel / trykk",
      blurb: "Litt rotasjon og skygge — som stempel på papir.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p
            className="inline-block -rotate-1 font-display text-2xl font-bold uppercase tracking-tight text-amber-200/95 md:text-3xl"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.75), 3px 3px 0 rgba(90,62,40,0.35), 0 0 1px rgba(0,0,0,0.9)",
            }}
          >
            Våre favoritter
          </p>
        </div>
      ),
    },
    {
      id: 11,
      title: "Art deco linjer",
      blurb: "Smale streker på sidene — mer «1920-talls meny».",
      preview: (
        <div className={PREVIEW_SHELL}>
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/60" aria-hidden />
            <p className="shrink-0 font-serif text-sm font-semibold uppercase tracking-[0.35em] text-[#e8dfd4] md:text-base">
              Våre favoritter
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/60" aria-hidden />
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "Pill / merke",
      blurb: "Ser ut som et merke — bra hvis dere vil ha «kampanje»-følelse.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent px-5 py-2 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
            Våre favoritter
          </span>
        </div>
      ),
    },
    {
      id: 13,
      title: "Vertikal stripe + sans",
      blurb: "Gullstrek til venstre, Manrope — moderne og tydelig.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <div className="flex items-stretch gap-3">
            <span className="w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            <p className="font-sans text-xl font-bold uppercase leading-snug tracking-tight text-[#f5f0e8] md:text-2xl">
              Våre favoritter
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 14,
      title: "Utblandet «ghost»",
      blurb: "Diskret — god om kortene skal få mest oppmerksomhet.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p className="font-serif text-xl font-medium tracking-wide text-stone-500 md:text-2xl">Våre favoritter</p>
        </div>
      ),
    },
    {
      id: 15,
      title: "Retro skygge / trykk",
      blurb: "Flere skyggelag — «gammel trykksak» som på meny-plakaten.",
      preview: (
        <div className={PREVIEW_SHELL}>
          <p
            className="font-display text-2xl font-bold uppercase tracking-[0.06em] text-[#e4d9c8] md:text-3xl"
            style={{
              textShadow: `
                0 1px 0 rgba(255,255,255,0.05),
                0 3px 0 rgba(0,0,0,0.55),
                1px 1px 0 rgba(62,42,28,0.5),
                0 6px 14px rgba(0,0,0,0.45)
              `,
            }}
          >
            Våre favoritter
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-accent/15 bg-sunken">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              15 uttrykk for «Våre favoritter»
            </p>
            <p className="mt-1 max-w-xl text-sm text-foreground/65">
              Forskjellige fonter, vekter og effekter — velg nummer eller beskriv favoritten, så kan vi sette den inn
              på forsiden.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-full border border-accent/35 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-accent/55"
            >
              ← Forsiden
            </Link>
            <Link
              href="/meny"
              className="rounded-full border border-accent/35 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-accent/55"
            >
              Meny
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {samples.map(({ id, title, blurb, preview }) => (
            <li key={id}>
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-accent/15 bg-raised shadow-card ring-1 ring-white/[0.05]">
                <figcaption className="border-b border-accent/15 px-4 py-3">
                  <p className="flex items-baseline gap-2">
                    <span className="font-serif text-lg font-semibold text-accent">{id}</span>
                    <span className="font-semibold leading-snug">{title}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/60">{blurb}</p>
                </figcaption>
                <div className="flex flex-1 flex-col bg-black/25 p-3">{preview}</div>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-foreground/55">
          Si f.eks. «favoritt-overskrift <strong className="text-foreground">7</strong>» så bytter vi den ekte
          overskriften på forsiden.
        </p>
      </main>
    </div>
  );
}
