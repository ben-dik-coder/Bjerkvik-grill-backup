import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant02() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <nav className="flex items-center justify-between border-b border-accent/15 px-6 py-5 md:px-10">
        <span className="font-serif text-lg tracking-wide text-accent">{SITE.name}</span>
        <Link href="/layout-valg" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d7cfc4]/70 hover:text-accent">
          Index
        </Link>
      </nav>

      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-full">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="50vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 lg:bg-gradient-to-l lg:from-background/80 lg:to-transparent" />
        </div>
        <div className="flex flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent/75">Bjerkvik</p>
          <h1 className="font-serif mt-4 text-4xl font-semibold leading-[1.05] text-[#f5f0e8] md:text-5xl">
            To halvdeler — én meny
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#d7cfc4]/90">
            Bildet til venstre forteller stemningen. Teksten til høyre forklarer hvorfor du burde bli sulten nå.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 border-l-2 border-accent pl-5">
            <a href={SITE.phoneHref} className="text-sm font-semibold uppercase tracking-wide text-accent underline-offset-8 hover:underline">
              Ring oss
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wide text-[#d7cfc4] underline-offset-8 hover:text-accent hover:underline"
            >
              Åpne kart
            </a>
          </div>
        </div>
      </div>

      <section className="border-t border-accent/10 px-4 pb-16 pt-8 md:px-8">
        <p className="mb-4 px-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d7cfc4]/60">Meny — horisontal</p>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {LV_MENU.map((c) => (
            <div key={c.key} className="relative h-44 w-[72vw] shrink-0 overflow-hidden rounded-full border border-accent/20 md:w-64">
              <LvMenuCoverImage img={c.img} sizes="260px" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/50 to-transparent px-6 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="flex flex-wrap items-center justify-between gap-4 border-t border-accent/15 px-6 py-8 text-sm md:px-10">
        <div>
          <p className="font-semibold">{SITE.address}</p>
          <p className="text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
        </div>
        <div className="flex gap-3">
          <a href={SITE.phoneHref} className="rounded-lg bg-accent px-4 py-2 text-xs font-bold uppercase text-ink">
            <Phone className="mr-1 inline h-3.5 w-3.5" />
            Ring
          </a>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-accent/40 px-4 py-2 text-xs font-bold uppercase">
            <MapPin className="mr-1 inline h-3.5 w-3.5" />
            Kart
          </a>
        </div>
      </footer>
    </div>
  );
}
