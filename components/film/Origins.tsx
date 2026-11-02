"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { blurIn, useScene } from "@/lib/fx";
import { origins } from "@/data/film";

/** Act I, in flashback tones: the year rebuilds 2019 → 2021 → 2025. */
export default function Origins() {
  const ref = useRef<HTMLElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked lead: the chapter rises to meet the viewer as the scene covers the title card.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        gsap.fromTo(innerRef.current, { y: "-22vh" }, {
          y: 0, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top top", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  useScene(ref, ({ tl, q }) => {
    const year = yearRef.current!;
    const swap = (to: string, at: number) => {
      tl.to(year, { opacity: 0, filter: "blur(8px)", duration: 0.12, ease: "power2.in" }, at);
      tl.call(() => { year.textContent = to; }, [], at + 0.12);
      blurIn(tl, year, at + 0.13, 0.16);
    };

    // Each past year gets its moment: its row arrives expanded, then shrinks into
    // history as the next year takes over. Only 2025 stays expanded.
    const rows = [q(".past-0")[0] as HTMLElement, q(".past-1")[0] as HTMLElement];
    const small = rows.map((r) => parseFloat(getComputedStyle(r).fontSize));
    const dim = "rgba(233,237,241,0.6)";
    const expand = (i: number, at: number) => {
      tl.fromTo(rows[i],
        { opacity: 0, filter: "blur(10px)", fontSize: small[i] * 1.5, paddingTop: 30, paddingBottom: 30, color: "#e9edf1" },
        { opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "expo.out" }, at);
    };
    const reduce = (i: number, at: number) => {
      tl.to(rows[i], { fontSize: small[i], paddingTop: 16, paddingBottom: 16, color: dim, duration: 0.4, ease: "power3.inOut" }, at);
    };

    tl.call(() => { year.textContent = origins.past[0].year; }, [], 0);
    tl.fromTo(q(".light"), { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
    blurIn(tl, q(".chapter"), 0.1);
    blurIn(tl, q(".place"), 0.3);
    blurIn(tl, year, 0.5, 0.16);
    expand(0, 0.6);
    swap(origins.past[1].year, 1.4);
    reduce(0, 1.4);
    expand(1, 1.55);
    swap(origins.now.year, 2.3);
    reduce(1, 2.3);
    blurIn(tl, q(".now"), 2.5, 0.22);
  }, { start: "top 80%" });

  return (
    <section ref={ref} id="origins" data-scene="SC 02 · Origins" data-nav="origins" className="scene" style={{ background: "var(--origins-ground)", marginTop: "-60vh", zIndex: 2 }}>
      <div className="light -left-[10vw] -top-[10vh] h-[90vh] w-[70vw]" style={{ background: "radial-gradient(closest-side, rgba(203,184,154,0.12), rgba(203,184,154,0))" }} />
      <div ref={innerRef} className="scene-inner grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <div className="chapter kicker fx" style={{ color: "var(--flashback)" }}>{origins.chapter}</div>
          <div ref={yearRef} className="numeral fx mt-6 text-flashback" style={{ fontSize: "clamp(110px, 19vw, 360px)" }} aria-live="polite">
            {origins.now.year}
          </div>
          <div className="place fx mt-6 title-caps text-ink" style={{ fontSize: "clamp(13px, 1.4vw, 28px)", letterSpacing: "0.4em" }}>
            {origins.place}
          </div>
        </div>

        <div>
          {origins.past.map((p, i) => (
            <div key={p.year} className={`past-${i} fx flex items-baseline gap-6 border-t border-[rgba(203,184,154,0.3)] py-4`}
              style={{ fontSize: "clamp(14px, 1.3vw, 26px)", letterSpacing: "0.06em", color: "rgba(233,237,241,0.6)" }}>
              <b className="mono w-[4.5ch] shrink-0 font-medium text-flashback">{p.year}</b>
              <span>{p.line}</span>
            </div>
          ))}
          <div className="now fx mt-8 border-t-2 border-flashback pt-6">
            <div className="font-semibold uppercase" style={{ fontSize: "clamp(18px, 1.9vw, 38px)", lineHeight: 1.3, letterSpacing: "0.08em" }}>
              {origins.now.degree}
            </div>
            <div className="mt-3" style={{ fontSize: "clamp(14px, 1.4vw, 28px)", letterSpacing: "0.06em", color: "rgba(233,237,241,0.75)" }}>
              {origins.now.school}
            </div>
            <div className="mono mt-6" style={{ fontSize: "clamp(14px, 1.4vw, 28px)", letterSpacing: "0.16em", color: "rgba(233,237,241,0.75)" }}>
              {origins.now.cgpaLabel} <span className="text-amber">{origins.now.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
