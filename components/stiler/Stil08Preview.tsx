import Image from "next/image";
import Link from "next/link";
import { Outfit, Quicksand } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const round = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const neat = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Stil08Preview() {
  return (
    <div className={`${round.className} min-h-screen bg-gradient-to-b from-[#fdf2ff] via-[#fff7fb] to-[#eef8ff] text-[#3b2f45]`}>
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:px-10">
        <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-3 shadow-lg backdrop-blur-md">
          <span className={`${neat.className} text-lg font-bold tracking-tight`}>{SITE.name}</span>
          <Link href="/stiler" className="text-xs font-bold text-[#b565d8] hover:underline">
            Velg annen stil
          </Link>
        </nav>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex rounded-2xl bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#7c3aed] shadow-md ring-1 ring-[#e9d5ff]">
              Ta med dig eller sit — begge er greit
            </div>
            <h1 className={`${neat.className} mt-6 text-balance text-4xl font-bold leading-[1.05] md:text-5xl`}>
              Myk stemning,
              <span className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
                {" "}
                skarp smak
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5b4d6b]/95 md:text-lg">
              Vi holder ting lette å lese og lett å bestille. Burger for lunta,
              sushi for finesse, pizza for fellesskap — alt på ett sted i Bjerkvik.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-gradient-to-r from-[#ec4899] to-[#f97316] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#ec4899]/30 transition hover:opacity-95"
              >
                Ring oss nå
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#c4b5fd] bg-white/70 px-8 py-4 text-sm font-bold text-[#5b21b6] backdrop-blur-sm"
              >
                Åpne Google Maps
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { l: "Snacks", v: "Fries, dips, smil" },
                { l: "Hoved", v: "Grill + sushi + pizza" },
                { l: "Stemning", v: SITE.category },
              ].map((item) => (
                <div
                  key={item.l}
                  className="rounded-3xl bg-white/75 p-4 text-center shadow-md ring-1 ring-white"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#a78bfa]">{item.l}</p>
                  <p className="mt-2 text-sm font-semibold text-[#3b2f45]">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#fde68a]/90 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#c4b5fd]/80 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-[#e879f9]/25">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" priority />
            </div>
          </div>
        </div>

        <footer
          id="kontakt"
          className="mt-16 rounded-[2rem] border border-white/80 bg-white/65 p-8 shadow-xl backdrop-blur-md md:flex md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#db2777]">Kontakt</p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="mt-1 text-sm text-[#5b4d6b]">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="mt-6 inline-block text-sm font-bold text-[#7c3aed] md:mt-0">
            Til forsiden →
          </Link>
        </footer>
      </div>
    </div>
  );
}
