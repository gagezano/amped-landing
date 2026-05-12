"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** Full-bleed hero backdrop: looping MP4 with a still JPG fallback for SSR & reduced motion. */
const HERO_JPG = "/amped-center-still.jpg";
const VIDEO_SRC = "/hero.mp4";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;

    // Do not gate on fetch(HEAD): many CDNs/mobile paths return 403/405 for HEAD
    // even when GET works, so the hero would never switch to <video>.
    const start = () => setUseVideo(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start);
      return () => window.cancelIdleCallback(id);
    }
    const timeoutId = setTimeout(start, 1);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  useEffect(() => {
    if (!useVideo || videoFailed || !videoRef.current) return;
    const v = videoRef.current;
    v.defaultMuted = true;
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const tryPlay = () => {
      void v.play().catch(() => {});
    };
    v.load();
    tryPlay();
    // First play() can run before iOS has data; retrying clears the stuck play overlay when allowed.
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
    };
  }, [useVideo, videoFailed]);

  const showVideo = !reducedMotion && useVideo && !videoFailed;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {showVideo ? (
        <video
          ref={videoRef}
          className={`${heroBackdropClassName} amp-hero-backdrop-video`}
          src={VIDEO_SRC}
          poster={HERO_JPG}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          disableRemotePlayback
          onError={() => setVideoFailed(true)}
          aria-hidden
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={HERO_JPG}
          alt=""
          width={HERO_BG_WIDTH}
          height={HERO_BG_HEIGHT}
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
          className={heroBackdropClassName}
          aria-hidden
        />
      )}
    </div>
  );
}
