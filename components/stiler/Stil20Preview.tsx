import Image from "next/image";
import Link from "next/link";
import { Great_Vibes, Poppins } from "next/font/google";
import { Heart } from "lucide-react";
import { IMG, SITE } from "@/lib/constants";

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil20Preview() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fdf2f8] to-[#ffe4e6] text-[#4c0519]`}>
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:px-10 md:pt-14">
        <div className="text-center">
          <Heart className="mx-auto h-6 w-6 text-rose-400" strokeWidth={2} aria-hidden />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.45em] text-rose-400">Med kjærlighet • Bjerkvik</p>
          <p className={`${script.className} mt-3 text-5xl text-rose-700 md:text-6xl`}>Velkommen</p>
          <h1 className="mt-4 text-balance text-2xl font-semibold leading-snug text-[#831843] md:text-3xl">
            til {SITE.name} — der maten får litt ekstra «oi»
          </h1>
          <Link href="/stiler" className="mt-6 inline-block text-xs font-semibold text-rose-500 underline-offset-4 hover:underline">
            Se andre stiler
          </Link>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-rose-200/60 blur-3xl md:block" />
          <div className="absolute -right-12 bottom-10 hidden h-44 w-44 rounded-full bg-fuchsia-200/55 blur-3xl md:block" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 shadow-xl backdrop-blur-md">
            <div className="relative aspect-[16/11] w-full">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="800px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fff1f5]/90 via-transparent to-transparent" />
            </div>
            <div className="space-y-5 px-8 pb-10 pt-6 text-center md:px-12">
              <p className={`${script.className} text-4xl text-rose-600`}>Smaken av fellesskap</p>
              <p className="text-sm leading-relaxed text-[#9f1239]/90 md:text-base">
                Burgere for kos, sushi for wow, pizza for deling. Vi vil at du skal føle deg invitert — som på et lite selskap
                der ingen må sitte stivt.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href={SITE.phoneHref}
                  className="rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-400/30"
                >
                  Ring oss
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-rose-200 bg-white/70 px-10 py-3.5 text-sm font-bold text-[#831843]"
                >
                  Finn veien
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-rose-100 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-400">Om oss</p>
            <p className="mt-3 text-sm leading-relaxed text-[#9f1239]/85">{SITE.signature}</p>
          </div>
          <div id="kontakt" className="rounded-3xl border border-rose-100 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-400">Kontakt</p>
            <p className="mt-3 text-sm font-semibold">{SITE.address}</p>
            <p className="mt-1 text-sm text-[#9f1239]/85">{SITE.phoneDisplay}</p>
            <Link href="/" className="mt-6 inline-block text-sm font-bold text-fuchsia-600 hover:underline">
              Til forsiden
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
