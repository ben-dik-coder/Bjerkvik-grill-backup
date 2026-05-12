import Image from "next/image";
import Link from "next/link";
import { Archivo_Black, Work_Sans } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const black = Archivo_Black({ subsets: ["latin"], weight: "400" });
const work = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil16Preview() {
  return (
    <div className={`${work.className} min-h-screen bg-white text-black`}>
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-12 md:py-14">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-neutral-500">Bjerkvik</p>
            <p className={`${black.className} mt-2 text-4xl uppercase leading-none md:text-5xl`}>{SITE.name}</p>
          </div>
          <Link href="/stiler" className="bg-black px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
            Index
          </Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className={`${black.className} text-[clamp(2.5rem,8vw,5rem)] leading-[0.92] tracking-tight`}>
              EN
              <span className="block text-red-600">MENY.</span>
              TRE
              <span className="block">VERDENER.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
              Grill for magen. Sushi for finesse. Pizza for fellesskap. Én adresse i Bjerkvik — null stress.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={SITE.phoneHref}
                className="flex min-h-[52px] items-center justify-center bg-red-600 text-sm font-bold uppercase tracking-wide text-white hover:bg-red-700"
              >
                Ring
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center border-4 border-black text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white"
              >
                Kart
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] border-4 border-black">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="45vw" priority />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-px bg-black">
              {[
                { k: "GG", v: SITE.rating },
                { k: "CAT", v: SITE.category.split("/")[0]?.trim() ?? SITE.category },
                { k: "IG", v: SITE.instagramHandle.replace("@", "") },
              ].map((cell) => (
                <div key={cell.k} className="bg-white p-3 text-center">
                  <p className={`${black.className} text-xs text-neutral-400`}>{cell.k}</p>
                  <p className="mt-1 text-xs font-bold leading-tight">{cell.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer id="kontakt" className="mt-14 border-t-4 border-black pt-10 md:flex md:items-start md:justify-between">
          <div>
            <p className={`${black.className} text-sm uppercase`}>Kontakt</p>
            <p className="mt-3 font-semibold">{SITE.address}</p>
            <p className="mt-1 font-medium">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="mt-6 inline-block text-sm font-bold underline md:mt-0">
            Forside →
          </Link>
        </footer>
      </div>
    </div>
  );
}
