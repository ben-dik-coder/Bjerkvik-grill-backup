/**
 * Liten visuell mockup av ramma rundt menyen per stil (matcher MenyVisVariantSkall / plakat).
 * Brukes på /meny/varianter — ikke på den vanlige meny-siden.
 */
export function MenyStilMiniPreview({ variantId }: { variantId: number }) {
  const bars = (
    <div className="mt-1.5 space-y-1 px-1">
      <div className="h-2 w-full rounded-sm bg-black/[0.12] shadow-sm" />
      <div className="h-2 w-[92%] rounded-sm bg-black/[0.08]" />
      <div className="mx-auto mt-1 h-1 w-12 rounded-full bg-black/[0.15]" />
    </div>
  );

  if (variantId === 1) {
    return (
      <div
        className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md p-1.5 sm:aspect-[16/9]"
        style={{
          backgroundColor: "#231a15",
          backgroundImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(88,56,42,0.4), transparent 50%)",
        }}
      >
        <div className="mx-auto flex h-full max-h-[5.5rem] flex-col rounded-md border-2 border-[#1f1612] bg-[#b19888] p-1.5 shadow-inner sm:max-h-[6.25rem]">
          <div className="shrink-0 rounded bg-[#ede6de]/90 px-1 py-0.5 text-center font-display text-[0.45rem] font-bold uppercase tracking-wider text-[#1a1410]">
            Meny
          </div>
          <div className="mt-1 space-y-0.5">
            <div className="h-1.5 rounded-sm bg-[#ede6de]/85" />
            <div className="h-1.5 rounded-sm bg-[#ede6de]/75" />
          </div>
        </div>
      </div>
    );
  }

  const v = Math.min(Math.max(variantId - 1, 1), 9);

  switch (v) {
    case 1:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-neutral-100 p-1.5 sm:aspect-[16/9]">
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col border-x border-neutral-200 bg-white p-1.5 shadow-sm sm:max-h-[6.25rem]">
            <div className="text-center font-sans text-[0.45rem] font-medium uppercase tracking-[0.2em] text-neutral-800">
              Meny
            </div>
            {bars}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-[#06060f] p-1.5 sm:aspect-[16/9]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
            aria-hidden
          />
          <div className="relative mx-auto flex h-full max-h-[5.5rem] flex-col border-x border-cyan-500/25 bg-slate-950/50 p-1.5 sm:max-h-[6.25rem]">
            <div className="text-center font-mono text-[0.45rem] font-bold uppercase tracking-widest text-cyan-200/90">
              Meny
            </div>
            <div className="mt-1 space-y-0.5">
              <div className="h-1.5 rounded-sm bg-cyan-950/50" />
              <div className="h-1.5 rounded-sm bg-slate-900/80" />
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-[#e5e1d8] p-1.5 sm:aspect-[16/9]">
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col bg-[#f7f4ed] p-1.5 shadow-md sm:max-h-[6.25rem]">
            <div className="text-center font-serif text-[0.5rem] font-bold text-neutral-900">Meny</div>
            {bars}
          </div>
        </div>
      );
    case 4:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-gradient-to-br from-teal-100 via-rose-50 to-sky-100 p-1.5 sm:aspect-[16/9]">
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col p-1 sm:max-h-[6.25rem]">
            <div className="text-center font-sans text-[0.45rem] font-semibold text-teal-900">Meny</div>
            {bars}
          </div>
        </div>
      );
    case 5:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-yellow-300 p-1.5 sm:aspect-[16/9]">
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col border-2 border-neutral-900 bg-white p-1 sm:max-h-[6.25rem]">
            <div className="text-center font-mono text-[0.45rem] font-black uppercase text-neutral-900">Meny</div>
            <div className="mt-1 space-y-0.5">
              <div className="h-1.5 bg-yellow-200" />
              <div className="h-1.5 bg-neutral-100" />
            </div>
          </div>
        </div>
      );
    case 6:
      return (
        <div
          className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md p-1.5 text-stone-100 sm:aspect-[16/9]"
          style={{
            backgroundColor: "#0c0a08",
            backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(180,130,60,0.15), transparent 55%)",
          }}
        >
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col border-x border-amber-900/30 bg-black/40 p-1.5 sm:max-h-[6.25rem]">
            <div className="text-center font-serif text-[0.45rem] uppercase tracking-widest text-amber-200/90">Meny</div>
            <div className="mt-1 space-y-0.5">
              <div className="h-1.5 rounded-sm bg-amber-950/40" />
              <div className="h-1.5 rounded-sm bg-stone-900/60" />
            </div>
          </div>
        </div>
      );
    case 7:
      return (
        <div
          className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-slate-200 p-1.5 sm:aspect-[16/9]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.95) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(196,181,253,0.45) 0, transparent 35%)",
          }}
        >
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col p-1 sm:max-h-[6.25rem]">
            <div className="text-center font-sans text-[0.45rem] font-bold text-indigo-950">Meny</div>
            {bars}
          </div>
        </div>
      );
    case 8:
      return (
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-slate-300 p-1.5 sm:aspect-[16/9]">
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col rounded-md border-[3px] border-slate-900 bg-white p-1 shadow-[4px_4px_0_0_#0f172a] sm:max-h-[6.25rem]">
            <div className="text-center font-sans text-[0.45rem] font-extrabold text-slate-900">MENY</div>
            <div className="mt-1 space-y-0.5">
              <div className="h-1.5 bg-slate-100" />
              <div className="h-1.5 bg-slate-50" />
            </div>
          </div>
        </div>
      );
    case 9:
      return (
        <div
          className="relative aspect-[5/3] w-full overflow-hidden rounded-b-lg rounded-t-md bg-[#c4ae8c] p-1.5 sm:aspect-[16/9]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%237a6345' fill-opacity='0.08' d='M0 0h24v24H0z'/%3E%3C/svg%3E\")",
          }}
        >
          <div className="mx-auto flex h-full max-h-[5.5rem] flex-col border border-amber-900/25 bg-[#faf6ed] p-1.5 shadow sm:max-h-[6.25rem]">
            <div className="text-center font-serif text-[0.5rem] text-amber-950">Meny</div>
            {bars}
          </div>
        </div>
      );
    default:
      return (
        <div className="aspect-[5/3] w-full rounded-b-lg rounded-t-md bg-stone-800 sm:aspect-[16/9]">
          <span className="sr-only">Forhåndsvisning</span>
        </div>
      );
  }
}
