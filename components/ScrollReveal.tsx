"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Utløser litt før elementet er helt synlig — føles naturlig på mobil */
export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.16,
  margin: "0px 0px -32px 0px",
};

export const SCROLL_EASE = [0.22, 1, 0.36, 1] as const;

export function scrollRevealTransition(delay = 0) {
  return {
    duration: 0.52,
    delay,
    ease: SCROLL_EASE,
  };
}

type ScrollRevealProps = Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "viewport" | "transition"
> & {
  children: ReactNode;
  /** Vertikal forskyning før inn (lavere tall = mere subtilt) */
  y?: number;
  delay?: number;
};

/**
 * Lett fade + skyv opp når blokken dukker fram under scroll (respekterer «Reduced motion»).
 */
export function ScrollReveal({
  children,
  className,
  y = 16,
  delay = 0,
  ...rest
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SCROLL_VIEWPORT}
      transition={scrollRevealTransition(delay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
