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
      className="no-scrollbar sticky top-0 z-30 -mx-4 mb-6 flex gap-2 overflow-x-auto border-b-2 border-[#bdae9f]/90 bg-[#d9cdc0]/98 px-4 py-2 backdrop-blur-[1px] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:rounded-2xl sm:border-2 sm:border-[#aa9a8c]/85 sm:bg-[#ebe4dc] sm:px-4"
      aria-label="Hopp til seksjon"
    >
      {links.map(({ panel, label, scrollToId }) => (
        <button
          key={`${panel}-${label}`}
          type="button"
          onClick={() => onNavigate(panel, scrollToId)}
          className="shrink-0 rounded-full border-2 border-[#8a796a]/72 bg-[#e6dcd2] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1f1a17] shadow-sm transition hover:border-[#5c483c]/88 hover:bg-[#ddd2c9]"
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
        className="flex w-full items-center justify-between gap-4 rounded-2xl border-2 border-[#83705f]/72 bg-[#e6dcd2] px-4 py-3 text-left shadow-[0_2px_8px_rgba(35,24,18,0.1)] transition hover:border-[#5f4a3c]/82 hover:bg-[#ddd2c9]"
      >
        <span className="font-serif text-xl font-semibold tracking-tight text-[#171210] sm:text-2xl">
          {title}
        </span>
        <ChevronDown
          className={`h-6 w-6 shrink-0 text-[#6b3410] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
      className={`mb-4 mt-10 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#5f2f14] first:mt-0 ${className}`}
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
    <article className="border-b border-dotted border-[#c4b7ab]/90 py-6 last:border-0 transition-colors hover:bg-[#fdf9f4]/85 sm:py-7">
      <div className="flex min-w-0 items-start gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h4 className="text-[13px] font-bold uppercase leading-snug tracking-wide text-[#171210]">
              <span className="mr-2 font-sans tabular-nums text-[#594a40]">{nr}.</span>
              {item.name}
              <ChiliMark spicy={item.spicy} />
            </h4>
            {item.subtitle ? (
              <span className="text-[11px] font-medium text-[#4a433c]">
                {item.subtitle}
              </span>
            ) : null}
          </div>
          {item.desc ? (
            <p className="mt-3 max-w-prose text-[13px] font-medium leading-relaxed text-[#3d362f]">
              {item.desc}
            </p>
          ) : null}
        </div>
        {item.prices.length > 0 ? (
          <>
            <span
              className="mt-2 hidden min-w-[1rem] flex-1 border-b border-dotted border-[#c4b7ab]/90 sm:block"
              aria-hidden
            />
            <div className="shrink-0 pt-0.5 text-right">
              <span className="font-sans text-xl font-bold tabular-nums tracking-tight text-[#d2a96b] sm:text-2xl">
                {pricesStr}
              </span>
              <span className="ml-1.5 align-top text-xs font-bold uppercase text-[#d2a96b]">
                kr
              </span>
            </div>
          </>
        ) : null}
      </div>
      {item.allergens ? (
        <p className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-wide text-red-800">
          {item.allergens}
        </p>
      ) : null}
    </article>
  );
}

function CompactDishList({ items, startAt = 1 }: { items: MenyAllergenItem[]; startAt?: number }) {
  return (
    <div className="divide-y divide-dotted divide-[#cbc0b6]/95">
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
              <span className="flex min-w-0 flex-1 items-baseline gap-1 pt-0.5 text-[13px] font-semibold leading-snug text-[#171210]">
                <span className="mr-1.5 shrink-0 font-sans tabular-nums text-[#594a40]">{nr}.</span>
                <span className="min-w-0">
                  {item.name}
                  <ChiliMark spicy={item.spicy} />
                </span>
              </span>
              <span
                className="mt-2 hidden min-w-[1rem] flex-1 border-b border-dotted border-[#c4b7ab]/90 sm:mb-1 sm:block"
                aria-hidden
              />
              {priceNums ? (
                <span className="shrink-0 text-right font-sans text-lg font-bold tabular-nums tracking-tight text-[#d2a96b] sm:text-xl">
                  {priceNums}
                  <span className="ml-1 text-xs font-bold uppercase text-[#d2a96b]">
                    kr
                  </span>
                </span>
              ) : (
                <span className="shrink-0 pt-0.5 text-[11px] font-medium text-[#594a40]">
                  —
                </span>
              )}
            </div>
            {item.allergens ? (
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-red-800">
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
    <ul className="mt-3 space-y-2 border-t border-dotted border-[#c4b7ab]/90 pt-4">
      {valgfriePoteter.map(({ name, allergens }, i) => (
        <li key={name} className="text-[13px] text-stone-800">
          <span className="mr-2 font-sans tabular-nums text-stone-500">{i + 1}.</span>
          <span className="font-semibold uppercase tracking-wide">{name}</span>
          {allergens ? (
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-wide text-red-800">
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
      <div className="mb-8 grid gap-x-10 gap-y-8 lg:grid-cols-2 lg:divide-x lg:divide-[#d0c4b8]/92">
        {[0, 1].map((col) => (
          <div key={col} className={col === 1 ? "lg:pl-10" : ""}>
            <div className="mb-6 hidden gap-4 border-b-2 border-[#a89484]/88 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4a433c] sm:grid sm:grid-cols-[auto_1fr_auto_auto]">
              <span className="w-7" aria-hidden />
              <span>Type</span>
              <span className="text-right">Medium</span>
              <span className="text-right">Stor</span>
            </div>
            <div className="flex flex-col">
              {pizzas.filter((_, i) => i % 2 === col).map((p) => (
                <article
                  key={p.num}
                  className="border-b border-dotted border-[#c4b7ab]/90 py-6 last:border-0 transition-colors hover:bg-[#fdf9f4]/85 sm:py-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-bold uppercase tracking-wide text-[#171210]">
                        <span className="mr-2 font-sans text-[#594a40]">
                          {p.num}.
                        </span>
                        {p.name}
                        <ChiliMark spicy={p.spicy} />
                      </p>
                      <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#3d362f]">
                        {p.toppings}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-6 text-right sm:gap-10">
                      <div className="flex min-w-[4.25rem] flex-col items-end sm:min-w-[5rem]">
                        <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#5f4a3c] sm:text-[10px]">
                          Medium
                        </span>
                        <span className="font-sans text-xl font-bold tabular-nums text-[#d2a96b] sm:text-2xl">
                          {p.medium}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-[#d2a96b]">
                          kr
                        </span>
                      </div>
                      <div className="flex min-w-[4.25rem] flex-col items-end sm:min-w-[5rem]">
                        <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#5f4a3c] sm:text-[10px]">
                          Stor
                        </span>
                        <span className="font-sans text-xl font-bold tabular-nums text-[#d2a96b] sm:text-2xl">
                          {p.stor}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-[#d2a96b]">
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
      <div className="mt-8 space-y-4 rounded-2xl border-2 border-[#8a7568]/72 bg-[#dcd2c8] p-5 text-[13px] font-medium leading-relaxed text-[#2e2822] shadow-sm sm:p-6">
        <p className="font-bold uppercase tracking-[0.12em] text-[#171210]">
          Alle pizza kan lages med
        </p>
        <ul className="list-inside list-disc space-y-1 marker:text-[#6b3410]">
          <li>
            Glutenfri bunn (medium):{" "}
            <span className="font-bold tabular-nums text-[#d2a96b]">219 kr</span>
          </li>
          <li>
            Hvit saus:{" "}
            <span className="font-bold tabular-nums text-[#d2a96b]">25 kr</span>
          </li>
        </ul>
        <p className="pt-1">
          <span className="font-bold uppercase tracking-[0.1em] text-[#171210]">
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
          ? "min-h-screen bg-transparent text-stone-900"
          : "relative isolate min-h-screen min-h-dvh w-full bg-[#d9d4cc] text-[#1c1714]"
      }
    >
      <header
        className={
          experimentalSurface
            ? "border-b border-accent/20 bg-gradient-to-b from-[rgba(72,48,28,0.5)] to-[#080604] pt-1"
            : "border-b-2 border-[#a8927f]/82 bg-gradient-to-b from-[#eae2d9] to-[#dbd0c5] pt-1"
        }
      >
        <div className="h-0.5 bg-[#8c6828]/95" aria-hidden />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight text-[#171210] sm:text-2xl">
              Bjerkvik Grill
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#5f2f14]">
              Komplett meny
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-3">
            <a
              href={SITE.phoneHref}
              aria-label={`Ring og bestill — ${SITE.phoneDisplay}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink shadow-[0_4px_18px_rgba(0,0,0,0.2)] outline-none transition hover:brightness-105 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#8c2d06]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#d9d4cc]"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
              Bestill
            </a>
            <Link
              href="/"
              className="rounded-full border-2 border-[#83705f]/75 bg-[#e6dcd2] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#171210] transition hover:border-[#5f4a3c] hover:bg-[#ddd2c9]"
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
                <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                  {kjottSnadderPastaLeft.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <h3 className="mb-4 mt-8 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#5f2f14]">
                    Valgfrie poteter
                  </h3>
                  <ValgfriePoteterListe />
                </div>
                <div id="snadder" className="scroll-mt-28">
                  <SubSectionTitle>Snadder</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    {snadderItems.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
                <SubSectionTitle>Pasta</SubSectionTitle>
                <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                  {pastaItems.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <SubSectionTitle>Burgere</SubSectionTitle>
                <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                  {burgereSalaterRight.map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <p className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f2f14]">
                    Burger ekstra
                  </p>
                  <CompactDishList items={burgerEkstra} />
                </div>
                <SubSectionTitle>Salater</SubSectionTitle>
                <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
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
            <div className="max-w-xl rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
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
            <div className="max-w-xl rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
              <CompactDishList items={barnemenySimple} />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a433c]">
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
                <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                  {smaretterEtc.slice(0, 6).map((item, i) => (
                    <DishCard key={item.name} item={item} nr={i + 1} />
                  ))}
                  <div className="mt-6 border-t border-dotted border-[#c4b7ab]/90 pt-6">
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
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    {dessertItems.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
                <div id="drikke" className="scroll-mt-28">
                  <SubSectionTitle>Drikke (alkoholfritt)</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
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
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    <CompactDishList items={alkoholCer} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Coctails</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    <CompactDishList items={cocktailItems} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Vinkart</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    {vinListe.map((item, i) => (
                      <DishCard key={item.name} item={item} nr={i + 1} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-7">
                <div>
                  <SubSectionTitle>Brennevin</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    <CompactDishList items={brennevinItems} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Shots</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    <CompactDishList items={shots} />
                  </div>
                </div>
                <div>
                  <SubSectionTitle>Drinker</SubSectionTitle>
                  <div className="rounded-[1.35rem] border-2 border-[#83705f]/65 bg-[#e6dcd2] px-5 py-5 shadow-[0_2px_6px_rgba(35,24,18,0.08)] sm:px-7 sm:py-6">
                    <CompactDishList items={drinkerMixed} />
                  </div>
                </div>
              </div>
            </div>
          </MenyCollapsible>
        </div>

        <footer className="mt-14 border-t-2 border-[#bdae9f]/92 pt-7 text-center text-[11px] font-medium leading-relaxed text-[#3f3831]">
          <p>
            Allergener er veiledende; spør oss gjerne ved tvil eller
            kryssreaksjon. Priser kan endres.
          </p>
        </footer>
      </main>
    </div>
  );
}
