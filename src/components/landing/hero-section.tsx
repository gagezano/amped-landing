import { HeroVideo } from "./hero-video";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#070707] md:min-h-[min(100svh,56rem)]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col px-4 pb-16 pt-12 sm:px-6 sm:pt-6 md:min-h-[min(100svh,56rem)] lg:px-10">
        <header
          className="animate-amp-reveal relative -mt-[calc(0.25rem+5px)] w-fit origin-top-left pl-0 sm:pl-5 sm:mt-[-5px]"
          style={{ ["--amp-reveal-delay" as string]: "40ms" }}
          aria-label="Amped — New American Energy"
        >
          <div className="w-fit max-w-none origin-top-left scale-[0.8] bg-white pt-1 pb-2 pl-3 pr-4 text-[#070707] sm:pb-2.5 -mb-5 sm:-mb-6">
            <p className="block w-full font-[family-name:var(--font-ranade)] text-[clamp(2.125rem,min(12vw,11dvh),4.125rem)] font-bold uppercase leading-none tracking-[-0.06em]">
              amped
            </p>
            <p className="-mt-1 w-full font-[family-name:var(--font-libre)] text-[calc(0.6875rem*1.35*1.1*0.5)] font-normal uppercase leading-tight tracking-[0.14em] sm:-mt-1.5 sm:text-[calc(0.75rem*1.35*1.1*0.5)] sm:tracking-[0.18em]">
              New American Energy
            </p>
          </div>
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
            className="animate-amp-reveal max-w-xl font-[family-name:var(--font-ranade)] text-base font-medium leading-relaxed tracking-[-0.05em] text-white sm:text-lg"
            style={{ ["--amp-reveal-delay" as string]: "200ms" }}
          >
            <span className="bg-black px-1 py-0.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              Building the systems enabling clean energy to win.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
