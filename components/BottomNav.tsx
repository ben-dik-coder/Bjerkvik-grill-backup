"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Phone, ShoppingBag, Users } from "lucide-react";

const nav = [
  { id: "bestill", label: "Bestill", Icon: ShoppingBag, href: "/meny" as const },
  { id: "meny", label: "Meny", Icon: BookOpen, href: "/meny" as const },
  { id: "om", label: "Om oss", Icon: Users, href: "#om" as const },
  { id: "kontakt", label: "Kontakt", Icon: Phone, href: "#kontakt" as const },
] as const;

function NavItemVisual({
  id,
  label,
  Icon,
  isOn,
}: {
  id: string;
  label: string;
  Icon: LucideIcon;
  isOn: boolean;
}) {
  const isOrder = id === "bestill";
  const inactiveLabel = "text-[rgba(250,243,232,0.55)]";
  const activeLabel = "text-accent";

  return (
    <span
      className={`flex flex-col items-center gap-1 transition-colors duration-200 ease-out ${
        isOrder ? "-mt-2" : ""
      } ${isOrder || isOn ? activeLabel : inactiveLabel}`}
    >
      <span
        className={`flex items-center justify-center rounded-2xl transition-colors duration-200 ease-out ${
          isOrder
            ? "h-12 w-12 bg-accent text-ink ring-2 ring-accent/45 shadow-[0_0_18px_rgba(191,145,69,0.42)]"
            : `h-10 w-10 ${isOn ? "bg-accent/15 ring-1 ring-accent/35" : ""}`
        }`}
      >
        <Icon
          className={isOrder ? "h-6 w-6" : "h-5 w-5"}
          strokeWidth={isOrder || isOn ? 2.5 : 2}
          aria-hidden
        />
      </span>
      <span className={isOrder ? "text-[11px] font-black text-accent" : undefined}>
        {label}
      </span>
    </span>
  );
}

export function BottomNav() {
  const [active, setActive] = useState<string>("bestill");

  useEffect(() => {
    const sectionIds = nav.map((n) => n.id);
    const vv = window.visualViewport;
    let scrollDebounceTimer: number | undefined;

    const computeActiveFromViewport = () => {
      const viewportH = vv != null ? vv.height : window.innerHeight;
      const targetY = viewportH * 0.38;

      let bestId = "bestill";
      let bestDist = Number.POSITIVE_INFINITY;

      for (const sid of sectionIds) {
        const el = document.getElementById(sid);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom <= 32 || rect.top >= viewportH) continue;

        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = sid;
        }
      }

      setActive((prev) => (prev === bestId ? prev : bestId));
    };

    const scheduleCompute = () => {
      window.clearTimeout(scrollDebounceTimer);
      scrollDebounceTimer = window.setTimeout(computeActiveFromViewport, 150);
    };

    window.addEventListener("scroll", scheduleCompute, { passive: true });
    window.addEventListener("resize", computeActiveFromViewport, { passive: true });
    vv?.addEventListener("resize", computeActiveFromViewport);

    computeActiveFromViewport();

    return () => {
      window.removeEventListener("scroll", scheduleCompute);
      window.removeEventListener("resize", computeActiveFromViewport);
      window.clearTimeout(scrollDebounceTimer);
      vv?.removeEventListener("resize", computeActiveFromViewport);
    };
  }, []);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-accent/10 bg-sunken pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_28px_rgba(45,30,22,0.35)]"
      aria-label="Hovednavigasjon"
    >
      <ul className="mx-auto flex max-w-lg justify-between px-6 md:px-8">
        {nav.map(({ id, label, Icon, href }) => {
          const isOn = active === id;
          return (
            <li key={id}>
              {href.startsWith("/") ? (
                <Link
                  href={href}
                  onClick={() => setActive(id)}
                  className="flex flex-col items-center gap-1 py-1 text-[10px] font-semibold uppercase tracking-wide"
                >
                  <NavItemVisual id={id} label={label} Icon={Icon} isOn={isOn} />
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={() => setActive(id)}
                  className="flex flex-col items-center gap-1 py-1 text-[10px] font-semibold uppercase tracking-wide"
                >
                  <NavItemVisual id={id} label={label} Icon={Icon} isOn={isOn} />
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
