import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant05() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <nav className="px-6 pt-8 md:px-12">
        <Link href="/layout-valg" className="inline-block border-b border-accent pb-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-accent">
          Tilbake til layout-valg
        </Link>
      </nav>

      <header className="mx-auto max-w-3xl px-6 pt-10 md:px-12">
        <h1 className="font-serif text-4xl font-semibold text-[#f5f0e8] md:text-5xl">Vekslende rom</h1>
        <p className="mt-5 text-sm text-[#d7cfc4]/85">
          Kortene «brettes» visuelt inn fra sidene — samme meny, annen rytme.
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-2xl space-y-6 px-6 md:px-12">
        <a
          href={SITE.phoneHref}
          className="block w-full rounded-none border-l-4 border-accent bg-raised py-5 pl-6 pr-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-accent transition hover:bg-accent hover:text-ink"
        >
          Ring oss nå
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-none border border-[#ece7df]/20 py-5 text-center text-sm font-bold uppercase tracking-[0.25em] text-[#f5f0e8]"
        >
          Åpne kart i ny fane
        </a>
      </div>

      <section className="mx-auto mt-16 max-w-4xl space-y-8 px-6 pb-24 md:px-12">
        <h2 className="font-serif text-xs uppercase tracking-[0.35em] text-[#d7cfc4]/65">Menykort</h2>
        {LV_MENU.map((c, i) => (
          <article
            key={c.key}
            className={`flex flex-col gap-4 overflow-hidden border border-accent/15 bg-sunken md:flex-row md:items-stretch ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="relative h-48 md:h-auto md:w-1/2">
              <LvMenuCoverImage img={c.img} sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent">{c.label}</p>
              <p className="font-serif mt-2 text-2xl text-[#f5f0e8]">{c.sub}</p>
            </div>
          </article>
        ))}
      </section>

      <footer id="kontakt" className="border-t border-accent/15 px-6 py-12 text-center md:px-12">
        <p className="text-sm font-semibold">{SITE.address}</p>
        <p className="mt-1 text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
