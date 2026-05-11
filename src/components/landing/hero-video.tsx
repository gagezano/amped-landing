"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** Hero crowd / scene (file is JPEG; use .jpg extension). */
const HERO_BG = "/hero-bg-placeholder.jpg";
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
        Plain <img> from /public avoids the `/_next/image` pipeline. The prior asset was
        JPEG bytes saved as `.png`, which can produce a blank/broken optimized image.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_BG}
        alt=""
        width={2048}
        height={1240}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 size-full max-h-none object-cover object-center opacity-[0.7]"
        aria-hidden
      />
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
