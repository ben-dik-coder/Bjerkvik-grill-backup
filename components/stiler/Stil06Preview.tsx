import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Cabin, Merriweather } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const serif = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const sans = Cabin({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Stil06Preview() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#e8f0e4] text-[#1c2b1f]`}>
      <header className="border-b border-[#2d4a36]/15 bg-[#dbe8d5]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d4a36] text-[#e8f0e4]">
              <Leaf className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            </span>
            <div>
              <p className={`${serif.className} text-lg font-bold leading-none`}>
                {SITE.name}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#3d5c47]">
                Grill • Bjerkvik
              </p>
            </div>
          </div>
          <Link href="/stiler" className="text-xs font-bold text-[#2d4a36] underline-offset-4 hover:underline">
            Andre uttrykk
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-[1.05fr_0.95fr]">
        <section className="flex flex-col justify-center px-6 py-14 md:px-12 md:py-20">
          <h1
            className={`${serif.className} text-balance text-4xl font-bold leading-[1.15] text-[#142818] md:text-5xl`}
          >
            Hemmeligheten er enkel:
            <span className="block text-[#3d7c47]">god tid og god ild.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-[#2d4a36]/90 md:text-lg">
            Vi tenker på Bjerkvik som et lite torgs hjerte — der folk stanser,
            snakker litt høyere, og går mettere hjem. Menyen er bred fordi
            vennegjenger er det også.
          </p>
          <ul className="mt-10 space-y-3 text-sm font-semibold text-[#1c2b1f]">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c4704d]" />
              Burger som lugger litt — på den gode måten
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c4704d]" />
              Sushi for deg som vil ha noe lett mellom slagene
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c4704d]" />
              Pizza med sprø kant og liten dramaturgi
            </li>
          </ul>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={SITE.phoneHref}
              className="rounded-lg bg-[#2d4a36] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#e8f0e4] shadow-[0_4px_0_#142818] transition hover:translate-y-px hover:shadow-[0_3px_0_#142818]"
            >
              Snakk med oss
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-[#2d4a36]/30 bg-white/50 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#142818]"
            >
              Finn stien hit
            </a>
          </div>
        </section>

        <section className="relative min-h-[420px] bg-[#cfe2c7] md:min-h-full">
          <Image src={IMG.hero} alt="" fill className="object-cover mix-blend-multiply" sizes="50vw" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#142818]/55 via-transparent to-[#3d7c47]/25" />
          <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/90 p-5 shadow-lg backdrop-blur-sm md:left-auto md:right-10 md:w-[min(100%,320px)]">
            <p className={`${serif.className} text-lg font-bold text-[#142818]`}>Om oss</p>
            <p className="mt-2 text-sm leading-relaxed text-[#2d4a36]">{SITE.signature}</p>
          </div>
        </section>
      </div>

      <footer id="kontakt" className="border-t border-[#2d4a36]/15 bg-[#142818] px-6 py-12 text-[#e8f0e4] md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9bc49d]">
              Kontakt
            </p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="mt-1 opacity-90">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#cfe2c7] hover:underline">
            Til vanlig side
          </Link>
        </div>
      </footer>
    </div>
  );
}
