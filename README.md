# Ayishik Das — a portfolio that plays like a film

A single-page portfolio built as a Nolan-style picture: a film-leader intro, a letterboxed frame whose black bars carry the site's navigation, scene label, timecode and progress line, and scenes that hit with count-ups, flash frames and impact shakes as you scroll. The bars open to full frame for the two IMAX moments.

## Stack

- **Next.js 15** (App Router, static export) · **React 19** · **TypeScript**
- **GSAP + ScrollTrigger** for every animation, **Lenis** for weighted smooth scrolling
- **Tailwind CSS** for layout, CSS variables for the palette
- **next/font**: Montserrat (display) and IBM Plex Mono (slates, HUD)
- **Sentry** (browser only) for error reporting

## Structure

```
app/            layout (fonts, metadata, boot script) and the one page
components/film Intro · Chrome (bars, nav, timecode) · Title · Origins · TheCall ·
                TheWork · Reel · Trials · Laurels · Credits · PostCredits · ResumeModal
data/film.ts    the script: every word and number on the site
lib/            gsap registration, animation helpers (blurIn, countUp, impact), Lenis store
public/         the portrait and the three résumés (public/resume/)
```

## How the motion works

- **Scroll-linked** (moves exactly as far as you scroll): the letterbox bars opening and closing, the portrait's black-and-white grade draining to colour, the credits roll, the timecode and progress line.
- **Fixed-speed on entry** (plays once when a scene comes into view): title letters, count-ups, flash frames and shakes, slate whips, clapper snaps.
- `prefers-reduced-motion` turns off smooth scrolling, grain, flashes, shakes and the intro; every element is simply shown.
- The intro plays on every load and has a Skip button. Content is server-rendered beneath it, so search engines and link previews see the real page.

## Commands

```bash
npm run dev        # local dev server
npm run build      # static export to out/
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## The résumé window

Clicking Résumé opens a letterboxed window with three cuts of the same film: Software Engineering, AI/ML, and Systems & Fintech. Each cut previews in place on desktop and can be opened or downloaded. The PDFs live in `public/resume/`; their labels in `resumes` in `data/film.ts`.

## Editing content

Everything on screen comes from `data/film.ts`. Change a number, a project, a credit or a link there and the scene updates. Add a scene by creating a component in `components/film/` with `data-scene="SC NN · Name"` (and `data-nav` to light up a nav item, `data-imax` to open the bars) and mounting it in `app/page.tsx`.
