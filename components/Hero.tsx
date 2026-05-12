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
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

const NAV_LINKS = [
  { href: "#hjem", label: "Hjem", Icon: Home },
  { href: "/meny", label: "Meny", Icon: BookOpen },
  { href: "#om", label: "Om oss", Icon: Users },
  { href: "#kontakt", label: "Kontakt", Icon: PhoneCall },
] as const;

export function Hero() {
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
    <header id="hjem" className="relative overflow-x-hidden bg-background text-[#ece7df]">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="sticky top-0 z-[103] flex w-full items-center justify-between gap-3 overflow-visible border-b border-accent/25 bg-background px-5 pb-4 pt-[max(0.75rem,env(safe-area-inset-top))] shadow-[0_10px_28px_rgba(0,0,0,0.28)] md:px-10 md:pb-5"
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
            className="fixed inset-0 z-[100]"
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
          <div className="absolute inset-x-0 bottom-28 z-[1] flex justify-center px-5 lg:bottom-32 lg:px-8">
            <motion.div whileTap={{ scale: 0.97 }} className="w-full max-w-[280px]">
              <Link
                href="/meny"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-accent px-6 text-xs font-bold uppercase tracking-widest text-ink shadow-[0_8px_24px_rgba(0,0,0,0.45)] bg-accent transition hover:brightness-105"
              >
                <BookOpen className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                Se meny
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-8 lg:px-12 lg:py-10">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent/75">
            Grill • Pizza • Kebab
          </p>
          <h1 className="font-serif mt-3 text-balance text-4xl font-semibold leading-[1.06] text-[#f5f0e8] md:text-5xl lg:text-[3.25rem]">
            Velkommen til Bjerkvik Grill
          </h1>
          <div className="mx-auto my-4 h-px w-full max-w-xs bg-accent/30 lg:mx-0" />
          <p className="max-w-lg text-sm leading-relaxed text-[#d7cfc4]/95 md:text-base">
            Vi lager mat med varme og glede — ekte grillsmak, trivelig stemning og gjester som skal føle seg hjemme hos oss.
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
            <span className="font-semibold text-[#f5f0e8]">{SITE.rating}</span>
            <span className="text-[#d7cfc4]/75">
              ({SITE.reviewCount} anmeldelser på Google)
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 border-l-2 border-accent pl-5">
            <a
              href={SITE.phoneHref}
              className="text-sm font-semibold uppercase tracking-wide text-accent underline-offset-8 hover:underline"
            >
              Ring oss
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wide text-[#d7cfc4] underline-offset-8 hover:text-accent hover:underline"
            >
              Åpne kart
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
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
              className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md border-2 border-dashed border-accent/50 px-6 text-xs font-bold uppercase tracking-widest text-accent md:flex-none md:px-8"
            >
              <MapPin className="h-4 w-4" strokeWidth={2.25} />
              Kart
            </motion.a>
          </div>
        </div>
      </div>

      <section
        aria-label="Menykategorier — hurtigvalg"
        className="space-y-2.5 bg-background px-4 py-3 md:space-y-3 md:px-8 md:py-4"
      >
        {LV_MENU.map((c, i) => (
          <Link
            key={c.key}
            href={c.menyHref}
            aria-label={`Full meny — ${c.label}`}
            className={`relative flex min-h-[108px] items-center overflow-hidden rounded-2xl border border-accent/40 px-5 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/50 md:min-h-[124px] md:px-10 md:py-7 ${
              i % 2 === 0 ? "bg-raised" : "bg-sunken"
            }`}
          >
            <LvMenuCoverImage
              img={c.img}
              sizes="(max-width:768px) 100vw, min(896px, 100vw)"
              className="object-cover object-center"
            />
            <div
              className={
                c.img
                  ? "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/65 to-transparent md:from-black/50"
                  : "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-black/30"
              }
              aria-hidden
            />
            <div className="relative z-10 flex w-full items-center justify-between gap-6">
              <div className="max-w-[min(100%,22rem)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-accent">
                  Meny
                </p>
                <p className="font-serif mt-1.5 text-2xl font-semibold text-[#f5f0e8] md:text-4xl">
                  {c.label}
                </p>
                <p className="mt-1.5 max-w-md text-sm leading-snug text-[#ece7df]/95">{c.sub}</p>
              </div>
              <ChevronRight className="h-9 w-9 shrink-0 text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] md:h-10 md:w-10" aria-hidden />
            </div>
          </Link>
        ))}
      </section>

      {/* Layout 2: horisontale «pill»-kort */}
      <section className="border-t border-accent/10 px-4 pb-4 pt-6 md:px-8" aria-label="Våre favoritter">
        <p className="mb-3 px-2 font-serif text-xl font-semibold tracking-tight text-[#f5f0e8] md:mb-4 md:text-2xl">
          Våre favoritter
        </p>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {LV_MENU.map((c) => (
            <Link
              key={`pill-${c.key}`}
              href={c.menyHref}
              aria-label={`Full meny — ${c.label}`}
              className="relative h-40 w-[72vw] shrink-0 overflow-hidden rounded-full border border-accent/20 md:w-56"
            >
              <LvMenuCoverImage img={c.img} sizes="260px" className="object-cover object-center" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" aria-hidden />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end px-5 pb-4 pt-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5f0e8] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  {c.label}
                </span>
                <span className="mt-1 text-[11px] text-[#ece7df] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{c.sub}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-md px-5 pb-8 pt-2 md:px-8">
        <Link
          href="/meny"
          className="flex items-center justify-between gap-3 rounded-2xl border border-accent/25 bg-raised px-4 py-3 shadow-card transition hover:border-accent/45 hover:bg-accent/5 active:scale-[0.99]"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-sunken text-accent">
              <BookOpen className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </span>
            <div className="min-w-0 text-left">
              <span className="block text-xs font-bold uppercase tracking-wide text-accent">
                Meny
              </span>
              <span className="block truncate text-sm font-semibold text-[#f5f0e8]">
                Se hele menyen
              </span>
              <span className="mt-0.5 block truncate text-[11px] text-[#d7cfc4]/75">
                Alt på én side
              </span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-accent" aria-hidden />
        </Link>
      </div>
    </header>
  );
}
