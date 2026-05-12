"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

import type { MenyAllergenItem, PizzaItem } from "@/lib/meny-data";
import { SITE } from "@/lib/constants";
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

function ChiliMark({ spicy }: { spicy?: boolean }) {
  if (!spicy) return null;
  return (
    <span className="ml-1 inline text-base leading-none" title="Sterk/stor smak">
      🌶
      <span className="sr-only"> Sterk eller sterk smak</span>
    </span>
  );
}

type PanelKey = "pizza" | "hovedretter" | "kebab" | "barnemeny" | "smaretter" | "alkohol";

const INITIAL_OPEN: Record<PanelKey, boolean> = {
  pizza: false,
  hovedretter: false,
  kebab: false,
  barnemeny: false,
  smaretter: false,
  alkohol: false,
};

function AnchorNav({
  onNavigate,
}: {
  onNavigate: (panel: PanelKey, scrollToId?: string) => void;
}) {
  const links: { panel: PanelKey; label: string; scrollToId?: string }[] = [
    { panel: "pizza", label: "Pizza" },
    { panel: "hovedretter", label: "Hovedretter" },
    { panel: "kebab", label: "Kebab" },
    { panel: "barnemeny", label: "Barnemeny" },
    { panel: "smaretter", label: "Småretter" },
    { panel: "smaretter", label: "Drikke", scrollToId: "drikke" },
    { panel: "alkohol", label: "Alkohol" },
  ];
  return (
    <nav
      className="no-scrollbar sticky top-0 z-30 -mx-4 mb-6 flex gap-2 overflow-x-auto border-b border-accent/15 bg-background px-4 py-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:rounded-2xl sm:border sm:border-accent/15 sm:bg-sunken sm:px-4"
      aria-label="Hopp til seksjon"
    >
      {links.map(({ panel, label, scrollToId }) => (
        <button
          key={`${panel}-${label}`}
          type="button"
          onClick={() => onNavigate(panel, scrollToId)}
          className="shrink-0 rounded-full border border-accent/25 bg-raised px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/90 shadow-card transition hover:border-accent/45 hover:bg-sunken"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

function MenyCollapsible({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: PanelKey;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 rounded-2xl border border-accent/15 bg-sunken px-4 py-3 text-left shadow-card transition hover:border-accent/35"
      >
        <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </span>
        <ChevronDown
          className={`h-6 w-6 shrink-0 text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
function SubSectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-4 mt-10 font-sans text-sm font-bold uppercase tracking-[0.14em] text-accent first:mt-0 ${className}`}
    >
      {children}
    </h3>
  );
}

function formatKr(n: number) {
  return `${n}`;
}

function DishCard({ item, nr }: { item: MenyAllergenItem; nr: number }) {
  const pricesStr =
    item.prices.length > 1
      ? item.prices.map(formatKr).join(" · ")
      : item.prices[0] !== undefined
        ? formatKr(item.prices[0])
        : null;

  return (
    <article className="border-b border-dotted border-white/12 py-6 last:border-0 transition-colors hover:bg-white/[0.03] sm:py-7">
      <div className="flex min-w-0 items-start gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h4 className="text-[13px] font-bold uppercase leading-snug tracking-wide text-foreground">
              <span className="mr-2 font-sans tabular-nums text-foreground/45">{nr}.</span>
              {item.name}
              <ChiliMark spicy={item.spicy} />
            </h4>
            {item.subtitle ? (
              <span className="text-[11px] font-medium text-foreground/50">
                {item.subtitle}
              </span>
            ) : null}
          </div>
          {item.desc ? (
            <p className="mt-3 max-w-prose text-[13px] leading-relaxed text-foreground/65">
              {item.desc}
            </p>
          ) : null}
        </div>
        {item.prices.length > 0 ? (
          <>
            <span
              className="mt-2 hidden min-w-[1rem] flex-1 border-b border-dotted border-white/10 sm:block"
              aria-hidden
            />
            <div className="shrink-0 pt-0.5 text-right">
              <span className="font-sans text-xl font-bold tabular-nums tracking-tight text-accent sm:text-2xl">
                {pricesStr}
              </span>
              <span className="ml-1.5 align-top text-xs font-semibold uppercase text-accent/75">
                kr
              </span>
            </div>
          </>
        ) : null}
      </div>
      {item.allergens ? (
        <p className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-wide text-red-400">
          {item.allergens}
        </p>
      ) : null}
    </article>
  );
}

function CompactDishList({ items, startAt = 1 }: { items: MenyAllergenItem[]; startAt?: number }) {
  return (
    <div className="divide-y divide-dotted divide-white/10">
      {items.map((item, i) => {
        const nr = startAt + i;
        const priceNums =
          item.prices.length > 1
            ? item.prices.map(formatKr).join(" · ")
            : item.prices[0] !== undefined
              ? formatKr(item.prices[0])
              : "";

        return (
          <div key={item.name} className="py-4 text-[13px] sm:py-5">
            <div className="flex items-start gap-4 sm:items-baseline sm:gap-6">
              <span className="flex min-w-0 flex-1 items-baseline gap-1 pt-0.5 text-[13px] font-semibold leading-snug text-foreground">
                <span className="mr-1.5 shrink-0 font-sans tabular-nums text-foreground/45">{nr}.</span>
                <span className="min-w-0">
                  {item.name}
                  <ChiliMark spicy={item.spicy} />
                </span>
              </span>
              <span
                className="mt-2 hidden min-w-[1rem] flex-1 border-b border-dotted border-white/10 sm:mb-1 sm:block"
                aria-hidden
              />
              {priceNums ? (
                <span className="shrink-0 text-right font-sans text-lg font-bold tabular-nums tracking-tight text-accent sm:text-xl">
                  {priceNums}
                  <span className="ml-1 text-xs font-semibold uppercase text-accent/75">
                    kr
                  </span>
                </span>
              ) : (
                <span className="shrink-0 pt-0.5 text-[11px] font-medium text-foreground/45">
                  —
                </span>
              )}
            </div>
            {item.allergens ? (
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-red-400">
                {item.allergens}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ValgfriePoteterListe() {
  return (
    <ul className="mt-3 space-y-2 border-t border-dotted border-white/15 pt-4">
      {valgfriePoteter.map(({ name, allergens }, i) => (
        <li key={name} className="text-[13px] text-foreground/90">
          <span className="mr-2 font-sans tabular-nums text-foreground/45">{i + 1}.</span>
          <span className="font-semibold uppercase tracking-wide">{name}</span>
          {allergens ? (
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-wide text-red-400">
              {allergens}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function PizzaSection({ pizzas }: { pizzas: PizzaItem[] }) {
  return (
    <>
      <div className="mb-8 grid gap-x-10 gap-y-8 lg:grid-cols-2 lg:divide-x lg:divide-accent/15">
        {[0, 1].map((col) => (
          <div key={col} className={col === 1 ? "lg:pl-10" : ""}>
            <div className="mb-6 hidden gap-4 border-b border-accent/25 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/55 sm:grid sm:grid-cols-[auto_1fr_auto_auto]">
              <span className="w-7" aria-hidden />
              <span>Type</span>
              <span className="text-right">Medium</span>
              <span className="text-right">Stor</span>
            </div>
            <div className="flex flex-col">
              {pizzas.filter((_, i) => i % 2 === col).map((p) => (
                <article
                  key={p.num}
                  className="border-b border-dotted border-white/12 py-6 last:border-0 transition-colors hover:bg-white/[0.03] sm:py-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-bold uppercase tracking-wide text-foreground">
                        <span className="mr-2 font-sans text-foreground/45">
                          {p.num}.
                        </span>
                        {p.name}
                        <ChiliMark spicy={p.spicy} />
                      </p>
                      <p className="mt-3 text-[13px] leading-relaxed text-foreground/65">
                        {p.toppings}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-6 text-right sm:gap-10">
                      <div className="flex min-w-[4.25rem] flex-col items-end sm:min-w-[5rem]">
                        <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground/45 sm:text-[10px]">
                          Medium
                        </span>
                        <span className="font-sans text-xl font-bold tabular-nums text-accent sm:text-2xl">
                          {p.medium}
                        </span>
                        <span className="text-[10px] font-semibold uppercase text-accent/70">
                          kr
                        </span>
                      </div>
                      <div className="flex min-w-[4.25rem] flex-col items-end sm:min-w-[5rem]">
                        <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground/45 sm:text-[10px]">
                          Stor
                        </span>
                        <span className="font-sans text-xl font-bold tabular-nums text-accent sm:text-2xl">
                          {p.stor}
                        </span>
                        <span className="text-[10px] font-semibold uppercase text-accent/70">
                          kr
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-4 rounded-2xl border border-accent/15 bg-sunken p-5 text-[13px] leading-relaxed text-foreground/80 shadow-card sm:p-6">
        <p className="font-bold uppercase tracking-[0.12em] text-foreground">
          Alle pizza kan lages med
        </p>
        <ul className="list-inside list-disc space-y-1 marker:text-accent/60">
          <li>
            Glutenfri bunn (medium):{" "}
            <span className="font-semibold tabular-nums text-accent">
              219 kr
            </span>
          </li>
          <li>
            Hvit saus:{" "}
            <span className="font-semibold tabular-nums text-accent">
              25 kr
            </span>
          </li>
        </ul>
        <p className="pt-1">
          <span className="font-bold uppercase tracking-[0.1em] text-foreground">
            Pizza ekstra:
          </span>{" "}
          Ost 35 kr · Ekstra kjøtt 45 kr · Ekstra fyll 65 kr
        </p>
      </div>
    </>
  );
}

export function PremiumMenyPageContent({
  experimentalSurface = false,
}: {
  experimentalSurface?: boolean;
} = {}) {
  const [openPanels, setOpenPanels] = useState<Record<PanelKey, boolean>>(INITIAL_OPEN);

  const revealPanel = useCallback((panel: PanelKey, scrollToId?: string) => {
    setOpenPanels((prev) => ({ ...prev, [panel]: true }));
    queueMicrotask(() => {
      requestAnimationFrame(() => {
        const targetId = scrollToId ?? panel;
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const hashMap: Record<string, { panel: PanelKey; scroll?: string }> = {
      pizza: { panel: "pizza" },
      hovedretter: { panel: "hovedretter" },
      snadder: { panel: "hovedretter", scroll: "snadder" },
      kebab: { panel: "kebab" },
      barnemeny: { panel: "barnemeny" },
      smaretter: { panel: "smaretter" },
      drikke: { panel: "smaretter", scroll: "drikke" },
      alkohol: { panel: "alkohol" },
    };
    const entry = hashMap[hash];
    if (entry) revealPanel(entry.panel, entry.scroll);
  }, [revealPanel]);

  const togglePanel = useCallback((panel: PanelKey) => {
    setOpenPanels((prev) => ({ ...prev, [panel]: !prev[panel] }));
  }, []);

  return (
    <div
      className={
        experimentalSurface
          ? "min-h-screen bg-transparent text-foreground"
          : "min-h-screen bg-background text-foreground"
      }
    >
      <header
        className={
          experimentalSurface
            ? "border-b border-accent/20 bg-gradient-to-b from-[rgba(72,48,28,0.5)] to-[#080604] pt-1"
            : "border-b border-accent/25 bg-gradient-to-b from-accent/[0.08] to-sunken pt-1"
        }
      >
        <div className="h-0.5 bg-accent/40" aria-hidden />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight text-[#f5f0e8] sm:text-2xl">
              Bjerkvik Grill
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
              Komplett meny
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-3">
            <a
              href={SITE.phoneHref}
              aria-label={`Ring og bestill — ${SITE.phoneDisplay}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink shadow-[0_4px_18px_rgba(0,0,0,0.28)] outline-none transition hover:brightness-105 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
              Bestill
            </a>
            <Link
              href="/"
              className="rounded-full border-2 border-accent/45 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground transition hover:border-accent/70 hover:bg-sunken"
            >
              ← Til forsiden
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-7 sm:px-8 sm:py-10">
        <AnchorNav onNavigate={revealPanel} />

        <div className="space-y-7">
          <MenyCollapsible
            id="pizza"
            title="Pizza"
            open={openPanels.pizza}
            onToggle={() => togglePanel("pizza")}
          >
            <PizzaSection pizzas={pizza} />
          </MenyCollapsible>

          <MenyCollapsible
            id="hovedretter"
            title="Hovedretter og salater"
            open={openPanels.hovedretter}
            onToggle={() => togglePanel("hovedretter")}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="min-w-0">
                <SubSectionTitle>Kjøttretter / indrefilet</SubSectionTitle>
                <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                  {kjottSnadderPastaLeft.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <h3 className="mb-4 mt-8 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Valgfrie poteter
                  </h3>
                  <ValgfriePoteterListe />
                </div>
                <div id="snadder" className="scroll-mt-28">
                  <SubSectionTitle>Snadder</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    {snadderItems.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
                <SubSectionTitle>Pasta</SubSectionTitle>
                <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                  {pastaItems.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <SubSectionTitle>Burgere</SubSectionTitle>
                <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                  {burgereSalaterRight.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <p className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                    Burger ekstra
                  </p>
                  <CompactDishList items={burgerEkstra} />
                </div>
                <SubSectionTitle>Salater</SubSectionTitle>
                <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                  {salater.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                </div>
              </div>
            </div>
          </MenyCollapsible>

          <MenyCollapsible
            id="kebab"
            title="Kebab"
            open={openPanels.kebab}
            onToggle={() => togglePanel("kebab")}
          >
            <div className="max-w-xl rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
              {kebabItems.map((item, i) => (
                <DishCard key={item.name} item={item} nr={i + 1} />
              ))}
            </div>
          </MenyCollapsible>

          <MenyCollapsible
            id="barnemeny"
            title="Barnemeny"
            open={openPanels.barnemeny}
            onToggle={() => togglePanel("barnemeny")}
          >
            <div className="max-w-xl rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
              <CompactDishList items={barnemenySimple} />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/60">
                Kun for barn under 12 år.
              </p>
            </div>
          </MenyCollapsible>

          <MenyCollapsible
            id="smaretter"
            title="Småretter, dessert og drikke"
            open={openPanels.smaretter}
            onToggle={() => togglePanel("smaretter")}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SubSectionTitle>Småretter</SubSectionTitle>
                <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                  {smaretterEtc.slice(0, 6).map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <div className="mt-6 border-t border-dotted border-white/12 pt-6">
                    <CompactDishList
                      items={smaretterEtc.slice(6)}
                      startAt={1 + Math.min(6, smaretterEtc.length)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <SubSectionTitle>Dessert</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    {dessertItems.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
                <div id="drikke" className="scroll-mt-28">
                  <SubSectionTitle>Drikke (alkoholfritt)</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={drikkeLyst} />
                  </div>
                </div>
              </div>
            </div>
          </MenyCollapsible>

          <MenyCollapsible
            id="alkohol"
            title="Drikke med alkohol"
            open={openPanels.alkohol}
            onToggle={() => togglePanel("alkohol")}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="space-y-7">
                <div>
                  <SubSectionTitle>Alkoholholdig øl og rusbrus</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={alkoholCer} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Coctails</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={cocktailItems} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Vinkart</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    {vinListe.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-7">
                <div>
                  <SubSectionTitle>Brennevin</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={brennevinItems} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Shots</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={shots} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Drinker</SubSectionTitle>
                  <div className="rounded-[1.35rem] border border-accent/15 bg-raised px-5 py-5 shadow-card sm:px-7 sm:py-6">
                    <CompactDishList items={drinkerMixed} />
                  </div>
                </div>
              </div>
            </div>
          </MenyCollapsible>
        </div>

        <footer className="mt-14 border-t border-accent/15 pt-7 text-center text-[11px] leading-relaxed text-foreground/50">
          <p>
            Allergener er veiledende; spør oss gjerne ved tvil eller
            kryssreaksjon. Priser kan endres.
          </p>
        </footer>
      </main>
    </div>
  );
}
