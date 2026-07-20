# wghong02.github.io

Personal website for Wanchen Hong, built with [Next.js](https://nextjs.org/) (App Router) and [Tailwind CSS](https://tailwindcss.com/), statically exported and hosted on GitHub Pages.

**Live site:** https://wghong02.github.io

## Structure

Pages live under `src/app/` (App Router). Each route is a folder with a `page.tsx` and an optional `layout.tsx` for metadata.

| Route | Description |
| --- | --- |
| `/` | Home |
| `/about` | About me |
| `/experience` | Experience |
| `/projects` | Projects |
| `/apps/policy/serenest` | Privacy policy for the Serenest iOS app |

Shared UI (e.g. the header) lives in `src/components/`, and global styles in `src/styles/`.

### App privacy policies

Privacy policies for published apps are hosted here under `/apps/policy/<app>`. These URLs are referenced from the apps' App Store Connect listings, so the routes must stay live:

- **Serenest** — https://wghong02.github.io/apps/policy/serenest

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Build

```bash
npm run build
```

`next.config.mjs` sets `output: "export"`, so the build produces a fully static site in `out/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/nextjs.yml`, which builds the site and deploys `out/` to GitHub Pages automatically. No manual deploy step is needed.
