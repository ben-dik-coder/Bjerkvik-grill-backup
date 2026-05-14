import Link from "next/link";

import type { MenyAllergenItem, PizzaItem } from "@/lib/meny-data";
import {
  alkoholCer,
  barnemenySimple,
  brennevinItems,
  burgereSalaterRight,
  burgerEkstra,
  cocktailItems,
  dessertItems,
  drikkeLyst,
  drinkerMixed,
  kebabItems,
  kjottSnadderPastaLeft,
  pastaItems,
  pizza,
  salater,
  shots,
  smaretterEtc,
  snadderItems,
  valgfriePoteter,
  vinListe,
} from "@/lib/meny-data";
import { SITE } from "@/lib/constants";

/** Samme gullpris og skillestrek som `FavorittMenyKort` — tall holdes tydelige. */
const FAVORITT_PRIS = "text-[#d2a96b]";
const favorittPrisSkille =
  "min-h-7 w-px shrink-0 self-stretch bg-[rgba(181,137,82,0.38)] sm:min-h-9";
const favorittPrisEtikett =
  `font-card block text-[0.45rem] font-semibold uppercase tracking-[0.12em] ${FAVORITT_PRIS} sm:text-[0.5rem]`;

const LESE_BRØDTEKST = "text-[#3d3a36]";

/** Litt mørkere sideflate enn «nesten hvit» — kortene er lysere for kontrast. */
const MENY_SIDE_BAKGRUNN = "bg-[#d9d4cc]";
const MENY_KORT_BAKGRUNN = "bg-[#efebe5]";

function MenyHeroTittel() {
  return (
    <span className="font-display text-[clamp(2.75rem,14vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[0.03em] text-[#1a1816]">
      Meny
    </span>
  );
}

function vegetarIkon(name: string) {
  return /vegetar|kjøttfri|plantebaser|plantebasert/i.test(name);
}

function formatPriser(prices: number[]) {
  const n = prices.filter((p) => p !== undefined && p !== null);
  if (n.length === 0) return null;
  return n.join(" · ");
}

function PlakatLukketSeksjon({
  id,
  title,
  defaultOpen,
  children,
}: {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      id={id}
      className={`group rounded-2xl border border-[#8a7d6c]/40 ${MENY_KORT_BAKGRUNN} shadow-sm outline-none ring-0 open:border-[#b58952]/55 open:shadow-md [&[open]>summary]:rounded-t-2xl [&[open]>summary]:rounded-b-none`}
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex w-full cursor-pointer list-none items-center gap-3 rounded-2xl px-4 py-4 marker:content-none outline-none transition-colors hover:bg-[#e5dfd6]/95 sm:px-5 sm:py-[1.125rem] [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-[#6b5344] transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        >
          <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
        </svg>
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-[18px]">
          <span className="whitespace-nowrap text-left font-display text-[1rem] font-semibold uppercase tracking-[0.1em] text-[#22201e] sm:text-[1.05rem]">
            {title}
          </span>
          <div className="min-h-px flex-1 bg-[#bcb5ab]" />
        </div>
      </summary>
      <div className={`rounded-b-2xl border-t border-[#c9c0b4] ${MENY_KORT_BAKGRUNN} px-4 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5`}>
        {children}
      </div>
    </details>
  );
}

function PlakatUnderTittel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 font-card text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#3f3a34] first:mt-0 sm:mt-9 sm:text-[0.76rem]">
      {children}
    </h3>
  );
}

function ChiliLite({ spicy }: { spicy?: boolean }) {
  if (!spicy) return null;
  return (
    <span className="ml-1 inline text-base leading-none" title="Sterk">
      🌶
      <span className="sr-only"> Sterk</span>
    </span>
  );
}

function PlakatAllergenRett({ item, nr }: { item: MenyAllergenItem; nr: number }) {
  const pris = formatPriser(item.prices);
  return (
    <li className="flex flex-col gap-1.5 py-5 sm:flex-row sm:justify-between sm:gap-6 sm:py-6">
      <div className="min-w-0 max-w-prose flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="font-display text-[1.02rem] font-semibold uppercase leading-normal tracking-[0.02em] text-[#22201e] sm:text-[1.2rem]">
            <span className="mr-2 font-card text-[0.75em] font-medium tabular-nums text-[#5c5852]">{nr}.</span>
            {item.name}
          </h4>
          <ChiliLite spicy={item.spicy} />
          {vegetarIkon(item.name) ? (
            <span className="text-base leading-none" title="Vegetar">
              🌱
              <span className="sr-only"> Vegetar</span>
            </span>
          ) : null}
        </div>
        {item.subtitle ? (
          <p className="mt-1.5 font-card text-[0.7rem] font-medium normal-case tracking-normal text-[#5c5650]">
            {item.subtitle}
          </p>
        ) : null}
        {item.desc ? (
          <p
            className={`mt-2 max-w-[36rem] font-card text-[0.8125rem] font-normal leading-[1.75] sm:text-[0.9375rem] sm:leading-[1.8] ${LESE_BRØDTEKST}`}
          >
            {item.desc}
          </p>
        ) : null}
        {item.allergens ? (
          <p className="mt-2.5 font-card text-[0.58rem] font-medium uppercase leading-relaxed tracking-[0.06em] text-[#9b2d2d] sm:text-[0.6rem]">
            {item.allergens}
          </p>
        ) : null}
      </div>
      {pris != null ? (
        <div className="flex shrink-0 items-end gap-2 pt-0.5 sm:gap-3">
          <div className={favorittPrisSkille} aria-hidden />
          <p
            className={`font-display text-[1.35rem] font-semibold leading-[1.05] tracking-[0.01em] sm:text-[1.55rem] ${FAVORITT_PRIS}`}
          >
            {pris}
            <span className={`ml-0.5 align-top text-[0.62rem] font-semibold sm:text-sm ${FAVORITT_PRIS}`}>
              ,-
            </span>
          </p>
        </div>
      ) : (
        <span className="shrink-0 self-start pt-1 font-card text-[0.7rem] font-medium text-[#403630] sm:self-end">—</span>
      )}
    </li>
  );
}

function PlakatPizzaListe({ pizzas }: { pizzas: PizzaItem[] }) {
  return (
    <ul className="divide-y divide-[#d0c9c0]">
      {pizzas.map((p) => (
        <li
          key={p.num}
          className="flex flex-col gap-2.5 py-5 first:pt-0 sm:flex-row sm:justify-between sm:gap-8 sm:py-6"
        >
          <div className="min-w-0 max-w-prose flex-1">
            <h4 className="font-display text-[1.02rem] font-semibold uppercase leading-normal tracking-[0.02em] text-[#22201e] sm:text-[1.2rem]">
              <span className="mr-2 font-card text-[0.75em] font-medium tabular-nums text-[#5c5852]">{p.num}.</span>
              {p.name}
              <ChiliLite spicy={p.spicy} />
              {vegetarIkon(p.name) ? (
                <span className="ml-1 text-base leading-none" title="Vegetar">
                  🌱
                </span>
              ) : null}
            </h4>
            <p className={`mt-2 font-card text-[0.8125rem] font-normal leading-[1.75] sm:text-[0.9375rem] sm:leading-[1.8] ${LESE_BRØDTEKST}`}>
              {p.toppings}
            </p>
          </div>
          <div className="flex shrink-0 items-end gap-2 sm:gap-3">
            <div className={favorittPrisSkille} aria-hidden />
            <div className="flex gap-5 text-right sm:gap-8">
              <div>
                <span className={favorittPrisEtikett}>Medium</span>
                <p
                  className={`font-display text-[clamp(0.95rem,3.5vw,1.3rem)] font-semibold leading-[1.05] tracking-[0.01em] tabular-nums sm:text-[1.5rem] ${FAVORITT_PRIS}`}
                >
                  {p.medium}
                  <span className={`ml-0.5 align-top text-[0.55rem] font-semibold ${FAVORITT_PRIS}`}>,-</span>
                </p>
              </div>
              <div>
                <span className={favorittPrisEtikett}>Stor</span>
                <p
                  className={`font-display text-[clamp(0.95rem,3.5vw,1.3rem)] font-semibold leading-[1.05] tracking-[0.01em] tabular-nums sm:text-[1.5rem] ${FAVORITT_PRIS}`}
                >
                  {p.stor}
                  <span className={`ml-0.5 align-top text-[0.55rem] font-semibold ${FAVORITT_PRIS}`}>,-</span>
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PlakatPizzaEkstraInfo() {
  return (
    <div className="mt-6 space-y-3.5 rounded-2xl border border-[#b0a69a] bg-[#e3ddd3] p-4 font-card text-[0.8rem] font-medium leading-[1.65] text-[#2a2624] sm:p-5 sm:text-[0.84rem] sm:leading-[1.7]">
      <p className="font-semibold uppercase tracking-[0.1em] text-[#1f1c1a]">Alle pizza kan lages med</p>
      <ul className="list-inside list-disc space-y-1.5 marker:text-[#8a827a]">
        <li>
          Glutenfri bunn (medium):{" "}
          <span className={`font-semibold tabular-nums ${FAVORITT_PRIS}`}>219 kr</span>
        </li>
        <li>
          Hvit saus: <span className={`font-semibold tabular-nums ${FAVORITT_PRIS}`}>25 kr</span>
        </li>
      </ul>
      <p>
        <span className="font-semibold uppercase tracking-[0.08em] text-[#1f1c1a]">Pizza ekstra:</span> Ost{" "}
        <span className={`font-semibold tabular-nums ${FAVORITT_PRIS}`}>35 kr</span> · Ekstra kjøtt{" "}
        <span className={`font-semibold tabular-nums ${FAVORITT_PRIS}`}>45 kr</span> · Ekstra fyll{" "}
        <span className={`font-semibold tabular-nums ${FAVORITT_PRIS}`}>65 kr</span>
      </p>
    </div>
  );
}

function PlakatKompaktListe({ items, startAt = 1 }: { items: MenyAllergenItem[]; startAt?: number }) {
  return (
    <ul className="space-y-3 border-t border-dotted border-[#b0a699] pt-4 font-card text-[0.8rem] font-normal leading-snug text-[#2a2624] sm:text-[0.84rem]">
      {items.map((item, i) => {
        const pris = formatPriser(item.prices);
        const nr = startAt + i;
        return (
          <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
            <span className="min-w-0 font-medium uppercase tracking-[0.04em] text-[#22201e]">
              <span className="mr-1.5 font-card text-[0.85em] font-medium tabular-nums text-[#5c5852]">
                {nr}.
              </span>
              {item.name}
              <ChiliLite spicy={item.spicy} />
            </span>
            {pris != null ? (
              <span
                className={`shrink-0 font-display text-[1rem] font-semibold tabular-nums tracking-[0.01em] sm:text-[1.1rem] ${FAVORITT_PRIS}`}
              >
                {pris}
                <span className={`ml-0.5 text-[0.58rem] font-semibold ${FAVORITT_PRIS}`}>,-</span>
              </span>
            ) : null}
            {item.allergens ? (
              <span className="w-full text-[0.58rem] font-medium uppercase leading-relaxed tracking-[0.06em] text-[#9b2d2d]">
                {item.allergens}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function PlakatValgfriePoteter() {
  return (
    <ul className="mt-2 space-y-2.5 border-t border-dotted border-[#b0a699] pt-4 font-card text-[0.78rem] font-normal leading-snug text-[#2a2624] sm:text-[0.82rem]">
      {valgfriePoteter.map(({ name, allergens }, i) => (
        <li key={name}>
          <span className="mr-1.5 font-card text-[0.85em] font-semibold tabular-nums text-[#594a40]">{i + 1}.</span>
          <span className="font-medium uppercase tracking-[0.04em] text-[#2a2624]">{name}</span>
          {allergens ? (
            <span className="mt-0.5 block text-[0.58rem] font-medium uppercase tracking-[0.06em] text-[#9b2d2d]">
              {allergens}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function MenyPlakatReferanse() {
  return (
    <div className="relative z-0 w-full max-w-none flex-1">
      <div className={`relative min-h-full w-full overflow-x-hidden ${MENY_SIDE_BAKGRUNN} px-4 py-6 pb-20 pt-4 sm:px-6 sm:py-8 sm:pb-24 sm:pt-6 md:px-8 md:py-10 lg:mx-auto lg:max-w-3xl lg:px-10 lg:py-12`}>
        <div className="relative z-[2] text-center">
          <h1 className="mx-auto max-w-[22rem] font-display text-[clamp(0.95rem,3.8vw,2rem)] font-semibold uppercase leading-snug tracking-[0.06em] text-[#1a1816] sm:max-w-none sm:text-[2rem] md:text-[2.15rem]">
            Bjerkvik Grill &amp; Bar
          </h1>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-card text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a5652] sm:text-[0.78rem]">
            <span className="h-px w-6 bg-[rgba(181,137,82,0.45)] sm:w-10" aria-hidden />
            Grill &amp; pizza
            <span className="h-px w-6 bg-[rgba(181,137,82,0.45)] sm:w-10" aria-hidden />
          </p>
        </div>

        <div className="relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-3 border-b border-[#c9c2b8] pb-7 sm:mt-8 sm:gap-4">
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-lg border-2 border-[#4d4038] bg-[#e8e2da] px-4 py-2.5 font-card text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#1a1816] shadow-sm transition hover:border-[#3d322c] hover:bg-[#efebe5] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d322c] sm:text-[0.68rem]"
            aria-label={`Ring ${SITE.phoneDisplay}`}
          >
            Ring
          </a>
          <Link
            href="/"
            className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-lg border-2 border-[#4d4038] bg-[#e8e2da] px-4 py-2.5 font-card text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#1a1816] shadow-sm transition hover:border-[#3d322c] hover:bg-[#efebe5] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d322c] sm:text-[0.68rem]"
          >
            Til forsiden
          </Link>
        </div>

        <div className="relative z-[2] mt-8 text-center sm:mt-10">
          <div className="flex justify-center">
            <MenyHeroTittel />
          </div>
          <p className="mt-5 font-card text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#5a5652] sm:mt-6 sm:text-[0.75rem]">
            Fra grill til bord.
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[rgba(181,137,82,0.45)] sm:mt-6" aria-hidden />
        </div>

        <div className="relative z-[2] mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          <PlakatLukketSeksjon id="meny-pizza" title="Pizza" defaultOpen>
            <PlakatPizzaListe pizzas={pizza} />
            <PlakatPizzaEkstraInfo />
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-hovedretter" title="Hovedretter og salater">
            <PlakatUnderTittel>Kjøttretter / indrefilet</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {kjottSnadderPastaLeft.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
            <p className="mb-1 mt-5 font-card text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#3f3a34]">
              Valgfrie poteter
            </p>
            <PlakatValgfriePoteter />

            <PlakatUnderTittel>Snadder</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {snadderItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>

            <PlakatUnderTittel>Pasta</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {pastaItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>

            <PlakatUnderTittel>Burgere</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {burgereSalaterRight.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
            <p className="mb-1 mt-5 font-card text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#3f3a34]">
              Burger ekstra
            </p>
            <PlakatKompaktListe items={burgerEkstra} />

            <PlakatUnderTittel>Salater</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {salater.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-kebab" title="Kebab">
            <ul className="divide-y divide-[#d0c9c0]">
              {kebabItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-barnemeny" title="Barnemeny">
            <PlakatKompaktListe items={barnemenySimple} />
            <p className="mt-4 font-card text-[0.66rem] font-medium text-[#5c5650]">
              Kun for barn under 12 år.
            </p>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-smaretter" title="Småretter">
            <ul className="divide-y divide-[#d0c9c0]">
              {smaretterEtc.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-dessert" title="Dessert">
            <ul className="divide-y divide-[#d0c9c0]">
              {dessertItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-drikke" title="Drikke (alkoholfritt)">
            <PlakatKompaktListe items={drikkeLyst} />
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-alkohol" title="Drikke med alkohol">
            <PlakatUnderTittel>Alkoholholdig øl og rusbrus</PlakatUnderTittel>
            <PlakatKompaktListe items={alkoholCer} />

            <PlakatUnderTittel>Coctails</PlakatUnderTittel>
            <PlakatKompaktListe items={cocktailItems} />

            <PlakatUnderTittel>Vinkart</PlakatUnderTittel>
            <ul className="divide-y divide-[#d0c9c0]">
              {vinListe.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>

            <PlakatUnderTittel>Brennevin</PlakatUnderTittel>
            <PlakatKompaktListe items={brennevinItems} />

            <PlakatUnderTittel>Shots</PlakatUnderTittel>
            <PlakatKompaktListe items={shots} />

            <PlakatUnderTittel>Drinker</PlakatUnderTittel>
            <PlakatKompaktListe items={drinkerMixed} />
          </PlakatLukketSeksjon>
        </div>

        <footer className="relative z-[2] mt-12 border-t border-[#c9c2b8] pt-9 text-center sm:mt-14 sm:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-card text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[#5c5652] sm:gap-x-7 sm:text-[0.74rem]">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🌶️</span> Sterk
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🌱</span> Vegetar
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🥛</span> Kan inneholde melk
            </span>
          </div>
          <p className={`mt-6 font-display text-[0.7rem] font-medium uppercase tracking-[0.2em] sm:text-[0.74rem] ${FAVORITT_PRIS}`}>
            Takeaway &amp; dine-in
          </p>
          <p className="mx-auto mt-5 max-w-prose font-card text-[0.66rem] font-normal leading-relaxed text-[#5c5652] sm:text-[0.7rem]">
            Allergener er veiledende; spør oss gjerne ved tvil eller kryssreaksjon. Priser kan endres.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block font-card text-[0.66rem] font-medium text-[#3d3a37] underline-offset-[3px] transition hover:text-[#1f1c1a] hover:underline"
          >
            ← Til forsiden
          </Link>
        </footer>
      </div>
    </div>
  );
}
