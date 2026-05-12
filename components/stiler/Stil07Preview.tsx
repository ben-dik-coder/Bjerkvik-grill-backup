import Image from "next/image";
import Link from "next/link";
import { Anton, Roboto_Mono } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Stil07Preview() {
  return (
    <div className={`${mono.className} min-h-screen bg-[#ffea00] text-black`}>
      <div className="border-b-4 border-black bg-black text-[#ffea00]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
          <p className={`${anton.className} text-3xl tracking-wide md:text-4xl`}>
            BJERKVIK GRILL
          </p>
          <Link
            href="/stiler"
            className="text-xs font-semibold uppercase underline decoration-2 underline-offset-4"
          >
            Flere uttrykk
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div>
            <h1 className={`${anton.className} text-[clamp(3rem,12vw,7rem)] leading-[0.9]`}>
              MAT.
              <br />
              NÅ.
              <span className="block text-white [text-shadow:_4px_4px_0_#000]">BJERKVIK.</span>
            </h1>
            <p className="mt-8 max-w-xl border-l-4 border-black pl-5 text-sm font-semibold leading-relaxed md:text-base">
              Kort tekst. Lang glede. Vi serverer det du har lyst på når magen
              maser — burger, sushi eller pizza. Punktum.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={SITE.phoneHref}
                className="flex min-h-[52px] items-center justify-center bg-black px-4 text-center text-sm font-bold uppercase text-[#ffea00]"
              >
                Ring
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center border-4 border-black bg-white px-4 text-center text-sm font-bold uppercase"
              >
                Kart
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full border-4 border-black shadow-[12px_12px_0_0_#000]">
            <Image src={IMG.hero} alt="" fill className="object-cover grayscale" sizes="400px" priority />
            <div className="absolute bottom-0 left-0 right-0 border-t-4 border-black bg-[#ffea00] p-3 text-center text-xs font-bold uppercase">
              Foto: lokalt kjøkken
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-4 border-4 border-black bg-white p-6 md:grid-cols-3 md:p-8">
          <div className="border-b-4 border-black pb-6 md:border-b-0 md:border-r-4 md:pb-0 md:pr-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Info</p>
            <p className={`${anton.className} mt-3 text-3xl`}>ÅPNING</p>
            <p className="mt-2 text-xs font-semibold leading-relaxed">{SITE.aboutExtra}</p>
          </div>
          <div className="border-b-4 border-black pb-6 md:border-b-0 md:border-r-4 md:pb-0 md:pr-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Score</p>
            <p className={`${anton.className} mt-3 text-3xl`}>{SITE.rating}</p>
            <p className="mt-2 text-xs font-semibold">Google • {SITE.reviewCount} reviews</p>
          </div>
          <div id="kontakt" className="">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Sted</p>
            <p className={`${anton.className} mt-3 text-2xl leading-none`}>KONTAKT</p>
            <p className="mt-3 text-xs font-semibold">{SITE.address}</p>
            <p className="mt-1 text-xs font-semibold">{SITE.phoneDisplay}</p>
            <Link href="/" className="mt-4 inline-block text-xs font-bold underline">
              Forside →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
