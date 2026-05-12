import Image from "next/image";
import Link from "next/link";
import { Literata } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const paper = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil14Preview() {
  return (
    <div className={`${paper.className} min-h-screen bg-[#dcd9d0] text-[#111]`}>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
        <div className="border-b-2 border-black pb-4">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{SITE.name}</h1>
            <Link href="/stiler" className="text-xs font-semibold uppercase tracking-widest underline underline-offset-4">
              Annen layout
            </Link>
          </div>
          <p className="mt-2 text-sm italic text-neutral-700">
            Uoffisiell «forside-test» — teksten kan byttes som annonsetekst i avisen.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="border border-neutral-800/15 bg-[#f4f2ec] p-6 shadow-[6px_6px_0_#111] md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">Lederspalten</p>
            <h2 className="mt-4 text-balance text-2xl font-bold leading-snug md:text-3xl">
              Lokalt kjøkken tør å blande grill og sushi — og det funker
            </h2>
            <div className="mt-6 columns-1 gap-8 text-sm leading-relaxed text-neutral-800 md:columns-2 md:text-[15px]">
              <p className="mb-4 break-inside-avoid">
                Bjerkvik fortjener et sted der folk kan møtes uten å krangle om menyvalg. Derfor har vi samlet det folk oftest
                lengter etter: den sprøe burgeren, den freshe sushi-tallerkenen og pizzaen som samler hele bordet.
              </p>
              <p className="mb-4 break-inside-avoid">
                Vi er ikke «fancy for fancy». Vi er «godt fordi det er gjort ordentlig». Kom innom, lukte litt, og døm selv.
              </p>
              <p className="break-inside-avoid font-semibold">
                PS: {SITE.tagline}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-neutral-800/10 pt-6">
              <a href={SITE.phoneHref} className="bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#f4f2ec]">
                Ring redaksjonen (oss)
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-5 py-2.5 text-xs font-bold uppercase tracking-wide"
              >
                Finn i kart
              </a>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-neutral-800/20 bg-neutral-300">
              <Image src={IMG.hero} alt="" fill className="object-cover sepia-[0.25]" sizes="400px" priority />
              <p className="absolute bottom-0 left-0 right-0 bg-black/75 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#f4f2ec]">
                Bilde: lokalt kjøkken
              </p>
            </div>
            <div id="kontakt" className="border border-neutral-800/15 bg-[#f4f2ec] p-5 text-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-600">Kontaktinfo</p>
              <p className="mt-3 font-semibold">{SITE.address}</p>
              <p className="mt-1">{SITE.phoneDisplay}</p>
              <p className="mt-4 text-xs text-neutral-600">
                Google: {SITE.rating} ({SITE.reviewCount} anmeldelser)
              </p>
              <Link href="/" className="mt-4 inline-block text-xs font-bold underline">
                Til forsiden
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
