"use client";

import { useEffect } from "react";

/**
 * Universal scroll-reveal observer.
 *
 * Anything tagged with `.animate-amp-reveal` starts
 * in its "primed" state (opacity 0, slight downward offset) and only fades up
 * once it enters the viewport. Above-the-fold elements get the in-view class
 * within a frame of mount, so the initial hero load still feels instant.
 *
 * Reduced-motion users skip the animation entirely (CSS handles that), but we
 * still mark elements in-view so we don't risk leaving anything hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".animate-amp-reveal",
    );
    if (targets.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px 20% 0px",
        threshold: 0.01,
      },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
