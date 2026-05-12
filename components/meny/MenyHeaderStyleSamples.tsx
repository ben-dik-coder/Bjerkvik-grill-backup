import Link from "next/link";
import type { ReactNode } from "react";

function FakeBtn({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] ${
        primary
          ? "border border-accent/35 bg-raised text-foreground"
          : "border border-accent/25 bg-background text-foreground/80"
      }`}
    >
      {children}
    </span>
  );
}

export function MenyHeaderStyleSamples() {
  const samples: {
    id: number;
    title: string;
    blurb: string;
    preview: ReactNode;
  }[] = [
    {
      id: 1,
      title: "Stripe — dagens oppsett",
      blurb:
        "Navn + undertittel til venstre, knapper til høyre. Ryddig og kjent for brukerne.",
      preview: (
        <header className="border-b border-accent/15 bg-sunken">
          <div className="flex items-center justify-between gap-3 px-3 py-3">
            <div>
              <p className="font-serif text-[13px] font-semibold leading-none text-foreground">
                Bjerkvik Grill
              </p>
              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.22em] text-foreground/50">
                Komplett meny
              </p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <FakeBtn>15 stiler</FakeBtn>
              <FakeBtn primary>← Til forsiden</FakeBtn>
            </div>
          </div>
        </header>
      ),
    },
    {
      id: 2,
      title: "Sentrert blokk",
      blurb:
        "Mer «forside»-preg: merket midtstilt, knapper under på mobil eller samlet midt på bred skjerm.",
      preview: (
        <header className="border-b border-accent/15 bg-sunken">
          <div className="flex flex-col items-center gap-2 px-3 py-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="sm:text-left">
              <p className="font-serif text-[13px] font-semibold text-foreground">
                Bjerkvik Grill
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Komplett meny
              </p>
            </div>
            <div className="flex gap-1.5">
              <FakeBtn>15 stiler</FakeBtn>
              <FakeBtn primary>← Forsiden</FakeBtn>
            </div>
          </div>
        </header>
      ),
    },
    {
      id: 3,
      title: "Kompakt én linje",
      blurb:
        "Lite luft, alt på én horisontal linje — passer om du vil spare høyde og vise mer meny.",
      preview: (
        <header className="border-b border-accent/20 bg-background">
          <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-foreground">
              <span className="font-serif normal-case tracking-tight text-[11px] text-[#f5f0e8]">
                Bjerkvik Grill
              </span>
              <span className="mx-1.5 text-foreground/35">·</span>
              <span className="text-foreground/55">Meny</span>
            </p>
            <div className="flex gap-1">
              <FakeBtn>Stiler</FakeBtn>
              <FakeBtn primary>Hjem</FakeBtn>
            </div>
          </div>
        </header>
      ),
    },
    {
      id: 4,
      title: "Hero-stripe med accent",
      blurb:
        "Høyere topp, tynn accent-linje øverst, større tittel — mer «landing» over menyen.",
      preview: (
        <header className="border-b border-accent/25 bg-gradient-to-b from-accent/[0.08] to-sunken pt-1">
          <div className="h-0.5 bg-accent/40" aria-hidden />
          <div className="flex items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="font-serif text-[15px] font-semibold tracking-tight text-[#f5f0e8]">
                Bjerkvik Grill
              </p>
              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.28em] text-accent">
                Komplett meny
              </p>
            </div>
            <div className="flex gap-1.5">
              <FakeBtn>15 stiler</FakeBtn>
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-ink">
                ← Hjem
              </span>
            </div>
          </div>
        </header>
      ),
    },
    {
      id: 5,
      title: "Brodsmuler + handling",
      blurb:
        "«Hjem / Meny» gir kontekst; navnet kan være mindre. Bra om dere vil ligne på nettbutikk/navigasjon.",
      preview: (
        <header className="border-b border-accent/15 bg-sunken">
          <div className="px-3 py-3">
            <p className="text-[7px] font-medium uppercase tracking-[0.18em] text-foreground/45">
              Hjem <span className="text-foreground/25">/</span>{" "}
              <span className="text-foreground/70">Meny</span>
            </p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <p className="font-serif text-[12px] font-semibold text-foreground">
                Bjerkvik Grill
              </p>
              <div className="flex gap-1.5 pb-px">
                <FakeBtn>15 stiler</FakeBtn>
                <FakeBtn primary>Til forsiden</FakeBtn>
              </div>
            </div>
          </div>
        </header>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-accent/15 bg-sunken">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              5 header-stiler (meny-toppen)
            </p>
            <p className="mt-1 text-sm text-foreground/65">
              Stripe med «Bjerkvik Grill», undertittel og knapper — velg et nummer.
            </p>
          </div>
          <Link
            href="/meny"
            className="rounded-full border border-accent/35 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-accent/55"
          >
            ← Til menyen
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-7 sm:px-8 sm:py-10">
        <ol className="space-y-7">
          {samples.map(({ id, title, blurb, preview }) => (
            <li key={id}>
              <figure className="overflow-hidden rounded-2xl border border-accent/15 bg-raised shadow-card ring-1 ring-white/[0.05]">
                <figcaption className="border-b border-accent/15 px-4 py-3">
                  <p className="flex items-baseline gap-2">
                    <span className="font-serif text-xl font-semibold text-accent">
                      {id}
                    </span>
                    <span className="font-semibold">{title}</span>
                  </p>
                  <p className="mt-1 text-sm text-foreground/60">{blurb}</p>
                </figcaption>
                <div className="bg-black/20 p-4">
                  <div className="mx-auto max-w-xl overflow-hidden rounded-lg ring-1 ring-white/10">
                    {preview}
                  </div>
                </div>
              </figure>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-sm text-foreground/55">
          Skriv f.eks. «header-stil <strong className="text-foreground">4</strong>» så kan vi bytte den ekte
          meny-toppen.
        </p>
      </main>
    </div>
  );
}
