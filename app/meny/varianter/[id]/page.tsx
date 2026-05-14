import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MenyVisVariantSide } from "@/components/meny/MenyVisVariantSkall";
import { MENY_VIS_TEMA_NAVN } from "@/lib/meny-vis-tema";

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: raw } = await params;
  const n = Number.parseInt(raw, 10);
  if (Number.isNaN(n) || n < 1 || n > 10) {
    return { title: "Meny-stil" };
  }
  if (n === 1) {
    return {
      title: "Meny · Plakat (samme som /meny) · Bjerkvik Grill",
      description: "Identisk med den vanlige meny-siden — mørk plakat, grain og innhold.",
      robots: { index: false, follow: false },
    };
  }
  const navn = MENY_VIS_TEMA_NAVN[n - 1] ?? `Stil ${n}`;
  return {
    title: `Meny · ${navn} · Bjerkvik Grill`,
    description: `Forhåndsvisning — stilen «${navn}». Si fra om du vil bruke den på /meny.`,
    robots: { index: false, follow: false },
  };
}

export default async function MenyVariantSidePage({ params }: Props) {
  const { id: raw } = await params;
  const n = Number.parseInt(raw, 10);
  if (Number.isNaN(n) || n < 1 || n > 10) {
    notFound();
  }
  return <MenyVisVariantSide variantId={n} />;
}
