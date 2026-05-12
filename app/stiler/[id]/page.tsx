import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  STIL_TEMPLATES,
  parseStilTemplateId,
  stilTemplateMetadata,
} from "@/lib/stiler-templates";
import { STIL_PREVIEW_COMPONENTS } from "@/components/stiler/registry";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return STIL_TEMPLATES.map((t) => ({ id: String(t.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const num = parseStilTemplateId(id);
  if (num === undefined) return { title: "Stil | Bjerkvik Grill" };
  return stilTemplateMetadata(num)!;
}

export default async function StilPreviewPage({ params }: Props) {
  const { id } = await params;
  const num = parseStilTemplateId(id);
  if (num === undefined) notFound();
  const Preview = STIL_PREVIEW_COMPONENTS[num];
  if (!Preview) notFound();
  return <Preview />;
}
