"use client";

import { type RefObject } from "react";
import { gsap, useGSAP, REDUCE, MOTION } from "./gsap";

/** One frame at the film's 30 fps. */
export const F = 1 / 30;

type TL = gsap.core.Timeline;
type Targets = gsap.TweenTarget;

/** The film's title entrance: the whole line blurs in, no travel. */
export function blurIn(tl: TL, targets: Targets, at: number, d = 0.2) {
  tl.fromTo(
    targets,
    { opacity: 0, filter: "blur(10px)" },
    { opacity: 1, filter: "blur(0px)", duration: d, ease: "expo.out" },
    at,
  );
}

/** A name arriving letter by letter. */
export function lettersIn(tl: TL, targets: Targets, at: number, gap = 0.09) {
  tl.fromTo(
    targets,
    { opacity: 0, filter: "blur(4px)" },
    { opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "power2.out", stagger: gap },
    at,
  );
}

/** A number counts from 0 and lands dead still on its real value. */
export function countUp(
  tl: TL,
  el: Element | null,
  to: number,
  decimals: number,
  suffix: string,
  at: number,
  d = 1.3,
) {
  if (!el) return;
  const o = { v: 0 };
  const fmt = (v: number) => v.toFixed(decimals) + suffix;
  tl.fromTo(
    o,
    { v: 0 },
    {
      v: to,
      duration: d,
      ease: "power4.out",
      onStart: () => { el.textContent = fmt(0); },
      onUpdate: () => { el.textContent = fmt(o.v); },
      onComplete: () => { el.textContent = fmt(to); },
    },
    at,
  );
}

/**
 * The hit: a warm bloom that swells from the centre and fades over a third of a
 * second, with an impact shake that decays over 8 frames. No white frames.
 */
export function impact(tl: TL, cam: Targets, flash: Targets, at: number, amp = 14) {
  tl.fromTo(flash, { opacity: 0 }, { opacity: 0.5, duration: 2 * F, ease: "power1.out" }, at);
  tl.to(flash, { opacity: 0, duration: 10 * F, ease: "power2.out" }, at + 2 * F);
  [1, -0.8, 0.62, -0.45, 0.3, -0.18, 0.08, 0].forEach((m, i) => {
    tl.set(cam, { x: amp * m, y: -amp * 0.6 * m }, at + i * F);
  });
}

/** A projector flicker on a light element: a few hard steps of opacity. */
export function flicker(tl: TL, target: Targets, steps: Array<[number, number]>, restore = 1) {
  steps.forEach(([at, v]) => {
    tl.set(target, { opacity: v }, at);
    tl.set(target, { opacity: restore }, at + 2 * F);
  });
}

export type SceneCtx = {
  q: gsap.utils.SelectorFunc;
  reduced: boolean;
  tl: TL;
};

/**
 * A scene that plays once, at its own speed, when it scrolls into view.
 * With reduced motion every `.fx` element is simply shown.
 */
export function useScene(
  ref: RefObject<HTMLElement | null>,
  build: (ctx: SceneCtx) => void,
  opts: { start?: string; manual?: boolean } = {},
) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ reduce: REDUCE, motion: MOTION }, (context) => {
        const q = gsap.utils.selector(ref);
        const reduced = !!(context.conditions as Record<string, boolean>).reduce;
        if (reduced) {
          gsap.set(q(".fx"), { opacity: 1, filter: "none", clearProps: "filter" });
          return;
        }
        const tl = gsap.timeline(
          opts.manual
            ? { paused: true }
            : { scrollTrigger: { trigger: ref.current, start: opts.start ?? "top 65%", once: true } },
        );
        build({ q, reduced, tl });
        if (opts.manual) {
          const start = () => tl.play();
          if (!document.documentElement.hasAttribute("data-intro")) start();
          else window.addEventListener("intro:done", start, { once: true });
        }
      });
    },
    { scope: ref },
  );
}
