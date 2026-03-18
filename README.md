<h1 align="center">Life Story AI Marketing</h1>

<div align="center">
  Marketing landing page for <strong>Life Story AI</strong>, built with Astro and localized in English and French.
</div>

<div align="center">

`Astro 6` `Node 22+` `Static Site` `EN / FR` `Docker Ready`

</div>

<p align="center">
  <img src="./src/assets/landing/og-cover.jpg" alt="Life Story AI landing page preview" width="860" />
</p>

<div align="center">
  <a href="https://life-story.ai">life-story.ai</a>
  |
  <a href="https://life-story.ai/fr">Version francaise</a>
</div>

## Overview

This repository contains the public-facing marketing site for Life Story AI: a bilingual landing page for an AI-assisted memoir and family story product. The site is content-driven, image-rich, and optimized for static delivery.

The codebase keeps the page structure reusable while storing most marketing copy in typed locale files, which makes it straightforward to update messaging without reshaping the UI every time.

## What Is In Here

- English and French routes with Astro i18n routing
- Reusable landing-page sections for hero, testimonials, pricing, FAQ, and galleries
- Typed content model for localized marketing copy
- Static build output served by Caddy in Docker
- Canonical, alternate-language, and social meta tags
- Built-in GTM and PostHog snippets in the base layout
- GitHub Actions workflow that builds and pushes a container image to GHCR

## Tech Stack

| Layer | Choice |
| :-- | :-- |
| Framework | Astro 6 |
| Language | TypeScript-style Astro modules |
| Styling | Project CSS in `src/styles/` |
| Hosting model | Static export |
| Container runtime | Caddy |
| CI/CD | GitHub Actions + GHCR |

## Quick Start

### Local development

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:4321`.

### Production build

```bash
npm run build
npm run preview
```

## Content Workflow

Most day-to-day edits happen in the localized content files:

- `src/content/site.en.ts` for English copy
- `src/content/site.fr.ts` for French copy
- `src/content/types.ts` for the shared content schema

The routes are intentionally thin:

- `src/pages/index.astro` renders the English page
- `src/pages/fr/index.astro` renders the French page

Shared page assembly lives in `src/components/LandingPage.astro`, and SEO, analytics, fonts, and global scripts are handled in `src/layouts/BaseLayout.astro`.

## Project Shape

```text
.
|-- src/
|   |-- assets/landing/      # landing visuals, covers, screenshots, video
|   |-- components/          # reusable section components
|   |-- content/             # typed EN/FR marketing content
|   |-- layouts/             # page shell, meta tags, analytics
|   |-- lib/                 # locale helpers
|   |-- pages/               # / and /fr routes
|   `-- styles/              # site styles
|-- public/                  # public static assets
|-- .github/workflows/       # Docker build + push pipeline
|-- Dockerfile               # Astro build -> Caddy static image
`-- docker-compose.yml       # runtime compose example
```

## Docker

Build and run locally:

```bash
docker build -t life-story-marketing .
docker run --rm -p 8080:80 life-story-marketing
```

Then open `http://localhost:8080`.

The production image is a two-stage build:

1. Build the Astro site with Node 22 Alpine
2. Copy `dist/` into a lightweight Caddy image

## Deployment Notes

- `astro.config.mjs` is configured for `https://life-story.ai`
- Output mode is `static`
- Default locale is English at `/`
- French lives at `/fr`
- Pushing to `master` triggers a GitHub Actions workflow that publishes a Docker image to `ghcr.io/tiitan/life-story-marketing`

## Scripts

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Node Version

This project expects:

```text
Node >= 22.12.0
```

## Why This README Exists

Because a landing page repo should not look like it was left on the default starter template.
