# AGENTS.md

Working conventions for the PicFast official site repo.

## Project overview

- Static marketing + docs site for [PicFast](https://github.com/atbeta/picfast) (open source self-hosted image hosting, GPL v3).
- Stack: **Astro 4** (`output: 'static'`), TypeScript, **vanilla CSS** (design tokens in `BaseLayout.astro`), **pnpm**. No UI framework, no test/lint tooling — `pnpm build` is the only check.
- Bilingual: EN at `/`, ZH at `/zh` (+ `/zh/docs/*`). Keep copy parity between locales — never update only one language.
- The product repo (`../picfast`) is reference-only: never modify it, and never invent product capabilities not present in its README/docs.
- Homepage copy must describe verified upload, storage, deployment, and integration behavior in plain language. Do not add fictional product UI or advertising slogans.

## Commands

```bash
pnpm install
pnpm dev       # dev server
pnpm build     # static build → dist/ (run before finishing)
pnpm preview   # preview the production build
```

`pnpm-workspace.yaml` pins `ignoredBuiltDependencies` (esbuild, sharp) — do not remove; without it pnpm 11 blocks the build on a deps-status check.

## Layout & files

```
src/
├── layouts/BaseLayout.astro   # tokens, header (center nav + CTA), footer groups, theme/copy/lang scripts
├── layouts/DocsLayout.astro   # docs sidebar (grouped) + article styles
├── components/HomePage.astro  # shared homepage (locale prop)
├── components/Icon.astro      # typed SVG icon set
├── data/home.ts               # localized homepage copy (EN/ZH, same shape)
├── pages/index.astro          # thin wrapper → HomePage locale="en"
├── pages/zh/index.astro       # thin wrapper → HomePage locale="zh"
├── pages/docs/*.astro         # EN docs (DocsLayout)
├── pages/zh/docs/*.astro      # ZH docs
└── styles/home.css            # homepage styles (hero, showcase, features, comparison, quick-start)
public/images/                 # product screenshots from the PicFast web console (console-en/zh.png)
```

## Conventions

- Theme: `data-theme` on `<html>` + `prefers-color-scheme`; keep both explicit override and OS-fallback paths working; all `localStorage` access in try/catch.
- Interactive elements ≥44px target; visible `:focus-visible`; no content hidden behind JS; respect `prefers-reduced-motion`.
- Generic code-copy script wraps every `<pre>` except those inside `.hero-code` — keep it dependency-free and failure-safe. The hero terminal has its own copy button (`.hero-copy`).
- Wide/flex/grid code blocks need `min-width: 0` in the chain or they force horizontal page overflow on mobile (`.qs-step`, `.code-block-wrapper` carry it).
- Verify visual changes in a browser (desktop ~1440px and mobile ~390px, both themes) — a quick smoke pass on home EN/ZH + one docs page is expected.
- No secrets or credentials in this repo; do not hardcode production passwords, even as examples (use `change-me` style placeholders).

## Commits

- Types: `feat` / `fix` / `perf` / `refactor` / `style` / `docs` / `chore` (Conventional Commits).
- Subject: English, ≤72 chars, single intent.
- ≥4 files staged → body with 2–4 bullets covering **why** and **impact**; add **risk** when relevant.
