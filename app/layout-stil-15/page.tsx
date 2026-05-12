import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight, MapPin, Menu, Phone, Star } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { FORSIDE_LAYOUT_STILER } from "@/lib/forside-layout-stil-presets";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export const metadata: Metadata = {
  title: "15 helhetlige layout-stiler · forside",
  description: "Forhåndsvisning: header, hero, tekst, knapper og hurtigvalg i samme stil.",
  robots: { index: false, follow: false },
};

function MiniForside({ stil }: { stil: (typeof FORSIDE_LAYOUT_STILER)[number] }) {
  return (
    <div className={`overflow-hidden rounded-xl ring-1 ring-white/[0.08] ${stil.root}`}>
      <div className={stil.headerRow}>
        <Logo className={stil.logoScale} />
        <span className={stil.menuBtn} aria-hidden>
          <Menu className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </div>

      <div className={stil.heroStack}>
        <div className={stil.heroImgShell}>
          <Image
            src={IMG.hero1}
            alt=""
            fill
            className={stil.heroImg}
            sizes="320px"
            unoptimized
          />
          <div className={stil.heroVignette} aria-hidden />
          <div className={stil.heroCtaWrap}>
            <Link href="/meny" className={stil.heroCta}>
              <BookOpen className="h-3 w-3 shrink-0" strokeWidth={2.25} aria-hidden />
              Se meny
            </Link>
          </div>
        </div>

        <div className={stil.copyBlock}>
          <p className={stil.eyebrow}>Grill · Pizza · Kebab</p>
          <h2 className={stil.h1}>Velkommen til Bjerkvik Grill</h2>
          <div className={stil.rule} aria-hidden />
          <p className={stil.body}>
            Vi lager mat med varme og glede — ekte grillsmak og trivelig stemning.
          </p>
          <div className={stil.starsRow}>
            <Star className="h-3 w-3 fill-accent text-accent" aria-hidden />
            <span className="font-medium text-[#f5f0e8]">{SITE.rating}</span>
            <span className="text-white/45">Google</span>
          </div>
          <div className={stil.quickLinksRow}>
            <a href={SITE.phoneHref} className={stil.ringBtn}>
              Ring oss
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={stil.kartBtn}
            >
              Åpne kart
            </a>
          </div>
          <div className="mt-3 flex gap-2">
            <a href={SITE.phoneHref} className={`${stil.solidRingBtn} min-w-0`}>
              <Phone className="h-3 w-3 shrink-0" aria-hidden />
              Ring
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${stil.solidKartBtn} min-w-0`}
            >
              <MapPin className="h-3 w-3 shrink-0" aria-hidden />
              Kart
            </a>
          </div>
        </div>
      </div>

      <section aria-label="Hurtigvalg" className={stil.quickSection}>
        {LV_MENU.map((c, i) => (
          <Link key={c.key} href={c.menyHref} className={stil.quickCard(i)}>
            <LvMenuCoverImage
              img={c.img}
              sizes="280px"
              className="object-cover object-center"
            />
            <div className={stil.quickOverlay} aria-hidden />
            <div className="relative z-10 flex w-full items-center justify-between gap-2 px-0.5">
              <div className="min-w-0 max-w-[12rem]">
                <p className={stil.quickEyebrow}>Meny</p>
                <p className={stil.quickTitle}>{c.label}</p>
                <p className={stil.quickSub}>{c.sub}</p>
              </div>
              <ChevronRight className={stil.quickChevron} aria-hidden />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default function LayoutStil15Page() {
  return (
    <div className="min-h-screen bg-[#14100e] px-4 py-8 text-[#ece7df] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-10 flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Forhåndsvisning
            </p>
            <h1 className="font-serif mt-1 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
              15 helhetlige layout-stiler
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/55">
              Hver kolonne = samme innhold (header → hero-bilde → velkomst → stjerner → lenker → Ring/Kart → tre
              hurtigvalg), men <strong className="text-white/80">én samlet stil</strong> på alt. Velg nummer 1–15
              når du vil at vi skal implementere på forsiden.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-full border border-accent/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent transition hover:bg-accent/10"
            >
              ← Forsiden
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {FORSIDE_LAYOUT_STILER.map((stil, idx) => (
            <div key={stil.name} className="flex flex-col">
              <div className="mb-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                  Layout {idx + 1}
                </p>
                <p className="text-sm font-semibold text-[#f5f0e8]">{stil.name}</p>
                <p className="text-[11px] leading-snug text-white/45">{stil.blurb}</p>
              </div>
              <div className="mx-auto w-full max-w-[360px] origin-top scale-[0.98]">
                <MiniForside stil={stil} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
