import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page doesn't exist. Head back to the Amped homepage.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-10 bg-[#070707] px-6 py-16 text-center text-white">
      <div
        className="relative flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="amp-mark-spin flex h-[160px] w-[160px] items-center justify-center rounded-full border border-white/70 pt-1 text-[96px] font-normal leading-none text-white/70">
          A
        </span>
        <span className="pointer-events-none absolute h-[2px] w-[220px] rotate-45 rounded-full bg-white/70" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="font-[family-name:var(--font-libre)] text-[clamp(1.875rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.04em] text-white">
          Not amped. Error.
        </h1>
        <p className="font-[family-name:var(--font-ranade)] text-base font-medium leading-relaxed tracking-[-0.05em] text-white/70 sm:text-lg">
          Try to go back to the{" "}
          <Link
            href="/"
            className="text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white focus-visible:outline-none focus-visible:decoration-white"
          >
            homepage
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
