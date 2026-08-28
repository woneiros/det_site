# Data Engineer Things — website

Community site for [Data Engineer Things (DET)](https://www.dataengineerthings.org/) —
a global community *by* data engineers, *for* data engineers. A from-scratch
rebuild reframing the site from event promotion to community "home base".

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes ·
pnpm · Playwright · Vercel

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

## Checks

```bash
pnpm lint
pnpm build
pnpm test           # Playwright (Desktop Chrome + Pixel 5); needs `pnpm exec playwright install chromium` once
```

CI runs all three on every PR to `main`.

## Where things live

- **Content** → `data/*.ts` / `*.json` (not inline in components)
- **Design system / theme tokens** → `app/globals.css`
- **Page sections** → `components/site/`
- **Brand SVGs** → `components/illustrations/`
- **Full context** → `docs/redesign-brief.md`, `docs/architecture.md`
- **Contributor guide (incl. for coding agents)** → `AGENTS.md`

> **Status:** scaffold + theme system in place; `app/page.tsx` is a placeholder.
> Full homepage build matches `docs/det-homepage-draft.html`.
