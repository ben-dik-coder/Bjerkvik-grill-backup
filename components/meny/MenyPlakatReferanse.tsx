import Link from "next/link";

import { MenyGrainPanelOverlay } from "@/components/meny/MenyGrainBackdrop";
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

function MenyHeroTittel() {
  return (
    <span
      className="font-display text-[clamp(3.25rem,17vw,7rem)] font-bold uppercase leading-[0.88] tracking-[0.06em] text-[#e4d9c8] [transform:translateZ(0)]"
      style={{
        textShadow: `
          0 1px 0 rgba(255,255,255,0.06),
          0 3px 0 rgba(0,0,0,0.55),
          1px 1px 0 rgba(62,42,28,0.55),
          -1px 0 0 rgba(90,62,40,0.25),
          2px 0 0 rgba(120,85,55,0.12),
          0 0 1px rgba(0,0,0,0.9),
          0 6px 14px rgba(0,0,0,0.45)
        `,
      }}
    >
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
      className="group rounded-2xl border-y border-y-white/[0.1] border-l-0 border-r-0 bg-[rgba(22,18,15,0.55)] open:border-t-[rgba(183,137,86,0.38)] open:border-b-white/[0.08]"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex w-full cursor-pointer list-none items-center gap-3 rounded-2xl px-4 py-4 marker:content-none outline-none transition hover:bg-white/[0.05] sm:px-5 [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-[#9f7346] transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        >
          <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
        </svg>
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-[18px]">
          <span className="whitespace-nowrap text-left font-display text-[1rem] font-medium uppercase tracking-[0.18em] text-[#c9a45c] sm:text-[1.1rem]">
            {title}
          </span>
          <div className="min-h-px flex-1 bg-[rgba(183,137,86,0.22)]" />
        </div>
      </summary>
      <div className="border-t border-white/[0.06] px-4 pb-5 pt-3 sm:px-5 sm:pb-6 sm:pt-4">{children}</div>
    </details>
  );
}

function PlakatUnderTittel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-6 font-card text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9f7346] first:mt-0 sm:mt-7 sm:text-[0.72rem]">
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
    <li className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-5 sm:py-[18px]">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="font-display text-[1rem] font-semibold uppercase leading-snug tracking-[0.04em] text-[#f2eee8] sm:text-[1.35rem]">
            <span className="mr-2 font-card text-[0.75em] font-normal text-[#9f978d]">{nr}.</span>
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
          <p className="mt-1 font-card text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#9f978d]">
            {item.subtitle}
          </p>
        ) : null}
        {item.desc ? (
          <p className="mt-1.5 max-w-[98%] font-card text-[0.78rem] font-light leading-[1.65] text-[#d4cbc0] sm:mt-2 sm:max-w-[95%] sm:text-[0.9rem] sm:leading-[1.7]">
            {item.desc}
          </p>
        ) : null}
        {item.allergens ? (
          <p className="mt-2 font-card text-[0.55rem] font-bold uppercase leading-relaxed tracking-wide text-red-400/90 sm:text-[0.58rem]">
            {item.allergens}
          </p>
        ) : null}
      </div>
      {pris != null ? (
        <p className="shrink-0 pt-0.5 font-display text-[1.45rem] font-medium leading-none tracking-tight text-[#b78956] sm:text-[1.85rem]">
          {pris}
          <span className="ml-0.5 align-top text-[0.6rem] font-medium sm:text-sm">,-</span>
        </p>
      ) : (
        <span className="shrink-0 self-start pt-1 font-card text-[0.7rem] text-[#7a6f62] sm:self-end">—</span>
      )}
    </li>
  );
}

function PlakatPizzaListe({ pizzas }: { pizzas: PizzaItem[] }) {
  return (
    <ul className="divide-y divide-white/[0.06]">
      {pizzas.map((p) => (
        <li
          key={p.num}
          className="flex flex-col gap-2 py-4 first:pt-0 sm:flex-row sm:justify-between sm:gap-6 sm:py-[18px]"
        >
          <div className="min-w-0 flex-1">
            <h4 className="font-display text-[1rem] font-semibold uppercase leading-snug tracking-[0.04em] text-[#f2eee8] sm:text-[1.35rem]">
              <span className="mr-2 font-card text-[0.75em] font-normal text-[#9f978d]">{p.num}.</span>
              {p.name}
              <ChiliLite spicy={p.spicy} />
              {vegetarIkon(p.name) ? (
                <span className="ml-1 text-base leading-none" title="Vegetar">
                  🌱
                </span>
              ) : null}
            </h4>
            <p className="mt-1.5 font-card text-[0.78rem] font-light leading-relaxed text-[#d4cbc0] sm:text-[0.9rem]">
              {p.toppings}
            </p>
          </div>
          <div className="flex shrink-0 gap-5 text-right sm:gap-8">
            <div>
              <span className="font-card block text-[0.38rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]">
                Medium
              </span>
              <span className="font-display text-[1.35rem] font-semibold tabular-nums text-[#b78956] sm:text-[1.65rem]">
                {p.medium}
                <span className="ml-0.5 align-top text-[0.55rem]">,-</span>
              </span>
            </div>
            <div>
              <span className="font-card block text-[0.38rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]">
                Stor
              </span>
              <span className="font-display text-[1.35rem] font-semibold tabular-nums text-[#b78956] sm:text-[1.65rem]">
                {p.stor}
                <span className="ml-0.5 align-top text-[0.55rem]">,-</span>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PlakatPizzaEkstraInfo() {
  return (
    <div className="mt-6 space-y-3 rounded-2xl border border-[rgba(183,137,86,0.2)] bg-[rgba(18,15,12,0.45)] p-4 font-card text-[0.78rem] leading-relaxed text-[#d4cbc0] sm:p-5 sm:text-[0.82rem]">
      <p className="font-bold uppercase tracking-[0.12em] text-[#f2eee8]">Alle pizza kan lages med</p>
      <ul className="list-inside list-disc space-y-1 marker:text-[#9f7346]/70">
        <li>
          Glutenfri bunn (medium):{" "}
          <span className="font-semibold tabular-nums text-[#b78956]">219 kr</span>
        </li>
        <li>
          Hvit saus: <span className="font-semibold tabular-nums text-[#b78956]">25 kr</span>
        </li>
      </ul>
      <p>
        <span className="font-bold uppercase tracking-[0.1em] text-[#f2eee8]">Pizza ekstra:</span> Ost 35 kr ·
        Ekstra kjøtt 45 kr · Ekstra fyll 65 kr
      </p>
    </div>
  );
}

function PlakatKompaktListe({ items, startAt = 1 }: { items: MenyAllergenItem[]; startAt?: number }) {
  return (
    <ul className="space-y-2.5 border-t border-dotted border-white/12 pt-3 font-card text-[0.78rem] text-[#d4cbc0] sm:text-[0.82rem]">
      {items.map((item, i) => {
        const pris = formatPriser(item.prices);
        const nr = startAt + i;
        return (
          <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
            <span className="min-w-0 font-semibold uppercase tracking-wide text-[#f2eee8]">
              <span className="mr-1.5 font-card text-[0.85em] font-normal tabular-nums text-[#9f978d]">
                {nr}.
              </span>
              {item.name}
              <ChiliLite spicy={item.spicy} />
            </span>
            {pris != null ? (
              <span className="shrink-0 font-display text-[1.05rem] font-medium tabular-nums text-[#b78956] sm:text-[1.15rem]">
                {pris}
                <span className="ml-0.5 text-[0.6rem]">,-</span>
              </span>
            ) : null}
            {item.allergens ? (
              <span className="w-full text-[0.55rem] font-bold uppercase tracking-wide text-red-400/85">
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
    <ul className="mt-2 space-y-2 border-t border-dotted border-white/12 pt-3 font-card text-[0.76rem] text-[#d4cbc0] sm:text-[0.8rem]">
      {valgfriePoteter.map(({ name, allergens }, i) => (
        <li key={name}>
          <span className="mr-1.5 font-card text-[0.85em] font-normal tabular-nums text-[#9f978d]">{i + 1}.</span>
          <span className="font-semibold uppercase tracking-wide text-[#f2eee8]">{name}</span>
          {allergens ? (
            <span className="mt-0.5 block text-[0.55rem] font-bold uppercase tracking-wide text-red-400/85">
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
    <div className="relative z-0 w-full min-h-screen">
      <div className="relative min-h-screen w-full max-w-none overflow-x-hidden rounded-none border-0 bg-[rgba(28,24,20,0.96)] px-4 py-8 pb-24 pt-6 shadow-none sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        <MenyGrainPanelOverlay />
        <div className="relative z-[2] text-center">
          <h1 className="mx-auto max-w-[22rem] font-display text-[clamp(0.95rem,3.8vw,2rem)] font-semibold uppercase leading-tight tracking-[0.1em] text-[#f2eee8] sm:max-w-none sm:text-[2rem] md:text-[2.2rem]">
            Bjerkvik Grill &amp; Bar
          </h1>
          <p className="mt-2 flex items-center justify-center gap-2 font-card text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#9f7346] sm:text-[0.78rem]">
            <span className="h-px w-6 bg-[rgba(183,137,86,0.35)] sm:w-10" aria-hidden />
            Grill &amp; pizza
            <span className="h-px w-6 bg-[rgba(183,137,86,0.35)] sm:w-10" aria-hidden />
          </p>
        </div>

        <div className="relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-3 border-b border-white/[0.06] pb-6 sm:mt-8 sm:gap-4">
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-lg border border-[rgba(183,137,86,0.45)] bg-[rgba(255,255,255,0.05)] px-4 py-2.5 font-card text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#d4b896] shadow-sm transition hover:border-[#c9a45c]/55 hover:bg-[rgba(183,137,86,0.14)] hover:text-[#f2eee8] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a45c] sm:text-[0.65rem]"
            aria-label={`Ring ${SITE.phoneDisplay}`}
          >
            Ring
          </a>
          <Link
            href="/"
            className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-lg border border-[rgba(183,137,86,0.45)] bg-[rgba(255,255,255,0.05)] px-4 py-2.5 font-card text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#d4b896] shadow-sm transition hover:border-[#c9a45c]/55 hover:bg-[rgba(183,137,86,0.14)] hover:text-[#f2eee8] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a45c] sm:text-[0.65rem]"
          >
            Til forsiden
          </Link>
        </div>

        <div className="relative z-[2] mt-8 text-center sm:mt-10">
          <div className="flex justify-center">
            <MenyHeroTittel />
          </div>
          <p className="mt-5 font-card text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#9f7346] sm:mt-6 sm:text-[0.72rem]">
            Fra grill til bord.
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[rgba(183,137,86,0.35)] sm:mt-6" aria-hidden />
        </div>

        <div className="relative z-[2] mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          <PlakatLukketSeksjon id="meny-pizza" title="Pizza" defaultOpen>
            <PlakatPizzaListe pizzas={pizza} />
            <PlakatPizzaEkstraInfo />
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-hovedretter" title="Hovedretter og salater">
            <PlakatUnderTittel>Kjøttretter / indrefilet</PlakatUnderTittel>
            <ul className="divide-y divide-white/[0.06]">
              {kjottSnadderPastaLeft.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
            <p className="mb-1 mt-4 font-card text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]">
              Valgfrie poteter
            </p>
            <PlakatValgfriePoteter />

            <PlakatUnderTittel>Snadder</PlakatUnderTittel>
            <ul className="divide-y divide-white/[0.06]">
              {snadderItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>

            <PlakatUnderTittel>Pasta</PlakatUnderTittel>
            <ul className="divide-y divide-white/[0.06]">
              {pastaItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>

            <PlakatUnderTittel>Burgere</PlakatUnderTittel>
            <ul className="divide-y divide-white/[0.06]">
              {burgereSalaterRight.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
            <p className="mb-1 mt-4 font-card text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]">
              Burger ekstra
            </p>
            <PlakatKompaktListe items={burgerEkstra} />

            <PlakatUnderTittel>Salater</PlakatUnderTittel>
            <ul className="divide-y divide-white/[0.06]">
              {salater.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-kebab" title="Kebab">
            <ul className="divide-y divide-white/[0.06]">
              {kebabItems.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-barnemeny" title="Barnemeny">
            <PlakatKompaktListe items={barnemenySimple} />
            <p className="mt-4 font-card text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#9f978d]">
              Kun for barn under 12 år.
            </p>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-smaretter" title="Småretter">
            <ul className="divide-y divide-white/[0.06]">
              {smaretterEtc.map((item, i) => (
                <PlakatAllergenRett key={item.name} item={item} nr={i + 1} />
              ))}
            </ul>
          </PlakatLukketSeksjon>

          <PlakatLukketSeksjon id="meny-dessert" title="Dessert">
            <ul className="divide-y divide-white/[0.06]">
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
            <ul className="divide-y divide-white/[0.06]">
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

        <footer className="relative z-[2] mt-10 border-t border-white/[0.06] pt-8 text-center sm:mt-12 sm:pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-card text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#9f978d] sm:gap-x-7 sm:text-[0.76rem]">
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
          <p className="mt-6 font-display text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#9f7346] sm:text-[0.72rem]">
            Takeaway &amp; dine-in
          </p>
          <p className="mx-auto mt-5 max-w-prose font-card text-[0.62rem] leading-relaxed text-[#7a6f62] sm:text-[0.65rem]">
            Allergener er veiledende; spør oss gjerne ved tvil eller kryssreaksjon. Priser kan endres.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block font-card text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#7a6f62] underline-offset-4 transition hover:text-[#9f7346] hover:underline"
          >
            ← Til forsiden
          </Link>
        </footer>
      </div>
    </div>
  );
}
