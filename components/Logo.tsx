export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative z-[104] flex flex-col gap-0.5 self-center py-0.5 ${className}`}
    >
      <p className="m-0 max-w-[min(100%,85vw)] text-pretty font-serif text-[clamp(0.9375rem,3.5vw,1.5625rem)] font-semibold uppercase leading-[1.15] tracking-[0.11em] text-[#f5f0e8] [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_6px_18px_rgba(0,0,0,0.38)] sm:tracking-[0.13em] md:tracking-[0.16em]">
        <span className="text-[#f5f0e8]">Bjerkvik Grill</span>
        <span className="font-sans font-bold tracking-[0.14em] text-accent sm:tracking-[0.16em]">
          {" "}
          & Bar
        </span>
      </p>
      <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d7cfc4]/80 sm:text-[11px]">
        Dine in <span className="text-accent/70">·</span> Takeout
      </p>
    </div>
  );
}
