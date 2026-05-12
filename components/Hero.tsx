"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Phone,
  MapPin,
  Star,
  X,
  Home,
  BookOpen,
  Users,
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import { Logo } from "./Logo";
import { LvMenuCoverImage } from "./LvMenuCoverImage";
import {
  FavorittMenyKort,
  FAVORITT_BACON_CHEESE,
  FAVORITT_BELGISK_VAFFEL,
  FAVORITT_BJERKVIK_SPESIAL,
  FAVORITT_JUICY_LUCY,
  FAVORITT_KEBABMIX_TALLERKEN,
  FAVORITT_TACOBURGER,
  FAVORITT_VERNEPLIKTEN,
} from "./FavorittMenyKort";
import { IMG, SITE } from "@/lib/constants";
import { FORSIDE_HERO_VARIANT_2 } from "@/lib/forside-typografi-layout-presets";
import { FORSIDE_PLAKAT_TOPBAR_BG } from "@/lib/plakat-bakgrunn";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

const FAVORITT_KORT_LENKE_KLASSE =
  "group/card relative flex h-64 w-56 shrink-0 flex-col overflow-hidden rounded-2xl border border-[rgba(181,137,82,0.45)] sm:h-64 sm:w-60 md:rounded-[18px]";

const NAV_LINKS = [
  { href: "#hjem", label: "Hjem", Icon: Home },
  { href: "/meny", label: "Meny", Icon: BookOpen },
  { href: "#om", label: "Om oss", Icon: Users },
  { href: "#kontakt", label: "Kontakt", Icon: PhoneCall },
] as const;

type LvMenuItem = (typeof LV_MENU)[number];

function menyCtaTekst(label: LvMenuItem["label"]): string {
  if (label === "Burgere") return "Se burgermeny";
  if (label === "Kebab") return "Se kebabmeny";
  if (label === "Pizza") return "Se pizzameny";
  return "Se i menyen";
}

/** Menykort: bilde i full bredde; mørk overlay fra venstre; tittel, undertekst og lenke. */
function HurtigvalgSplitKort({ item }: { item: LvMenuItem }) {
  return (
    <Link
      href={item.menyHref}
      aria-label={`Full meny — ${item.label}`}
      className="group relative flex min-h-[10.5rem] w-full items-stretch overflow-hidden rounded-[14px] border border-accent/45 bg-sunken shadow-card md:min-h-[13rem]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <LvMenuCoverImage
          img={item.img}
          sizes="(max-width: 768px) 100vw, min(896px, 100vw)"
          className="object-cover object-[72%_center] brightness-[1.07] saturate-[1.02]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/60 from-[0%] via-black/36 via-[28%] via-black/16 via-[48%] to-transparent to-[84%]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 w-full max-w-[48%] shrink-0 flex-col justify-center self-stretch px-3 py-4 sm:px-4 md:px-6 md:py-5">
        <p className="text-[1.3rem] font-serif font-semibold leading-[1.1] text-[#fffdf9] drop-shadow-[0_2px_14px_rgba(0,0,0,0.88)] sm:text-xl md:text-2xl lg:text-[2.05rem]">
          {item.label}
        </p>
        <p className="mt-1 max-w-sm font-sans text-xs leading-snug text-[#f7f2ea] drop-shadow-[0_1px_10px_rgba(0,0,0,0.88)] md:text-[0.875rem]">
          {item.sub}
        </p>
        <span className="mt-2 inline-flex w-fit max-w-full whitespace-nowrap border-b border-[#f2e0bc] pb-0.5 text-xs font-semibold text-[#f8ebd4] drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] md:text-sm">
          {menyCtaTekst(item.label)} →
        </span>
      </div>
    </Link>
  );
}

export function Hero({ synkMenyBakgrunn = false }: { synkMenyBakgrunn?: boolean } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      id="hjem"
      className={`relative overflow-x-hidden text-[#ece7df] ${synkMenyBakgrunn ? "bg-transparent" : "bg-background"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`sticky top-0 z-[103] flex w-full items-center justify-between gap-3 overflow-visible border-b border-accent/25 px-5 pb-4 pt-[max(0.75rem,env(safe-area-inset-top))] shadow-[0_10px_28px_rgba(0,0,0,0.28)] md:px-10 md:pb-5 ${
          synkMenyBakgrunn ? "backdrop-blur-md" : "bg-background"
        }`}
        style={synkMenyBakgrunn ? { backgroundColor: FORSIDE_PLAKAT_TOPBAR_BG } : undefined}
      >
        <Logo />
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobil-meny"
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-sunken text-[#ece7df] shadow-card transition hover:border-accent/45 hover:bg-raised active:scale-95"
        >
          {menuOpen ? (
            <X className="h-4 w-4" strokeWidth={2.25} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={2} />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobil-meny-root"
            className="fixed inset-0 z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75"
              aria-label="Lukk meny"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id="mobil-meny"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-[100dvh] w-[min(100vw,18rem)] flex-col border-l border-accent/15 bg-sunken shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-accent/15 px-4 py-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Meny
                </p>
              </div>
              <ul className="flex flex-col gap-1 p-3">
                {NAV_LINKS.map(({ href, label, Icon }) => (
                  <li key={href}>
                    {href.startsWith("/") ? (
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-[#ece7df] transition hover:bg-accent/10"
                      >
                        <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-[#ece7df] transition hover:bg-accent/10"
                      >
                        <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-accent/15 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <a
                  href={SITE.phoneHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-accent bg-accent py-3 text-sm font-bold text-ink"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  Ring oss
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Hero-bilde + tekst først */}
      <div className="grid border-y border-accent/10 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[260px] lg:min-h-[min(520px,55vh)] lg:bg-black">
          <Image
            src={IMG.hero1}
            alt=""
            fill
            className="object-cover object-center lg:object-contain lg:object-center"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            aria-hidden
          />
        </div>
        <div
          className={
            synkMenyBakgrunn
              ? FORSIDE_HERO_VARIANT_2.column
              : "flex flex-col justify-center px-6 py-8 lg:px-12 lg:py-10"
          }
        >
          <p
            className={
              synkMenyBakgrunn
                ? FORSIDE_HERO_VARIANT_2.tag
                : "text-[10px] uppercase tracking-[0.5em] text-accent/75"
            }
          >
            Grill • Pizza • Kebab
          </p>
          <h1
            className={
              synkMenyBakgrunn
                ? FORSIDE_HERO_VARIANT_2.title
                : "font-serif mt-3 text-balance text-4xl font-semibold leading-[1.06] text-[#f5f0e8] md:text-5xl lg:text-[3.25rem]"
            }
          >
            Velkommen til Bjerkvik Grill
          </h1>
          <div
            className={
              synkMenyBakgrunn
                ? FORSIDE_HERO_VARIANT_2.divider
                : "mx-auto my-4 h-px w-full max-w-xs bg-accent/30 lg:mx-0"
            }
          />
          <p
            className={
              synkMenyBakgrunn
                ? FORSIDE_HERO_VARIANT_2.body
                : "max-w-lg text-sm leading-relaxed text-[#d7cfc4]/95 md:text-base"
            }
          >
            God mat og hyggelig stemning i hjertet av Bjerkvik.
          </p>
          <div
            className={
              synkMenyBakgrunn
                ? FORSIDE_HERO_VARIANT_2.ratingRow
                : "mt-3 flex items-center gap-2 text-sm"
            }
          >
            <Star
              className={
                synkMenyBakgrunn
                  ? "h-6 w-6 shrink-0 fill-accent text-accent md:h-7 md:w-7 lg:h-8 lg:w-8"
                  : "h-4 w-4 fill-accent text-accent"
              }
              aria-hidden
            />
            <span className="font-semibold text-[#f5f0e8]">{SITE.rating}</span>
            <span
              className={
                synkMenyBakgrunn ? FORSIDE_HERO_VARIANT_2.reviewMuted : "text-[#d7cfc4]/75"
              }
            >
              ({SITE.reviewCount} anmeldelser på Google)
            </span>
          </div>
          <div
            className={
              synkMenyBakgrunn ? FORSIDE_HERO_VARIANT_2.buttonsRow : "mt-5 flex flex-wrap gap-3"
            }
          >
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={SITE.phoneHref}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md border border-accent px-6 text-xs font-bold uppercase tracking-widest text-ink bg-accent md:flex-none md:px-8"
            >
              <Phone className="h-4 w-4" strokeWidth={2.25} />
              Ring
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md border border-accent/45 bg-white/[0.04] px-6 text-xs font-bold uppercase tracking-widest text-[#ece7df] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-accent/70 hover:bg-accent/10 hover:text-accent md:flex-none md:px-8"
            >
              <MapPin className="h-4 w-4" strokeWidth={2.25} />
              Kart
            </motion.a>
          </div>
        </div>
      </div>

      <section
        aria-label="Menykategorier — hurtigvalg"
        className={`space-y-2 px-4 py-3 md:space-y-2.5 md:px-8 md:py-4 ${synkMenyBakgrunn ? "bg-transparent" : "bg-background"}`}
      >
        <div className="flex flex-col gap-2 md:gap-2.5">
          {LV_MENU.map((item) => (
            <HurtigvalgSplitKort key={item.key} item={item} />
          ))}
        </div>
      </section>

      {/* Våre favoritter — horisontale firkantede kort */}
      <section className="border-t border-accent/10 px-4 pb-4 pt-6 md:px-8" aria-label="Våre favoritter">
        <p
          className="mb-3 inline-block -rotate-1 px-2 font-display text-xl font-bold uppercase tracking-[0.06em] text-[#e4d9c8] [transform:translateZ(0)] md:mb-4 md:text-2xl"
          style={{
            textShadow: `
              0 1px 0 rgba(255,255,255,0.05),
              0 3px 0 rgba(0,0,0,0.55),
              1px 1px 0 rgba(62,42,28,0.5),
              2px 2px 0 rgba(0,0,0,0.72),
              3px 3px 0 rgba(90,62,40,0.32),
              0 6px 14px rgba(0,0,0,0.45)
            `,
          }}
        >
          Våre favoritter
        </p>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {LV_MENU.map((c) =>
            c.key === "burger" ? (
              <Link
                key={`fav-${c.key}`}
                href={c.menyHref}
                aria-label="Bacon cheese — se burgermeny"
                className={FAVORITT_KORT_LENKE_KLASSE}
              >
                <FavorittMenyKort {...FAVORITT_BACON_CHEESE} />
              </Link>
            ) : c.key === "kebab" ? (
              <Link
                key={`fav-${c.key}-verneplikten`}
                href="/meny#pizza"
                aria-label="Vernerplikten pizza — se pizzameny"
                className={FAVORITT_KORT_LENKE_KLASSE}
              >
                <FavorittMenyKort {...FAVORITT_VERNEPLIKTEN} />
              </Link>
            ) : (
              <Link
                key={`fav-${c.key}`}
                href={c.menyHref}
                aria-label="Bjerkvik spesial — se pizzameny"
                className={FAVORITT_KORT_LENKE_KLASSE}
              >
                <FavorittMenyKort {...FAVORITT_BJERKVIK_SPESIAL} />
              </Link>
            ),
          )}
          <Link
            key="fav-juicy-lucy"
            href="/meny#hovedretter"
            aria-label="Juicy Lucy — se burgere i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_JUICY_LUCY} />
          </Link>
          <Link
            key="fav-kebabmix-tallerken"
            href="/meny#kebab"
            aria-label="Kebabmix tallerken — se kebabmeny"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_KEBABMIX_TALLERKEN} />
          </Link>
          <Link
            key="fav-tacoburger"
            href="/meny#hovedretter"
            aria-label="Tacoburger — se burgere i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_TACOBURGER} />
          </Link>
          <Link
            key="fav-belgisk-vaffel"
            href="/meny#smaretter"
            aria-label="Belgisk vaffel med is — se dessert i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_BELGISK_VAFFEL} />
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5 pb-8 pt-2 md:px-8">
        <Link
          href="/meny"
          aria-label="Se hele menyen"
          className="flex min-h-[48px] items-center justify-between gap-3 rounded-md border border-accent bg-accent px-6 py-3 text-ink shadow-none transition hover:brightness-105 active:scale-[0.99]"
        >
          <span className="flex min-w-0 items-center gap-2">
            <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="min-w-0 truncate text-xs font-bold uppercase tracking-wide text-ink">
              Se hele menyen
            </span>
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 text-ink" aria-hidden />
        </Link>
      </div>
    </header>
  );
}
