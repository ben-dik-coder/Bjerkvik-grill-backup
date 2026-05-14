import Link from "next/link";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant09() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="border-b border-accent/15 px-6 py-6 md:flex md:items-center md:justify-between md:px-12">
        <h1 className="font-serif text-3xl font-semibold text-[#f5f0e8]">Sikksakk-historie</h1>
        <Link href="/layout-valg" className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-accent md:mt-0">
          Layout-valg →
        </Link>
      </div>

      <div className="mx-auto max-w-5xl space-y-20 px-6 py-16 md:px-12 md:py-20">
        {LV_MENU.map((c, i) => (
          <div
            key={c.key}
            className={`flex flex-col gap-8 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="relative aspect-[5/4] w-full md:w-1/2">
              <LvMenuCoverImage img={c.img} sizes="(max-width:768px) 100vw, 45vw" />
              <div className="absolute inset-0 border border-accent/20" />
            </div>
            <div className="md:w-1/2 md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-serif mt-3 text-3xl text-[#f5f0e8]">{c.label}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#d7cfc4]/85">{c.sub}</p>
              <button type="button" className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent underline decoration-accent/40 underline-offset-8">
                Åpne meny (demo)
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-xl flex-col gap-4 px-6 pb-12">
        <a href={SITE.phoneHref} className="w-full skew-x-[-3deg] bg-accent py-4 text-center text-sm font-black uppercase tracking-wide text-ink">
          Ring oss
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full skew-x-[-3deg] border-2 border-accent py-4 text-center text-sm font-black uppercase tracking-wide text-accent"
        >
          Finn oss
        </a>
      </div>

      <footer id="kontakt" className="border-t border-accent/15 px-6 py-10 text-center">
        <p className="text-sm font-medium">{SITE.address}</p>
        <p className="text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
      </footer>
    </div>
  );
}
