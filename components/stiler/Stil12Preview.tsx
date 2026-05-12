import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const display = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Stil12Preview() {
  return (
    <div className={`${body.className} relative min-h-screen overflow-hidden bg-[#0b0220] text-[#e8e6ff]`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 md:px-10 md:pt-12">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <span className={`${display.className} text-xl font-extrabold tracking-tight text-cyan-300`}>
            {SITE.name}
          </span>
          <Link href="/stiler" className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300/90 hover:text-fuchsia-200">
            Bytt uttrykk
          </Link>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Signal • Bjerkvik node
            </p>
            <h1 className={`${display.className} mt-6 text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl`}>
              Neste måltid
              <span className="block bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                er online
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-[#c4c2e8]/95 md:text-base">
              Vi kobler dine cravings til kjøkkenet: burgere med futuristisk saftighet,
              sushi med laser-presisjon (nesten), pizza som fyller skjermen — og magen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-8 py-3.5 text-sm font-bold text-[#0b0220] shadow-[0_0_40px_rgba(244,114,182,0.35)] transition hover:opacity-95"
              >
                Ping oss (ring)
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
              >
                Koordinater i kart
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 via-transparent to-cyan-400/35 blur-xl" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0220] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-xs backdrop-blur-md">
                <span className="font-semibold text-cyan-200">Live kjøkken</span>
                <span className="text-fuchsia-200">{SITE.rating}★</span>
              </div>
            </div>
          </div>
        </div>

        <footer id="kontakt" className="mt-16 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-fuchsia-300/80">Kontakt-node</p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="text-sm text-[#c4c2e8]/80">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-cyan-300 hover:underline">
            Til hovedside →
          </Link>
        </footer>
      </div>
    </div>
  );
}
