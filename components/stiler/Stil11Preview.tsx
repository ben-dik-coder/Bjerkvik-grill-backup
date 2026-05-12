import Image from "next/image";
import Link from "next/link";
import { Cinzel, Raleway } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const deco = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const sans = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil11Preview() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#f7f2ea] text-[#1c1410]`}>
      <div className="border-b-4 border-double border-[#b8975e]/70 bg-[#1c1410] px-6 py-4 text-center md:px-10">
        <p className={`${deco.className} text-[11px] font-semibold uppercase tracking-[0.65em] text-[#e8d9b5]`}>
          Bjerkvik • siden 20__
        </p>
      </div>

      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-10">
        <span className={`${deco.className} text-lg font-bold tracking-[0.15em]`}>{SITE.name}</span>
        <Link href="/stiler" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8b7355] hover:text-[#1c1410]">
          Alle stiler
        </Link>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
        <div className="relative overflow-hidden border-[3px] border-[#b8975e] bg-[#fdfbf7] p-[2px] shadow-[0_24px_80px_rgba(28,20,16,0.12)]">
          <div className="pointer-events-none absolute inset-6 border border-[#b8975e]/35" />
          <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12 md:items-center">
            <div>
              <div className="mx-auto mb-6 h-px w-16 bg-[#b8975e]" />
              <h1 className={`${deco.className} text-balance text-center text-3xl font-semibold leading-snug tracking-[0.08em] md:text-left md:text-4xl`}>
                SMakens
                <span className="block text-[#9a7b4f]">salong</span>
              </h1>
              <p className="mt-8 text-center text-sm leading-relaxed text-[#4a3f36]/90 md:text-left md:text-base">
                Vi serverer klassiske favoritter med presisjon og varme — som et lite vertshus der
                gjesten alltid er velkommen tilbake.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href={SITE.phoneHref}
                  className={`${deco.className} border border-[#1c1410] bg-[#1c1410] px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#f7f2ea]`}
                >
                  Ring
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${deco.className} border border-[#b8975e] px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#1c1410]`}
                >
                  Kart
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md border border-[#b8975e]/50">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 45vw" priority />
              <div className="absolute inset-x-4 bottom-4 border border-[#f7f2ea]/60 bg-[#1c1410]/75 px-4 py-3 text-center backdrop-blur-sm">
                <p className={`${deco.className} text-[10px] font-semibold uppercase tracking-[0.4em] text-[#e8d9b5]`}>
                  Grill • sushi • pizza
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-6 border-t border-[#b8975e]/40 pt-10 md:grid-cols-3">
          {[
            { t: "Verdighet", d: "Mat som føles gjennomtenkt — ikke stresset." },
            { t: "Sted", d: SITE.tagline },
            { t: "Omtale", d: `${SITE.rating} av gjester på Google (${SITE.reviewCount}).` },
          ].map((x) => (
            <div key={x.t} className="text-center md:text-left">
              <p className={`${deco.className} text-xs font-semibold uppercase tracking-[0.35em] text-[#9a7b4f]`}>{x.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a3f36]/85">{x.d}</p>
            </div>
          ))}
        </section>

        <footer id="kontakt" className="mt-14 flex flex-col gap-4 border border-[#b8975e]/50 bg-[#fdfbf7] p-8 md:flex-row md:justify-between">
          <div>
            <p className={`${deco.className} text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9a7b4f]`}>Kontakt</p>
            <p className="mt-2 text-sm font-semibold">{SITE.address}</p>
            <p className="text-sm text-[#4a3f36]/80">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#8b7355] underline-offset-4 hover:underline">
            Til forsiden
          </Link>
        </footer>
      </main>
    </div>
  );
}
