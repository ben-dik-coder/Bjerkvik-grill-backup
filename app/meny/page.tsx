import type { Metadata } from "next";

import { PremiumMenyPageContent } from "@/components/meny/PremiumMenyPage";

export const metadata: Metadata = {
  title: "Meny · Bjerkvik Grill",
  description:
    "Komplett meny: pizza, hovedretter, kebab, småretter, dessert og drikke ved Bjerkvik Grill.",
};

export default function MenyFullPage() {
  return <PremiumMenyPageContent />;
}
