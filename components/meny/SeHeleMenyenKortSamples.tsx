import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

type Variant = {
  id: number;
  title: string;
  blurb: string;
  /** Ytre wrapper (flex-rad) ELLER gradient-ramme */
  wrap: string;
  /** Kun id 14: innvendig flex-boks inne i gradient */
  innerFlex?: string;
  iconBox: string;
  label: string;
  mid: string;
  sub: string;
  chevron: string;
};

function KortInnhold({
  iconBox,
  label,
  mid,
  sub,
  chevron,
}: Pick<Variant, "iconBox" | "label" | "mid" | "sub" | "chevron">) {
  return (
    <>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className={`flex shrink-0 items-center justify-center ${iconBox}`}>
          <BookOpen className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </span>
        <div className="min-w-0 text-left">
          <span className={`block ${label}`}>Meny</span>
          <span className={`block truncate ${mid}`}>Se hele menyen</span>
          <span className={`mt-0.5 block truncate ${sub}`}>Alt på én side</span>
        </div>
      </div>
      <ChevronRight className={`shrink-0 ${chevron}`} aria-hidden />
    </>
  );
}

function VariantPreview(v: Variant) {
  if (v.innerFlex) {
    return (
      <div className={v.wrap}>
        <div className={`flex items-center justify-between gap-3 transition ${v.innerFlex}`}>
          <KortInnhold
            iconBox={v.iconBox}
            label={v.label}
            mid={v.mid}
            sub={v.sub}
            chevron={v.chevron}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-between gap-3 transition ${v.wrap}`}>
      <KortInnhold iconBox={v.iconBox} label={v.label} mid={v.mid} sub={v.sub} chevron={v.chevron} />
    </div>
  );
}

const PREVIEW_BG = "rounded-lg border border-white/[0.06] bg-[#1a1612] p-4 md:p-5";

export function SeHeleMenyenKortSamples() {
  const variants: Variant[] = [
    {
      id: 1,
      title: "Dagens (forsiden)",
      blurb: "Tidligere standard på forsiden — lys kant på mørk «raised» plate.",
      wrap: "rounded-2xl border border-accent/25 bg-raised px-4 py-3 shadow-card hover:border-accent/45 hover:bg-accent/5",
      iconBox: "h-9 w-9 rounded-xl border border-accent/25 bg-sunken text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 2,
      title: "Gullknapp (invertert)",
      blurb: "Valgt på forsiden nå: mørk tekst på gull, hover lysner litt.",
      wrap: "rounded-2xl border border-accent/50 bg-accent px-4 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.35)] hover:brightness-105",
      iconBox: "h-9 w-9 rounded-xl border border-ink/15 bg-ink/10 text-ink",
      label: "text-xs font-bold uppercase tracking-wide text-ink/75",
      mid: "text-sm font-bold text-ink",
      sub: "text-[11px] text-ink/70",
      chevron: "h-5 w-5 text-ink",
    },
    {
      id: 3,
      title: "Spøkelses-outline",
      blurb: "Nesten gjennomsiktig — bare kant og type.",
      wrap: "rounded-2xl border-2 border-dashed border-accent/40 bg-transparent px-4 py-3 hover:border-accent/60 hover:bg-white/[0.03]",
      iconBox: "h-9 w-9 rounded-xl border border-dashed border-accent/45 bg-transparent text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent/90",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-foreground/55",
      chevron: "h-5 w-5 text-accent/90",
    },
    {
      id: 4,
      title: "Pille / kapsel",
      blurb: "Myk «chip»-følelse med full avrunding.",
      wrap: "rounded-full border border-accent/30 bg-sunken px-5 py-2.5 shadow-inner hover:border-accent/50",
      iconBox: "h-9 w-9 rounded-full border border-accent/25 bg-background/50 text-accent",
      label: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[10px] text-foreground/55",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 5,
      title: "Neon kiosk",
      blurb: "Kald kant-glød — litt «nattåpent».",
      wrap: "rounded-2xl border border-cyan-500/35 bg-slate-950/50 px-4 py-3 shadow-[0_0_22px_rgba(34,211,238,0.12)] hover:border-cyan-400/50",
      iconBox: "h-9 w-9 rounded-xl border border-cyan-500/30 bg-black/40 text-cyan-300",
      label: "text-xs font-bold uppercase tracking-wide text-cyan-400/90",
      mid: "text-sm font-semibold text-slate-100",
      sub: "text-[11px] text-slate-400",
      chevron: "h-5 w-5 text-cyan-400",
    },
    {
      id: 6,
      title: "Brutalist",
      blurb: "Gul plate, tjukk svart kant, hard skygge.",
      wrap: "rounded-md border-4 border-stone-900 bg-yellow-400 px-3 py-2.5 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-px hover:translate-y-px hover:shadow-[4px_4px_0_0_#1c1917]",
      iconBox: "h-9 w-9 rounded border-2 border-stone-900 bg-white text-stone-900",
      label: "text-[10px] font-black uppercase tracking-wider text-stone-900",
      mid: "text-sm font-black uppercase text-stone-900",
      sub: "text-[10px] font-bold text-stone-800",
      chevron: "h-5 w-5 text-stone-900",
    },
    {
      id: 7,
      title: "Glass",
      blurb: "Blur + lys kant — moderne «frostet».",
      wrap: "rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 shadow-lg backdrop-blur-md hover:bg-white/[0.09]",
      iconBox: "h-9 w-9 rounded-xl border border-white/15 bg-white/[0.08] text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-white/55",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 8,
      title: "Stempel",
      blurb: "Litt rotasjon — som trykk på papir.",
      wrap: "-rotate-1 rounded-2xl border border-accent/35 bg-raised px-4 py-3 shadow-card hover:-rotate-0 hover:border-accent/55",
      iconBox: "h-9 w-9 rounded-xl border border-accent/30 bg-sunken text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 9,
      title: "Dobbel ring",
      blurb: "Ring + offset — ekstra ramme rundt.",
      wrap: "rounded-2xl bg-raised px-4 py-3 shadow-card ring-2 ring-accent/35 ring-offset-2 ring-offset-background hover:ring-accent/55",
      iconBox: "h-9 w-9 rounded-xl border border-accent/25 bg-sunken text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 10,
      title: "Venstrestripe",
      blurb: "Tykk gullstripe til venstre — «faner»-følelse.",
      wrap: "rounded-r-2xl rounded-l-md border border-y border-r border-accent/20 border-l-4 border-l-accent bg-raised py-3 pl-3 pr-4 shadow-sm hover:bg-accent/5",
      iconBox: "h-9 w-9 rounded-lg border border-accent/25 bg-sunken text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 11,
      title: "Innfelt plate",
      blurb: "Dyp «sunken» bakgrunn — kortet synker inn.",
      wrap: "rounded-2xl border border-black/40 bg-black/35 px-4 py-3 shadow-[inset_0_2px_8px_rgba(0,0,0,0.45)] hover:border-accent/30",
      iconBox: "h-9 w-9 rounded-xl border border-white/10 bg-black/50 text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-stone-400",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 12,
      title: "Store tall / display",
      blurb: "Oswald på hovedlinjen — mer plakat.",
      wrap: "rounded-2xl border border-accent/25 bg-raised px-4 py-3 shadow-card hover:border-accent/45",
      iconBox: "h-10 w-10 rounded-xl border border-accent/25 bg-sunken text-accent",
      label: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent",
      mid: "font-display text-base font-bold uppercase leading-tight tracking-tight text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 13,
      title: "Kompakt rad",
      blurb: "Mindre padding — tettere på mobil.",
      wrap: "rounded-xl border border-accent/25 bg-raised px-3 py-2 shadow-sm hover:border-accent/45",
      iconBox: "h-8 w-8 rounded-lg border border-accent/25 bg-sunken text-accent [&_svg]:h-3.5 [&_svg]:w-3.5",
      label: "text-[10px] font-bold uppercase tracking-wide text-accent",
      mid: "text-xs font-semibold text-[#f5f0e8]",
      sub: "text-[10px] text-[#d7cfc4]/70",
      chevron: "h-4 w-4 text-accent",
    },
    {
      id: 14,
      title: "Gradient-ramme",
      blurb: "Tynn gullramme med gradient + innvendig plate.",
      wrap: "rounded-2xl bg-gradient-to-r from-accent via-amber-500 to-amber-700 p-px shadow-lg hover:brightness-105",
      innerFlex: "rounded-[15px] bg-raised px-4 py-3 hover:bg-accent/[0.04]",
      iconBox: "h-9 w-9 rounded-xl border border-accent/20 bg-sunken text-accent",
      label: "text-xs font-bold uppercase tracking-wide text-accent",
      mid: "text-sm font-semibold text-[#f5f0e8]",
      sub: "text-[11px] text-[#d7cfc4]/75",
      chevron: "h-5 w-5 text-accent",
    },
    {
      id: 15,
      title: "Luksus mørk",
      blurb: "Nesten svart med tynn gullinje — rolig premium.",
      wrap: "rounded-2xl border border-amber-700/35 bg-[#0f0c0a] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-amber-600/50",
      iconBox: "h-9 w-9 rounded-xl border border-amber-800/40 bg-black/50 text-amber-500",
      label: "text-xs font-bold uppercase tracking-[0.2em] text-amber-600/90",
      mid: "text-sm font-semibold text-amber-50",
      sub: "text-[11px] text-amber-200/45",
      chevron: "h-5 w-5 text-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-accent/15 bg-sunken">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              15 uttrykk for «Se hele menyen»-kortet
            </p>
            <p className="mt-1 max-w-xl text-sm text-foreground/65">
              Samme innhold (bok, tre tekstlinjer, pil) — ulike rammer, farger og hover. Velg nummer, så kan vi bytte den ekte
              lenken på forsiden.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-full border border-accent/35 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-accent/55"
            >
              ← Forsiden
            </Link>
            <Link
              href="/meny"
              className="rounded-full border border-accent/35 bg-raised px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-accent/55"
            >
              Meny
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {variants.map((v) => (
            <li key={v.id}>
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-accent/15 bg-raised shadow-card ring-1 ring-white/[0.05]">
                <figcaption className="border-b border-accent/15 px-4 py-3">
                  <p className="flex items-baseline gap-2">
                    <span className="font-serif text-lg font-semibold text-accent">{v.id}</span>
                    <span className="font-semibold leading-snug">{v.title}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/60">{v.blurb}</p>
                </figcaption>
                <div className={`flex flex-1 flex-col justify-center ${PREVIEW_BG}`}>
                  <VariantPreview {...v} />
                </div>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-foreground/55">
          Si f.eks. «meny-kort <strong className="text-foreground">8</strong>» så oppdaterer vi{" "}
          <code className="rounded bg-sunken px-1.5 py-0.5 text-xs">Hero.tsx</code>.
        </p>
      </main>
    </div>
  );
}
