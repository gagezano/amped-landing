"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** Hero crowd / scene — swap for final art or rely on `hero.mp4` when added. */
const HERO_BG = "/hero-bg-placeholder.png";
const VIDEO_SRC = "/hero.mp4";

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
      {/*
        next/image `fill` requires a positioned parent with non-zero size.
        `relative` + `size-full` on this inner box satisfies that for the optimizer layout.
      */}
      <div className="relative size-full min-h-full min-w-full">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center opacity-[0.7]"
          sizes="100vw"
          aria-hidden
        />
      </div>
      {!reducedMotion && useVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 z-[1] size-full object-cover object-center opacity-[0.7]"
          src={VIDEO_SRC}
          poster={HERO_BG}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
