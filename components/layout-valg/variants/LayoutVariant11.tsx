import Image from "next/image";
import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant11() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="relative">
        <div className="relative aspect-[21/11] w-full md:aspect-[21/9]">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 md:-mt-28 md:px-10">
          <div className="border border-accent/25 bg-sunken/95 p-8 shadow-2xl backdrop-blur-md md:p-12">
            <Link href="/layout-valg" className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent/75 hover:text-accent">
              Layout-valg
            </Link>
            <h1 className="font-serif mt-6 text-4xl font-semibold leading-[1.05] text-[#f5f0e8] md:text-6xl">
              Redaksjonelt grep — tittelen flyter inn i bildet
            </h1>
            <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-accent to-transparent" />
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#d7cfc4]/85">
              Ovalformede knapper bryter den skarpe boksen. Menyen under holder liste-struktur med gull-inndeling.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={SITE.phoneHref} className="rounded-[999px] bg-accent px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-[0_0_40px_rgba(201,162,39,0.25)]">
                Ring oss
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[999px] border border-[#ece7df]/25 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f5f0e8]"
              >
                Kart
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-16 max-w-3xl space-y-0 px-6 pb-24 md:mt-20 md:px-10">
        <h2 className="font-serif border-b border-accent/25 pb-4 text-sm uppercase tracking-[0.35em] text-accent">Menylinjer</h2>
        {LV_MENU.map((c) => (
          <div key={c.key} className="flex gap-6 border-b border-white/[0.06] py-7">
            <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border border-accent/15">
              <LvMenuCoverImage img={c.img} sizes="112px" />
            </div>
            <div>
              <p className="font-serif text-2xl text-[#f5f0e8]">{c.label}</p>
              <p className="mt-1 text-sm text-[#d7cfc4]/75">{c.sub}</p>
            </div>
          </div>
        ))}
      </section>

      <footer id="kontakt" className="border-t border-accent/15 px-6 py-12 text-center text-sm md:px-10">
        <p className="font-medium">{SITE.address}</p>
        <p className="mt-1 text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
