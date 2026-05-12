import type { Metadata } from "next";

import { MenyExperimentalPageContent } from "@/components/meny/MenyExperimentalPage";
import { PremiumMenyPageContent } from "@/components/meny/PremiumMenyPage";
import { menyExperimentalAktivert } from "@/lib/meny-side-rollout";

export const metadata: Metadata = {
  title: "Meny · Bjerkvik Grill",
  description:
    "Komplett meny: pizza, hovedretter, kebab, småretter, dessert og drikke ved Bjerkvik Grill.",
};

export default function MenyFullPage() {
  if (menyExperimentalAktivert()) {
    return <MenyExperimentalPageContent />;
  }
  return <PremiumMenyPageContent />;
}
