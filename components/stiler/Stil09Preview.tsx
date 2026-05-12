import Image from "next/image";
import Link from "next/link";
import { Anchor } from "lucide-react";
import { Libre_Franklin, Lora } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Stil09Preview() {
  return (
    <div className={`${franklin.className} min-h-screen bg-[#f4f7fb] text-[#0f2942]`}>
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #c8102e 0px, #c8102e 28px, transparent 28px, transparent 56px)",
          backgroundSize: "56px 100%",
        }}
      >
        <div className="relative mx-3 mb-3 mt-3 rounded-lg bg-[#f4f7fb] md:mx-6 md:mb-6 md:mt-6 md:rounded-xl">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0f2942]/10 px-5 py-5 md:px-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2942] text-[#f4f7fb]">
                <Anchor className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <p className={`${lora.className} text-lg font-bold leading-none`}>{SITE.name}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                  Sjøkanten • Bjerkvik
                </p>
              </div>
            </div>
            <Link href="/stiler" className="text-xs font-bold text-[#0f2942] underline-offset-4 hover:underline">
              Andre varianter
            </Link>
          </header>

          <div className="grid gap-0 lg:grid-cols-5">
            <section className="relative min-h-[340px] lg:col-span-2 lg:min-h-[520px]">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="40vw" priority />
              <div className="absolute inset-0 bg-[#0f2942]/35" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/95 p-5 shadow-xl backdrop-blur-sm md:left-8 md:right-auto md:max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8102e]">
                  Ukens linje
                </p>
                <p className={`${lora.className} mt-3 text-xl font-bold leading-snug`}>
                  Mat som følger tidevannet — og appetitten din.
                </p>
              </div>
            </section>

            <section className="flex flex-col justify-center px-6 py-12 lg:col-span-3 lg:px-14 lg:py-16">
              <h1 className={`${lora.className} text-balance text-4xl font-bold leading-[1.1] md:text-[2.75rem]`}>
                Trygt havnepromenade‑kjøkken med grillklær på
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0f2942]/85 md:text-lg">
                Vi binder hav og land sammen på tallerkenen: sterke smaker fra grillen,
                fine snitt fra sushi-brettet, og pizza som samler hele bordet.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center rounded-md bg-[#c8102e] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#a30d24]"
                >
                  Ring landgang
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border-2 border-[#0f2942] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0f2942] hover:bg-[#0f2942]/5"
                >
                  Plot koordinater
                </a>
              </div>

              <dl id="kontakt" className="mt-14 grid gap-6 border-t border-[#0f2942]/10 pt-10 sm:grid-cols-2">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8102e]">
                    Havn
                  </dt>
                  <dd className="mt-2 font-semibold">{SITE.address}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c8102e]">
                    Kommunikasjon
                  </dt>
                  <dd className="mt-2 font-semibold">{SITE.phoneDisplay}</dd>
                </div>
              </dl>

              <div className="mt-10">
                <Link href="/" className="text-sm font-bold text-[#0f2942] underline decoration-[#c8102e] underline-offset-[6px]">
                  Tilbake til hovedsiden
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
