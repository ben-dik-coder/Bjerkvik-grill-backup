import Image from "next/image";
import { AlertTriangle, Flame, Leaf, Pizza } from "lucide-react";
import {
  burgereSalaterRight,
  kjottSnadderPastaLeft,
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
  /** Bildebakgrunn som fyller hele kortet; tekst ligges oppå. */
  coverSrc?: string;
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
  coverSrc,
}: FavorittMenyKortProps) {
  const medFoto = coverSrc != null && coverSrc.length > 0;

  const contentShellKlasser = [
    "relative z-[3] flex h-full min-h-0 w-full flex-1 flex-col overflow-y-auto px-2.5 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4",
    medFoto
      ? "backdrop-blur-[0.5px]"
      : "bg-gradient-to-b from-white/[0.095] to-white/[0.04] backdrop-blur-[2px]",
  ].join(" ");

  const tittelKlasser =
    medFoto
      ? "font-display text-[clamp(1.35rem,6vw,2.35rem)] font-bold uppercase leading-[0.88] tracking-[0.02em] text-[#fff9ef] [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-[clamp(1.45rem,5.5vw,2.5rem)]"
      : "font-display text-[clamp(1.35rem,6vw,2.35rem)] font-bold uppercase leading-[0.88] tracking-[0.02em] text-[#fff9ef] sm:text-[clamp(1.45rem,5.5vw,2.5rem)]";

  const beskrivelseKlasser = medFoto
    ? "mb-3 max-w-[98%] font-card text-[0.66rem] font-medium leading-snug text-[#f8f1ea]/95 sm:mb-3 sm:text-[0.72rem] md:mb-4 md:text-[0.76rem] [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]"
    : "mb-3 max-w-[98%] font-card text-[0.66rem] font-medium leading-snug text-[#f0e7dc] sm:mb-3 sm:text-[0.72rem] md:mb-4 md:text-[0.76rem]";

  const tagsTekstKlasser = medFoto
    ? "flex items-center gap-1.5 font-card text-[0.48rem] font-semibold uppercase tracking-[0.08em] text-[#eae2d8]/95 sm:text-[0.54rem] [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]"
    : "flex items-center gap-1.5 font-card text-[0.48rem] font-semibold uppercase tracking-[0.08em] text-[#d5cbbf] sm:text-[0.54rem]";

  return (
    <div className="relative flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-[#241a13] text-left">
      {medFoto ? (
        <>
          <Image
            src={coverSrc!}
            alt=""
            fill
            className="z-0 object-cover object-center"
            sizes="(max-width: 640px) 224px, 240px"
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/[0.62] via-black/[0.28] via-55% to-black/15"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-[0.05]"
            style={{ backgroundImage: GRAIN_SVG }}
            aria-hidden
          />
        </>
      ) : (
        <>
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
        </>
      )}

      <div className={contentShellKlasser}>
        <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2 sm:gap-2">
          <span className="font-card shrink-0 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-[#d2a96b] sm:text-[0.56rem]">
            {category}
          </span>
          <div className="h-px min-w-0 flex-1 bg-[rgba(210,169,107,0.42)]" />
          {accent === "flame" ? (
            <Flame className="size-3 shrink-0 text-[#c63527] drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] sm:size-3.5" strokeWidth={2.5} aria-hidden />
          ) : (
            <Pizza className="size-3 shrink-0 text-[#c9a227] drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] sm:size-3.5" strokeWidth={2.25} aria-hidden />
          )}
        </div>

        <h2 className={tittelKlasser}>
          {titleLine1}
          {titleLine2.trim() !== "" ? (
            <>
              <br />
              {titleLine2}
            </>
          ) : null}
        </h2>

        <div className="relative my-1.5 w-[3.75rem] max-w-full sm:my-2 sm:w-[4.25rem]">
          <div className="h-px w-full bg-[rgba(210,169,107,0.5)]" />
          <div className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d2a96b] sm:size-1.5" />
        </div>

        <p className={beskrivelseKlasser}>{description}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2 gap-y-2">
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-1.5">
            {tags.map((t) => (
              <div key={t.text} className={tagsTekstKlasser}>
                {t.kind === "leaf" ? (
                  <Leaf className="size-2.5 shrink-0 text-[#8bc76a] sm:size-3" strokeWidth={2} aria-hidden />
                ) : (
                  <AlertTriangle className="size-2.5 shrink-0 text-[#dfc04a] sm:size-3" strokeWidth={2} aria-hidden />
                )}
                <span>{t.text}</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-end gap-2 sm:gap-3">
            <div className="min-h-7 w-px shrink-0 self-stretch bg-[rgba(181,137,82,0.45)] sm:min-h-9" />
            {priceLines != null && priceLines.length > 0 ? (
              <div className="flex flex-col items-end gap-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                {priceLines.map((pl) => (
                  <div key={pl.label} className="text-right">
                    <span className="font-card block text-[0.38rem] font-bold uppercase tracking-[0.14em] text-[#d2a96b]">
                      {pl.label}
                    </span>
                    <p className="font-display text-[clamp(0.95rem,3.5vw,1.4rem)] font-bold leading-[0.95] tracking-[0.01em] text-[#d2a96b]">
                      {pl.amount}
                      <span className="ml-0.5 align-top text-[0.55rem] font-bold text-[#d2a96b] sm:text-[0.58rem]">
                        ,-
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ) : price != null ? (
              <p className="font-display text-[clamp(1.2rem,5vw,2.1rem)] font-bold leading-[0.9] tracking-[0.01em] text-[#d2a96b] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                {price}
                <span className="ml-0.5 align-top text-[0.65rem] font-bold text-[#d2a96b] sm:text-xs">,-</span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const touchRet = kjottSnadderPastaLeft.find((x) => x.name === "Touch 200 gr")!;

/** Samme tekst og pris som på `/meny` under hovedretter. */
export const FAVORITT_TOUCH: FavorittMenyKortProps = {
  category: "Kjøtt",
  titleLine1: "Touch",
  titleLine2: "",
  description: touchRet.desc ?? "",
  price: String(touchRet.prices[0]),
  accent: "flame",
  tags: [
    { kind: "alert", text: "Egg, melk, selleri — spor gluten" },
  ],
  coverSrc: "/images/steak.png",
};

const meatloverPizza = pizza.find((p) => p.name === "Meatlover")!;

/** Samme tall som på `/meny` (medium + stor). */
export const FAVORITT_MEATLOVER: FavorittMenyKortProps = {
  category: "Pizza",
  titleLine1: "Meat",
  titleLine2: "lover",
  description: meatloverPizza.toppings,
  priceLines: [
    { label: "Medium", amount: meatloverPizza.medium },
    { label: "Stor", amount: meatloverPizza.stor },
  ],
  accent: "pizza",
  tags: [
    { kind: "leaf", text: "Kan tilpasses vegetar" },
    { kind: "alert", text: "Gluten, melk" },
  ],
  coverSrc: "/images/piz1.png",
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
  coverSrc: "/images/snadder.png",
};

const allInBeef = burgereSalaterRight.find((b) => b.name === "All in beef")!;

export const FAVORITT_ALL_IN_BEEF: FavorittMenyKortProps = {
  category: "Burger",
  titleLine1: "All in",
  titleLine2: "beef",
  description: allInBeef.desc ?? "",
  price: String(allInBeef.prices[0]),
  accent: "flame",
  tags: [{ kind: "alert", text: "Egg, gluten, melk, sennep, soya" }],
  coverSrc: "/images/beefs.png",
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
  coverSrc: "/images/cd1.png",
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
  coverSrc: "/images/piz2.png",
};

const meksisnadder = snadderItems.find((s) => s.name === "Meksisnadder")!;

/** Meksikansk biff-snadder («Meksisnadder» på meny). */
export const FAVORITT_MEKSISNADDER: FavorittMenyKortProps = {
  category: "Snadder",
  titleLine1: "Meksikansk",
  titleLine2: "biffsnadder",
  description: meksisnadder.desc ?? "",
  price: String(meksisnadder.prices[0]),
  accent: "flame",
  tags: [
    {
      kind: "alert",
      text: "Egg, selleri og melk. Kan ha spor av hvetemel.",
    },
  ],
  coverSrc: "/images/biffm.png",
};
