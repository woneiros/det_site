<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Data Engineer Things — website

Community site for Data Engineer Things (DET): a global community *by* data
engineers, *for* data engineers. This is a from-scratch rebuild of
dataengineerthings.org, reframing it from an events site to a "home base"
community site. See `docs/redesign-brief.md` for the full brief and
`docs/architecture.md` for how the code is organised.

## Stack

- **Next.js 16** (App Router, RSC) + **TypeScript** (strict)
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme`, there is
  no `tailwind.config.*`
- **shadcn/ui** (new-york style) in `components/ui/` — add with
  `pnpm dlx shadcn@latest add <name>`
- **next-themes** for the dark/light toggle
- **pnpm** package manager; **Playwright** e2e in `tests/e2e/`
- Deploys on **Vercel**

## Conventions

- **Content lives in `data/`**, not inline in components. Copy, stats, nav,
  testimonials, and the pulse feed are all `.ts`/`.json` files there. Edit
  content by editing data files.
- **Placeholder content is marked** — copy, stats, and quotes that are not real
  yet carry a visible `[placeholder]` note or a `draft v0` marker. Keep that
  convention until real content lands.
- Page-specific components live in `components/site/`; reusable brand SVGs
  (hero pipeline, node-and-connector icons) live in `components/illustrations/`.
- Path alias `@/*` maps to the repo root.
- Use the semantic colour tokens (`bg-background`, `text-foreground`,
  `text-accent`, `border-border`, …). Do **not** hardcode hex values or use
  `dark:` — the theme swaps token values, not utility classes. The one escape
  hatch is the `light:` custom variant for genuine per-theme tweaks.

## Before you push

```bash
pnpm lint && pnpm build && pnpm test
```

CI (`.github/workflows/test.yml`) runs the same on every PR to `main`.
