import { AlertTriangle, Flame, Leaf, Pizza } from "lucide-react";
import {
  burgereSalaterRight,
  dessertItems,
  kebabItems,
  pizza,
  snadderItems,
} from "@/lib/meny-data";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='60' cy='30' r='1'/%3E%3Ccircle cx='120' cy='80' r='1'/%3E%3Ccircle cx='90' cy='140' r='1'/%3E%3Ccircle cx='30' cy='100' r='1'/%3E%3C/g%3E%3C/svg%3E\")";

export type FavorittMenyKortProps = {
  category: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  /** Én pris (burger) — bruk enten denne eller `priceLines`. */
  price?: string;
  /** Medium + stor (pizza) — bruk enten denne eller `price`. */
  priceLines?: readonly { label: string; amount: number }[];
  accent: "flame" | "pizza";
  tags: readonly { kind: "leaf" | "alert"; text: string }[];
};

export function FavorittMenyKort({
  category,
  titleLine1,
  titleLine2,
  description,
  price,
  priceLines,
  accent,
  tags,
}: FavorittMenyKortProps) {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-1 flex-col bg-[#090909] text-left">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: GRAIN_SVG }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(120,78,40,0.10), transparent 30%), radial-gradient(circle at bottom right, rgba(120,78,40,0.08), transparent 25%)",
        }}
        aria-hidden
      />
      <div className="relative flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-gradient-to-b from-white/[0.02] to-white/[0.01] px-2.5 py-2.5 backdrop-blur-[6px] sm:px-3 sm:py-3 md:px-4 md:py-4">
        <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2 sm:gap-2">
          <span className="font-card shrink-0 text-[0.52rem] font-medium uppercase tracking-[0.18em] text-[#9d7246] sm:text-[0.56rem]">
            {category}
          </span>
          <div className="h-px min-w-0 flex-1 bg-[rgba(181,137,82,0.25)]" />
          {accent === "flame" ? (
            <Flame className="size-3 shrink-0 text-[#c63527] sm:size-3.5" strokeWidth={2.5} aria-hidden />
          ) : (
            <Pizza className="size-3 shrink-0 text-[#c9a227] sm:size-3.5" strokeWidth={2.25} aria-hidden />
          )}
        </div>

        <h2 className="font-display text-[clamp(1.35rem,6vw,2.35rem)] font-semibold uppercase leading-[0.88] tracking-[0.02em] text-[#f5f1ea] sm:text-[clamp(1.45rem,5.5vw,2.5rem)]">
          {titleLine1}
          <br />
          {titleLine2}
        </h2>

        <div className="relative my-1.5 w-[3.75rem] max-w-full sm:my-2 sm:w-[4.25rem]">
          <div className="h-px w-full bg-[rgba(181,137,82,0.35)]" />
          <div className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#9d7246] sm:size-1.5" />
        </div>

        <p className="mb-3 max-w-[98%] font-card text-[0.66rem] font-light leading-snug text-[#d7d0c7] sm:mb-3 sm:text-[0.72rem] md:mb-4 md:text-[0.76rem]">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2 gap-y-2">
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-1.5">
            {tags.map((t) => (
              <div
                key={t.text}
                className="flex items-center gap-1.5 font-card text-[0.48rem] font-medium uppercase tracking-[0.08em] text-[#a7a094] sm:text-[0.54rem]"
              >
                {t.kind === "leaf" ? (
                  <Leaf className="size-2.5 shrink-0 text-[#6d9b50] sm:size-3" strokeWidth={2} aria-hidden />
                ) : (
                  <AlertTriangle className="size-2.5 shrink-0 text-[#c9a227] sm:size-3" strokeWidth={2} aria-hidden />
                )}
                <span>{t.text}</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-end gap-2 sm:gap-3">
            <div className="min-h-7 w-px shrink-0 self-stretch bg-[rgba(181,137,82,0.25)] sm:min-h-9" />
            {priceLines != null && priceLines.length > 0 ? (
              <div className="flex flex-col items-end gap-1">
                {priceLines.map((pl) => (
                  <div key={pl.label} className="text-right">
                    <span className="font-card block text-[0.38rem] font-medium uppercase tracking-[0.14em] text-[#9d7246]">
                      {pl.label}
                    </span>
                    <p className="font-display text-[clamp(0.95rem,3.5vw,1.4rem)] leading-[0.95] tracking-[0.01em] text-[#b58952]">
                      {pl.amount}
                      <span className="ml-0.5 align-top text-[0.55rem] font-medium text-[#b58952] sm:text-[0.58rem]">
                        ,-
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ) : price != null ? (
              <p className="font-display text-[clamp(1.2rem,5vw,2.1rem)] leading-[0.9] tracking-[0.01em] text-[#b58952]">
                {price}
                <span className="ml-0.5 align-top text-[0.65rem] font-medium text-[#b58952] sm:text-xs">,-</span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export const FAVORITT_BACON_CHEESE: FavorittMenyKortProps = {
  category: "Burger",
  titleLine1: "Bacon",
  titleLine2: "Cheese",
  description: "180 g storfekjøtt, cheddar, bacon, salat, løk og burgerdressing.",
  price: "199",
  accent: "flame",
  tags: [
    { kind: "leaf", text: "Kan tilpasses vegetar" },
    { kind: "alert", text: "Egg, hvete, melk" },
  ],
};

const vernerpliktenPizza = pizza.find((p) => p.name === "Vernerplikten")!;

/** Samme tall som på `/meny` (medium + stor). */
export const FAVORITT_VERNEPLIKTEN: FavorittMenyKortProps = {
  category: "Pizza",
  titleLine1: "Verner",
  titleLine2: "plikten",
  description: vernerpliktenPizza.toppings,
  priceLines: [
    { label: "Medium", amount: vernerpliktenPizza.medium },
    { label: "Stor", amount: vernerpliktenPizza.stor },
  ],
  accent: "pizza",
  tags: [
    { kind: "leaf", text: "Kan tilpasses vegetar" },
    { kind: "alert", text: "Gluten, melk" },
  ],
};

const biffsnadder = snadderItems.find((s) => s.name === "Biffsnadder")!;

/** Samme tekst og pris som på `/meny`. */
export const FAVORITT_BIFFSNADDER: FavorittMenyKortProps = {
  category: "Snadder",
  titleLine1: "Biff",
  titleLine2: "snadder",
  description: biffsnadder.desc ?? "",
  price: String(biffsnadder.prices[0]),
  accent: "flame",
  tags: [{ kind: "alert", text: "Egg, selleri" }],
};

const juicyLucy = burgereSalaterRight.find((b) => b.name === "Juicy lucy")!;

/** Samme tekst og pris som på `/meny`. */
export const FAVORITT_JUICY_LUCY: FavorittMenyKortProps = {
  category: "Burger",
  titleLine1: "Juicy",
  titleLine2: "Lucy",
  description: juicyLucy.desc ?? "",
  price: String(juicyLucy.prices[0]),
  accent: "flame",
  tags: [{ kind: "alert", text: "Egg, gluten, melk, sennep, soya" }],
};

const kebabmixTallerken = kebabItems.find((k) => k.name === "Kebabmix tallerken")!;

export const FAVORITT_KEBABMIX_TALLERKEN: FavorittMenyKortProps = {
  category: "Kebab",
  titleLine1: "Kebabmix",
  titleLine2: "tallerken",
  description: kebabmixTallerken.desc ?? "",
  price: String(kebabmixTallerken.prices[0]),
  accent: "flame",
  tags: [],
};

const bjerkvikSpesialPizza = pizza.find((p) => p.name === "Bjerkvik spesial")!;

export const FAVORITT_BJERKVIK_SPESIAL: FavorittMenyKortProps = {
  category: "Pizza",
  titleLine1: "Bjerkvik",
  titleLine2: "spesial",
  description: bjerkvikSpesialPizza.toppings,
  priceLines: [
    { label: "Medium", amount: bjerkvikSpesialPizza.medium },
    { label: "Stor", amount: bjerkvikSpesialPizza.stor },
  ],
  accent: "pizza",
  tags: [
    { kind: "leaf", text: "Kan tilpasses vegetar" },
    { kind: "alert", text: "Gluten, melk" },
  ],
};

const tacoburger = burgereSalaterRight.find((b) => b.name === "Tacoburger")!;

export const FAVORITT_TACOBURGER: FavorittMenyKortProps = {
  category: "Burger",
  titleLine1: "Taco",
  titleLine2: "burger",
  description: tacoburger.desc ?? "",
  price: String(tacoburger.prices[0]),
  accent: "flame",
  tags: [{ kind: "alert", text: "Egg, gluten, melk, sennep, soya" }],
};

const belgiskVaffel = dessertItems.find((d) => d.name === "Belgisk vaffel med is")!;

export const FAVORITT_BELGISK_VAFFEL: FavorittMenyKortProps = {
  category: "Dessert",
  titleLine1: "Belgisk",
  titleLine2: "vaffel",
  description: "Varm belgisk vaffel med is.",
  price: String(belgiskVaffel.prices[0]),
  accent: "flame",
  tags: [{ kind: "alert", text: "Melk, gluten" }],
};
