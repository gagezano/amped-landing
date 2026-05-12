import { HeroVideo } from "./hero-video";

/** Six layered stickers with varied angles.
 * Angles favor counterclockwise so the bottom-right doesn't poke into the headline below. */
const STICKERS = [
  { angle: 0, bg: "#ffffff", fg: "#070707" }, // base: white + black (un-rotated, aligned with headline)
  { angle: 3, bg: "#070707", fg: "#ffffff" },
  { angle: -11, bg: "#ffffff", fg: "#070707" },
  { angle: 5, bg: "#070707", fg: "#ffffff" },
  { angle: -13, bg: "#ffffff", fg: "#070707" },
  { angle: -2, bg: "#070707", fg: "#ffffff" },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#070707] md:min-h-[min(100svh,56rem)]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col px-4 pb-16 pt-12 sm:px-6 sm:pt-6 md:min-h-[min(100svh,56rem)] lg:px-10">
        <header
          className="amp-sticker-stack relative -mt-1 grid w-fit origin-top-left sm:mt-0"
          style={{ ["--amp-reveal-delay" as string]: "40ms" }}
          aria-label="Amped — New American Energy"
        >
          {STICKERS.map((s, i) => (
            <div
              key={i}
              aria-hidden={i > 0 ? true : undefined}
              className={`amp-sticker-layer amp-sticker-layer-${i + 1} w-fit max-w-none origin-top-left pt-1 pb-2 pl-3 pr-4 sm:pb-2.5`}
              style={{
                transform: `rotate(${s.angle}deg)`,
                backgroundColor: s.bg,
                color: s.fg,
              }}
            >
              <p className="block w-full font-[family-name:var(--font-ranade)] text-[clamp(2.125rem,min(12vw,11dvh),4.125rem)] font-bold uppercase leading-none tracking-[-0.06em]">
                amped
              </p>
              <p className="-mt-1 w-full font-[family-name:var(--font-libre)] text-[calc(0.6875rem*1.35*1.1*0.5)] font-normal uppercase leading-tight tracking-[0.14em] sm:-mt-1.5 sm:text-[calc(0.75rem*1.35*1.1*0.5)] sm:tracking-[0.18em]">
                New American Energy
              </p>
            </div>
          ))}
        </header>

        <div className="mt-6 flex w-full max-w-[48rem] flex-col gap-2 pb-8 pl-0 text-left sm:mt-4 sm:gap-3 sm:pl-5">
          <h1
            className="animate-amp-reveal w-full max-w-none font-[family-name:var(--font-libre)] text-[1.875rem] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[clamp(1.75rem,4.6vw,3.25rem)]"
            style={{ ["--amp-reveal-delay" as string]: "120ms" }}
          >
            We organize the political &amp; cultural power of the clean energy economy,
            to accelerate the energy transition.
          </h1>
          <p
            className="animate-amp-reveal w-fit max-w-xl bg-black px-1 font-[family-name:var(--font-ranade)] text-lg font-medium leading-relaxed tracking-[-0.05em] text-white sm:text-xl"
            style={{ ["--amp-reveal-delay" as string]: "200ms" }}
          >
            Building the systems enabling clean energy to win.
          </p>
        </div>
      </div>
    </section>
  );
}
