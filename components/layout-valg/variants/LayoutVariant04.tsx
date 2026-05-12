import Image from "next/image";
import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant04() {
  return (
    <div className="min-h-screen bg-background font-mono text-[#ece7df]">
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
        <div className="flex items-center justify-between border-b border-accent/30 pb-4">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">{SITE.name}</span>
          <Link href="/layout-valg" className="text-[11px] text-[#d7cfc4]/70 hover:text-accent">
            [layout-valg]
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-[#f5f0e8] md:text-4xl">
              REGNSKAP_FOR_SMAK
            </h1>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-[#d7cfc4]/80">
              Rad-for-rad oversikt. Ingen fluff — bare hva du kan bestille og hvordan du finner oss.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href={SITE.phoneHref}
              className="flex h-12 w-full items-center justify-center border-2 border-accent bg-accent px-6 text-xs font-bold uppercase tracking-wider text-ink md:w-40"
            >
              Ring
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center border-2 border-[#ece7df]/30 px-6 text-xs font-bold uppercase tracking-wider md:w-40"
            >
              Kart
            </a>
          </div>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-accent/40">
                <th className="py-3 pr-4 font-semibold uppercase tracking-widest text-accent">Kategori</th>
                <th className="py-3 pr-4 font-semibold uppercase tracking-widest text-accent">Beskrivelse</th>
                <th className="py-3 font-semibold uppercase tracking-widest text-accent">Visuelt</th>
              </tr>
            </thead>
            <tbody>
              {LV_MENU.map((c) => (
                <tr key={c.key} className="border-b border-white/[0.06]">
                  <td className="py-4 align-middle font-semibold text-[#f5f0e8]">{c.label}</td>
                  <td className="max-w-xs py-4 align-middle text-[#d7cfc4]/75">{c.sub}</td>
                  <td className="py-2 align-middle">
                    <div className="relative h-14 w-20 overflow-hidden border border-accent/20">
                      <LvMenuCoverImage img={c.img} sizes="80px" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer id="kontakt" className="mt-16 border border-accent/20 p-6 text-xs leading-relaxed">
          <p className="font-semibold uppercase tracking-wider text-accent">Kontakt_chunk</p>
          <p className="mt-2">{SITE.address}</p>
          <p className="text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
        </footer>
      </div>
    </div>
  );
}
