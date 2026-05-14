/**
 * Filmkorn / støy som **ligger på selve menyplaten** (absolute, z-[1]),
 * så det synes — ikke bak et nesten opakt panel.
 *
 * Bruk som første barn i en `relative` container; innhold skal ha `z-[2]` eller høyere.
 *
 * `light`: diskret struktur på lys bakgrunn (mindre svarte scanlines).
 */
const GRAIN_SPECK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill='%23b5a088' fill-opacity='0.35'%3E%3Ccircle cx='6' cy='10' r='0.55'/%3E%3Ccircle cx='26' cy='4' r='0.5'/%3E%3Ccircle cx='44' cy='18' r='0.55'/%3E%3Ccircle cx='62' cy='8' r='0.5'/%3E%3Ccircle cx='14' cy='28' r='0.5'/%3E%3Ccircle cx='34' cy='34' r='0.55'/%3E%3Ccircle cx='54' cy='26' r='0.5'/%3E%3Ccircle cx='8' cy='48' r='0.55'/%3E%3Ccircle cx='28' cy='58' r='0.5'/%3E%3Ccircle cx='50' cy='44' r='0.55'/%3E%3Ccircle cx='66' cy='62' r='0.5'/%3E%3Ccircle cx='20' cy='66' r='0.5'/%3E%3Ccircle cx='38' cy='12' r='0.45'/%3E%3Ccircle cx='58' cy='36' r='0.5'/%3E%3C/g%3E%3C/svg%3E\")";

const GRAIN_SPECK_WARM =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='%23c9a882' fill-opacity='0.28'%3E%3Ccircle cx='4' cy='12' r='0.45'/%3E%3Ccircle cx='22' cy='6' r='0.4'/%3E%3Ccircle cx='40' cy='20' r='0.5'/%3E%3Ccircle cx='58' cy='14' r='0.42'/%3E%3Ccircle cx='12' cy='32' r='0.48'/%3E%3Ccircle cx='32' cy='36' r='0.4'/%3E%3Ccircle cx='50' cy='30' r='0.45'/%3E%3Ccircle cx='8' cy='52' r='0.42'/%3E%3Ccircle cx='28' cy='56' r='0.5'/%3E%3Ccircle cx='46' cy='48' r='0.4'/%3E%3Ccircle cx='18' cy='24' r='0.38'/%3E%3Ccircle cx='54' cy='40' r='0.44'/%3E%3C/g%3E%3C/svg%3E\")";

const GRAIN_SPECK_LIGHT =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill='%2378716c' fill-opacity='0.16'%3E%3Ccircle cx='6' cy='10' r='0.5'/%3E%3Ccircle cx='26' cy='4' r='0.45'/%3E%3Ccircle cx='44' cy='18' r='0.5'/%3E%3Ccircle cx='62' cy='8' r='0.45'/%3E%3Ccircle cx='14' cy='28' r='0.45'/%3E%3Ccircle cx='34' cy='34' r='0.5'/%3E%3Ccircle cx='54' cy='26' r='0.45'/%3E%3Ccircle cx='8' cy='48' r='0.5'/%3E%3Ccircle cx='28' cy='58' r='0.45'/%3E%3Ccircle cx='50' cy='44' r='0.5'/%3E%3Ccircle cx='66' cy='62' r='0.45'/%3E%3Ccircle cx='20' cy='66' r='0.45'/%3E%3Ccircle cx='38' cy='12' r='0.4'/%3E%3Ccircle cx='58' cy='36' r='0.45'/%3E%3C/g%3E%3C/svg%3E\")";

export function MenyGrainPanelOverlay({ variant = "dark" }: { variant?: "dark" | "light" | "soft" }) {
  const isLight = variant === "light";
  const isSoft = variant === "soft";

  if (isLight || isSoft) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
        aria-hidden
      >
        <div
          className={isSoft ? "absolute inset-0 opacity-[0.13]" : "absolute inset-0 opacity-[0.16]"}
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0 2px, rgba(120,113,103,0.032) 2px 3px),
            repeating-linear-gradient(90deg, transparent 0 2px, rgba(120,113,103,0.026) 2px 3px)
          `,
            backgroundSize: "3px 3px",
          }}
        />
        <div
          className={isSoft ? "absolute inset-0 opacity-[0.085]" : "absolute inset-0 opacity-[0.10]"}
          style={{
            backgroundImage: GRAIN_SPECK_LIGHT,
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className={isSoft ? "absolute inset-0 opacity-[0.06] mix-blend-multiply" : "absolute inset-0 opacity-[0.07] mix-blend-multiply"}
          style={{
            backgroundImage: GRAIN_SPECK_WARM,
            backgroundSize: "64px 64px",
            backgroundPosition: "8px 47px",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.11) 2px 3px),
            repeating-linear-gradient(90deg, transparent 0 2px, rgba(0,0,0,0.085) 2px 3px)
          `,
          backgroundSize: "3px 3px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0 1px, rgba(0,0,0,0.06) 1px 2px),
            repeating-linear-gradient(90deg, transparent 0 1px, rgba(0,0,0,0.048) 1px 2px)
          `,
          backgroundSize: "2px 2px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            118deg,
            transparent 0,
            transparent 3px,
            rgba(0,0,0,0.055) 3px,
            rgba(0,0,0,0.055) 4px
          )`,
          backgroundSize: "7px 7px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-soft-light"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -72deg,
            rgba(255,245,228,0.06) 0 1px,
            transparent 1px 5px
          )`,
          backgroundSize: "9px 9px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: GRAIN_SPECK,
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: GRAIN_SPECK,
          backgroundSize: "104px 104px",
          backgroundPosition: "17px 31px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: GRAIN_SPECK,
          backgroundSize: "38px 38px",
          backgroundPosition: "41px 19px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: GRAIN_SPECK_WARM,
          backgroundSize: "64px 64px",
          backgroundPosition: "8px 47px",
        }}
      />
    </div>
  );
}
