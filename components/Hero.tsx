"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Phone,
  X,
  Home,
  BookOpen,
  Users,
  PhoneCall,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Logo } from "./Logo";
import { LvMenuCoverImage } from "./LvMenuCoverImage";
import { ScrollReveal } from "./ScrollReveal";
import {
  FavorittMenyKort,
  FAVORITT_ALL_IN_BEEF,
  FAVORITT_BIFFSNADDER,
  FAVORITT_BJERKVIK_SPESIAL,
  FAVORITT_JUICY_LUCY,
  FAVORITT_MEATLOVER,
  FAVORITT_MEKSISNADDER,
  FAVORITT_TOUCH,
} from "./FavorittMenyKort";
import { StarsRow, parseRatingDisplay } from "@/components/Reviews";
import { IMG, SITE } from "@/lib/constants";
import { FORSIDE_PLAKAT_TOPBAR_BG } from "@/lib/plakat-bakgrunn";
import { LV_MENU, HURTIGVALG_BIFF_BANNER } from "@/lib/layout-valg/menu-data";

const MAP_EMBED_FORSIDE = `https://maps.google.com/maps?q=${encodeURIComponent(
  SITE.address,
)}&output=embed`;

/** Samme uttrykk som hero-CTA «Se vår meny» (plakat med max-bredde). */
const HERO_MENY_CTA_KLASSE =
  "inline-flex min-h-[46px] w-full max-w-xs items-center justify-center gap-2 rounded-md border border-accent bg-accent px-6 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:brightness-105 active:scale-[0.99]";

/** Full bredde variant (hero uten plakat-synk). */
const HERO_MENY_CTA_KLASSE_FULL_BREDDE =
  "inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md border border-accent bg-accent px-6 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:brightness-105 active:scale-[0.99]";

/** Gul knapp i halv bredde (f.eks. faner to kolonner). */
const HERO_MENY_CTA_KLASSE_AKTIV_DELT =
  "inline-flex min-h-[46px] flex-1 items-center justify-center gap-1.5 rounded-md border border-accent bg-accent px-2 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:brightness-105 active:scale-[0.99] sm:px-3 sm:gap-2";

const HERO_MENY_CTA_KLASSE_INAKTIV_DELT =
  "inline-flex min-h-[46px] flex-1 items-center justify-center gap-1.5 rounded-md border border-accent/50 bg-transparent px-2 text-xs font-black uppercase tracking-[0.18em] text-accent transition hover:bg-accent/15 hover:text-ink sm:px-3 sm:gap-2";

/** Under innebygd kart: samme gullknapp som hero, flatt mot kartet (forelder har ramme). */
const HERO_MENY_CTA_KLASSE_KART_NEDRE =
  "inline-flex min-h-[46px] w-full items-center justify-center gap-2 border-t border-black/10 bg-accent px-6 text-xs font-black uppercase tracking-[0.18em] text-ink transition hover:brightness-105 active:scale-[0.99]";

const FAVORITT_KORT_LENKE_KLASSE =
  "group/card relative flex h-64 w-56 shrink-0 flex-col overflow-hidden rounded-2xl border border-[rgba(181,137,82,0.45)] sm:h-64 sm:w-60 md:rounded-[18px]";

const NAV_LINKS = [
  { href: "#hjem", label: "Hjem", Icon: Home },
  { href: "/meny", label: "Meny", Icon: BookOpen },
  { href: "#om", label: "Om oss", Icon: Users },
  { href: "#kontakt", label: "Kontakt", Icon: PhoneCall },
] as const;

type LvMenuItem = (typeof LV_MENU)[number];

type HurtigvalgMenyBannerItem = LvMenuItem | typeof HURTIGVALG_BIFF_BANNER;

/** Samme fotostil på alle meny-hurtigkortene. */
const HURTIGVALG_IMG_KLASSE =
  "brightness-[1.05] saturate-[1.06] md:brightness-[1.06] md:saturate-[1.07]";

const HURTIGVALG_CARD_KLASSE =
  "group relative overflow-hidden rounded-[14px] border border-[#b58952]/45 bg-[#16120f] shadow-card";

function hurtigvalgCtaTekst(label: HurtigvalgMenyBannerItem["label"]): string {
  if (label === "Burgere") return "Se burgermeny";
  if (label === "Kebab") return "Se kebabmeny";
  if (label === "Pizza") return "Se pizzameny";
  if (label === "Biff") return "Se biffmeny";
  return "Se i menyen";
}

/** Meny-hurtigkort: samme layout som burger (gyllen label, to tittellinjer, strek, brødtekst, CTA + rund knapp). */
function HurtigvalgMenyKort({
  item,
  variant,
}: {
  item: HurtigvalgMenyBannerItem;
  variant: "featured" | "half";
}) {
  const featured = variant === "featured";
  const imgObj =
    featured && item.key === "biff" ? "object-[52%_center]" : featured ? "object-[58%_center]" : "object-[52%_center]";

  return (
    <Link
      href={item.menyHref}
      aria-label={`${item.heroEyebrow} — ${item.heroTitle1} ${item.heroTitle2}`}
      className={`${HURTIGVALG_CARD_KLASSE} flex w-full flex-col ${
        featured
          ? "min-h-[15rem] md:min-h-[18rem] lg:min-h-[19rem]"
          : "min-h-[15rem] md:min-h-[17.5rem] lg:min-h-[18.5rem]"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <LvMenuCoverImage
          img={item.img}
          sizes={
            featured
              ? "(max-width: 768px) 100vw, min(1024px, 100vw)"
              : "(max-width: 768px) 50vw, 400px"
          }
          className={`object-cover ${imgObj} ${HURTIGVALG_IMG_KLASSE}`}
        />
      </div>
      <div
        className={
          item.key === "biff"
            ? "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/[0.52] via-black/[0.28] via-[52%] to-black/[0.06] md:via-[56%]"
            : "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/[0.86] via-black/[0.52] via-45% to-black/10 md:via-55%"
        }
        aria-hidden
      />

      <div
        className={`relative z-10 flex w-full flex-1 flex-col justify-between ${
          featured
            ? "min-h-[15rem] px-4 pb-6 pt-5 sm:min-h-[15.5rem] sm:px-6 sm:pb-7 sm:pt-6 md:min-h-[18rem] md:px-8 md:pb-10 md:pt-10 lg:min-h-[19rem]"
            : "min-h-[15rem] px-3.5 pb-5 pt-4 sm:min-h-[15.5rem] sm:px-4 sm:pb-6 sm:pt-5 md:min-h-[17.5rem] md:px-5 md:pb-8 md:pt-7 lg:min-h-[18.5rem] lg:px-6"
        }`}
      >
        <div
          className={
            featured
              ? "max-w-[min(20rem,calc(100%-3rem))] md:max-w-md"
              : "max-w-[min(100%,calc(100%-3rem))] sm:max-w-[16rem] md:max-w-[min(88%,17.5rem)]"
          }
        >
          <p
            className={`font-black uppercase tracking-[0.26em] text-[#dcb470] ${
              featured ? "text-[10px] md:text-[11px]" : "text-[9px] sm:text-[10px] md:text-[10.5px]"
            }`}
          >
            {item.heroEyebrow}
          </p>
          <h2
            className={`mt-1.5 font-display font-bold uppercase leading-[1.03] tracking-[0.04em] text-white sm:mt-2 ${
              featured
                ? "text-[clamp(1.65rem,4.9vw,2.75rem)]"
                : "text-[clamp(1.05rem,3.4vw,1.55rem)] md:text-[clamp(1.15rem,2.2vw,1.75rem)]"
            }`}
          >
            {item.heroTitle1}
          </h2>
          <h3
            className={`mt-0.5 font-display font-bold uppercase leading-tight tracking-[0.12em] text-white/92 ${
              featured
                ? "text-[clamp(1.08rem,2.9vw,1.42rem)]"
                : "text-[clamp(0.72rem,2.2vw,1.05rem)] md:text-[clamp(0.82rem,1.4vw,1.15rem)]"
            }`}
          >
            {item.heroTitle2}
          </h3>
          <div
            className={`mt-3 h-[2px] shrink-0 rounded-full bg-[#b58952] sm:mt-4 ${
              featured ? "w-11 md:w-12 md:rounded-sm" : "w-9 sm:w-10 md:w-11"
            }`}
            aria-hidden
          />
          {item.key !== "biff" ? (
            <p
              className={`mt-3 font-medium leading-snug text-white/[0.92] sm:mt-4 ${
                featured
                  ? "max-w-[18.5rem] text-[13px] md:text-sm md:leading-relaxed"
                  : "max-w-none text-[10.5px] line-clamp-4 sm:text-[11px] sm:leading-relaxed md:line-clamp-3 md:text-xs"
              }`}
            >
              {item.sub}
            </p>
          ) : null}
        </div>

        <div className={`flex items-center gap-2 sm:gap-3 ${featured ? "pt-6 md:pt-8" : "pt-4 md:pt-6"}`}>
          <span
            className={`font-black uppercase tracking-[0.2em] text-[#dcb470] ${
              featured
                ? "text-[10px] md:text-[11px] md:tracking-[0.22em]"
                : "text-[9px] tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em] md:text-[10.5px]"
            }`}
          >
            {hurtigvalgCtaTekst(item.label)}
          </span>
          <span
            className={`flex shrink-0 items-center justify-center rounded-full border-[2px] border-[#c9a35c] bg-[#bf9145] text-ink shadow-[0_10px_24px_rgba(0,0,0,0.35)] ring-1 ring-black/25 transition group-hover:border-[#d4b06a] group-hover:brightness-[1.06] group-active:scale-[0.98] ${
              featured
                ? "h-10 w-10 md:h-11 md:w-11"
                : "h-9 w-9 sm:h-[2.375rem] sm:w-[2.375rem] md:h-10 md:w-10"
            }`}
            aria-hidden
          >
            <ChevronRight
              className={featured ? "h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" : "h-[1.1rem] w-[1.1rem] sm:h-5 sm:w-5"}
              strokeWidth={2.65}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Hero({ synkMenyBakgrunn = false }: { synkMenyBakgrunn?: boolean } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introKontaktTab, setIntroKontaktTab] = useState<"ring" | "kart">("ring");

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

      {/* Hero — fotobakgrunn (`public/images/hr.png`, se IMG.bg5) */}
      <div className="border-y border-[#b58952]/35">
        <div
          className={`relative overflow-hidden bg-[#453a32] ${
            synkMenyBakgrunn
              ? "min-h-[min(380px,58dvh)] lg:min-h-[min(600px,62dvh)]"
              : "min-h-[min(320px,50dvh)] lg:min-h-[min(520px,55dvh)]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={IMG.bg5}
              alt=""
              fill
              className="object-cover object-[center_40%]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div
            className={`pointer-events-none absolute inset-0 z-[1] ${
              synkMenyBakgrunn ? "bg-[#453a32]/20" : "bg-[#453a32]/89"
            }`}
            aria-hidden
          />
          <div
            className={`pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b ${
              synkMenyBakgrunn
                ? "from-black/10 via-transparent to-black/18"
                : "from-black/40 via-black/12 to-black/50"
            }`}
            aria-hidden
          />
          {synkMenyBakgrunn ? (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[55%] bg-gradient-to-t from-black/82 via-black/48 to-transparent"
              aria-hidden
            />
          ) : null}
          <div
            className={`relative z-10 flex w-full flex-col gap-6 ${
              synkMenyBakgrunn
                ? "min-h-[min(380px,58dvh)] items-center justify-end px-5 pb-8 pt-8 text-center md:px-8 md:pb-10 md:pt-10 lg:min-h-[min(600px,62dvh)] lg:px-10 lg:pb-12 lg:pt-12"
                : "min-h-[min(320px,50dvh)] items-stretch justify-end px-6 pb-14 pt-8 lg:min-h-[min(520px,55dvh)] lg:px-12 lg:pb-20 lg:pt-10"
            }`}
          >
            {synkMenyBakgrunn ? (
              <div className="flex w-full max-w-md flex-col items-center gap-3">
                <Link href="/meny" className={HERO_MENY_CTA_KLASSE}>
                  <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                  Se vår meny
                </Link>
              </div>
            ) : (
              <div className="flex w-full flex-col gap-2">
                <Link href="/meny" className={HERO_MENY_CTA_KLASSE_FULL_BREDDE}>
                  <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                  Se vår meny
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        aria-labelledby="forside-intro-heading"
        className="border-t border-[#b58952]/35 bg-[#453a32] pb-[calc(2.25rem+env(safe-area-inset-bottom,0px))] text-[#e8e2da] lg:pb-0"
      >
        <ScrollReveal className="mx-auto max-w-2xl rounded-none px-4 py-4 backdrop-blur-[12px] md:px-8 md:py-5">
          <div className="space-y-2 rounded-none bg-transparent text-center font-serif md:space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent md:text-sm">
            {SITE.forsideIntroEyebrow}
          </p>
          <h1
            id="forside-intro-heading"
            className="text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-[#faf7f2] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-3xl md:text-[2.15rem]"
          >
            Velkommen til {SITE.name}
          </h1>
          <div
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.8rem] tabular-nums text-[#f0ebe5] [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] sm:text-sm"
            role="group"
            aria-label={`${SITE.rating} av 5 på Google, basert på ${SITE.reviewCount} vurderinger`}
          >
            <StarsRow value={parseRatingDisplay(SITE.rating)} size="sm" />
            <span className="font-semibold text-accent">{SITE.rating}</span>
            <span className="text-[#d8d0c8]">·</span>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#e8dfd5] underline decoration-[#b58952]/50 underline-offset-2 transition hover:text-[#faf7f2] hover:decoration-accent"
            >
              {SITE.reviewCount} vurderinger på Google
            </a>
          </div>
          <p className="text-base font-medium leading-relaxed text-[#f3efe8] [font-family:Times,'Times_New_Roman',Georgia,serif] [text-shadow:0_1px_2px_rgba(0,0,0,0.28)]">
            {SITE.forsideIntro}
          </p>

          <div className="mx-auto mt-5 flex w-full max-w-xs flex-col gap-3">
            <div
              className="flex w-full gap-2"
              role="tablist"
              aria-label="Ring oss eller se kart"
            >
              <button
                type="button"
                role="tab"
                aria-selected={introKontaktTab === "ring"}
                aria-controls="intro-kontakt-panel"
                id="intro-tab-ring"
                onClick={() => setIntroKontaktTab("ring")}
                className={
                  introKontaktTab === "ring"
                    ? HERO_MENY_CTA_KLASSE_AKTIV_DELT
                    : HERO_MENY_CTA_KLASSE_INAKTIV_DELT
                }
              >
                Ring oss
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={introKontaktTab === "kart"}
                aria-controls="intro-kontakt-panel"
                id="intro-tab-kart"
                onClick={() => setIntroKontaktTab("kart")}
                className={
                  introKontaktTab === "kart"
                    ? HERO_MENY_CTA_KLASSE_AKTIV_DELT
                    : HERO_MENY_CTA_KLASSE_INAKTIV_DELT
                }
              >
                Kart
              </button>
            </div>

            <div
              id="intro-kontakt-panel"
              role="tabpanel"
              aria-labelledby={introKontaktTab === "ring" ? "intro-tab-ring" : "intro-tab-kart"}
              className="w-full"
            >
              {introKontaktTab === "ring" ? (
                <a href={SITE.phoneHref} className={`${HERO_MENY_CTA_KLASSE} mx-auto`}>
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                  <span className="font-geist-mono tabular-nums tracking-wide">
                    {SITE.phoneDisplay}
                  </span>
                </a>
              ) : (
                <div className="mx-auto w-full max-w-xs overflow-hidden rounded-md border border-accent/50">
                  <div className="relative aspect-[16/10] w-full bg-[#2a2520]">
                    <iframe
                      title="Kart — Bjerkvik Grill"
                      src={MAP_EMBED_FORSIDE}
                      className="absolute inset-0 h-full w-full brightness-[0.88] contrast-[1.02] saturate-[0.95]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={HERO_MENY_CTA_KLASSE_KART_NEDRE}
                  >
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                    Åpne i Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        aria-label="Menykategorier — hurtigvalg"
        className={`space-y-2 px-4 pb-3 pt-1 md:space-y-2.5 md:px-8 md:pb-4 md:pt-1.5 ${synkMenyBakgrunn ? "bg-transparent" : "bg-background"}`}
      >
        <div className="flex flex-col gap-2 md:gap-2.5">
          <ScrollReveal y={20} delay={0}>
            <HurtigvalgMenyKort item={LV_MENU[0]} variant="featured" />
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-2 md:gap-2.5">
            <ScrollReveal y={18} delay={0.06}>
              <HurtigvalgMenyKort item={LV_MENU[1]} variant="half" />
            </ScrollReveal>
            <ScrollReveal y={18} delay={0.1}>
              <HurtigvalgMenyKort item={LV_MENU[2]} variant="half" />
            </ScrollReveal>
          </div>
          <ScrollReveal y={20} delay={0.08}>
            <HurtigvalgMenyKort item={HURTIGVALG_BIFF_BANNER} variant="featured" />
          </ScrollReveal>
        </div>
      </section>

      {/* Våre favoritter — horisontale firkantede kort (kort i full bredde mot skjermkant) */}
      <section className="border-t border-[#b58952]/35 pb-4 pt-6" aria-label="Våre favoritter">
        <ScrollReveal className="mb-3 px-4 md:mb-4 md:px-8" y={10} delay={0}>
          <p
            className="inline-block px-1 font-display text-xl font-semibold uppercase tracking-[0.08em] text-[#f2ebe3] [transform:translateZ(0)] md:text-2xl"
            style={{
              textShadow: `
                0 1px 0 rgba(255,255,255,0.04),
                0 2px 6px rgba(0,0,0,0.35)
              `,
            }}
          >
            Våre favoritter
          </p>
        </ScrollReveal>
        <ScrollReveal
          className="no-scrollbar flex touch-pan-x gap-3 overflow-x-auto pb-1 ps-[max(0px,env(safe-area-inset-left))] pe-[max(0px,env(safe-area-inset-right))]"
          y={18}
          delay={0.05}
        >
          {LV_MENU.map((c) =>
            c.key === "burger" ? (
              <Link
                key={`fav-${c.key}`}
                href={c.menyHref}
                aria-label="Touch — se hovedretter i menyen"
                className={FAVORITT_KORT_LENKE_KLASSE}
              >
                <FavorittMenyKort {...FAVORITT_TOUCH} />
              </Link>
            ) : c.key === "kebab" ? (
              <Link
                key={`fav-${c.key}-meatlover`}
                href="/meny#pizza"
                aria-label="Meatlover pizza — se pizzameny"
                className={FAVORITT_KORT_LENKE_KLASSE}
              >
                <FavorittMenyKort {...FAVORITT_MEATLOVER} />
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
            key="fav-all-in-beef"
            href="/meny#hovedretter"
            aria-label="All in beef — se burgere i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_ALL_IN_BEEF} />
          </Link>
          <Link
            key="fav-biffsnadder"
            href="/meny#snadder"
            aria-label="Biffsnadder — se snadder i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_BIFFSNADDER} />
          </Link>
          <Link
            key="fav-meksisnadder"
            href="/meny#snadder"
            aria-label="Meksikansk biffsnadder — se snadder i menyen"
            className={FAVORITT_KORT_LENKE_KLASSE}
          >
            <FavorittMenyKort {...FAVORITT_MEKSISNADDER} />
          </Link>
        </ScrollReveal>
      </section>

      <div className="pb-8 pt-2">
        <ScrollReveal className="mx-auto max-w-md px-5 md:px-8" y={14} delay={0.04}>
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
        </ScrollReveal>
      </div>
    </header>
  );
}
