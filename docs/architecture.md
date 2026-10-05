# Architecture notes

Companion to `redesign-brief.md`. Records *how* the code is laid out and the
decisions that aren't obvious from reading it.

## Directory map

```
app/
  layout.tsx        Root layout: fonts, <ThemeProvider>, metadata
  globals.css       Tailwind v4 entry + theme tokens (the whole design system)
  page.tsx          Homepage composition
components/
  ui/               shadcn/ui primitives (new-york). Regenerate via shadcn CLI.
  site/             Page sections + chrome (SiteNav, SiteFooter, ThemeToggle, …)
  illustrations/    Reusable brand SVGs (hero pipeline, node/connector icons)
  theme-provider.tsx  Thin client wrapper around next-themes
data/
  site.ts           Brand strings, primary nav, footer nav
  homepage.ts       Hero imagery, participation cards, curated noticeboard, member quotes
lib/utils.ts        cn() helper
tests/e2e/          Playwright specs (Desktop Chrome + Pixel 5)
docs/               This folder — brief, architecture, the validated mockup
```

## Theme system (dark/light)

The prototype (`det-homepage-draft.html`) had a light-theme bug: only `<body>`
was painted, so overscroll gutters and the browser chrome stayed dark. Fixed
properly here:

- **Tokens, not `dark:` utilities.** `app/globals.css` defines one set of CSS
  custom properties per theme. Dark ("espresso / phosphor terminal") sits on
  `:root` (and `.dark`) as the fallback so a pre-hydration or no-JS render
  always looks right. `.light` overrides the same properties with the
  "aged parchment" palette. Tailwind `@theme inline` maps them to
  `--color-*` so `bg-background`, `text-accent`, etc. just work.
- **`<html>` is painted, not just `<body>`**, and `color-scheme` is set per
  theme, so scrollbars and rubber-band scroll track the theme.
- **next-themes** toggles `class="light"|"dark"` on `<html>` with
  `attribute="class"`, `defaultTheme="system"`, `enableSystem`, and
  `disableTransitionOnChange`. First-time visitors get their OS colour scheme
  (dark is the fallback when the OS expresses no preference); the toggle then
  stores an explicit override that wins on later visits.
  `<html suppressHydrationWarning>` covers the class the script adds before
  React hydrates.
- **Two accent tokens** because one accent can't do both jobs across themes:
  - `--accent` — interactive fill (buttons) and accent text on dark
  - `--accent-strong` — highest-contrast accent for small text on the page bg
    (on light it goes *darker* than `--accent`, not lighter)
  - `--accent-2` — warm secondary line colour for illustrations
- `ThemeToggle` keeps both icons in the DOM and picks the visible one with the
  `light:` variant, so server and client markup match (no hydration flicker).
  Playwright tests cover: OS scheme is followed on first visit, the toggle
  overrides and persists, and `<html>` computes to a light colour in light mode.

## Homepage build status

`app/page.tsx` composes the hero, community noticeboard, participation cards,
member testimonials, and closing invitation. Homepage links lead to the existing
public DET services. Secondary local routes remain explicitly marked draft stubs.

| Section | Component | Data |
| --- | --- | --- |
| Navigation + theme toggle | `site/site-nav.tsx`, `site/theme-toggle.tsx` | `data/site.ts` |
| Hero + community photographs | `site/hero.tsx` | `data/homepage.ts` |
| Curated community noticeboard | `site/community-pulse.tsx` | `data/homepage.ts` |
| Six ways to participate | `site/pillars.tsx` | `data/homepage.ts` |
| Named member stories + portraits | `site/testimonials.tsx` | `data/homepage.ts` |
| Closing invitation | `site/cta-banner.tsx` | `data/homepage.ts` |
| Footer | `site/site-footer.tsx` | `data/site.ts` |

Content and asset provenance, refresh guidance, and remaining editorial gaps live
in `community-content.md`. The homepage has no invented activity or statistics.
Photo assets in `public/community/` are served with Next.js Image sizing and
optimization. The main hero photograph is preloaded; other images load lazily.
The original pipeline SVG remains available for future technical illustrations.
The participation color tokens add a yellow editorial panel in both themes.
