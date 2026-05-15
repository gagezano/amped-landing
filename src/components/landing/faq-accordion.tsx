"use client";

import { useId, useState } from "react";

const answerBodyClass =
  "font-[family-name:var(--font-libre)] text-lg font-normal leading-relaxed tracking-[-0.02em] text-white/90";

const sansBulletLabelClass =
  "font-[family-name:var(--font-ranade)] text-xl font-bold leading-snug tracking-[-0.04em] text-white";

type FaqStandard = { question: string; paragraphs: string[] };
type FaqWithSansBullets = {
  question: string;
  intro: string[];
  bullets: { label: string; body: string }[];
};
type FaqItem = FaqStandard | FaqWithSansBullets;

function isSansBulletsItem(item: FaqItem): item is FaqWithSansBullets {
  return "bullets" in item;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is AMPED & why is a new organization necessary?",
    paragraphs: [
      "AMPED is the political and cultural infrastructure the clean energy industry never built. Clean energy has won on technology and economics and has powerful commercial momentum. But it has failed to build widespread public and political support. Renewables are being banned faster than they're being built in much of the country and polling shows support for renewable energy is declining.",
      "We're here to close the gap.",
    ],
  },
  {
    question: "What AMPED is not.",
    paragraphs: [
      "Not a trade association. We don't lobby on bills, write comments on rulemakings, or organize conferences.",
      "Not an environmental NGO. We're an industry platform, built by operators and investors, focused on commercial reality.",
      "Not a PR firm. We don't pitch your press releases.",
      "Not a think tank. We don't publish white papers no one reads.",
      "Not a replacement for anyone. We fill the structural gaps between trade associations, advocacy organizations, and companies to make everyone more effective.",
    ],
  },
  {
    question: "Is AMPED bipartisan?",
    paragraphs: [
      "Yes. AMPED supports allies — Democrat or Republican — and holds opponents accountable. Energy affordability, reliability, and American competitiveness aren't partisan. Neither are we.",
    ],
  },
  {
    question: "Does AMPED lobby?",
    paragraphs: [
      "No. We don't lobby. We make the industry's case in the places where opinion actually forms. The lobbying gets done by others more effectively because we've changed the ground they're operating on.",
    ],
  },
  {
    question: "Is AMPED trying to replace existing trade associations?",
    paragraphs: [
      "No. AMPED sits at the top of the funnel shaping the political and cultural environment that helps everyone win. Trade associations are sector-specific, often constrained by mixed memberships, and built to lobby on specific bills and rules. AMPED is pure clean energy, focused on building durable power. When we succeed, trades succeed.",
    ],
  },
  {
    question: "Is AMPED duplicating existing communications efforts?",
    paragraphs: [
      "No. The clean energy industry has plenty of polished press releases, white papers, and earned media buys. What it doesn't have is a modern, creator-led communications operation built for how information actually travels in 2026. We are building the muscular, coordinated, algorithm-aware campaign infrastructure the other side has been running for years.",
    ],
  },
  {
    question: "What does AMPED actually do?",
    intro: ["Four things, working as a system:"],
    bullets: [
      {
        label: "Narrative",
        body: "A real-time, creator-led response platform that puts industry voices on the channels audiences actually use and fast enough to shape stories while they're forming.",
      },
      {
        label: "Intelligence",
        body: "A principals-only forum putting senior investors and operators in the same room as the policymakers shaping their markets. No lobbyists. No filter.",
      },
      {
        label: "Market formation",
        body: "Public-private coordination to break the bottlenecks slowing deployment such as transmission, virtual power plants, distributed energy, consumer markets.",
      },
      {
        label: "Policy",
        body: "Durable frameworks grounded in commercial reality, designed to attract bipartisan support and outlast any single administration.",
      },
    ],
  },
  {
    question: "Who is behind AMPED?",
    paragraphs: [
      "AMPED was founded by clean energy operators, investors, and policy veterans who are tired of losing winnable fights. It is backed by leading clean energy philanthropies and a coalition of industry principals.",
    ],
  },
  {
    question: "How can I get involved?",
    paragraphs: [
      "If you're an operator, investor, policymaker, or funder who wants to be part of building with us, please reach out. The work is happening now.",
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className={`mt-0.5 h-6 w-6 shrink-0 text-white/35 transition-transform duration-300 ease-out ${open ? "-rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M1.5 3.25L5 6.75L8.5 3.25"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function FaqAccordion({ className = "" }: { className?: string }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`w-full max-w-[58.75rem] ${className}`}>
      <h2 className="sr-only">Frequently asked questions</h2>
      <p className="mb-4 text-left font-[family-name:var(--font-libre)] text-[0.6875rem] font-medium uppercase leading-tight tracking-[0.22em] text-white/85 sm:text-xs">
        Frequently asked questions
      </p>
      <div className="flex flex-col border-t border-white/20">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          return (
            <div
              key={item.question}
              className="border-b border-white/20 transition-colors duration-200 ease-out hover:bg-white/5"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-3 py-5 pl-3 pr-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/40 sm:gap-4 sm:pl-4 sm:pr-5"
              >
                <span className="min-w-0 flex-1 font-[family-name:var(--font-ranade)] text-[1.5rem] font-normal leading-[1.22] tracking-[-0.04em] text-white">
                  {item.question}
                </span>
                <span className="flex shrink-0 items-start pt-0.5">
                  <Chevron open={isOpen} />
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "block" : "hidden"}
              >
                <div className="space-y-3 pb-6 pl-3 pr-3.5 pt-0 sm:pl-4 sm:pr-5">
                  {isSansBulletsItem(item) ? (
                    <>
                      {item.intro.map((p, pi) => (
                        <p key={`intro-${pi}`} className={answerBodyClass}>
                          {p}
                        </p>
                      ))}
                      {item.bullets.map((b, bi) => (
                        <p key={`bullet-${bi}`} className={answerBodyClass}>
                          <span className={sansBulletLabelClass}>{b.label}.</span>{" "}
                          <span>{b.body}</span>
                        </p>
                      ))}
                    </>
                  ) : (
                    item.paragraphs.map((p, pi) => (
                      <p key={pi} className={answerBodyClass}>
                        {p}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
