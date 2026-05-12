import Image from "next/image";
import Link from "next/link";
import { Domine, Urbanist } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const serif = Domine({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const sans = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function Stil19Preview() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#fffaf5] text-[#3b2f28]`}>
      <header className="border-b border-[#e7d8cb] bg-[#ffffff]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-12">
          <div>
            <p className={`${serif.className} text-2xl font-bold text-[#4a3728]`}>{SITE.name}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08968]">Bakehus-vibb • grillhjerte</p>
          </div>
          <Link href="/stiler" className="text-sm font-bold text-[#8b6b53] hover:text-[#4a3728]">
            Andre brødtyper (stiler)
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2e6] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#b45309] ring-1 ring-[#fdba74]/60">
              Nybakte ideer hver dag
            </div>
            <h1 className={`${serif.className} mt-6 text-balance text-4xl font-bold leading-[1.12] text-[#2f241e] md:text-[2.75rem]`}>
              Kringle-bløff og grill-alvor — på samme tallerken
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#5c4a41]/95 md:text-lg">
              Vi liker den varme følelsen av et bakeri, men med meny som tør å bråke litt: burgere, sushi og pizza i samme
              «fat». Perfekt når gjengen ikke er enige — og alle skal bli glade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-[#4a3728] px-10 py-4 text-sm font-extrabold text-[#fffaf5] shadow-[0_14px_40px_rgba(74,55,40,0.25)] transition hover:-translate-y-0.5"
              >
                Ring baker’n (oss)
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#e7d8cb] bg-white px-10 py-4 text-sm font-extrabold text-[#4a3728]"
              >
                Finn oss på kart
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#fde68a]/80 blur-2xl md:block" />
            <div className="relative overflow-hidden rounded-[2rem] ring-[10px] ring-[#fff2e6]">
              <div className="relative aspect-[5/6] w-full">
                <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 42vw" priority />
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-sm ring-1 ring-[#e7d8cb]">
                <p className={`${serif.className} text-lg font-bold text-[#2f241e]`}>Det folk sier</p>
                <p className="mt-2 text-sm text-[#5c4a41]">
                  {SITE.rating} stjerner på Google — {SITE.reviewCount} stemmer og counting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 grid gap-6 rounded-[2rem] border border-[#e7d8cb] bg-white p-8 shadow-sm md:grid-cols-3 md:p-10">
          {[
            { t: "Signatur", d: SITE.signature },
            { t: "Tagline", d: SITE.tagline },
            { t: "Instagram", d: `Følg ${SITE.instagramHandle}` },
          ].map((x) => (
            <div key={x.t}>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#b08968]">{x.t}</p>
              <p className={`${serif.className} mt-3 text-base leading-relaxed text-[#3b2f28]`}>{x.d}</p>
            </div>
          ))}
        </section>

        <footer id="kontakt" className="mt-16 flex flex-col gap-4 rounded-[2rem] bg-[#4a3728] px-8 py-10 text-[#fffaf5] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#fde68a]">Kontakt</p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="mt-1 opacity-90">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="font-bold text-[#fde68a] hover:underline">
            Til forsiden
          </Link>
        </footer>
      </main>
    </div>
  );
}
