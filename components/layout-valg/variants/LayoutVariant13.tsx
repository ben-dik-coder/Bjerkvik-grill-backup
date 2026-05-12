import Image from "next/image";
import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant13() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="flex justify-end px-6 pt-8 md:px-10">
        <Link href="/layout-valg" className="rounded-full border border-accent/30 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
          Layout-valg
        </Link>
      </div>

      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-10 md:grid-cols-6 md:gap-4 md:px-8">
        <div className="col-span-6 rounded-2xl border border-accent/15 bg-raised p-8 md:col-span-3 md:row-span-2">
          <p className="font-serif text-3xl leading-snug text-[#f5f0e8]">«Vi samler det folk lengter etter — uten å gjøre det komplisert.»</p>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-accent">Sitat-celle</p>
        </div>

        <div className="relative col-span-6 aspect-video overflow-hidden rounded-2xl border border-accent/15 md:col-span-3">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="50vw" />
        </div>

        <div className="col-span-6 flex flex-col justify-center rounded-2xl border border-dashed border-accent/35 bg-sunken p-6 md:col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent">Dagens demo</p>
          <p className="font-serif mt-2 text-2xl text-[#f5f0e8]">Kombo-kveld</p>
          <p className="mt-2 text-sm text-[#d7cfc4]/78">Eksempel på «tilbud»-flis i samme grid som meny.</p>
          <a href={SITE.phoneHref} className="mt-6 self-start border-b-2 border-accent pb-1 text-xs font-bold uppercase tracking-wider text-accent">
            Ring og spør
          </a>
        </div>

        {LV_MENU.slice(0, 2).map((c) => (
          <div key={c.key} className="relative col-span-3 aspect-square overflow-hidden rounded-2xl border border-accent/15 md:col-span-2">
            <LvMenuCoverImage img={c.img} sizes="300px" />
            <div className="absolute inset-x-0 bottom-0 bg-background/85 px-4 py-3">
              <p className="text-xs font-bold uppercase text-accent">{c.label}</p>
            </div>
          </div>
        ))}

        <div className="col-span-6 grid gap-3 sm:grid-cols-2 md:col-span-4 md:grid-cols-2">
          {LV_MENU.slice(2).map((c) => (
            <div key={c.key} className="flex gap-4 rounded-xl border border-accent/12 bg-raised p-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                <LvMenuCoverImage img={c.img} sizes="64px" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#f5f0e8]">{c.label}</p>
                <p className="text-[11px] text-[#d7cfc4]/75">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="kontakt" className="col-span-6 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-accent/20 p-8 md:col-span-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">Kontakt</p>
            <p className="mt-2 text-sm">{SITE.address}</p>
            <p className="text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
          </div>
          <div className="flex gap-3">
            <a href={SITE.phoneHref} className="rounded bg-accent px-6 py-3 text-xs font-bold uppercase text-ink">
              Ring
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded border border-white/15 px-6 py-3 text-xs font-bold uppercase">
              Kart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
