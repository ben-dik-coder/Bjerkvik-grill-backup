import Image from "next/image";
import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant15() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-accent/15 bg-background/90 px-6 py-4 backdrop-blur-md md:px-10">
        <h1 className="font-serif text-lg text-[#f5f0e8]">Horisontal snap</h1>
        <Link href="/layout-valg" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
          Alle
        </Link>
      </header>

      <p className="px-6 pt-6 text-xs text-[#d7cfc4]/75 md:px-10">
        Sveip sideveis — hvert panel er én fullbredde kategori (scroll-snap).
      </p>

      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-32 md:px-8">
        <section className="snap-center shrink-0" style={{ width: "min(92vw, 520px)" }}>
          <div className="flex h-[min(72vh,560px)] flex-col border border-accent/20 bg-raised">
            <div className="relative flex-1">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="520px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.45em] text-accent">Intro</p>
                <p className="font-serif mt-2 text-3xl text-[#f5f0e8]">Velkommen</p>
              </div>
            </div>
            <div className="flex gap-2 border-t border-accent/15 p-4">
              <a href={SITE.phoneHref} className="flex-1 bg-accent py-3 text-center text-[10px] font-bold uppercase tracking-wider text-ink">
                Ring
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 border border-accent/40 py-3 text-center text-[10px] font-bold uppercase tracking-wider">
                Kart
              </a>
            </div>
          </div>
        </section>

        {LV_MENU.map((c) => (
          <section key={c.key} className="snap-center shrink-0" style={{ width: "min(92vw, 520px)" }}>
            <div className="flex h-[min(72vh,560px)] flex-col overflow-hidden border border-accent/20 bg-sunken">
              <div className="relative flex-[2]">
                <LvMenuCoverImage img={c.img} sizes="520px" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-accent">Meny</p>
                <p className="font-serif mt-3 text-4xl text-[#f5f0e8]">{c.label}</p>
                <p className="mt-4 text-sm text-[#d7cfc4]/78">{c.sub}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer id="kontakt" className="fixed bottom-0 left-0 right-0 border-t border-accent/15 bg-sunken/95 px-6 py-4 text-center text-[11px] backdrop-blur-md md:px-10">
        <p>{SITE.address}</p>
        <p className="text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
