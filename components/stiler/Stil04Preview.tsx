import Image from "next/image";
import Link from "next/link";
import { Fraunces, Nunito } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const soft = Nunito({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export default function Stil04Preview() {
  return (
    <div className={`${soft.className} min-h-screen bg-[#fff5eb] text-[#3d2415]`}>
      <div className="relative overflow-hidden bg-[#ff8b6a]/25">
        <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#3d2415_0,#3d2415_1px,transparent_1px,transparent_12px)]" />
        <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <span className={`${display.className} text-2xl font-bold`}>{SITE.name}</span>
          <Link
            href="/stiler"
            className="rounded-full bg-[#3d2415] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#fff5eb]"
          >
            Flere stiler
          </Link>
        </nav>

        <div className="relative mx-auto grid max-w-5xl gap-10 px-5 pb-16 pt-4 md:grid-cols-2 md:items-center md:px-8 md:pb-20">
          <div className="order-2 md:order-1">
            <span className="inline-flex rotate-[-2deg] rounded-full bg-[#ffd966] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#3d2415] shadow-md">
              Dagens favoritt: alt som er varmt
            </span>
            <h1
              className={`${display.className} mt-6 text-balance text-4xl font-bold leading-tight md:text-5xl`}
            >
              Velkommen til kjøkken-huden din lørdag
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#5c3d2e] md:text-lg">
              Burger som synger, sushi som smiler, pizza som ikke gjør deg sur.
              Kort sagt: mat du vil fortelle videre — ved sjøkanten i Bjerkvik.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-[#e84a5f] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[4px_4px_0_#3d2415] transition hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0_#3d2415]"
              >
                Ring og bestill
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-dashed border-[#3d2415]/40 bg-white/70 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#3d2415]"
              >
                Se hvor vi bor
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative aspect-square rotate-[3deg] overflow-hidden rounded-[2rem] border-4 border-[#3d2415] shadow-xl md:rotate-[-2deg]">
              <Image src={IMG.hero} alt="" fill className="object-cover" sizes="50vw" priority />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-[#3d2415] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#ffd966] shadow-lg">
              {SITE.rating}★ på Google
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-14 md:grid-cols-3 md:px-8">
        {[
          { t: "Familievennlig", d: "Lite fuss — barn og voksne finner noe de liker." },
          { t: "Variert meny", d: "Grill, sushi, pizza… akkurat som livet krever." },
          { t: "Vår idé", d: SITE.signature },
        ].map((x, i) => (
          <div
            key={x.t}
            className={`rounded-3xl border-2 border-[#3d2415]/15 bg-white p-6 shadow-sm ${i === 1 ? "md:-translate-y-3" : ""}`}
          >
            <h2 className={`${display.className} text-xl font-bold text-[#e84a5f]`}>{x.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5c3d2e]">{x.d}</p>
          </div>
        ))}
      </section>

      <footer id="kontakt" className="border-t-4 border-[#ffd966] bg-[#3d2415] px-5 py-10 text-[#fff5eb] md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#ffd966]">
              Kontakt
            </p>
            <p className="mt-2 font-semibold">{SITE.address}</p>
            <p className="mt-1 opacity-90">{SITE.phoneDisplay}</p>
          </div>
          <Link href="/" className="font-bold underline decoration-[#ffd966] underline-offset-4">
            Til forsiden
          </Link>
        </div>
      </footer>
    </div>
  );
}
