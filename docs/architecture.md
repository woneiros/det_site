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
  homepage.ts       Hero stats, "ways to plug in" cards, pulse feed, quotes
lib/utils.ts        cn() helper
tests/e2e/          Playwright specs (Desktop Chrome + Pixel 5)
docs/               This folder — brief, architecture, the validated mockup
```

## Theme system (dark/light)

The prototype (`det-homepage-draft.html`) had a light-theme bug: only `<body>`
was painted, so overscroll gutters and the browser chrome stayed dark. Fixed
properly here:

- **Tokens, not `dark:` utilities.** `app/globals.css` defines one set of CSS
  custom properties per theme. Dark ("espresso / phosphor terminal") is the
  brand default and sits on `:root` (and `.dark`) so a pre-hydration or no-JS
  render already looks right. `.light` overrides the same properties with the
  "aged parchment" palette. Tailwind `@theme inline` maps them to
  `--color-*` so `bg-background`, `text-accent`, etc. just work.
- **`<html>` is painted, not just `<body>`**, and `color-scheme` is set per
  theme, so scrollbars and rubber-band scroll track the theme.
- **next-themes** toggles `class="light"|"dark"` on `<html>` with
  `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}` (matches
  the validated mockup: dark by default, manual toggle), and
  `disableTransitionOnChange`. `<html suppressHydrationWarning>` covers the
  class the script adds before React hydrates.
- **Two accent tokens** because one accent can't do both jobs across themes:
  - `--accent` — interactive fill (buttons) and accent text on dark
  - `--accent-strong` — highest-contrast accent for small text on the page bg
    (on light it goes *darker* than `--accent`, not lighter)
  - `--accent-2` — warm secondary line colour for illustrations
- `ThemeToggle` renders a stable icon until mounted to avoid hydration
  mismatch. There is a Playwright test asserting the toggle works and that
  `<html>` is painted a light colour in light mode.

## Homepage build status

`app/page.tsx` is currently a **scaffold placeholder**. The full homepage
mirrors `docs/det-homepage-draft.html`:

| Section | Component | Data |
| --- | --- | --- |
| Sticky nav + theme toggle | `site/site-nav.tsx` | `data/site.ts` |
| Hero + animated pipeline SVG | `site/hero.tsx`, `illustrations/pipeline.tsx` | `data/homepage.ts` |
| "Plug in wherever you are" — 6 cards | `site/pillars.tsx` + `illustrations/node-icons.tsx` | `data/homepage.ts` |
| Community pulse (log-line feed) | `site/community-pulse.tsx` | `data/homepage.ts` |
| Testimonials (terminal/chat style) | `site/testimonials.tsx` | `data/homepage.ts` |
| CTA banner | `site/cta-banner.tsx` | `data/site.ts` |
| Footer | `site/site-footer.tsx` | `data/site.ts` |

Secondary pages (Blog, Mentorship, Resource Hub, …) are a later phase.
