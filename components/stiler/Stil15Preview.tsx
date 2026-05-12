import Image from "next/image";
import Link from "next/link";
import { Montserrat, PT_Serif } from "next/font/google";
import { CheckCircle2 } from "lucide-react";
import { IMG, SITE } from "@/lib/constants";

const head = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});
const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Stil15Preview() {
  return (
    <div className={`${serif.className} min-h-screen bg-white text-slate-900`}>
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-12">
          <div className={`${head.className} text-lg font-extrabold tracking-tight text-blue-900`}>{SITE.name}</div>
          <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-600">
            <Link href="/stiler" className="hover:text-blue-700">
              Bytt stil
            </Link>
            <a href={SITE.phoneHref} className="text-blue-700 hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:items-center md:px-12 lg:gap-16">
        <div>
          <p className={`${head.className} text-xs font-bold uppercase tracking-[0.3em] text-blue-600`}>
            Mat • Bjerkvik • Service
          </p>
          <h1 className={`${head.className} mt-4 text-balance text-4xl font-extrabold leading-[1.08] text-slate-900 md:text-5xl`}>
            Mat du stoler på — servert med struktur
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Vi kombinerer tydelige menyer med variasjon: grillklassikere, sushi og pizza i samme lokale. Perfekt for familier,
            kollegaer og spontane besøk.
          </p>
          <ul className="mt-8 space-y-3 text-slate-700">
            {[
              "Tydelige valg — ingen «skjulte» overraskelser",
              "God hygiene og fokus på kvalitet",
              `Sterk tilbakemelding: ${SITE.rating} på Google`,
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SITE.phoneHref}
              className={`${head.className} inline-flex items-center justify-center rounded-md bg-blue-700 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-800`}
            >
              Ring nå
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${head.className} inline-flex items-center justify-center rounded-md border-2 border-blue-100 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-blue-900 hover:border-blue-200`}
            >
              Veibeskrivelse
            </a>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg border border-slate-200 shadow-lg">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="50vw" priority />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3 md:px-12">
          {[
            { t: "Om oss", d: SITE.signature },
            { t: "Kategori", d: SITE.category },
            { t: "Instagram", d: `Se bilder på ${SITE.instagramHandle}` },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className={`${head.className} text-xs font-bold uppercase tracking-wider text-blue-700`}>{c.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="border-t border-slate-200 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${head.className} text-xs font-bold uppercase tracking-wider text-blue-700`}>Kontakt</p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="text-slate-600">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            Til forsiden
          </Link>
        </div>
      </footer>
    </div>
  );
}
