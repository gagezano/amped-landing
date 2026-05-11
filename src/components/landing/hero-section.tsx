import { HeroVideo } from "./hero-video";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#070707] md:min-h-[min(100svh,56rem)]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col px-4 pb-16 pt-6 sm:px-6 md:min-h-[min(100svh,56rem)] lg:px-10">
        <header
          className="animate-amp-reveal relative -mx-4 -mt-[48px] w-[calc(100%+2rem)] max-w-none bg-white pt-1 pb-3 pl-4 pr-5 sm:-mt-[70px] sm:mx-0 sm:w-fit sm:max-w-[min(96vw,46rem)] sm:pt-1 sm:pb-4 sm:pl-5 sm:pr-6"
          style={{ ["--amp-reveal-delay" as string]: "40ms" }}
        >
          <p className="block w-full font-[family-name:var(--font-ranade)] text-[clamp(4.25rem,min(24vw,22dvh),8.25rem)] font-bold uppercase leading-none tracking-[-0.06em] text-[#070707]">
            amped
          </p>
          <p className="-mt-2 w-full font-[family-name:var(--font-libre)] text-[calc(0.6875rem*1.35*1.1)] font-normal uppercase leading-tight tracking-[0.14em] text-black sm:-mt-3 sm:text-[calc(0.75rem*1.35*1.1)] sm:tracking-[0.18em]">
            New American Energy
          </p>
        </header>

        <div className="mx-auto mt-20 flex w-full max-w-[54rem] flex-col gap-1.5 px-0 pb-8 pt-20 text-left sm:mt-24 sm:items-center sm:gap-2 sm:px-2 sm:pt-28 sm:text-center">
          <h1
            className="animate-amp-reveal w-full max-w-none font-[family-name:var(--font-libre)] text-[1.75rem] font-normal leading-[1.02] tracking-[-0.03em] text-white sm:text-[clamp(1.6rem,4.5vw,3.15rem)]"
            style={{ ["--amp-reveal-delay" as string]: "120ms" }}
          >
            Amped organizes and unlocks political and cultural power to super charge the
            energy transition.
          </h1>
          <p
            className="animate-amp-reveal max-w-xl w-full font-[family-name:var(--font-ranade)] text-base font-normal leading-relaxed tracking-[-0.04em] text-white sm:mx-auto"
            style={{ ["--amp-reveal-delay" as string]: "200ms" }}
          >
            We build the institutional infrastructure enabling clean energy to win.
          </p>
        </div>
      </div>
    </section>
  );
}
