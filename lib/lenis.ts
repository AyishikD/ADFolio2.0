"use client";

import type Lenis from "lenis";

/** The one Lenis instance, set by <SmoothScroll>. */
export const lenisStore: { current: Lenis | null } = { current: null };

/** Scroll to a section, landing its top just under the letterbox bar. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = lenisStore.current;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else el.scrollIntoView({ behavior: "smooth" });
}
