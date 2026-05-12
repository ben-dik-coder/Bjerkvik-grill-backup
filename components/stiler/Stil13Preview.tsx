import Image from "next/image";
import Link from "next/link";
import { Figtree, Libre_Baskerville } from "next/font/google";
import { Flame } from "lucide-react";
import { IMG, SITE } from "@/lib/constants";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const sans = Figtree({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Stil13Preview() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#faf4ef] text-[#3d2b22]`}>
      <header className="border-b border-[#c17f59]/25 bg-[#fffdfb]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c17f59] text-[#fffdfb] shadow-md">
              <Flame className="h-6 w-6" strokeWidth={2} aria-hidden />
            </span>
            <div>
              <p className={`${serif.className} text-xl font-bold leading-none`}>{SITE.name}</p>
              <p className="text-xs font-semibold tracking-wide text-[#a85f3c]">Varm mat • kald drikke • god tid</p>
            </div>
          </div>
          <Link href="/stiler" className="rounded-full bg-[#3d2b22]/10 px-5 py-2 text-sm font-bold text-[#3d2b22] hover:bg-[#3d2b22]/15">
            Flere uttrykk
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section className="flex flex-col justify-center px-6 py-14 md:px-12 lg:py-20">
          <h1 className={`${serif.className} text-balance text-4xl font-bold leading-[1.12] text-[#2a1d17] md:text-[2.65rem]`}>
            Keramikk-varme,
            <span className="block text-[#c17f59]">rett fra grillen</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#5c4339]/95 md:text-lg">
            Tenk deg duften av nybakte pommes og marinerte kjøttstykker — blandet med sushi som føles som en liten ferie.
            Det er Bjerkvik i et nøtteskall.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-[#c17f59] px-9 py-4 text-sm font-bold text-[#fffdfb] shadow-[0_10px_40px_rgba(193,127,89,0.35)] transition hover:brightness-105"
            >
              Ring oss varmt
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#3d2b22]/15 bg-white px-9 py-4 text-sm font-bold text-[#3d2b22]"
            >
              Finn oss på kartet
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { l: "Meny", v: "Grill + sushi + pizza" },
              { l: "Pris", v: `Ca. ${SITE.priceRangeKr} kr` },
              { l: "Stemning", v: SITE.category },
            ].map((row) => (
              <div key={row.l} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#c17f59]/15">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#a85f3c]">{row.l}</p>
                <p className="mt-2 text-sm font-semibold text-[#2a1d17]">{row.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative min-h-[380px] bg-[#efe4dc] lg:min-h-[620px]">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="45vw" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c17f59]/25 via-transparent to-[#3d2b22]/35" />
          <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-[#fffdfb]/95 p-6 shadow-xl backdrop-blur-sm md:left-10 md:right-10">
            <p className={`${serif.className} text-lg font-bold text-[#2a1d17]`}>Små ord om oss</p>
            <p className="mt-2 text-sm leading-relaxed text-[#5c4339]">{SITE.signature}</p>
          </div>
        </section>
      </div>

      <footer id="kontakt" className="border-t border-[#c17f59]/20 bg-[#2a1d17] px-6 py-12 text-[#faf4ef] md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e8b896]">Kontakt</p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="mt-1 opacity-90">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="font-semibold text-[#e8b896] hover:underline">
            Til vanlig forsiden
          </Link>
        </div>
      </footer>
    </div>
  );
}
