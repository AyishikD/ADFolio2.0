"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, REDUCE } from "@/lib/gsap";
import { lenisStore } from "@/lib/lenis";

/** Weighted, smooth scrolling, synced to ScrollTrigger. Off under reduced motion. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia(REDUCE).matches) return;

    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    lenisStore.current = lenis;
    if (document.documentElement.hasAttribute("data-intro")) lenis.stop();

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisStore.current = null;
    };
  }, []);

  return <>{children}</>;
}
