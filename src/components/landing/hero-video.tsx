"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** Full-bleed looping hero: `public/featurebg.gif`. Static JPEG when motion is reduced. */
const HERO_GIF = "/featurebg.gif";
const HERO_JPG = "/feature-bg.jpg";
const VIDEO_SRC = "/hero.mp4";

/** Intrinsic ratio hint for CLS (match your GIF / JPG). */
const HERO_BG_WIDTH = 1024;
const HERO_BG_HEIGHT = 576;

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);
  const [backdropSrc, setBackdropSrc] = useState(HERO_GIF);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;

    const start = () => {
      fetch(VIDEO_SRC, { method: "HEAD" })
        .then((res) => {
          if (res.ok) setUseVideo(true);
        })
        .catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start);
      return () => window.cancelIdleCallback(id);
    }
    const timeoutId = setTimeout(start, 1);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  useEffect(() => {
    if (!useVideo || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    const p = v.play();
    if (p) void p.catch(() => {});
  }, [useVideo]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        suppressHydrationWarning
        src={reducedMotion ? HERO_JPG : backdropSrc}
        alt=""
        width={HERO_BG_WIDTH}
        height={HERO_BG_HEIGHT}
        decoding="async"
        fetchPriority="high"
        sizes="100vw"
        className={`${heroBackdropClassName} z-0`}
        onError={() => {
          setBackdropSrc((prev) => (prev === HERO_JPG ? prev : HERO_JPG));
        }}
        aria-hidden
      />
      {!reducedMotion && useVideo ? (
        <video
          ref={videoRef}
          className={`${heroBackdropClassName} z-1`}
          src={VIDEO_SRC}
          poster={HERO_JPG}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
        />
      ) : null}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[300px] bg-gradient-to-b from-transparent to-black"
        aria-hidden
      />
    </div>
  );
}
