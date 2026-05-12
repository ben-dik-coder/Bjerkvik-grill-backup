import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Stil03Preview() {
  return (
    <div className={`${grotesk.className} min-h-screen bg-[#fafafa] text-[#111]`}>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:flex-row md:gap-16 md:px-12 md:py-14">
        <aside className="flex shrink-0 flex-row items-start justify-between gap-6 md:w-48 md:flex-col md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-neutral-400">
              Bjerkvik
            </p>
            <p className="mt-2 text-xs leading-snug text-neutral-600">
              Grill
              <br />
              — nord
            </p>
          </div>
          <Link
            href="/stiler"
            className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-900 underline-offset-8 hover:underline"
          >
            Index
          </Link>
        </aside>

        <main className="flex flex-1 flex-col">
          <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h1 className="text-balance text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
                Lite bråk.
                <span className="block text-neutral-400">Mye smak.</span>
              </h1>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
                Vi holder oss til essensen: gode råvarer, en meny folk forstår,
                og et lokale folk husker. Resten er bare ekstra støy.
              </p>
            </div>
            <div className="relative aspect-square w-full max-w-xs shrink-0 overflow-hidden rounded-full border border-neutral-200 lg:mt-0">
              <Image
                src={IMG.hero}
                alt=""
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </div>
          </header>

          <div className="mt-auto grid gap-12 border-t border-neutral-200 pt-16 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  Ring
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 block text-sm font-semibold text-neutral-900 hover:text-blue-700"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  Sted
                </p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm font-semibold text-neutral-900 hover:text-blue-700"
                >
                  Åpne kart
                </a>
              </div>
              <div id="kontakt">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  Adresse
                </p>
                <p className="mt-2 max-w-xs text-sm text-neutral-600">{SITE.address}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
              >
                Bestill samtale
              </a>
              <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-900">
                Original side →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
