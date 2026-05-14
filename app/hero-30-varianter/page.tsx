import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "30 hero-varianter (visuelt)",
  description: "Internt: miniatyr-skisser av hero-layout. robots noindex.",
  robots: { index: false, follow: false },
};

function Frame({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-bold uppercase tracking-wide text-accent/90">
        {n}. {title}
      </p>
      <div className="relative h-[7.25rem] overflow-hidden rounded-xl border border-[#b58952]/35 bg-[#453a32] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]">
        {children}
      </div>
    </div>
  );
}

function Foto() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90"
      style={{
        backgroundImage:
          "linear-gradient(135deg,#6b5d50 0%,#453a32 45%,#3a3229 100%)",
      }}
    />
  );
}

function Tittel(props: { sentrert?: boolean; venstre?: boolean; hoyre?: boolean }) {
  const align = props.venstre
    ? "justify-start"
    : props.hoyre
      ? "justify-end"
      : "justify-center";
  return (
    <div
      className={`pointer-events-none absolute left-2 right-2 top-4 z-20 flex ${align}`}
    >
      <div className="h-2 w-[4.5rem] max-w-[72%] rounded-sm bg-[#f3ebe3]/95 shadow-sm" />
    </div>
  );
}

function Tag() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-2 z-20 flex justify-center">
      <div className="h-1.5 w-8 rounded-sm bg-[#eccfa4]" />
    </div>
  );
}

function Knap(
  props: {
    ghost?: boolean;
    pill?: boolean;
    vid?: boolean;
    className?: string;
    bottom?: string;
  } = {},
) {
  const bottom = props.bottom ?? "bottom-2.5";
  return (
    <div
      className={`absolute left-1/2 z-20 h-3.5 -translate-x-1/2 rounded-md border border-accent bg-accent ${props.pill ? "rounded-full" : ""} ${props.ghost ? "border-accent/80 bg-transparent" : ""} ${props.vid ? "w-[calc(100%-1.25rem)]" : "w-16"} ${bottom} ${props.className ?? ""}`}
    />
  );
}

function KnapVenstre() {
  return (
    <div className="absolute bottom-2.5 left-2.5 z-20 h-3.5 w-16 rounded-md border border-accent bg-accent" />
  );
}

function SoyleBunn({ pct }: { pct: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/75 via-black/45 to-transparent ${pct}`}
    />
  );
}

function SoyleTopp({ pct }: { pct: string }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/65 via-black/35 to-transparent ${pct}`}
    />
  );
}

export default function Hero30VarianterPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-[#ece7df] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-10 border-b border-accent/20 pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Forhåndsvisning
          </p>
          <h1 className="font-display mt-2 text-2xl font-semibold uppercase tracking-wide text-[#f5f0e8] md:text-3xl">
            30 hero-varianter
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Åpnet i nettleseren — ikke avhengig av Cursor Canvas. Si nummeret du
            liker i chat, så kan vi bygge det inn i <code className="text-accent">Hero.tsx</code>.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Til forsiden
          </Link>
        </header>

        <section className="space-y-10">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#eccfa4]">
            1 – 10
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Frame n={1} title="Sentrert + CTA">
              <Foto />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={2} title="Venstre kolonne">
              <Foto />
              <Tittel venstre />
              <KnapVenstre />
            </Frame>
            <Frame n={3} title="Mørk såle nederst">
              <Foto />
              <SoyleBunn pct="h-[48%]" />
              <Tittel />
              <Knap vid bottom="bottom-2" />
            </Frame>
            <Frame n={4} title="Kort bak tittel">
              <Foto />
              <div className="pointer-events-none absolute left-1/2 top-[1.35rem] z-[15] h-7 w-[4.75rem] -translate-x-1/2 rounded-lg border border-[#b58952]/40 bg-[#1a1512]/75 backdrop-blur-[4px]" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={5} title="Mørk topp-stripe">
              <Foto />
              <SoyleTopp pct="h-[36%]" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={6} title="Vignett sider">
              <Foto />
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[14%] bg-black/55" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[14%] bg-black/55" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={7} title="To knapper">
              <Foto />
              <SoyleBunn pct="h-[40%]" />
              <Tittel />
              <div className="absolute bottom-2 left-2 right-2 z-20 flex gap-1.5">
                <div className="h-3 flex-1 rounded border border-accent bg-accent" />
                <div className="h-3 flex-1 rounded border border-[#b58952]/50 bg-transparent" />
              </div>
            </Frame>
            <Frame n={8} title="Ghost-CTA">
              <Foto />
              <Tittel />
              <Knap vid ghost />
            </Frame>
            <Frame n={9} title="Pill-CTA">
              <Foto />
              <Tittel />
              <Knap vid pill />
            </Frame>
            <Frame n={10} title="Tag + tittel">
              <Foto />
              <Tag />
              <Tittel />
              <Knap vid />
            </Frame>
          </div>

          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#eccfa4]">
            11 – 20
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Frame n={11} title="Glass-stripe">
              <Foto />
              <div className="pointer-events-none absolute left-3 right-3 top-4 z-[15] h-8 rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={12} title="Hjørne nede venstre">
              <Foto />
              <SoyleBunn pct="h-[55%]" />
              <div className="absolute bottom-3 left-2 z-20 flex flex-col gap-1.5">
                <div className="h-2 w-14 rounded-sm bg-[#f3ebe3]/95" />
                <div className="h-3.5 w-16 rounded-md border border-accent bg-accent" />
              </div>
            </Frame>
            <Frame n={13} title="Split 50 / 50">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-gradient-to-br from-[#5c4e44] to-[#3d352c]" />
                <div className="flex w-1/2 flex-col justify-center gap-2 bg-[#2a2520] pl-2">
                  <div className="h-2 w-14 rounded-sm bg-[#ece7df]" />
                  <div className="h-3 w-12 rounded border border-accent bg-accent" />
                </div>
              </div>
            </Frame>
            <Frame n={14} title="Tykk ramme">
              <Foto />
              <div className="pointer-events-none absolute inset-1.5 z-10 rounded-md border-[3px] border-[#b58952]/50" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={15} title="Dobbel CTA-rad">
              <Foto />
              <Tittel />
              <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-col gap-1">
                <div className="h-3 rounded border border-accent bg-accent" />
                <div className="flex gap-1">
                  <div className="h-2.5 flex-1 rounded border border-white/25 bg-white/10" />
                  <div className="h-2.5 flex-1 rounded border border-white/25 bg-white/10" />
                </div>
              </div>
            </Frame>
            <Frame n={16} title="Prikk / badge">
              <Foto />
              <div className="absolute left-1/2 top-2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={17} title="Linjer over/under">
              <Foto />
              <div className="absolute left-2 right-2 top-3 z-[15] h-px bg-[#b58952]/70" />
              <div className="absolute left-2 right-2 top-7 z-[15] h-px bg-[#b58952]/70" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={18} title="Tittel høyre">
              <Foto />
              <Tittel hoyre />
              <Knap vid />
            </Frame>
            <Frame n={19} title="Høy såle">
              <Foto />
              <SoyleBunn pct="h-[62%]" />
              <Tittel />
              <Knap vid bottom="bottom-2" />
            </Frame>
            <Frame n={20} title="Stor CTA">
              <Foto />
              <div className="absolute left-1/2 top-3 z-20 h-1.5 w-12 -translate-x-1/2 rounded-sm bg-white/50" />
              <div className="absolute bottom-2 left-2 right-2 z-20 h-6 rounded-md border border-accent bg-accent" />
            </Frame>
          </div>

          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#eccfa4]">
            21 – 30
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Frame n={21} title="Ekstra undertittel">
              <Foto />
              <Tittel />
              <div className="pointer-events-none absolute left-1/2 top-9 z-20 h-1 w-12 -translate-x-1/2 rounded-sm bg-white/40" />
              <Knap vid />
            </Frame>
            <Frame n={22} title="Bånd (topp + bunn)">
              <Foto />
              <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[32%] bg-black/35" />
              <SoyleBunn pct="h-[30%]" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={23} title="Flex / nav-følelse">
              <Foto />
              <div className="absolute inset-2 z-20 flex flex-col">
                <div className="h-2 w-14 rounded-sm bg-[#ece7df]/90" />
                <div className="flex-1" />
                <div className="h-3.5 w-full rounded-md border border-accent bg-accent" />
              </div>
            </Frame>
            <Frame n={24} title="Smalt kort (midt)">
              <Foto />
              <div className="pointer-events-none absolute left-1/2 top-4 z-[15] h-9 w-[68%] max-w-[7rem] -translate-x-1/2 rounded-xl border border-[#b58952]/45 bg-[#1a1512]/80" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={25} title="Venstre accent-skinne">
              <Foto />
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-[15] w-1 bg-accent" />
              <Tittel venstre />
              <KnapVenstre />
            </Frame>
            <Frame n={26} title="Rutenett-foto">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={i % 2 === 0 ? "bg-[#5a4d42]" : "bg-[#4a4038]"}
                  />
                ))}
              </div>
              <SoyleBunn pct="h-[38%]" />
              <Tittel />
              <Knap vid />
            </Frame>
            <Frame n={27} title="Logo-blokk">
              <Foto />
              <div className="absolute left-1/2 top-2 z-20 h-6 w-6 -translate-x-1/2 rounded-md border border-[#b58952]/50 bg-[#2a2520]" />
              <div className="absolute left-1/2 top-9 z-20 h-1.5 w-16 -translate-x-1/2 rounded-sm bg-[#f3ebe3]" />
              <Knap vid />
            </Frame>
            <Frame n={28} title="Kun undertittel + CTA">
              <Foto />
              <div className="pointer-events-none absolute left-1/2 top-8 z-20 h-1 w-[4.5rem] -translate-x-1/2 rounded-sm bg-white/45" />
              <Knap vid bottom="bottom-3" />
            </Frame>
            <Frame n={29} title="Full bredde tittel-bånd">
              <Foto />
              <div className="pointer-events-none absolute left-0 right-0 top-4 z-[15] flex h-8 items-center justify-center bg-black/45">
                <div className="h-2 w-16 rounded-sm bg-[#f3ebe3]" />
              </div>
              <Knap vid />
            </Frame>
            <Frame n={30} title="Tynn dekorlinje">
              <Foto />
              <Tittel />
              <div className="pointer-events-none absolute bottom-9 left-4 right-4 z-[15] h-px bg-[#b58952]/60" />
              <Knap vid />
            </Frame>
          </div>
        </section>
      </div>
    </div>
  );
}
