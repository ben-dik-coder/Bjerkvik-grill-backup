import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LAYOUT_VALG } from "@/lib/layout-valg/meta";
import { getLayoutVariant } from "@/components/layout-valg/registry";
import { INTERNAL_PREVIEW_ROBOTS } from "@/lib/seo-internal";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return LAYOUT_VALG.map((v) => ({ id: String(v.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const num = Number(id);
  const entry = LAYOUT_VALG.find((v) => v.id === num);
  if (!entry)
    return {
      title: "Layout | Bjerkvik Grill",
      robots: INTERNAL_PREVIEW_ROBOTS,
    };
  return {
    title: `Layout ${entry.id} — ${entry.title} | Bjerkvik Grill`,
    description: entry.blurb,
    robots: INTERNAL_PREVIEW_ROBOTS,
  };
}

export default async function LayoutValgPage({ params }: Props) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isFinite(num) || num < 1 || num > 15) notFound();

  const Cmp = getLayoutVariant(num);
  if (!Cmp) notFound();

  return <Cmp />;
}
