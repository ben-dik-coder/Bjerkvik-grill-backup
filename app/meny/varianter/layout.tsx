import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { INTERNAL_PREVIEW_ROBOTS } from "@/lib/seo-internal";

export const metadata: Metadata = {
  robots: INTERNAL_PREVIEW_ROBOTS,
};

/**
 * Alle sider under /meny/varianter er bare for å se ulike uttrykk.
 * Den vanlige menyen ligger alltid på /meny til du evt. ber om å bytte.
 */
export default function MenyVarianterLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="border-b border-amber-800/50 bg-amber-950 px-3 py-2.5 text-center font-card text-[0.7rem] leading-snug text-amber-100 sm:text-xs">
        <strong className="font-semibold text-amber-50">Kun forhåndsvisning.</strong> Ingenting her blir automatisk den «ekte» menyen.{" "}
        <Link href="/meny" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">
          Vanlig meny (/meny)
        </Link>{" "}
        er uendret. Når du liker en stil, si f.eks. «ta stil 5» — så kan vi bruke den der.
      </div>
      {children}
    </>
  );
}
