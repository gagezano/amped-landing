"use client";

import { useState, useSyncExternalStore } from "react";

/** Full-bleed hero backdrop: looping GIF by default; still JPG for reduced motion or if GIF fails to load. */
const HERO_JPG = "/amped-center-still.jpg";
const HERO_GIF = "/hero.gif";

/** Intrinsic ratio hint for CLS (matches source media: 1920×1280). */
const HERO_BG_WIDTH = 1920;
const HERO_BG_HEIGHT = 1280;

/** Full bleed + responsive focal crop (z-index on each layer). */
const heroBackdropClassName =
  "pointer-events-none absolute inset-0 block h-full w-full min-h-full min-w-full max-w-none object-cover object-[center_18%] opacity-[0.7] sm:object-[center_24%] md:object-[center_30%] lg:object-center xl:object-bottom";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroVideo() {
  const [gifFailed, setGifFailed] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const useGif = !reducedMotion && !gifFailed;
  const src = useGif ? HERO_GIF : HERO_JPG;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={HERO_BG_WIDTH}
        height={HERO_BG_HEIGHT}
        decoding="async"
        fetchPriority="high"
        sizes="100vw"
        className={heroBackdropClassName}
        aria-hidden
        onError={() => {
          if (useGif) setGifFailed(true);
        }}
      />
    </div>
  );
}
