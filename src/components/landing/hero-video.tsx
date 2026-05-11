"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const POSTER = "/hero-poster.png";
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
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={POSTER}
        alt=""
        fill
        priority
        fetchPriority="high"
        className="object-cover object-bottom opacity-70"
        sizes="100vw"
        aria-hidden
      />
      {!reducedMotion && useVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover object-bottom opacity-70"
          src={VIDEO_SRC}
          poster={POSTER}
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
