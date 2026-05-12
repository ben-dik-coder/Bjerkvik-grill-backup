import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, Phone } from "lucide-react";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant12() {
  return (
    <div className="min-h-screen bg-background pb-28 text-[#ece7df] md:pb-24">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <span className="font-serif text-lg text-accent">{SITE.name}</span>
        <Link href="/layout-valg" className="text-[10px] uppercase tracking-[0.35em] text-[#d7cfc4]/65 hover:text-accent">
          Layout-valg
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 pt-4 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.55em] text-accent/70">Kompakt åpning</p>
        <h1 className="font-serif mt-4 text-3xl font-semibold text-[#f5f0e8]">Lite scroll — stor botnfelt</h1>
        <p className="mt-4 text-sm text-[#d7cfc4]/85">
          Primær navigasjon samlet i en tykk rad nederst (som en verktøylinje). Menyen er en enkel vertikal liste.
        </p>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-accent/15">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="640px" />
        </div>

        <ul className="mt-12 space-y-6 border-l border-accent/25 pl-6">
          {LV_MENU.map((c) => (
            <li key={c.key}>
              <p className="font-serif text-xl text-[#f5f0e8]">{c.label}</p>
              <p className="text-xs text-[#d7cfc4]/75">{c.sub}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer id="kontakt" className="mx-auto mt-16 max-w-2xl px-6 text-center text-xs text-[#d7cfc4]/75 md:px-10">
        <p>{SITE.address}</p>
        <p className="mt-1">{SITE.phoneDisplay}</p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-accent/25 bg-sunken/98 backdrop-blur-xl">
        <a href={SITE.phoneHref} className="flex flex-1 flex-col items-center gap-1 py-4 text-[10px] font-bold uppercase tracking-wider text-ink md:flex-row md:justify-center md:gap-2 md:py-5 bg-accent">
          <Phone className="h-5 w-5" />
          Ring
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 border-x border-accent/25 py-4 text-[10px] font-bold uppercase tracking-wider text-accent md:flex-row md:justify-center md:gap-2 md:py-5"
        >
          <MapPin className="h-5 w-5" />
          Kart
        </a>
        <Link href="/layout-valg" className="flex flex-1 flex-col items-center gap-1 py-4 text-[10px] font-bold uppercase tracking-wider text-[#d7cfc4] md:flex-row md:justify-center md:gap-2 md:py-5">
          <BookOpen className="h-5 w-5" />
          Mer layout
        </Link>
      </div>
    </div>
  );
}
