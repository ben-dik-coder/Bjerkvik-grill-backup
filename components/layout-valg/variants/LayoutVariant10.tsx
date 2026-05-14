"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Beef, Flame, Pizza } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

const ICONS = {
  burger: Beef,
  kebab: Flame,
  pizza: Pizza,
} satisfies Record<(typeof LV_MENU)[number]["key"], LucideIcon>;

export default function LayoutVariant10() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-accent/75">Dashboard-stemning</p>
            <h1 className="font-serif mt-3 text-4xl font-semibold text-[#f5f0e8] md:text-5xl">Tre like porter</h1>
          </div>
          <Link href="/layout-valg" className="text-xs font-semibold uppercase tracking-wider text-[#d7cfc4]/65 hover:text-accent">
            ← Layout-valg
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {LV_MENU.map((c) => {
            const Icon = ICONS[c.key];
            return (
              <div key={c.key} className="flex flex-col border border-accent/15 bg-sunken p-5 text-center md:p-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/5">
                  <Icon className="h-9 w-9 text-accent" strokeWidth={1.75} />
                </div>
                <p className="font-serif mt-6 text-xl text-[#f5f0e8]">{c.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#d7cfc4]/75">{c.sub}</p>
                <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden">
                  <LvMenuCoverImage img={c.img} sizes="200px" className="object-cover opacity-80" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <a href={SITE.phoneHref} className="group relative overflow-hidden rounded-full px-12 py-4">
            <span className="absolute inset-0 bg-accent transition group-hover:scale-105" />
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.3em] text-ink">Ring</span>
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-accent transition hover:bg-accent hover:text-ink"
          >
            Kart
          </a>
        </div>

        <footer id="kontakt" className="mt-16 border border-accent/15 bg-raised p-8 text-center">
          <p className="text-sm">{SITE.address}</p>
          <p className="mt-1 text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
        </footer>
      </div>
    </div>
  );
}
