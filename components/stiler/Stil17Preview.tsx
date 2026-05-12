import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans, Yeseva_One } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil17Preview() {
  return (
    <div className={`${josefin.className} relative min-h-screen bg-[#12081f] text-[#f3e8ff]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.22),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <p className={`${yeseva.className} text-xl tracking-wide text-[#f5d0fe]`}>{SITE.name}</p>
          <Link href="/stiler" className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]/90 hover:text-[#f5d0fe]">
            Flere stiler
          </Link>
        </header>

        <div className="mt-14 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-[#a78bfa]">
            Kveldsstemning • Bjerkvik
          </p>
          <h1 className={`${yeseva.className} mt-6 text-balance text-4xl leading-snug text-[#fdf4ff] md:text-6xl`}>
            Mat som hører hjemme
            <span className="block text-[#fbbf24]">etter solnedgang</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#ddd6fe]/90 md:text-lg">
            Vi tenker på måltidet som en liten konsert: førstemann kommer inn med appetitt, siste tone er «mmm».
            Burger, sushi eller pizza — alle får sin solo.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-amber-400/35 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
            <div className="relative aspect-[21/10] w-full">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="900px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12081f] via-[#12081f]/35 to-transparent" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#1a0f2e]/80 px-6 py-5 backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#fbbf24]">Book kontakt</p>
                <p className="mt-1 text-sm font-semibold">{SITE.phoneDisplay}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="rounded-full bg-[#fbbf24] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#12081f]"
                >
                  Ring
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#fdf4ff] hover:bg-white/10"
                >
                  Kart
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className={`${yeseva.className} text-lg text-[#fbbf24]`}>Om oss</p>
            <p className="mt-3 text-sm leading-relaxed text-[#ddd6fe]/85">{SITE.signature}</p>
          </div>
          <div id="kontakt" className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className={`${yeseva.className} text-lg text-[#fbbf24]`}>Adresse</p>
            <p className="mt-3 text-sm font-semibold">{SITE.address}</p>
            <Link href="/" className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-[#c4b5fd] hover:text-[#fdf4ff]">
              Til forsiden →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
