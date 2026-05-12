import Image from "next/image";
import Link from "next/link";
import { Karla, Permanent_Marker } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Stil10Preview() {
  return (
    <div className={`${karla.className} relative min-h-screen overflow-hidden bg-[#faf8ff] text-[#1e1b4b]`}>
      <div className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rotate-12 rounded-3xl bg-[#f472b6]/35 blur-sm" />
      <div className="pointer-events-none absolute right-[-4rem] top-40 h-48 w-48 -rotate-6 rounded-full border-[14px] border-[#22d3ee]/40" />
      <div className="pointer-events-none absolute bottom-20 left-1/4 h-28 w-72 -rotate-3 bg-[#fde047]/45" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8 md:pt-12">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={`${marker.className} text-3xl text-[#db2777] md:text-4xl`}>Bjerkvik Grill</p>
            <p className="mt-1 max-w-xs text-sm font-bold uppercase tracking-[0.15em] text-[#6366f1]">
              Alt på ett fat — litt kaos, masse digg
            </p>
          </div>
          <Link
            href="/stiler"
            className="rotate-[-2deg] rounded-none border-4 border-[#1e1b4b] bg-[#fde047] px-4 py-2 text-xs font-black uppercase shadow-[6px_6px_0_#1e1b4b]"
          >
            Bytt collage
          </Link>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="relative lg:col-span-5">
            <div className="absolute -top-5 left-8 z-10 rotate-[8deg] rounded-md bg-[#22d3ee] px-3 py-1 text-[11px] font-black uppercase text-[#0f172a] shadow-md">
              Dagens vibe: sulten
            </div>
            <div className="relative aspect-[4/5] rotate-[-3deg] overflow-hidden rounded-sm border-4 border-[#1e1b4b] shadow-[14px_14px_0_#6366f1]">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 42vw" priority />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="text-balance text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
              <span className="inline-block rotate-[-1deg] bg-[#fbcfe8] px-2 text-[#9d174d]">GRILL</span>
              <span className="mt-2 block text-[#312e81]">+ sushi</span>
              <span className="mt-1 inline-block rotate-[2deg] bg-[#fef08a] px-3 py-1 text-[#422006]">
                + pizza
              </span>
              <span className="mt-4 block text-2xl font-black text-[#4338ca] md:text-3xl">
                = ingen kjedsomhet
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base font-semibold leading-relaxed text-[#312e81]/90 md:text-lg">
              Vi hopper mellom stiler som en spilleliste — fordi folk er forskjellige,
              og det er helt greit. Én ting er lik for alle: her skal du bli mett og litt
              lattermild.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SITE.phoneHref}
                className="rotate-[-2deg] rounded-full bg-[#1e1b4b] px-10 py-4 text-sm font-black uppercase tracking-wide text-[#faf8ff] shadow-[8px_8px_0_#f472b6] transition hover:rotate-0"
              >
                Ring nå-høyttaler
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rotate-[2deg] border-4 border-dashed border-[#4338ca] bg-white px-8 py-4 text-sm font-black uppercase text-[#4338ca]"
              >
                Finn oss på kart
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="border-4 border-[#1e1b4b] bg-[#e0e7ff] p-4 shadow-[6px_6px_0_#fde047]">
                <p className={`${marker.className} text-xl text-[#1e1b4b]`}>Meny</p>
                <p className="mt-2 text-sm font-bold leading-snug">
                  Burgere som ikke holder tilbake.
                </p>
              </div>
              <div className="translate-y-2 border-4 border-[#1e1b4b] bg-[#fce7f3] p-4 shadow-[6px_6px_0_#22d3ee]">
                <p className={`${marker.className} text-xl text-[#9d174d]`}>Sushi</p>
                <p className="mt-2 text-sm font-bold leading-snug">Friskt, presist, fort.</p>
              </div>
              <div className="border-4 border-[#1e1b4b] bg-[#ecfccb] p-4 shadow-[6px_6px_0_#a78bfa]">
                <p className={`${marker.className} text-xl text-[#365314]`}>Pizza</p>
                <p className="mt-2 text-sm font-bold leading-snug">Deler eller ikke — du bestemmer.</p>
              </div>
            </div>
          </div>
        </div>

        <footer
          id="kontakt"
          className="mt-16 flex flex-col gap-6 border-4 border-[#1e1b4b] bg-white p-8 shadow-[12px_12px_0_#f472b6] md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#db2777]">Kontakt-boks</p>
            <p className="mt-2 font-bold">{SITE.address}</p>
            <p className="mt-1 font-bold">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="font-black uppercase text-[#4338ca] underline decoration-wavy">
            Til forsiden
          </Link>
        </footer>
      </div>
    </div>
  );
}
