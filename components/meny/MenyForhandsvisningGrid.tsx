import Link from "next/link";
import type { ReactNode } from "react";

function Cat({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">
      {children}
    </p>
  );
}

function RowA({
  name,
  desc,
  price,
  subtle,
}: {
  name: string;
  desc: string;
  price: string;
  subtle?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-2 ${subtle ? "opacity-90" : ""}`}
    >
      <div className="min-w-0">
        <p className="font-bold uppercase leading-tight">{name}</p>
        <p className="mt-0.5 max-w-[85%] text-[10px] leading-snug opacity-70">
          {desc}
        </p>
      </div>
      <span className="shrink-0 font-bold tabular-nums">{price}</span>
    </div>
  );
}

type Sample = {
  id: number;
  title: string;
  blurb: string;
  preview: ReactNode;
};

export function MenyForhandsvisningGrid() {
  const samples: Sample[] = [
    {
      id: 1,
      title: "Rustikk accordion (nær dagens)",
      blurb:
        "Mørke felt, prikkede linjer, sticky hurtigvalg-stripe — mest som meny-siden nå.",
      preview: (
        <div className="rounded-xl border border-accent/20 bg-raised p-3 text-[11px] text-foreground shadow-card ring-1 ring-white/[0.06]">
          <Cat>Pizza</Cat>
          <div className="space-y-3 border-t border-dotted border-white/15 pt-2">
            <RowA name="Margherita" desc="Tomat, mozzarella, basilikum." price="170 kr" />
            <div className="border-t border-dotted border-white/12 pt-3">
              <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Papirkort på mørk bord",
      blurb:
        "Lys «papir»-flate mot mørk bakgrunn — god kontrast, kiosk-/menykort-følelse.",
      preview: (
        <div className="rounded-xl bg-[#f5f0e8] p-3 text-[11px] text-[#2a231d] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-black/15">
          <Cat>Pizza</Cat>
          <div className="space-y-3 border-b border-[#2a231d]/10 pb-2">
            <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
          </div>
          <div className="pt-3">
            <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tabell / meny-grid",
      blurb:
        "Navn og pris i faste kolonner — oversiktlig på mobil og desktop.",
      preview: (
        <div className="rounded-xl border border-accent/25 bg-sunken p-3 font-sans text-[11px] text-foreground">
          <Cat>Pizza</Cat>
          <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-2 border-t border-accent/15 pt-2">
            <span className="font-semibold uppercase">Margherita</span>
            <span className="text-right font-bold tabular-nums text-accent">170</span>
            <span className="col-span-2 text-[10px] opacity-65">Tomat · mozzarella</span>
            <span className="border-t border-accent/10 pt-2 font-semibold uppercase">
              Pepperoni
            </span>
            <span className="border-t border-accent/10 pt-2 text-right font-bold tabular-nums text-accent">
              189
            </span>
          </div>
          <p className="mt-1 text-right text-[9px] opacity-50">priser i kr</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Magasin — store tall",
      blurb:
        "Prisen er hovedfokus; beskrivelse diskret under — bra for hurtig skanning.",
      preview: (
        <div className="rounded-xl bg-raised p-3 text-foreground ring-1 ring-accent/15">
          <Cat>Pizza</Cat>
          <div className="flex items-start justify-between gap-3 border-t border-accent/20 pt-2">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase">Margherita</p>
              <p className="mt-1 text-[10px] opacity-65">Tomat, mozzarella</p>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl font-semibold tabular-nums leading-none text-accent">
                170
              </p>
              <p className="text-[9px] font-bold uppercase opacity-50">kr</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-dotted border-white/12 pt-4">
            <p className="text-[11px] font-bold uppercase">Pepperoni</p>
            <p className="font-serif text-2xl font-semibold tabular-nums text-accent">
              189
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Kort per rett",
      blurb:
        "Hver rett i eget felt — tydelig på mobil, litt «app»-preg.",
      preview: (
        <div className="space-y-2 text-[11px] text-foreground">
          <Cat>Pizza</Cat>
          <div className="rounded-lg border border-accent/15 bg-sunken p-2.5 shadow-card">
            <div className="flex justify-between gap-2">
              <span className="font-bold uppercase">Margherita</span>
              <span className="font-bold tabular-nums text-accent">170 kr</span>
            </div>
            <p className="mt-1 text-[10px] opacity-65">Tomat, mozzarella</p>
          </div>
          <div className="rounded-lg border border-accent/15 bg-sunken p-2.5 shadow-card">
            <div className="flex justify-between gap-2">
              <span className="font-bold uppercase">Pepperoni</span>
              <span className="font-bold tabular-nums text-accent">189 kr</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Minimal stripe",
      blurb:
        "Bare linjer og luft — mest tekst, lite ramme; hurtig å produsere.",
      preview: (
        <div className="border-l-2 border-accent px-3 py-1 text-[11px] text-foreground">
          <Cat>Pizza</Cat>
          <div className="space-y-4 py-2">
            <div className="border-b border-white/10 pb-3">
              <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
            </div>
            <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Glass-panel",
      blurb:
        "Svakt gjennomsiktig felt med blur — moderne, «premium»-følelse.",
      preview: (
        <div className="rounded-xl border border-white/15 bg-white/[0.06] p-3 text-[11px] text-foreground shadow-inner backdrop-blur-md">
          <Cat>Pizza</Cat>
          <div className="space-y-3 border-t border-white/10 pt-2">
            <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
            <div className="border-t border-white/10 pt-3">
              <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "«Tavle» / chalkboard",
      blurb:
        "Mørkegrønn/svart bakgrunn, lys tekst — casual grill-stemning.",
      preview: (
        <div className="rounded-xl bg-[#152018] p-3 font-sans text-[11px] text-[#e8f0e8] shadow-inner ring-1 ring-white/10">
          <Cat>Pizza</Cat>
          <div className="space-y-3 border-t border-white/10 pt-2">
            <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
            <div className="border-t border-dashed border-white/15 pt-3">
              <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Luksus — dobbel ramme",
      blurb:
        "Tykk accent-kant og luftig padding — «fine dining»-aktig meny.",
      preview: (
        <div className="rounded-xl border-2 border-accent/50 bg-raised p-4 text-[11px] text-foreground shadow-card ring-1 ring-inset ring-white/[0.08]">
          <Cat>Pizza</Cat>
          <div className="mx-1 space-y-4 border-y border-accent/20 py-3">
            <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
            <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" subtle />
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Avis / to kolonner",
      blurb:
        "Tett tekst i to kolonner på desktop — mye innhold på liten høyde.",
      preview: (
        <div className="rounded-xl bg-[#ebe6dc] p-3 text-[9px] leading-snug text-[#1c1917]">
          <p className="mb-2 text-center text-[8px] font-bold uppercase tracking-[0.25em]">
            Pizza
          </p>
          <div className="columns-2 gap-4 border-t border-black/10 pt-2">
            <p className="mb-2 break-inside-avoid">
              <span className="font-bold uppercase">Margherita</span> — tomat,
              mozzarella. <span className="whitespace-nowrap font-bold">170 kr</span>
            </p>
            <p className="break-inside-avoid">
              <span className="font-bold uppercase">Pepperoni</span> — tomat,
              ost. <span className="whitespace-nowrap font-bold">189 kr</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "Pris-pille",
      blurb:
        "Pris i avrundet badge — ekstra synlig uten å dominere hele bredden.",
      preview: (
        <div className="rounded-xl border border-accent/15 bg-sunken p-3 text-[11px] text-foreground">
          <Cat>Pizza</Cat>
          <div className="space-y-3 border-t border-white/10 pt-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-bold uppercase">Margherita</p>
                <p className="mt-1 text-[10px] opacity-65">Tomat, mozzarella</p>
              </div>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold tabular-nums text-ink">
                170 kr
              </span>
            </div>
            <div className="flex items-start justify-between gap-2 border-t border-white/10 pt-3">
              <p className="font-bold uppercase">Pepperoni</p>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold tabular-nums text-ink">
                189 kr
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "Kategori-bånd",
      blurb:
        "Fullbredde farget bånd over kategori — lett å hoppe visuelt nedover.",
      preview: (
        <div className="overflow-hidden rounded-xl border border-accent/20 bg-raised text-[11px] text-foreground shadow-card">
          <div className="bg-accent/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            Pizza
          </div>
          <div className="space-y-3 p-3">
            <RowA name="Margherita" desc="Tomat, mozzarella." price="170 kr" />
            <div className="border-t border-dotted border-white/12 pt-3">
              <RowA name="Pepperoni" desc="Tomat, ost, pepperoni." price="189 kr" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 13,
      title: "Takeaway-kompakt",
      blurb:
        "Lite mellomrom og liten skrift — maks innhold for hurtig bestilling.",
      preview: (
        <div className="rounded-lg bg-sunken p-2 text-[9px] leading-tight text-foreground ring-1 ring-white/[0.06]">
          <p className="mb-1.5 font-bold uppercase tracking-wider text-accent">
            Pizza
          </p>
          <div className="flex justify-between gap-2 border-b border-white/10 py-1.5">
            <span className="font-semibold uppercase">Margherita</span>
            <span className="shrink-0 font-bold tabular-nums text-accent">170</span>
          </div>
          <div className="flex justify-between gap-2 py-1.5">
            <span className="font-semibold uppercase">Pepperoni</span>
            <span className="shrink-0 font-bold tabular-nums text-accent">189</span>
          </div>
          <p className="text-[8px] opacity-55">Mini tekst under ved behov</p>
        </div>
      ),
    },
    {
      id: 14,
      title: "Serif magasin-tittel",
      blurb:
        "Store serif-kategorier og luft — «magasin»- eller gastrobar-preg.",
      preview: (
        <div className="rounded-xl bg-raised p-3 text-foreground ring-1 ring-accent/12">
          <p className="font-serif text-lg font-semibold capitalize italic tracking-tight text-[#f5f0e8]">
            Pizza
          </p>
          <div className="mt-3 space-y-4 border-t border-accent/15 pt-3 text-[11px]">
            <div className="flex justify-between gap-3">
              <div>
                <p className="font-sans font-bold uppercase text-[11px]">Margherita</p>
                <p className="mt-1 font-serif text-[10px] italic opacity-70">
                  Tomat, mozzarella
                </p>
              </div>
              <span className="font-sans font-bold tabular-nums text-accent">170 kr</span>
            </div>
            <div className="flex justify-between gap-3 border-t border-dotted border-white/12 pt-4">
              <p className="font-sans font-bold uppercase">Pepperoni</p>
              <span className="font-sans font-bold tabular-nums text-accent">189 kr</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 15,
      title: "Sidekolonne priser",
      blurb:
        "Venstre: navn + tekst. Høyre: vertikal pris-kolonne — ryddig på brede skjermer.",
      preview: (
        <div className="rounded-xl border border-accent/15 bg-sunken p-3 text-[11px] text-foreground">
          <Cat>Pizza</Cat>
          <div className="mt-2 grid grid-cols-[1fr_minmax(3rem,auto)] gap-x-4 border-t border-white/10 pt-2">
            <div className="border-b border-dotted border-white/10 py-2">
              <p className="font-bold uppercase">Margherita</p>
              <p className="mt-1 text-[10px] opacity-65">Tomat, mozzarella</p>
            </div>
            <div className="flex items-start justify-end border-b border-dotted border-white/10 py-2 font-bold tabular-nums text-accent">
              170
              <span className="ml-0.5 text-[9px] font-semibold opacity-70">kr</span>
            </div>
            <div className="py-2">
              <p className="font-bold uppercase">Pepperoni</p>
            </div>
            <div className="flex items-start justify-end py-2 font-bold tabular-nums text-accent">
              189 kr
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-accent/15 bg-sunken">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              15 meny-varianter
            </p>
            <p className="mt-1 max-w-xl text-sm text-foreground/65">
              Mini-demonstrasjon med samme to pizzalinjer. Velg et nummer, så kan vi
              style den ekte meny-siden deretter.
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

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-8 sm:py-10">
        <ol className="grid list-none gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {samples.map(({ id, title, blurb, preview }) => (
            <li key={id}>
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-accent/15 bg-raised shadow-card ring-1 ring-white/[0.05]">
                <figcaption className="flex items-start gap-3 border-b border-accent/15 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 font-serif text-lg font-semibold text-accent">
                    {id}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-semibold leading-snug">{title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-foreground/60">
                      {blurb}
                    </p>
                  </div>
                </figcaption>
                <div className="flex flex-1 flex-col bg-black/[0.12] p-4">
                  <div className="mx-auto w-full max-w-[280px]">{preview}</div>
                </div>
              </figure>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-foreground/55">
          Tips til meg: skriv f.eks. «variant <strong className="text-foreground">7</strong>» eller
          «kombiner <strong className="text-foreground">4</strong> og{" "}
          <strong className="text-foreground">11</strong> på prisene».
        </p>
      </main>
    </div>
  );
}
