import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "./faq-accordion";
import { TeamSocialLinks } from "./team-brand-social-icons";
import { TEAM } from "./team";

const teamPhotoClassName =
  "object-cover origin-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.14] group-focus-within:scale-[1.14]";

export function ContentSection() {
  const [featuredMember, ...secondaryTeam] = TEAM;
  const featuredLinkedin = featuredMember?.socials.find((s) => s.network === "linkedin")?.href;
  const featuredDelay = 440;
  const secondaryDelayStart = featuredMember ? 560 : 440;
  const contactDelay = secondaryDelayStart + secondaryTeam.length * 48 + 40;
  const footerDelay = contactDelay + 80;

  return (
    <section className="bg-[#070707] px-4 pb-[30px] pt-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-1.5 lg:mx-0 lg:max-w-none">
          <h2
            className="animate-amp-reveal w-full max-w-[40rem] font-[family-name:var(--font-ranade)] text-[1.5rem] font-normal leading-[1.22] tracking-[-0.03em] text-white sm:max-w-[44rem]"
            style={{ ["--amp-reveal-delay" as string]: "280ms" }}
          >
            We are commercial operators, investors, &amp; strategists.
          </h2>
          <p
            className="animate-amp-reveal max-w-xl font-[family-name:var(--font-libre)] text-lg font-normal leading-relaxed tracking-[-0.02em] text-white"
            style={{ ["--amp-reveal-delay" as string]: "360ms" }}
          >
            Focused on strengthening the political, cultural, and market infrastructure
            required for the energy transition to scale.
          </p>

          {(featuredMember || secondaryTeam.length) ? (
            <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 lg:mt-14">
              <p
                className="self-start text-left font-[family-name:var(--font-libre)] text-[0.6875rem] font-medium uppercase leading-tight tracking-[0.22em] text-white/85 sm:text-xs lg:max-w-[58.75rem]"
              >
                TEAM
              </p>
              <div className="flex w-full flex-col items-start gap-8 lg:grid lg:max-w-[58.75rem] lg:grid-cols-[30rem_28rem] lg:items-start lg:justify-start lg:gap-5">
              {featuredMember ? (
                <div
                  className="animate-amp-reveal w-full"
                  style={{ ["--amp-reveal-delay" as string]: `${featuredDelay}ms` }}
                >
                  <div className="group relative aspect-square w-full max-w-[26rem] overflow-hidden bg-neutral-900 md:max-w-[28rem] lg:max-w-[30rem]">
                    <Image
                      src={featuredMember.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, 42vw"
                      className={teamPhotoClassName}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/72 via-black/28 to-transparent" />
                    <div className="absolute bottom-[20px] left-[20px] z-10 max-w-[calc(100%-40px)] text-white">
                      <p className="font-[family-name:var(--font-ranade)] text-[1.35rem] font-normal leading-[1.22] tracking-[-0.03em] text-white">
                        {featuredMember.name}
                      </p>
                      {featuredMember.title ? (
                        <p className="mt-1.5 font-[family-name:var(--font-libre)] text-[0.75rem] font-normal uppercase leading-tight tracking-[0.18em] text-white/80 sm:text-[0.8125rem]">
                          {featuredMember.title}
                        </p>
                      ) : null}
                      <div className="mt-1.5">
                        <TeamSocialLinks
                          name={featuredMember.name}
                          socials={
                            featuredLinkedin
                              ? [{ network: "linkedin" as const, href: featuredLinkedin }]
                              : featuredMember.socials
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {secondaryTeam.length ? (
                <ul className="grid w-full max-w-[26rem] grid-cols-3 gap-x-3 gap-y-6 sm:flex sm:max-w-[68rem] sm:flex-wrap sm:justify-start sm:gap-x-5 sm:gap-y-8 lg:max-w-[28rem] lg:content-start">
                  {secondaryTeam.map((m, i) => {
                    const linkedin = m.socials.find((s) => s.network === "linkedin")?.href;
                    return (
                      <li
                        key={m.name}
                        className="animate-amp-reveal group flex min-w-0 w-full flex-col gap-1.5 sm:w-[8.25rem] sm:flex-[0_0_auto] xl:w-[8.5rem]"
                        style={{ ["--amp-reveal-delay" as string]: `${secondaryDelayStart + i * 48}ms` }}
                      >
                        {linkedin ? (
                          <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on LinkedIn`}
                            className="relative aspect-square w-full overflow-hidden bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            <Image
                              src={m.imageSrc}
                              alt=""
                              fill
                              sizes="(max-width: 639px) 28vw, (max-width: 768px) 28vw, (max-width: 1280px) 22vw, 15vw"
                              className={teamPhotoClassName}
                            />
                          </a>
                        ) : (
                          <div className="relative aspect-square w-full cursor-default overflow-hidden bg-neutral-900">
                            <Image
                              src={m.imageSrc}
                              alt=""
                              fill
                              sizes="(max-width: 639px) 28vw, (max-width: 768px) 28vw, (max-width: 1280px) 22vw, 15vw"
                              className={teamPhotoClassName}
                            />
                          </div>
                        )}
                        <div className="flex flex-col gap-0 text-sm tracking-[-0.03em] text-white">
                          <p className="font-[family-name:var(--font-ranade)] text-[0.9rem] font-bold leading-tight sm:text-[0.95rem]">
                            {m.name}
                          </p>
                          {m.title ? (
                            <p className="mt-0.5 font-[family-name:var(--font-libre)] text-[0.6875rem] font-normal uppercase leading-tight tracking-[0.14em] text-white/75">
                              {m.title}
                            </p>
                          ) : null}
                          <div className="origin-left scale-[0.82]">
                            <TeamSocialLinks name={m.name} socials={m.socials} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              </div>
            </div>
          ) : null}

          <FaqAccordion className="mt-28 sm:mt-32 lg:mt-36" />

          <div
            className="animate-amp-reveal mt-14 lg:mt-16"
            style={{ ["--amp-reveal-delay" as string]: `${contactDelay}ms` }}
          >
            <Link
              href="mailto:contact@amped.org"
              className="amp-button-cycle inline-flex h-[3.3rem] min-w-[9.7rem] items-center justify-center border border-white bg-black px-7 font-[family-name:var(--font-ranade)] text-base font-bold leading-tight tracking-[-0.04em] text-white transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          <p
            className="animate-amp-reveal mt-[120px] flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white/30"
            style={{
              ["--amp-reveal-delay" as string]: `${footerDelay}ms`,
            }}
          >
            <span
              aria-hidden="true"
              className="amp-mark-spin flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-current pt-px text-[13px] font-normal leading-none"
            >
              A
            </span>
            <span>Copyright 2026 – All Rights Reserved</span>
          </p>
        </div>
      </div>
    </section>
  );
}
