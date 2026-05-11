import Link from "next/link";
import { TEAM } from "./team";

export function ContentSection() {
  return (
    <section className="bg-[#070707] px-4 pb-20 pt-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto flex max-w-[56rem] flex-col gap-6 lg:mx-0 lg:max-w-[48rem]">
          <h2 className="font-[family-name:var(--font-libre)] text-[clamp(1.65rem,3.6vw,3rem)] font-normal leading-[1.15] tracking-[-0.03em] text-white">
            We are commercial operators, investors, and strategists grounded in market
            reality not abstraction.
          </h2>
          <p className="max-w-xl font-[family-name:var(--font-ranade)] text-base font-bold leading-relaxed tracking-[-0.04em] text-white">
            We shape the political, cultural, and institutional forces enabling capital to
            flow and markets to scale.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-x-6">
          {TEAM.map((m) => (
            <li key={m.name} className="flex max-w-[13.25rem] flex-col gap-2.5">
              <div className="aspect-square w-full bg-white/10" aria-hidden />
              <div className="flex flex-col gap-0.5 text-base tracking-[-0.04em] text-white">
                <p className="font-[family-name:var(--font-ranade)] font-bold">{m.name}</p>
                <p className="font-[family-name:var(--font-ranade)] font-normal">{m.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 lg:mt-16">
          <Link
            href="mailto:hello@amped.energy"
            className="inline-flex h-[3.3rem] min-w-[9.7rem] items-center justify-center bg-white px-7 font-[family-name:var(--font-ranade)] text-base font-medium tracking-[-0.04em] text-[#21021a] transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>

        <p className="mt-20 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white/30">
          Copyright 2026 – All Rights Reserved
        </p>
      </div>
    </section>
  );
}
