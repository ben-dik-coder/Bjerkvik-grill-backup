import type { ReactNode } from "react";
import Link from "next/link";

import type { MenyVisTema } from "@/lib/meny-vis-tema";
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

function vegetarIkon(name: string) {
  return /vegetar|kjøttfri|plantebaser|plantebasert/i.test(name);
}

function formatPriser(prices: number[]) {
  const n = prices.filter((p) => p !== undefined && p !== null);
  if (n.length === 0) return null;
  return n.join(" · ");
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

function LukketSeksjon({
  t,
  id,
  title,
  defaultOpen,
  children,
}: {
  t: MenyVisTema;
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details id={id} className={`group ${t.sectionDetails}`} {...(defaultOpen ? { open: true } : {})}>
      <summary className={t.sectionSummary}>
        <svg viewBox="0 0 24 24" className={t.chevron} aria-hidden>
          <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
        </svg>
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-[18px]">
          <span className={t.sectionTitle}>{title}</span>
          <div className={t.sectionRule} />
        </div>
      </summary>
      <div className={t.sectionPanel}>{children}</div>
    </details>
  );
}

function UnderTittel({ t, children }: { t: MenyVisTema; children: ReactNode }) {
  return <h3 className={t.underTittel}>{children}</h3>;
}

function AllergenRett({ t, item, nr }: { t: MenyVisTema; item: MenyAllergenItem; nr: number }) {
  const pris = formatPriser(item.prices);
  return (
    <li className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-5 sm:py-[18px]">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className={t.dishTitle}>
            <span className={t.pizzaNum}>{nr}.</span>
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
        {item.subtitle ? <p className={t.dishSubtitle}>{item.subtitle}</p> : null}
        {item.desc ? <p className={t.dishDesc}>{item.desc}</p> : null}
        {item.allergens ? <p className={t.allergens}>{item.allergens}</p> : null}
      </div>
      {pris != null ? (
        <p className={t.price}>
          {pris}
          <span className={t.priceSuffix}>,-</span>
        </p>
      ) : (
        <span className={t.dashEmpty}>—</span>
      )}
    </li>
  );
}

function PizzaListe({ t, pizzas }: { t: MenyVisTema; pizzas: PizzaItem[] }) {
  return (
    <ul className={t.listDivide}>
      {pizzas.map((p) => (
        <li
          key={p.num}
          className="flex flex-col gap-2 py-4 first:pt-0 sm:flex-row sm:justify-between sm:gap-6 sm:py-[18px]"
        >
          <div className="min-w-0 flex-1">
            <h4 className={t.dishTitle}>
              <span className={t.pizzaNum}>{p.num}.</span>
              {p.name}
              <ChiliLite spicy={p.spicy} />
              {vegetarIkon(p.name) ? (
                <span className="ml-1 text-base leading-none" title="Vegetar">
                  🌱
                </span>
              ) : null}
            </h4>
            <p className={t.pizzaToppings}>{p.toppings}</p>
          </div>
          <div className="flex shrink-0 gap-5 text-right sm:gap-8">
            <div>
              <span className={t.pizzaLabel}>Medium</span>
              <span className={t.pizzaPrice}>
                {p.medium}
                <span className="ml-0.5 align-top text-[0.55rem]">,-</span>
              </span>
            </div>
            <div>
              <span className={t.pizzaLabel}>Stor</span>
              <span className={t.pizzaPrice}>
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

function PizzaEkstraInfo({ t }: { t: MenyVisTema }) {
  return (
    <div className={t.infoBox}>
      <p className={t.infoBoxLead}>Alle pizza kan lages med</p>
      <ul className={t.infoBoxBullet}>
        <li>
          Glutenfri bunn (medium): <span className={t.infoBoxStrong}>219 kr</span>
        </li>
        <li>
          Hvit saus: <span className={t.infoBoxStrong}>25 kr</span>
        </li>
      </ul>
      <p>
        <span className={t.infoBoxLead}>Pizza ekstra:</span> Ost 35 kr · Ekstra kjøtt 45 kr · Ekstra fyll 65 kr
      </p>
    </div>
  );
}

function KompaktListe({ t, items, startAt = 1 }: { t: MenyVisTema; items: MenyAllergenItem[]; startAt?: number }) {
  return (
    <ul className={t.kompaktListe}>
      {items.map((item, i) => {
        const pris = formatPriser(item.prices);
        const nr = startAt + i;
        return (
          <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
            <span className={t.kompaktName}>
              <span className={`${t.pizzaNum} mr-1.5 tabular-nums`}>{nr}.</span>
              {item.name}
              <ChiliLite spicy={item.spicy} />
            </span>
            {pris != null ? (
              <span className={t.kompaktPrice}>
                {pris}
                <span className="ml-0.5 text-[0.6rem]">,-</span>
              </span>
            ) : null}
            {item.allergens ? <span className={t.kompaktAllergen}>{item.allergens}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function ValgfriePoteter({ t }: { t: MenyVisTema }) {
  return (
    <ul className={t.potetListe}>
      {valgfriePoteter.map(({ name, allergens }, i) => (
        <li key={name}>
          <span className={`${t.pizzaNum} mr-1.5 tabular-nums`}>{i + 1}.</span>
          <span className={t.potetNavn}>{name}</span>
          {allergens ? <span className={t.potetAllergen}>{allergens}</span> : null}
        </li>
      ))}
    </ul>
  );
}

export function MenyVisVariantKjerne({ tema }: { tema: MenyVisTema }) {
  const t = tema;
  return (
    <div className="relative z-[2]">
      <div className="relative z-[2] text-center">
        <h1 className={t.headerBrand}>Bjerkvik</h1>
        {t.headerTaglineRule === "hidden" ? (
          <p className={t.headerTagline}>Grill &amp; pizza</p>
        ) : (
          <p className={t.headerTagline}>
            <span className={t.headerTaglineRule} aria-hidden />
            Grill &amp; pizza
            <span className={t.headerTaglineRule} aria-hidden />
          </p>
        )}
      </div>

      <div className={t.navBar}>
        <a href={SITE.phoneHref} className={t.navLink} aria-label={`Ring ${SITE.phoneDisplay}`}>
          Ring
        </a>
        <Link href="/" className={t.navLink}>
          Til forsiden
        </Link>
        <Link href="/meny/varianter" className={t.navLink}>
          Andre stiler
        </Link>
      </div>

      <div className="relative z-[2] mt-8 text-center sm:mt-10">
        <span className="mb-3 block text-[1.35rem] leading-none sm:mb-4 sm:text-[1.5rem]" aria-hidden>
          🔥
        </span>
        <div className="flex justify-center">
          <span className={t.heroTitle} style={t.menyHeroTitleStyle}>
            Meny
          </span>
        </div>
        <p className={t.heroEyebrow}>God mat. Laget med kjærlighet.</p>
        <div className={t.heroDivider} aria-hidden />
      </div>

      <div className="relative z-[2] mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        <LukketSeksjon t={t} id="meny-pizza" title="Pizza" defaultOpen>
          <PizzaListe t={t} pizzas={pizza} />
          <PizzaEkstraInfo t={t} />
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-hovedretter" title="Hovedretter og salater">
          <UnderTittel t={t}>Kjøttretter / indrefilet</UnderTittel>
          <ul className={t.listDivide}>
            {kjottSnadderPastaLeft.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
          <p className={t.litenOverskrift}>Valgfrie poteter</p>
          <ValgfriePoteter t={t} />

          <UnderTittel t={t}>Snadder</UnderTittel>
          <ul className={t.listDivide}>
            {snadderItems.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>

          <UnderTittel t={t}>Pasta</UnderTittel>
          <ul className={t.listDivide}>
            {pastaItems.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>

          <UnderTittel t={t}>Burgere</UnderTittel>
          <ul className={t.listDivide}>
            {burgereSalaterRight.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
          <p className={t.litenOverskrift}>Burger ekstra</p>
          <KompaktListe t={t} items={burgerEkstra} />

          <UnderTittel t={t}>Salater</UnderTittel>
          <ul className={t.listDivide}>
            {salater.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-kebab" title="Kebab">
          <ul className={t.listDivide}>
            {kebabItems.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-barnemeny" title="Barnemeny">
          <KompaktListe t={t} items={barnemenySimple} />
          <p className={t.barnemenyNote}>Kun for barn under 12 år.</p>
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-smaretter" title="Småretter">
          <ul className={t.listDivide}>
            {smaretterEtc.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-dessert" title="Dessert">
          <ul className={t.listDivide}>
            {dessertItems.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-drikke" title="Drikke (alkoholfritt)">
          <KompaktListe t={t} items={drikkeLyst} />
        </LukketSeksjon>

        <LukketSeksjon t={t} id="meny-alkohol" title="Drikke med alkohol">
          <UnderTittel t={t}>Alkoholholdig øl og rusbrus</UnderTittel>
          <KompaktListe t={t} items={alkoholCer} />

          <UnderTittel t={t}>Coctails</UnderTittel>
          <KompaktListe t={t} items={cocktailItems} />

          <UnderTittel t={t}>Vinkart</UnderTittel>
          <ul className={t.listDivide}>
            {vinListe.map((item, i) => (
              <AllergenRett key={item.name} t={t} item={item} nr={i + 1} />
            ))}
          </ul>

          <UnderTittel t={t}>Brennevin</UnderTittel>
          <KompaktListe t={t} items={brennevinItems} />

          <UnderTittel t={t}>Shots</UnderTittel>
          <KompaktListe t={t} items={shots} />

          <UnderTittel t={t}>Drinker</UnderTittel>
          <KompaktListe t={t} items={drinkerMixed} />
        </LukketSeksjon>
      </div>

      <footer className={t.footerWrap}>
        <div className={t.footerLegend}>
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
        <p className={t.footerSub}>Takeaway &amp; dine-in</p>
        <p className={t.footerNote}>
          Allergener er veiledende; spør oss gjerne ved tvil eller kryssreaksjon. Priser kan endres.
        </p>
        <Link href="/" className={t.footerHome}>
          ← Til forsiden
        </Link>
      </footer>
    </div>
  );
}
