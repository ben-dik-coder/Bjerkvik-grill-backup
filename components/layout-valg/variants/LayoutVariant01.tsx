import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant01() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <header className="flex justify-center px-6 pt-10">
        <Link href="/layout-valg" className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent/80 hover:text-accent">
          ← Layout-valg
        </Link>
      </header>

      <main className="mx-auto flex max-w-lg flex-col items-center px-6 pb-24 pt-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.55em] text-accent/70">Sesong • Sjø • Salt</p>
        <h1 className="font-serif mt-6 text-4xl font-semibold leading-tight text-[#f5f0e8] md:text-5xl">
          Et måltid i porten til nord
        </h1>
        <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <p className="mt-6 text-sm leading-relaxed text-[#d7cfc4]/95">
          Vi tilbereder med respekt for råvaren — burgere, sushi og pizza samlet ett sted i Bjerkvik.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-accent bg-accent px-8 text-xs font-bold uppercase tracking-widest text-ink"
          >
            <Phone className="h-4 w-4" />
            Ring
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#ece7df]/25 px-8 text-xs font-bold uppercase tracking-widest text-[#f5f0e8]"
          >
            <MapPin className="h-4 w-4" />
            Kart
          </a>
        </div>

        <section className="mt-16 w-full">
          <h2 className="font-serif text-xs uppercase tracking-[0.35em] text-[#d7cfc4]/80">Meny</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {LV_MENU.map((c) => (
              <div key={c.key} className="relative aspect-square overflow-hidden rounded-2xl border border-accent/15">
                <LvMenuCoverImage img={c.img} sizes="180px" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">{c.label}</p>
                  <p className="text-[11px] text-[#d7cfc4]/80">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="kontakt" className="border-t border-accent/15 px-6 py-10 text-center text-sm">
        <p className="font-semibold">{SITE.address}</p>
        <p className="mt-1 text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
