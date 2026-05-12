import Link from "next/link";
import { SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant14() {
  return (
    <div className="min-h-screen bg-background text-[#ece7df]">
      <div className="mx-auto max-w-xl px-8 py-16 md:py-24">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.45em] text-accent/70">
          <span>{SITE.name}</span>
          <Link href="/layout-valg" className="hover:text-accent">
            Layout-valg
          </Link>
        </div>

        <h1 className="font-serif mt-16 text-5xl font-light leading-none tracking-tight text-[#f5f0e8] md:text-7xl">
          Meny
        </h1>
        <p className="mt-10 text-sm leading-loose text-[#d7cfc4]/75">
          Minimal layout: bare linjer og ord. Ingen bilder i listen — godt egnet når du vil at typografien skal puste.
        </p>

        <div className="mt-16 space-y-0">
          {LV_MENU.map((c, i) => (
            <div key={c.key} className="border-t border-[#ece7df]/10 py-8 first:border-t-0">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-serif text-2xl text-[#f5f0e8] md:text-3xl">{c.label}</span>
                <span className="text-[10px] tabular-nums text-accent/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 max-w-md text-xs uppercase tracking-[0.2em] text-[#d7cfc4]/55">{c.sub}</p>
            </div>
          ))}
          <div className="border-t border-[#ece7df]/10 pt-10" />
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <a href={SITE.phoneHref} className="w-full border border-accent py-4 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-accent transition hover:bg-accent hover:text-ink">
            Ring
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d7cfc4] underline underline-offset-[12px] decoration-accent/40 hover:text-accent"
          >
            Kart
          </a>
        </div>

        <footer id="kontakt" className="mt-24 text-[11px] leading-relaxed text-[#d7cfc4]/65">
          <p>{SITE.address}</p>
          <p className="mt-2">{SITE.phoneDisplay}</p>
        </footer>
      </div>
    </div>
  );
}
