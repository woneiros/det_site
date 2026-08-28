# Data Engineer Things — Website Refresh Brief

Handoff doc for the Claude Code build phase. Written after a requirements-gathering
pass + a static HTML mockup used to validate visual direction with Will and Xinran.

## 1. Goal

Full refresh of https://www.dataengineerthings.org/, shifting it from an
event-promotion site to a community-belonging site. No CMS — all content lives in
code/data files that any contributor (or agent) can edit directly.

## 2. References

- **Current live site:** https://www.dataengineerthings.org/ (Jekyll/Beautiful
  Jekyll theme). Current nav: Newsletter, Meetups/Webinars, Gallery, CFP, Resource
  Hub, Mentorship, Blog (Medium), Tech Talks, Code of Conduct, Team, Slack.
- **Community structure model:** https://mlops.community/ — mission-first framing,
  card-based hub for Events/Podcast/Newsletter/Workshops, ongoing "home base" feel
  rather than a single big event.
- **Visual confidence reference:** https://touchstoneclimbing.com/ — bold identity,
  belonging-first messaging, illustration use.
- **Reference codebase (do not modify):** `de_open_forum_site`
  (https://github.com/woneiros/de_open_forum_site) — Next.js (App Router) + TypeScript
  - Tailwind + shadcn/ui, pnpm, Playwright e2e, deployed on Vercel. Content mostly
    lives in `data/` files rather than hardcoded in components. **Important:** this is
    a separate site (DEOF, the conference) that Will owns and can access. DET (the
    community site) has no existing accessible repo — this is a brand-new repo,
    mirroring DEOF's tooling and conventions where it makes sense, not a fork or a
    clone of its content.
- **Visual direction mockup (this session's output):** `det-homepage-draft.html`,
  a static single-file HTML prototype. **This is the primary visual spec** — match
  its layout, type system, color tokens, illustration style, and component patterns
  as closely as the Next.js/Tailwind/shadcn stack allows. Treat deviations as
  intentional decisions to flag, not silent drift.

## 3. Repo setup

- **New repo, new remote.** DET has no existing repo to work in. Create a fresh
  Next.js project and push it as a new GitHub repo under `woneiros`. Suggested
  name: `det_site` (matches `de_open_forum_site`'s naming convention) — rename if
  a better one comes to mind.
- **Mirror DEOF's tooling, not its content.** Match `de_open_forum_site`'s stack
  and conventions (Next.js App Router, TypeScript, Tailwind, shadcn/ui, pnpm,
  Playwright, CI setup, `data/`-file content pattern) by scaffolding fresh and
  porting over config/conventions deliberately — not by cloning DEOF and
  find-replacing.
- **Visibility:** default to a public repo (matches DEOF and fits a community
  project); flag it if there's a reason to start private.
- Push to GitHub as part of this session (`gh repo create woneiros/det_site
--public --source=. --push` or equivalent) so Will and Xinran can both see
  progress and Vercel can be wired up later.

## 4. Confirmed decisions

- **Scope of "full refresh":** re-skin + re-architect around community rather than
  events; sitemap stays close to the current IA, with freedom to change hierarchy
  (e.g. promoting a "community pulse" activity feed to the homepage).
- **Tech stack:** keep Next.js + TypeScript + Tailwind + shadcn/ui + pnpm + Vercel
  from `de_open_forum_site`. Not switching to plain static HTML for the real build
  (the HTML mockup was only a fast prototyping step).
- **"Agent-first, cross-agent"** means the _repo_ should be easy for multiple coding
  agents (Claude Code, Codex, etc.) to contribute to safely — not that the site
  targets AI agents as an audience. Concretely:
  - `AGENTS.md` at repo root describing architecture, conventions, and where content
    lives.
  - `docs/` folder with this brief and any architecture notes.
  - Content kept in structured data files (not scattered inline in components) so
    an agent can find and edit it without spelunking.
  - CI checks (lint, build, Playwright) so agent-authored PRs get fast feedback.
- **Content/assets:** use placeholder copy and placeholder stats for this first
  pass; real content and photography come later. Don't block on assets.
- **Timeline:** targeting a full launch end of August / early September. This
  build is the first-draft milestone to share with Xinran for feedback.

## 5. Visual direction (from the validated mockup)

**Concept:** evolve the prior site's terminal/monospace identity, but warm it up,
and counterbalance the technical feel with a hand-drawn illustration motif — rather
than defaulting to generic "warm SaaS" (cream background + serif + terracotta) or
"cold hacker" (pure black + green) cliches.

- **Color system (CSS variables / Tailwind tokens):**
  - Dark theme (default): warm espresso background (not pure black), amber
    "phosphor terminal" accent (not green), warm off-white text, warm brown-tinted
    borders.
  - Light theme: warm aged-parchment background (not the generic AI-cluster cream),
    deep espresso text, accent deepens to a burnt rust/amber for contrast on light
    backgrounds — buttons and text-accent uses need separate contrast handling per
    theme (see Known Issues below).
  - Exact hex values are in the mockup's `:root` / `[data-theme="light"]` CSS
    blocks — port these into Tailwind theme tokens rather than re-deriving them.
- **Typography:** three-typeface system —
  - IBM Plex Mono for eyebrows/labels/stats (carries the terminal DNA)
  - Fraunces (serif) for display headlines (adds warmth/personality)
  - IBM Plex Sans for body copy
- **Signature illustration element:** a hand-drawn-style SVG "pipeline" — nodes
  (circles) connected by curved lines, with small animated packets flowing along
  the paths. Used in the hero. This is the visual bridge between "technical" and
  "warm/illustrated."
- **Icon system:** custom node-and-connector line-art icons (not a stock icon
  library) reusing the hero's visual language — e.g. mentorship is two nodes joined
  by a guiding line with an arrow, resource hub is a hub-and-spoke, Slack is
  overlapping scribbled speech shapes. These were well-received; refine further if
  needed but keep this direction, not literal object icons.
- **Component patterns in the mockup:** sticky nav with theme toggle, hero with
  stat line styled as a terminal command, a 6-card "ways to plug in" grid, a
  "community pulse" activity feed (log-line style), testimonial cards styled like
  terminal/chat output, and a CTA banner.

## 6. Known issues to fix properly (don't just port the patch)

The static mockup had a **light theme background bug**: background was set on
`<body>` but not `<html>`, so gutters/overscroll areas stayed dark. This was
patched, but Will is still seeing some light-theme inconsistencies in the static
file. **Don't port the CSS patch as-is** — in the Next.js/Tailwind rebuild, set up
dark/light theme tokens properly from the start (e.g. via Tailwind's `dark:`
variant or CSS variables scoped correctly on `:root`/`html`), and test the toggle
thoroughly, including on mobile viewports, before calling it done.

## 7. What this build session should deliver

1. Review `de_open_forum_site`'s structure and content/data-file conventions
   (read-only reference) before scaffolding anything.
2. Scaffold a **new** Next.js project for DET mirroring that stack and structure,
   init git, create the `woneiros/det_site` GitHub repo, and push.
3. Rebuild the **homepage** first, matching the mockup's direction, within a
   component architecture that mirrors DEOF's conventions.
4. Set up the dark/light theme system correctly (see Known Issues).
5. Build the icon and hero-illustration approach as reusable components, not
   one-off inline SVGs, since they'll be reused across other pages later.
6. Add `AGENTS.md` and a `docs/` folder (this brief can live there) as part of the
   agent-first setup.
7. Leave placeholder copy/stats/testimonials clearly marked as placeholders.
8. Stop at a homepage that's ready to deploy to a preview URL for Xinran to react
   to — full sitemap buildout (Blog, Mentorship, Resource Hub, etc. as full pages)
   is a follow-up phase, not part of this pass.

## 8. Open items for later phases

- Full IA/sitemap decisions for secondary pages.
- Real copy, stats, photography, testimonials.
- Whether the "community pulse" feed is hand-authored or pulled from real sources
  (Slack, blog RSS, meetup platform) — currently just a static placeholder feed in
  the mockup.
