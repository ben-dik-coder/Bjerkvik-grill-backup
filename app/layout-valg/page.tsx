import type { Metadata } from "next";
import Link from "next/link";
import { LAYOUT_VALG } from "@/lib/layout-valg/meta";

export const metadata: Metadata = {
  title: "Layout-valg — gourmet-stil | Bjerkvik Grill",
  description:
    "15 unike sideoppsett med samme mørke og gull uttrykk — velg én layout å bygge videre på.",
};

export default function LayoutValgHubPage() {
  return (
    <div className="min-h-screen bg-background px-5 py-12 text-[#ece7df] md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-accent/80">
          Gourmet-palett · kun layout varierer
        </p>
        <h1 className="font-serif mt-4 text-balance text-3xl font-semibold tracking-tight text-[#f5f0e8] md:text-4xl">
          15 eksempler på helt ulike sider
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#d7cfc4]/85">
          Alle bruker samme stil (mørk bakgrunn og gull), men alt annet er forskjellig: hvordan menyen vises,
          hvor knappene sitter, hvordan du navigerer, og hvordan innholdet er organisert. Åpne ett og ett —
          si fra hvilket nummer du vil bruke på den ekte siden.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LAYOUT_VALG.map((v) => (
            <Link
              key={v.id}
              href={`/layout-valg/${v.id}`}
              className="group rounded-2xl border border-accent/15 bg-raised/80 p-5 transition hover:border-accent/40 hover:bg-raised"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                Layout {v.id}
              </span>
              <h2 className="font-serif mt-3 text-lg font-semibold text-[#f5f0e8] group-hover:text-accent">
                {v.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#d7cfc4]/75">{v.blurb}</p>
              <span className="mt-4 inline-flex text-[11px] font-semibold text-accent/90">
                Åpne eksempel →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-[#d7cfc4]/55">
          <Link href="/" className="text-accent underline-offset-4 hover:underline">
            Til forsiden
          </Link>
          {" · "}
          <Link href="/stiler" className="text-accent underline-offset-4 hover:underline">
            Andre stil-farger (arkiv)
          </Link>
        </p>
      </div>
    </div>
  );
}
