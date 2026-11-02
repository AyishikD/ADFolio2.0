"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, REDUCE } from "@/lib/gsap";
import { lenisStore } from "@/lib/lenis";
import { resumes, site } from "@/data/film";

/**
 * The résumé window: three cuts of the same film. Opens like a letterbox,
 * lists the cuts as slates, and previews the chosen one.
 */
export default function ResumeModal() {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  // Open on request, from anywhere on the page.
  useEffect(() => {
    const onOpen = (e: Event) => {
      returnTo.current = (e as CustomEvent<{ from: HTMLElement | null }>).detail?.from ?? null;
      setOpen(true);
    };
    window.addEventListener("resume:open", onOpen);
    return () => window.removeEventListener("resume:open", onOpen);
  }, []);

  // Lock the scroll, handle Escape, manage focus.
  useEffect(() => {
    if (!open) return;
    lenisStore.current?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 350);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenisStore.current?.start();
      returnTo.current?.focus();
    };
  }, [open]);

  // The letterbox opens: bars slide in, the slates print, the preview sharpens.
  useGSAP(
    () => {
      if (!open || !ref.current) return;
      const q = gsap.utils.selector(ref);
      if (window.matchMedia(REDUCE).matches) {
        gsap.set([q(".bar"), q(".panel"), q(".cut"), q(".preview")], { clearProps: "all", opacity: 1 });
        return;
      }
      const tl = gsap.timeline();
      tl.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" }, 0);
      tl.fromTo(q(".bar-top"), { yPercent: -100 }, { yPercent: 0, duration: 0.5, ease: "power3.inOut" }, 0.05);
      tl.fromTo(q(".bar-bottom"), { yPercent: 100 }, { yPercent: 0, duration: 0.5, ease: "power3.inOut" }, 0.05);
      tl.fromTo(q(".flash"), { opacity: 0.45 }, { opacity: 0, duration: 0.4, ease: "power2.out" }, 0.5);
      tl.fromTo(q(".panel"), { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.3, ease: "expo.out" }, 0.45);
      tl.fromTo(q(".cut"), { opacity: 0, x: -40, filter: "blur(12px)" }, { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.3, ease: "power3.out", stagger: 0.09 }, 0.6);
      tl.fromTo(q(".preview"), { opacity: 0, filter: "blur(16px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "expo.out" }, 0.9);
    },
    { scope: ref, dependencies: [open] },
  );

  if (!open) return null;
  const cut = resumes[active];

  return (
    <div ref={ref} className="fixed inset-0 z-[55] flex flex-col bg-black/90 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="resume-title"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="bar bar-top h-[var(--bar)] shrink-0 bg-black">
        <div className="flex h-full items-center justify-between px-[var(--gutter)]">
          <span className="mono text-[clamp(10px,0.9vw,15px)] text-steel">SC 00 · The Cuts</span>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)}
            className="mono text-[clamp(10px,0.9vw,15px)] text-steel hover:text-ink focus-visible:text-ink focus-visible:outline-none">
            Close ✕ <span className="hidden sm:inline text-[#66758a]">· Esc</span>
          </button>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-stretch" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="flash pointer-events-none absolute inset-0 opacity-0" />
        <div className="panel mx-auto grid w-full max-w-[1728px] min-h-0 gap-6 px-[var(--gutter)] py-[clamp(16px,3vh,40px)] md:grid-cols-[minmax(300px,2fr)_3fr] md:gap-10">
          <div className="flex min-h-0 flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
            <div className="kicker">One film, three cuts</div>
            <h2 id="resume-title" className="title-caps mt-3" style={{ fontSize: "clamp(22px, 2.6vw, 48px)", letterSpacing: "0.12em" }}>
              Résumé
            </h2>
            <p className="mt-2 max-w-[44ch] text-steel" style={{ fontSize: "clamp(12px, 0.95vw, 17px)", lineHeight: 1.45 }}>
              The same story, edited for the role. Pick a cut to preview it, open it in a new tab, or download it.
            </p>

            <ul className="mt-5 flex flex-col gap-2" role="tablist" aria-label="Résumé cuts">
              {resumes.map((r, i) => {
                const selected = i === active;
                return (
                  <li key={r.id} className="cut">
                    <button type="button" role="tab" aria-selected={selected} onClick={() => setActive(i)}
                      className="group w-full border text-left transition-colors duration-200"
                      style={{ borderColor: selected ? "var(--amber)" : "rgba(143,163,181,0.3)", background: selected ? "rgba(232,163,61,0.06)" : "transparent" }}>
                      <div className="stripes h-3 w-full border-0" style={{ opacity: selected ? 1 : 0.35 }} aria-hidden="true" />
                      <div className="px-4 py-2.5 md:px-5">
                        <div className="mono text-[clamp(10px,0.85vw,14px)]" style={{ color: selected ? "var(--amber)" : "var(--steel)" }}>
                          Cut {r.cut} · {r.focus}
                        </div>
                        <div className="mt-0.5 font-semibold uppercase" style={{ fontSize: "clamp(15px, 1.2vw, 22px)", letterSpacing: "0.1em" }}>{r.title}</div>
                        <div className="mt-0.5 text-steel" style={{ fontSize: "clamp(12px, 0.85vw, 15px)", lineHeight: 1.4 }}>{r.line}</div>
                        <div className="mt-3 flex gap-4 md:hidden">
                          <a href={r.file} target="_blank" rel="noopener noreferrer" className="mono text-[11px] text-amber">Open ↗</a>
                          <a href={r.file} download className="mono text-[11px] text-steel">Download ↓</a>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="hidden flex-wrap gap-3 pt-5 md:flex">
              <a href={cut.file} target="_blank" rel="noopener noreferrer" className="film-link amber">Open {cut.title} ↗</a>
              <a href={cut.file} download className="film-link">Download ↓</a>
            </div>
          </div>

          <div className="preview relative hidden min-h-0 border border-[rgba(143,163,181,0.3)] bg-[#0e1419] md:block">
            <iframe key={cut.id} src={`${cut.file}#toolbar=0&navpanes=0&view=FitH`} title={`${site.name} résumé: ${cut.focus}`}
              className="h-full w-full" style={{ background: "#0e1419" }} />
          </div>
        </div>
      </div>

      <div className="bar bar-bottom h-[var(--bar)] shrink-0 bg-black">
        <div className="flex h-full items-center justify-between px-[var(--gutter)]">
          <span className="mono text-[clamp(10px,0.9vw,15px)] text-steel">{cut.focus}</span>
          <span className="mono text-[clamp(10px,0.9vw,15px)] text-steel">
            <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
