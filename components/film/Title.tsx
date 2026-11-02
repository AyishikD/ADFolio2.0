"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION } from "@/lib/gsap";
import { blurIn, lettersIn, useScene } from "@/lib/fx";
import { scrollToId } from "@/lib/lenis";
import { openResume } from "@/lib/resume";
import { site } from "@/data/film";

/**
 * The title card. The portrait starts in hard black and white; its amber and
 * blue return as you scroll. The name arrives letter by letter once the intro ends.
 */
export default function Title() {
  const ref = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const pushRef = useRef<HTMLDivElement>(null);

  // Scroll-linked: the grade drains and the camera pushes in.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        gsap.set(photoRef.current, { opacity: 0 });
        gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: true },
        })
          .to(photoRef.current, { opacity: 1, ease: "power2.inOut", duration: 0.6 }, 0)
          .to(pushRef.current, { scale: 1.03, ease: "none", duration: 1 }, 0);
      });
    },
    { scope: ref },
  );

  // Fixed-speed entrance, after the intro.
  useScene(
    ref,
    ({ tl, q }) => {
      blurIn(tl, q(".kicker"), 0.2);
      lettersIn(tl, q(".ltr"), 0.5, 0.07);
      blurIn(tl, q(".role"), 1.9);
      blurIn(tl, q(".tag"), 2.4);
      blurIn(tl, q(".links"), 2.8);
      tl.call(() => ScrollTrigger.refresh());
    },
    { manual: true },
  );

  const nameLetters = site.name.toUpperCase().split("");

  return (
    <section ref={ref} id="title" data-scene="SC 01 · Title" className="relative" style={{ minHeight: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-ground" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 overflow-hidden">
          {/* The photo is 1254 px wide: keep it near 1:1 by giving it the right 64% of the frame, feathered on the left. */}
          <div ref={pushRef} className="absolute inset-y-0 right-0 w-full md:w-[64%]"
            style={{ maskImage: "linear-gradient(90deg, transparent 0%, #000 22%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 22%)" }}>
            {/* Black-and-white plate (static filter) with the colour plate on top; only opacity animates. */}
            <picture>
              <source srcSet="/ayishik.webp" type="image/webp" />
              <img src="/ayishik.jpg" alt="" aria-hidden="true" width={1254} height={1254} fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "60% 38%", filter: "grayscale(1) contrast(1.25)" }} />
            </picture>
            <picture>
              <source srcSet="/ayishik.webp" type="image/webp" />
              <img ref={photoRef} src="/ayishik.jpg" alt="Ayishik Das at his desk, lit by a desk lamp"
                width={1254} height={1254}
                className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "60% 38%" }} />
            </picture>
          </div>
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(7,9,12,0.9) 0%, rgba(7,9,12,0.6) 34%, rgba(7,9,12,0) 56%)" }} />
          <div className="absolute inset-x-0 bottom-0 h-1/3 md:hidden"
            style={{ background: "linear-gradient(180deg, rgba(7,9,12,0) 0%, rgba(7,9,12,0.9) 100%)" }} />
        </div>

        <div className="absolute inset-x-0 flex flex-col justify-end md:justify-center px-[var(--gutter)]"
          style={{ top: "var(--bar)", bottom: "var(--bar)", paddingBottom: "clamp(24px, 6vh, 64px)" }}>
          <div className="kicker fx">Starring</div>
          <h1 className="title-caps mt-4 whitespace-nowrap" style={{ fontSize: "clamp(34px, 5.2vw, 100px)", letterSpacing: "0.12em" }}>
            <span className="sr-only">{site.name}</span>
            {nameLetters.map((c, i) => (
              <span key={i} className="ltr fx inline-block" aria-hidden="true">{c === " " ? " " : c}</span>
            ))}
          </h1>
          <div className="role fx mt-4 font-semibold uppercase text-amber" style={{ fontSize: "clamp(14px, 1.6vw, 32px)", letterSpacing: "0.32em" }}>
            {site.role}
          </div>
          <p className="tag fx mt-6 max-w-[34ch]" style={{ fontSize: "clamp(16px, 1.5vw, 30px)", lineHeight: 1.4, letterSpacing: "0.03em" }}>
            {site.tagline[0]}<br />{site.tagline[1]}
          </p>
          <div className="links fx mt-8 flex flex-wrap gap-3">
            <a href="#work" className="film-link amber" onClick={(e) => { e.preventDefault(); scrollToId("work"); }}>View the work ↓</a>
            <a href={site.resume} className="film-link" onClick={(e) => { e.preventDefault(); openResume(e.currentTarget); }}>Résumé</a>
          </div>
        </div>
      </div>
    </section>
  );
}
