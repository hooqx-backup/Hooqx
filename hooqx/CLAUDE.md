# Hooqx – Project Guide

## Overview

Hooqx is a digital agency website offering Web & App Development, UI/UX Design, and Digital Marketing services. It is a React + Vite single-page application with a dark purple-accented theme and heavy use of Framer Motion animations.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (JSX only, no TypeScript) |
| Build Tool | Vite 8 with `@vitejs/plugin-react` (Oxc parser) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| 3D Graphics | Three.js (Footer Earth canvas) |
| Styling | Scoped CSS files + global `index.css` custom properties |
| Linting | ESLint 9 flat config |

## Project Structure

```
src/
  components/
    Navbar/         # Global nav with dropdown menus and mobile hamburger
    Footer/         # Footer with 3D Earth canvas, newsletter, and contact info
  pages/
    Home/
      sections/     # Hero, ServicesStrip, VideoSection, About, Services,
                    # WhyUs, Workflow, Portfolio, Testimonials, Blog, Newsletter
    About/
    Development/
    Design/
    Marketing/
    Contact/
  lib/
    motion.js       # Shared Framer Motion animation variant presets
  assets/
    images/
    videos/
    logos/
  App.jsx           # Root layout: Navbar + HomePage + Footer
  main.jsx          # React entry point
  index.css         # Global dark theme CSS variables
```

## Commands

```bash
npm run dev       # Start Vite dev server (HMR)
npm run build     # Production build to /dist
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Styling Conventions

- **Dark theme** — background and surface colors defined as CSS variables in `index.css` (e.g. `--bg-base`, `--bg-surface`).
- **Accent color** — `#7c3aed` (purple). Use the `--accent` variable, do not hardcode the hex elsewhere.
- Each component has its own co-located `.css` file; avoid adding global rules unless they truly belong in `index.css`.

## Animation Conventions

Shared animation variants live in [src/lib/motion.js](src/lib/motion.js). Prefer importing from there over defining inline variants. Available presets: `fadeIn`, `slideIn`, `zoomIn`, `flipIn`, `blurIn`.

Wrap animated sections with `<motion.div>` and use `whileInView` + `viewport={{ once: true }}` for scroll-triggered reveals.

## Key Design Decisions

- **No TypeScript** — the project uses plain JavaScript/JSX.
- **No Tailwind** — all styling is via CSS files and custom properties.
- **Single-page layout** — `App.jsx` renders `<HomePage />` directly; routing to other pages (About, Development, Design, Marketing, Contact) is managed via React Router (add if not yet installed).
- **Three.js Earth** is scoped entirely to the Footer component; keep it there.

## Session Log — 2026-04-18

### What We Worked On
- Bootstrapped the entire project from scratch (commit `68b43cd` → `666f852`).
- Built the full component and page scaffold across three commits.
- Completed the **HomePage** with all 11 sections wired up in [src/pages/Home/HomePage.jsx](src/pages/Home/HomePage.jsx).
- Built all global components: **Navbar** (dropdown menus, mobile hamburger) and **Footer** (3D Earth canvas, newsletter, contact info).
- Created the shared animation library at [src/lib/motion.js](src/lib/motion.js).
- Added all assets (hero images ×3, service thumbnails, WhyUs image, brand logos, promo video).

### Completed Sections (HomePage)
| Section | File | Status |
|---|---|---|
| Hero | `sections/Hero/` | Done — 3-slide auto-rotating carousel with CTA |
| ServicesStrip | `sections/ServicesStrip/` | Done |
| VideoSection | `sections/VideoSection/` | Done — embeds `hooqxvideo.webm` |
| About | `sections/About/` | Done |
| Services | `sections/Services/` | Done — most complex section (285 lines) |
| WhyUs | `sections/WhyUs/` | Done |
| Workflow | `sections/Workflow/` | Done |
| Portfolio | `sections/Portfolio/` | Done |
| Testimonials | `sections/Testimonials/` | Done |
| Blog | `sections/Blog/` | Done |
| Newsletter | `sections/Newsletter/` | Done — email validation included |

### Pending / Next Steps
1. **Inner pages** — About, Development, Design, Marketing, and Contact pages are all stubs (`"Coming soon."`). Each needs full content and layout.
2. **React Router** — `App.jsx` currently renders only `<HomePage />` with no routing. Install `react-router-dom` and wire up routes for all inner pages.
3. **Navbar links** — Navbar dropdown links need to point to the real routes once routing is in place.
4. **Portfolio content** — Portfolio section exists but likely needs real project data/images.
5. **Testimonials content** — Needs real client testimonials.
6. **Blog content** — Needs real or placeholder articles.
7. **Contact page** — Needs a functional contact form (consider a form service or API route).
8. **SEO / meta tags** — `index.html` still has the default Vite title; add proper `<title>`, description, and OG tags.

### Important Decisions Made
- No TypeScript; plain JSX throughout.
- No Tailwind; all styles via scoped `.css` files + CSS custom properties in `index.css`.
- Three.js Earth stays scoped to Footer — do not move or duplicate it.
- All Framer Motion variants must be defined in or imported from `src/lib/motion.js`; no inline variant objects.
- Accent color is `--accent: #7c3aed`; never hardcode the hex in component CSS.

### Errors Fixed
- None recorded for this session (clean initial build).

---

## Contacts / Business Info (do not change without confirmation)

- Offices: USA, UAE, India
- Email: `hello@hooqx.com`
- Social: Facebook, Twitter, Instagram
