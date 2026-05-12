import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Stil01Preview() {
  return (
    <div
      className={`${sans.className} min-h-screen bg-[#f4f0e8] text-[#2c1810]`}
    >
      <nav className="flex items-center justify-between border-b border-[#2c1810]/10 px-5 py-4 md:px-10">
        <span className={`${serif.className} text-xl font-bold tracking-tight`}>
          {SITE.name}
        </span>
        <Link
          href="/stiler"
          className="text-xs font-semibold uppercase tracking-widest text-[#6b4423] underline-offset-4 hover:underline"
        >
          Alle stiler
        </Link>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center md:px-10 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[8px_8px_0_#2c1810]/15 md:aspect-square">
          <Image
            src={IMG.hero}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 45vw"
            priority
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2c1810] backdrop-blur">
            Lokalt ved sjøen
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b4513]">
            Matjournal • Bjerkvik
          </p>
          <h1
            className={`${serif.className} mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-5xl`}
          >
            Smaken som bor ved fjorden
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4a3428]/90">
            Vi liker enkle ord: ferskt, varmt og gjort med omtanke. Burger,
            sushi eller pizza — alt laget som til vertshus for venner.
          </p>
          <div className="mt-8 grid gap-4 border-l-2 border-[#722f37] pl-5">
            <p className="text-sm italic text-[#5c4033]">
              «Kom inn som du er. Gå mett og litt mer glad.»
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded-sm bg-[#722f37] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#f4f0e8] shadow-md transition hover:bg-[#5c252c]"
            >
              Ring kjøkkenet
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-[#2c1810]/25 px-6 py-3 text-sm font-semibold text-[#2c1810] transition hover:bg-[#2c1810]/5"
            >
              Finn på kart
            </a>
          </div>
        </div>
      </div>

      <section className="border-t border-[#2c1810]/10 bg-[#ebe4d7] px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            { t: "Meny", d: "Klassisk grill — og littJapan og Italia ved siden av." },
            { t: "Åpent?", d: "Se kontaktfeltet for tider. Vi oppdaterer alt etter hvert." },
            { t: "Stemning", d: SITE.tagline },
          ].map((x) => (
            <div key={x.t} className="rounded-sm bg-white/60 p-6 shadow-sm">
              <h2 className={`${serif.className} text-xl font-bold text-[#2c1810]`}>
                {x.t}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a3428]/85">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="border-t border-[#2c1810]/10 px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b4513]">
              Kontakt
            </p>
            <p className="mt-2 text-sm font-semibold">{SITE.address}</p>
            <p className="mt-1 text-sm text-[#4a3428]/80">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold underline-offset-4 hover:underline">
            Til vanlig nettside
          </Link>
        </div>
      </footer>
    </div>
  );
}
