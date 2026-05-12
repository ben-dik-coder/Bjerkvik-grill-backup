import type { ComponentType } from "react";
import LayoutVariant01 from "@/components/layout-valg/variants/LayoutVariant01";
import LayoutVariant02 from "@/components/layout-valg/variants/LayoutVariant02";
import LayoutVariant03 from "@/components/layout-valg/variants/LayoutVariant03";
import LayoutVariant04 from "@/components/layout-valg/variants/LayoutVariant04";
import LayoutVariant05 from "@/components/layout-valg/variants/LayoutVariant05";
import LayoutVariant06 from "@/components/layout-valg/variants/LayoutVariant06";
import LayoutVariant07 from "@/components/layout-valg/variants/LayoutVariant07";
import LayoutVariant08 from "@/components/layout-valg/variants/LayoutVariant08";
import LayoutVariant09 from "@/components/layout-valg/variants/LayoutVariant09";
import LayoutVariant10 from "@/components/layout-valg/variants/LayoutVariant10";
import LayoutVariant11 from "@/components/layout-valg/variants/LayoutVariant11";
import LayoutVariant12 from "@/components/layout-valg/variants/LayoutVariant12";
import LayoutVariant13 from "@/components/layout-valg/variants/LayoutVariant13";
import LayoutVariant14 from "@/components/layout-valg/variants/LayoutVariant14";
import LayoutVariant15 from "@/components/layout-valg/variants/LayoutVariant15";

const list = [
  LayoutVariant01,
  LayoutVariant02,
  LayoutVariant03,
  LayoutVariant04,
  LayoutVariant05,
  LayoutVariant06,
  LayoutVariant07,
  LayoutVariant08,
  LayoutVariant09,
  LayoutVariant10,
  LayoutVariant11,
  LayoutVariant12,
  LayoutVariant13,
  LayoutVariant14,
  LayoutVariant15,
] as const;

export const LAYOUT_VARIANT_COMPONENTS: Record<
  number,
  ComponentType
> = Object.fromEntries(list.map((Comp, i) => [i + 1, Comp])) as Record<
  number,
  ComponentType
>;

export function getLayoutVariant(id: number): ComponentType | undefined {
  return LAYOUT_VARIANT_COMPONENTS[id];
}
