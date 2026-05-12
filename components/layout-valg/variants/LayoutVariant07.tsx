import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant07() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <Link href="/layout-valg" className="absolute left-6 top-6 z-30 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d7cfc4]/70 hover:text-accent">
        Layout-valg
      </Link>

      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 px-3 pb-24 pt-14 md:grid-rows-[repeat(8,minmax(0,52px))] md:gap-3 md:px-6 md:pt-16">
        <div className="col-span-4 row-span-2 flex flex-col justify-end border border-accent/20 bg-raised p-6 md:col-span-2 md:row-span-4 md:min-h-[280px]">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent/75">Hero-celle</p>
          <h1 className="font-serif mt-2 text-3xl font-semibold leading-tight md:text-4xl">Bento for restaurant</h1>
        </div>

        <div className="relative col-span-4 row-span-3 border border-accent/15 md:col-span-2 md:row-span-4 md:min-h-[280px]">
          <Image src={IMG.hero} alt="" fill className="object-cover opacity-90" sizes="50vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {LV_MENU.map((c, idx) => (
          <div
            key={c.key}
            className={`relative col-span-2 overflow-hidden border border-accent/15 md:col-span-1 md:row-span-2 ${
              idx === 0 ? "md:col-start-1" : ""
            }`}
          >
            <LvMenuCoverImage img={c.img} sizes="200px" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background to-transparent p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{c.label}</span>
            </div>
          </div>
        ))}

        <div className="col-span-4 flex flex-wrap items-center justify-between gap-4 border border-accent/25 bg-sunken p-5 md:col-span-2 md:row-span-2 md:flex-col md:items-stretch md:justify-center md:p-6">
          <p className="text-xs text-[#d7cfc4]/80">Handlinger i én celle — kvadratiske knapper.</p>
          <div className="flex w-full flex-col gap-2 md:flex-row">
            <a href={SITE.phoneHref} className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 text-[11px] font-bold uppercase tracking-wider text-ink">
              <Phone className="h-4 w-4" />
              Ring
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center border border-accent py-4 text-[11px] font-bold uppercase tracking-wider text-accent"
            >
              Kart
            </a>
          </div>
        </div>

        <div id="kontakt" className="col-span-4 flex flex-col justify-center border border-dashed border-accent/30 p-6 text-sm md:col-span-2 md:row-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">Kontakt</p>
          <p className="mt-2 font-medium">{SITE.address}</p>
          <p className="text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
        </div>
      </div>
    </div>
  );
}
