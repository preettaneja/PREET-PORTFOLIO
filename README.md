# Preet Taneja — Personal Portfolio

A motion-driven, single-page personal site showcasing work across AI, data science, and product engineering.

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion 12" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Deployed on Vercel" /></a>
</p>

**Live demo: [preet-portfolio-six.vercel.app](https://preet-portfolio-six.vercel.app)**

---

## Overview

A portfolio should do more than list projects — it should demonstrate the craft it claims. This site is built as a single-page, animation-first experience: a custom cursor, softly drifting gradient fields, and content that reveals itself as you scroll.

Underneath the motion it stays deliberately simple: the Next.js App Router, React Server and Client components, Tailwind CSS v4 for styling, and Framer Motion for every transition. The page is organized into distinct narrative beats — a hero, an about section, a selected-work gallery with a full project archive, and a closing contact section.

## Features

- **Custom cursor** — a pointer-tracking interaction that responds to hoverable elements.
- **Animated ambience** — drifting gradient orbs and floating particles rendered as a fixed background layer.
- **Scroll reveals & progress** — Framer Motion transitions choreograph each section into view, with a scroll-progress indicator.
- **Project gallery** — selected work presented as cards with domain and stack labels, plus a "view all" archive modal linking to project repositories.
- **Responsive by default** — a fluid layout tuned from mobile through to large desktop.
- **Cohesive palette** — a restrained dark theme with a consistent typographic scale (Geist and Geist Mono fonts).
- **Direct contact** — a social dock and contact section with links to email, LinkedIn, GitHub, and social profiles.
- **Edge deployment** — continuously deployed on Vercel.


## Tech stack

| Layer | Technology |
| :-- | :-- |
| **Framework** | Next.js 16.2.7 (App Router) |
| **UI library** | React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 with PostCSS (`@tailwindcss/postcss`) |
| **Animation** | Framer Motion 12 |
| **Fonts** | Geist & Geist Mono (`next/font/google`) |
| **Linting** | ESLint 9 with `eslint-config-next` |
| **Hosting** | Vercel |

## Getting started

### Prerequisites

- Node.js 18.18 or newer
- npm (or yarn, pnpm, bun)

### Installation

```bash
git clone https://github.com/preettaneja/PREET-PORTFOLIO.git
cd PREET-PORTFOLIO
npm install
```

### Running

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edits to `src/app/page.tsx` hot-reload instantly.

Other available scripts:

```bash
npm run build   # create an optimised production build
npm start       # serve the production build
npm run lint    # run ESLint across the project
```

## Project structure

```text
PREET-PORTFOLIO/
├── public/                  # Static assets (preet-cutout.png, SVG icons)
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout, fonts and metadata
│       ├── page.tsx         # Single-page experience: hero, about, work, contact
│       ├── globals.css      # Design tokens and Tailwind layers
│       └── favicon.ico
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment

The site is deployed on [Vercel](https://vercel.com/) and continuously deployed from the repository — pushes to the main branch trigger a new production build automatically. The live site is available at **[preet-portfolio-six.vercel.app](https://preet-portfolio-six.vercel.app)**.

To deploy your own copy, import the repository into Vercel; the framework preset and build commands are detected automatically for Next.js.

---

Built by [Preet Taneja](https://www.linkedin.com/in/preet-taneja-b01686325)
