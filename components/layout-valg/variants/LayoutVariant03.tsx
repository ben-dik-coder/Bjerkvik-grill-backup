import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant03() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="fixed right-6 top-6 z-20 md:right-10 md:top-8">
        <Link href="/layout-valg" className="rounded border border-accent/30 bg-sunken/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
          Layout-valg
        </Link>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <p className="text-[10px] uppercase tracking-[0.55em] text-accent/70">Magasin</p>
          <h1 className="font-serif mt-4 text-4xl font-semibold leading-[1.08] text-[#f5f0e8] md:text-5xl">
            Et kjøkken som tør å blande
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-[#d7cfc4]/90">
            Grill møter presisjon fra sushi-brettet og varme fra steinovnen — alt i ett lokale ved sjøen.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href={SITE.phoneHref}
              className="group flex items-center justify-between border-b border-accent/25 py-3 text-sm font-semibold text-[#f5f0e8] transition hover:border-accent"
            >
              Bestill samtale (ring)
              <Phone className="h-4 w-4 text-accent transition group-hover:scale-110" />
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[#ece7df]/10 py-3 text-sm font-semibold text-[#d7cfc4] transition hover:text-accent"
            >
              Veibeskrivelse
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-lg:mx-auto max-lg:max-w-md lg:-mr-[10%] lg:w-[115%]">
            <Image src={IMG.hero} alt="" fill className="object-cover" sizes="(max-width:1024px) 90vw, 55vw" priority />
            <div className="absolute inset-0 ring-1 ring-accent/20" />
          </div>

          <section className="relative z-10 -mt-16 space-y-3 border border-accent/15 bg-sunken/95 p-4 backdrop-blur-md lg:-mt-24 lg:ml-8 lg:max-w-lg lg:p-6">
            <h2 className="font-serif text-xs uppercase tracking-[0.35em] text-accent">Menyliste</h2>
            {LV_MENU.map((c) => (
              <div key={c.key} className="flex gap-4 border-b border-white/5 py-4 last:border-0">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm">
                  <LvMenuCoverImage img={c.img} sizes="64px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-lg text-[#f5f0e8]">{c.label}</p>
                  <p className="text-xs text-[#d7cfc4]/75">{c.sub}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <footer id="kontakt" className="border-t border-accent/15 px-6 py-10 md:px-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent/70">Kontakt</p>
        <p className="mt-2 font-medium">{SITE.address}</p>
        <p className="text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
