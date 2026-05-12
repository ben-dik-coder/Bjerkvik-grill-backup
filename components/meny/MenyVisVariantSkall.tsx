import type { ReactNode } from "react";

import { MenyExperimentalPageContent } from "@/components/meny/MenyExperimentalPage";
import { MenyVisVariantKjerne } from "@/components/meny/MenyVisVariantKjerne";
import { MENY_VIS_TEMA } from "@/lib/meny-vis-tema";

function variantIndex(id: number) {
  if (Number.isNaN(id) || id < 1) return 0;
  if (id > 10) return 9;
  return id - 1;
}

function Inner({ className, children }: { className: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

/** Ytre «rom» + inner plate for stil 2–10 (stil 1 = samme som `MenyExperimentalPageContent` / `/meny`). */
export function MenyVisVariantSkall({ variantId, children }: { variantId: number; children: ReactNode }) {
  const v = variantIndex(variantId);

  switch (v) {
    case 1:
      return (
        <div className="min-h-screen w-full bg-neutral-100 text-neutral-900">
          <Inner className="mx-auto min-h-screen max-w-2xl border-x border-neutral-200 bg-white px-5 py-10 sm:px-10 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    case 2:
      return (
        <div className="min-h-screen w-full bg-[#06060f] text-slate-100">
          <div
            className="pointer-events-none fixed inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <Inner className="relative mx-auto min-h-screen max-w-2xl border-x border-cyan-500/15 bg-slate-950/40 px-4 py-8 backdrop-blur-[2px] sm:px-7 sm:py-12">
            {children}
          </Inner>
        </div>
      );
    case 3:
      return (
        <div className="min-h-screen w-full bg-[#e5e1d8] text-neutral-900">
          <Inner className="mx-auto min-h-screen max-w-3xl bg-[#f7f4ed] px-5 py-10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:px-12 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    case 4:
      return (
        <div className="min-h-screen w-full bg-gradient-to-br from-teal-100 via-rose-50 to-sky-100 text-teal-950">
          <Inner className="mx-auto min-h-screen max-w-2xl px-4 py-10 sm:px-8 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    case 5:
      return (
        <div className="min-h-screen w-full bg-yellow-300 text-neutral-900">
          <Inner className="mx-auto min-h-screen max-w-2xl border-4 border-neutral-900 bg-white px-3 py-8 sm:px-6 sm:py-12">
            {children}
          </Inner>
        </div>
      );
    case 6:
      return (
        <div
          className="min-h-screen w-full text-stone-100"
          style={{
            backgroundColor: "#0c0a08",
            backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(180,130,60,0.12), transparent 55%)",
          }}
        >
          <Inner className="mx-auto min-h-screen max-w-2xl border-x border-amber-900/25 bg-black/35 px-5 py-10 sm:px-8 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    case 7:
      return (
        <div
          className="min-h-screen w-full bg-slate-200 text-indigo-950"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0, transparent 35%), radial-gradient(circle at 80% 10%, rgba(196,181,253,0.5) 0, transparent 30%)",
          }}
        >
          <Inner className="mx-auto min-h-screen max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    case 8:
      return (
        <div className="min-h-screen w-full bg-slate-300 py-6 text-slate-900 sm:py-10">
          <Inner className="mx-auto min-h-screen max-w-2xl rounded-xl border-4 border-slate-900 bg-white px-4 py-8 shadow-[10px_10px_0_0_#0f172a] sm:px-8 sm:py-12">
            {children}
          </Inner>
        </div>
      );
    case 9:
      return (
        <div
          className="min-h-screen w-full bg-[#c4ae8c] text-amber-950"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='%237a6345' fill-opacity='0.06' d='M0 0h60v60H0z'/%3E%3C/svg%3E\")",
          }}
        >
          <Inner className="mx-auto min-h-screen max-w-2xl border border-amber-900/20 bg-[#faf6ed] px-5 py-10 shadow-lg sm:px-10 sm:py-14">
            {children}
          </Inner>
        </div>
      );
    default:
      return <div className="min-h-screen w-full">{children}</div>;
  }
}

/** Stil 1 = nøyaktig samme opplevelse som `/meny` (plakat + grain + MenyPlakatReferanse). */
export function MenyVisVariantSide({ variantId }: { variantId: number }) {
  if (variantId === 1) {
    return <MenyExperimentalPageContent />;
  }
  const i = variantIndex(variantId);
  const tema = MENY_VIS_TEMA[i]!;
  return (
    <MenyVisVariantSkall variantId={variantId}>
      <MenyVisVariantKjerne tema={tema} />
    </MenyVisVariantSkall>
  );
}
