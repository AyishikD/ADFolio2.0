"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { site, cast, crew } from "@/data/film";

/** The end credits: a real roll, driven by the scroll, ending on the contact details. */
export default function Credits() {
  const ref = useRef<HTMLElement>(null);
  const rollRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        const roll = rollRef.current!;
        const contact = contactRef.current!;
        // The letterbox bar height, as globals.css computes it.
        const bar = () => (window.innerWidth < 768 ? 48 : Math.min(150, Math.max(56, (window.innerHeight - window.innerWidth / 2.39) / 2)));
        gsap.fromTo(
          roll,
          // "Directed by" sits just under the top bar as the section arrives: a cut, not a wait.
          { y: () => bar() + 24 },
          {
            y: () => -(contact.offsetTop + contact.offsetHeight / 2) + window.innerHeight * 0.36,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: true, invalidateOnRefresh: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="credits" data-scene="SC 08 · Credits" data-nav="credits" className="relative bg-ground motion-reduce:min-h-0" style={{ minHeight: "260vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden motion-reduce:static motion-reduce:h-auto">
        <div ref={rollRef} className="px-[var(--gutter)] text-center motion-reduce:!transform-none motion-reduce:py-[var(--bar)]">
          <Block head="Directed by" big={site.name} />
          <Block head="Written, built and shipped by" big={site.name} />

          <div className="pb-16">
            <div className="kicker mb-6" style={{ letterSpacing: "0.4em" }}>Cast</div>
            {cast.map(([who, role]) => (
              <div key={who} className="grid grid-cols-2 gap-x-6 py-2 md:gap-x-14" style={{ fontSize: "clamp(14px, 1.5vw, 32px)", letterSpacing: "0.08em" }}>
                <span className="text-right font-semibold uppercase" style={{ letterSpacing: "0.16em" }}>{who}</span>
                <span className="text-left" style={{ color: "rgba(233,237,241,0.72)" }}>{role}</span>
              </div>
            ))}
          </div>

          <div className="pb-16">
            <div className="kicker mb-6" style={{ letterSpacing: "0.4em" }}>Crew</div>
            {crew.map(([dept, people]) => (
              <div key={dept} className="grid grid-cols-[1fr_1.6fr] gap-x-6 py-2 md:grid-cols-2 md:gap-x-14" style={{ fontSize: "clamp(12px, 1.2vw, 24px)", letterSpacing: "0.06em" }}>
                <span className="text-right font-semibold uppercase" style={{ letterSpacing: "0.16em" }}>{dept}</span>
                <span className="text-left" style={{ color: "rgba(233,237,241,0.72)" }}>{people}</span>
              </div>
            ))}
          </div>

          <div ref={contactRef} className="pb-24">
            <div className="kicker" style={{ letterSpacing: "0.4em" }}>For bookings</div>
            <div className="mono mt-5 normal-case" style={{ fontSize: "clamp(14px, 1.6vw, 32px)", lineHeight: 1.7, letterSpacing: "0.08em", textTransform: "none" }}>
              <a href={`mailto:${site.email}`} className="text-amber hover:text-ink">{site.email}</a><br />
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber">github.com/AyishikD</a><br />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber">linkedin.com/in/ayishik-das</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ head, big }: { head: string; big: string }) {
  return (
    <div className="pb-16">
      <div className="kicker" style={{ letterSpacing: "0.4em" }}>{head}</div>
      <div className="title-caps mt-3" style={{ fontSize: "clamp(26px, 3.3vw, 64px)", letterSpacing: "0.3em", paddingLeft: "0.3em" }}>{big}</div>
    </div>
  );
}
