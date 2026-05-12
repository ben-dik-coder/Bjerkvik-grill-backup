import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Stil18Preview() {
  return (
    <div className={`${mono.className} min-h-screen bg-[#050806] text-[#4ade80]`}>
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border border-[#166534]/60 bg-black/40 px-4 py-3">
          <span className="text-xs font-semibold tracking-tight">
            <span className="text-[#22c55e]">{">"}</span> bjerkvik-grill<span className="text-[#86efac]/70">:.exe</span>
          </span>
          <Link href="/stiler" className="text-[11px] font-semibold text-[#86efac] hover:text-[#bbf7d0]">
            ./styles --list
          </Link>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="border border-[#166534]/50 bg-black/35 p-5 md:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#86efac]/70">
              stdout / meny
            </p>
            <pre className="mt-4 whitespace-pre-wrap text-[13px] leading-relaxed text-[#bbf7d0]">
              {`> load menu.json
✔ burger    [hot]
✔ sushi     [fresh]
✔ pizza     [share]

> ping hunger --resolve
status: accepting orders
rating: ${SITE.rating} (${SITE.reviewCount} votes)`}
            </pre>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="border border-[#22c55e] bg-[#052e16]/60 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#bbf7d0] hover:bg-[#14532d]/70"
              >
                exec call()
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#166534]/70 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#86efac] hover:border-[#22c55e]"
              >
                open maps --geo
              </a>
            </div>
          </div>

          <div className="border border-[#166534]/50 bg-black/35 p-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#14532d]/60">
              <Image src={IMG.hero} alt="" fill className="object-cover opacity-90 contrast-125" sizes="450px" priority />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(74,222,128,0.06)_0px,rgba(74,222,128,0.06)_1px,transparent_1px,transparent_4px)]" />
            </div>
            <p className="px-3 py-2 text-[10px] text-[#86efac]/70">
              [image] hero.png — rendered locally
            </p>
          </div>
        </div>

        <div id="kontakt" className="mt-6 border border-[#166534]/50 bg-black/35 p-5 md:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#86efac]/70">env / kontakt</p>
          <div className="mt-4 space-y-2 text-sm text-[#bbf7d0]">
            <p>
              <span className="text-[#22c55e]">ADDRESS=</span>
              {SITE.address}
            </p>
            <p>
              <span className="text-[#22c55e]">PHONE=</span>
              {SITE.phoneDisplay}
            </p>
          </div>
          <Link href="/" className="mt-6 inline-block text-[11px] font-bold text-[#4ade80] hover:text-[#bbf7d0]">
            ~/ cd forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}
