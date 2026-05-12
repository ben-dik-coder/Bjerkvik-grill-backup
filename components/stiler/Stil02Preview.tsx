import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, Roboto } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const loud = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const body = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Stil02Preview() {
  return (
    <div className={`${body.className} min-h-screen bg-black text-white`}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/25 via-black/80 to-black" />
        </div>

        <header className="relative z-10 flex items-center justify-between px-4 py-5 md:px-8">
          <span className={`${loud.className} text-3xl tracking-wide text-cyan-300`}>
            BJERKVIK
          </span>
          <Link
            href="/stiler"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-fuchsia-300 hover:bg-white/10"
          >
            Bytt stil
          </Link>
        </header>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-8 text-center md:pb-28 md:pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-cyan-400">
            Åpent kjøkken • Rask servering
          </p>
          <h1
            className={`${loud.className} mt-6 text-balance text-6xl leading-[0.95] text-white md:text-8xl`}
          >
            Grill.
            <span className="block text-fuchsia-400">Ingen unnskyldning.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Vi lover ikke magi — bare sprø fries, saftig kjøtt og folk som faktisk
            vil at du skal bli mett. Sjøluft er gratis.
          </p>

          <div className="mx-auto mt-12 grid max-w-lg gap-4 md:grid-cols-2">
            <a
              href={SITE.phoneHref}
              className="skew-x-[-6deg] rounded-none bg-fuchsia-500 px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-black shadow-[6px_6px_0_cyan-400] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_cyan-400]"
            >
              Slå på — ring oss
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skew-x-[-6deg] rounded-none border-2 border-cyan-400 bg-black/40 px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-cyan-300 backdrop-blur-sm hover:bg-cyan-400/10"
            >
              Dropp inn via kart
            </a>
          </div>

          <div className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-widest text-white/60">
            <span className="rounded-full border border-white/20 px-4 py-2">Burger</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Sushi</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Pizza</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Mer</span>
          </div>
        </div>
      </div>

      <section className="border-y border-white/10 bg-gradient-to-r from-fuchsia-950/40 to-cyan-950/40 px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              t: "Hvorfor oss?",
              d: "Fordi gjestene merker når noen bryr seg om smaken — ikke bare hastigheten.",
            },
            {
              t: "Google-vibb",
              d: `${SITE.rating} stjerner (${SITE.reviewCount} stemmer). Vi tar det som et klapp på skulderen.`,
            },
            {
              t: "Instagram",
              d: `Følg ${SITE.instagramHandle} for bilder som lukter.`,
            },
          ].map((c) => (
            <div
              key={c.t}
              className="border border-white/15 bg-black/50 p-6 backdrop-blur-md"
            >
              <h2 className={`${loud.className} text-2xl text-cyan-300`}>{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="px-4 py-12 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${loud.className} text-xl text-fuchsia-400`}>KONTAKT</p>
            <p className="mt-2 text-sm text-white/70">{SITE.address}</p>
            <p className="text-sm font-semibold text-white">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-cyan-300 hover:underline">
            Til forsiden
          </Link>
        </div>
      </footer>
    </div>
  );
}
