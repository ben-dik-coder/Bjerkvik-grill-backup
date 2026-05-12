import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant06() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <section aria-label="Meny som bånd">
        {LV_MENU.map((c, i) => (
          <Link
            key={c.key}
            href="#meny-detalj"
            className={`relative flex min-h-[140px] items-center overflow-hidden px-8 py-10 md:min-h-[160px] md:px-16 ${
              i % 2 === 0 ? "bg-raised" : "bg-sunken"
            }`}
          >
            <LvMenuCoverImage img={c.img} sizes="100vw" className="object-cover opacity-25" />
            <div className="relative flex w-full items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-accent/80">Meny</p>
                <p className="font-serif mt-2 text-4xl font-semibold text-[#f5f0e8] md:text-6xl">{c.label}</p>
                <p className="mt-2 max-w-md text-sm text-[#d7cfc4]/80">{c.sub}</p>
              </div>
              <ChevronRight className="h-10 w-10 shrink-0 text-accent" aria-hidden />
            </div>
          </Link>
        ))}
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 md:flex md:items-center md:justify-between md:gap-12 md:px-12">
        <div className="max-w-xl">
          <Link href="/layout-valg" className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent/70 hover:text-accent">
            Layout-valg
          </Link>
          <h1 className="font-serif mt-6 text-3xl font-semibold text-[#f5f0e8] md:text-4xl">Hero under meny-båndene</h1>
          <p className="mt-4 text-sm text-[#d7cfc4]/85">
            Her flyttes oppmerksomheten først til kategoriene — deretter til historien om stedet.
          </p>
        </div>
        <div className="relative mt-10 aspect-video w-full shrink-0 overflow-hidden border border-accent/20 md:mt-0 md:w-[320px]">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="320px" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-y border-accent/15 px-6 py-10">
        <a href={SITE.phoneHref} className="rounded-md bg-accent px-10 py-3 text-xs font-bold uppercase tracking-widest text-ink">
          Ring
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border-2 border-dashed border-accent/50 px-10 py-3 text-xs font-bold uppercase tracking-widest text-accent"
        >
          Kart
        </a>
      </div>

      <footer id="kontakt" className="px-6 py-12 text-center text-sm">
        <p className="font-medium">{SITE.address}</p>
        <p className="text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
