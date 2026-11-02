"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, REDUCE, MOTION } from "@/lib/gsap";
import { scrollToId } from "@/lib/lenis";
import { nav, site } from "@/data/film";

const pad = (n: number) => String(n).padStart(2, "0");
const timecode = (seconds: number) => {
  const total = Math.round(seconds * 30);
  const f = total % 30;
  const s = Math.floor(total / 30);
  return `00:${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(f)}`;
};

/**
 * The website's chrome, built into the letterbox bars: the scene-selection nav
 * in the top bar; the scene label, running timecode and progress line in the
 * bottom bar. The bars retract for the two IMAX sections.
 */
export default function Chrome() {
  const ref = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const botRef = useRef<HTMLDivElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState("SC 01 · Title");
  const [navId, setNavId] = useState<string>("");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ reduce: REDUCE, motion: MOTION }, (context) => {
        const reduced = !!(context.conditions as Record<string, boolean>).reduce;

        // Which scene is on screen.
        // Query the document: selectors inside useGSAP({ scope }) are scoped to the bars.
        const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
        sections.forEach((s) => {
          ScrollTrigger.create({
            trigger: s,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: (self) => {
              if (self.isActive) {
                setScene(s.dataset.scene ?? "");
                setNavId(s.dataset.nav ?? "");
              }
            },
          });
        });

        // Timecode and progress follow the scroll.
        ScrollTrigger.create({
          trigger: document.getElementById("film"),
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (tcRef.current) tcRef.current.textContent = timecode(self.progress * site.runtimeSeconds);
            if (fillRef.current) fillRef.current.style.transform = `scaleX(${self.progress})`;
          },
        });

        if (reduced) return;

        // IMAX: the bars open as the section arrives and close as it leaves.
        Array.from(document.querySelectorAll<HTMLElement>("[data-imax]")).forEach((s) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: s, start: "top 55%", end: "bottom 45%", scrub: 0.4 },
          });
          tl.to(topRef.current, { yPercent: -100, duration: 0.15, ease: "power3.inOut" }, 0)
            .to(botRef.current, { yPercent: 100, duration: 0.15, ease: "power3.inOut" }, 0)
            .to({}, { duration: 0.7 }, 0.15)
            .to(topRef.current, { yPercent: 0, duration: 0.15, ease: "power3.inOut" }, 0.85)
            .to(botRef.current, { yPercent: 0, duration: 0.15, ease: "power3.inOut" }, 0.85);
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-40" aria-label="Site chrome">
      <div ref={topRef} className="absolute left-0 right-0 top-0 h-[var(--bar)] bg-black">
        <nav className="scene-nav pointer-events-auto flex h-full items-center gap-[clamp(14px,3vw,64px)] overflow-x-auto px-5" style={{ scrollbarWidth: "none" }}
          aria-label="Scene selection">
          {nav.map((item, i) => (
            <a key={item.id} href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToId(item.id); }}
              className="buoy mono whitespace-nowrap text-[clamp(10px,0.9vw,15px)] transition-colors duration-300 hover:text-ink"
              data-label={item.label}
              data-active={navId === item.id ? "true" : undefined}
              style={{ color: navId === item.id ? "var(--ink)" : "#66758a", "--d": `${-(i * 0.9)}s`, "--r": `${-(i * 1.3)}s` } as React.CSSProperties}
              aria-current={navId === item.id ? "true" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="waterline" aria-hidden="true" />
      </div>

      <div ref={botRef} className="absolute bottom-0 left-0 right-0 h-[var(--bar)] bg-black">
        <div className="absolute left-0 top-0 h-[2px] w-full bg-[rgba(143,163,181,0.22)]" />
        <div ref={fillRef} className="absolute left-0 top-0 h-[2px] w-full origin-left bg-ink" style={{ transform: "scaleX(0)" }} />
        <div className="flex h-full items-center justify-between px-[var(--gutter)]">
          <span className="mono text-[clamp(10px,0.9vw,15px)] text-steel" aria-live="polite">{scene}</span>
          <span className="mono text-[clamp(10px,0.9vw,15px)] text-steel tabular-nums">
            <span ref={tcRef} className="text-ink">00:00:00:00</span>
            <span className="hidden sm:inline"> / {timecode(site.runtimeSeconds)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
