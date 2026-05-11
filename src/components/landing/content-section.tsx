import Image from "next/image";
import Link from "next/link";
import { TeamSocialLinks } from "./team-brand-social-icons";
import { TEAM } from "./team";

const teamPhotoClassName =
  "object-cover grayscale contrast-[1.28] brightness-[0.88] origin-center transition-[transform,filter] duration-1000 ease-out will-change-transform group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-125";

export function ContentSection() {
  return (
    <section className="bg-[#070707] px-4 pb-[30px] pt-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-3 lg:mx-0 lg:max-w-[48rem]">
          <h2
            className="animate-amp-reveal w-full max-w-[30rem] font-[family-name:var(--font-libre)] text-[2rem] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:max-w-[32rem]"
            style={{ ["--amp-reveal-delay" as string]: "280ms" }}
          >
            We are commercial operators, investors, and strategists grounded in market
            reality not abstraction.
          </h2>
          <p
            className="animate-amp-reveal max-w-xl font-[family-name:var(--font-ranade)] text-base font-normal leading-relaxed tracking-[-0.04em] text-white"
            style={{ ["--amp-reveal-delay" as string]: "360ms" }}
          >
            We shape the political, cultural, and institutional forces enabling capital to
            flow and markets to scale.
          </p>

          <ul className="mt-14 grid w-full grid-cols-2 gap-x-[30px] gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:mt-16">
            {TEAM.map((m, i) => (
              <li
                key={m.name}
                className="animate-amp-reveal flex min-w-0 w-full flex-col gap-2.5"
                style={{ ["--amp-reveal-delay" as string]: `${440 + i * 48}ms` }}
              >
                <div className="group relative aspect-square w-full cursor-default overflow-hidden bg-neutral-900">
                  <Image
                    src={m.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 42vw, (max-width: 768px) 28vw, 22vw"
                    className={teamPhotoClassName}
                  />
                </div>
                <div className="flex flex-col gap-0 text-base tracking-[-0.04em] text-white">
                  <p className="font-[family-name:var(--font-ranade)] font-bold leading-tight">{m.name}</p>
                  <p className="font-[family-name:var(--font-ranade)] text-sm font-normal leading-tight">{m.title}</p>
                  <TeamSocialLinks name={m.name} socials={m.socials} />
                </div>
              </li>
            ))}
          </ul>

          <div
            className="animate-amp-reveal mt-14 lg:mt-16"
            style={{ ["--amp-reveal-delay" as string]: `${440 + TEAM.length * 48 + 40}ms` }}
          >
            <Link
              href="mailto:hello@amped.energy"
              className="inline-flex h-[3.3rem] min-w-[9.7rem] items-center justify-center border border-white bg-black px-7 font-[family-name:var(--font-ranade)] text-sm font-normal uppercase tracking-[0.02em] text-white transition-colors duration-200 hover:border-black hover:bg-white hover:text-black"
            >
              Get in Touch
            </Link>
          </div>

          <p
            className="animate-amp-reveal mt-[200px] font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white/30"
            style={{
              ["--amp-reveal-delay" as string]: `${440 + TEAM.length * 48 + 120}ms`,
            }}
          >
            Copyright 2026 – All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
