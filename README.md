# PicFast Site

Official website and documentation for [PicFast](https://github.com/atbeta/picfast) — open source, self-hosted image hosting.

## Tech

Built with [Astro](https://astro.build) (static output), TypeScript, and vanilla CSS with dark mode support.

## Develop

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production build
pnpm preview  # preview production build
```

## Structure

```
src/
├── layouts/         # BaseLayout (site shell) + DocsLayout (docs)
├── components/      # HomePage (shared bilingual homepage) + Icon (typed SVG set)
├── data/            # home.ts — localized homepage copy (EN/ZH, same shape)
├── pages/
│   ├── index.astro           # Homepage (EN) — thin wrapper → HomePage
│   ├── zh/index.astro        # Homepage (ZH)
│   └── docs/                # EN docs
│   └── zh/docs/             # ZH docs
└── styles/                   # home.css (homepage styles)
public/
└── images/                   # Product screenshots from the PicFast web console (EN/ZH)
```

Homepage copy lives in `src/data/home.ts`; keep EN/ZH in sync — never update only one locale.

## Deploy

Cloudflare Workers (static assets) via `wrangler.jsonc` — build output in `dist/` is published as assets-only, no Worker script. Vercel, Netlify, or any static host also work.

```bash
pnpm build
```

Output goes to `dist/`.
