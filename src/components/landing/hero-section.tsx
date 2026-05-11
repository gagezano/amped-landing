import { HeroVideo } from "./hero-video";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(100svh,56rem)] overflow-hidden bg-[#070707]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,56rem)] max-w-[90rem] flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <div className="relative">
          <div className="relative inline-block max-w-[90vw] bg-white px-4 pb-6 pt-5 sm:max-w-[26rem] sm:px-5">
            <p className="font-[family-name:var(--font-libre)] text-[1.1rem] uppercase tracking-[0.12em] text-black sm:text-[1.45rem] sm:tracking-[0.18em]">
              <span className="whitespace-nowrap">New American</span>{" "}
              <span className="whitespace-nowrap">Energy</span>
            </p>
          </div>

          <p
            className="pointer-events-none absolute left-1/2 top-[-0.35rem] z-20 -translate-x-1/2 font-[family-name:var(--font-ranade)] text-[clamp(4.5rem,18vw,10.5rem)] font-bold uppercase leading-none tracking-[-0.06em] text-[#070707] mix-blend-multiply sm:left-[38%] sm:top-[-0.5rem]"
            aria-hidden
          >
            amped
          </p>
        </div>

        <div className="mx-auto mt-auto flex max-w-[54rem] flex-col items-center gap-4 px-2 pb-8 pt-16 text-center sm:pt-20">
          <h1 className="font-[family-name:var(--font-libre)] text-[clamp(1.65rem,4.2vw,3rem)] font-normal leading-[1.12] tracking-[-0.03em] text-white">
            Amped organizes and unlocks political and cultural power to super charge the
            energy transition.
          </h1>
          <p className="max-w-xl font-[family-name:var(--font-ranade)] text-base font-bold tracking-[-0.04em] text-white">
            We build the institutional infrastructure enabling clean energy to win.
          </p>
        </div>
      </div>
    </section>
  );
}
