# ankesefotos

## Project Overview
**ankesefotos** is the brand for photographer **Anke Briel**. This project is a simple, elegant wedding photography website designed to showcase her portfolio and services.

## Services
- Wedding photography
- Couples & Engagements
- Family shoots
- Events

## Tech Stack
- **Frontend:** Astro, TypeScript
- **Framework:** Bootstrap 5 (locally hosted in `src/styles` and `src/scripts`)
- **Styling:** Vanilla CSS, Google Fonts (Spectral, Tangerine)

## Project Standards & Conventions
- **Mobile-First:** ALWAYS prioritize mobile-first development. Ensure all layouts are fully responsive and look excellent on small screens before scaling up to desktop.
- **Visual Style:** Clean, professional, and photography-focused. Use Bootstrap's grid and components for responsiveness.
- **Organization (Astro):** 
  - **Layouts:** `src/layouts/` for high-level page shells (e.g., `MainLayout.astro`).
  - **Components:** `src/components/` for reusable UI elements (e.g., `Navbar.astro`, `Footer.astro`).
  - **Pages:** `src/pages/` for routing and page-specific content.
  - **Assets:** `src/assets/` for local images (processed via Astro's `<Image />` component).
  - **Styles:** `src/styles/` for global and component-specific CSS.
  - **Scripts:** `src/scripts/` for external JavaScript.
- **Naming:** Follow standard HTML/CSS naming conventions (kebab-case for classes) and PascalCase for Astro components.
- **Responsiveness:** Leverage bootstrap to make everything look good on desktop AND mobile.

## Shared Language
To ensure we are always on the same page, we use the following definitions:
- **MainLayout:** The primary layout shell containing the `<Navbar />`, `<slot />`, and `<Footer />`.
- **Navbar's title:** Refers to the "ankesefotos" text in the center of the navbar.
- **Navbar's links:** Refers to the five navigation links (home, Portfolio, FAQ, About me, Contact) located on either side of the navbar's title.
- **Instagram:** https://www.instagram.com/anke.se.fotos/
- **Email:** anckevdschyff12@gmail.com

# Project Progress (May 2026)
The site has been migrated to **Astro**. The following sections have been implemented on the Homepage:
1. **MainLayout:** Centralized layout with dynamic titles and global styles.
2. **Hero Section:** Full-viewport height with `cover1.jpg`, transparent absolute navbar.
3. **Navbar:** Centered "ankesefotos" in MADE Mirage (lowercase), uppercase Spectral links.
4. **About Section:** Split 50/50 with `kiss-bw.jpg` and introduction text.
5. **Testimonials:** 65vh height, 30/70 split (text/image) with a functional Bootstrap carousel.
6. **Verse Section:** 60vh height, centered Bible verse (Colossians 3:17) in Tangerine (medieval cursive).
7. **Services Section:** "my work" title, 4 portrait columns with hover effects linking to future portfolio pages.
8. **Contact Section:** 75vh height, background `kneeling-bw.jpg`, bottom-aligned CTA.
9. **Footer:** Social icons (Instagram/Email), navigation links, and copyright info.
10. **Contact Page:** Fully functional inquiry form with client-side validation, integrated with `MainLayout`. Features custom-styled floating labels (bottom-border only), automatic scrolling to validation errors, and a simulation of email submission.
11. **Portfolio Page:** Grid layout showcasing various shoots (portfolio). Uses `col-md-3` for 4 items per row on desktop and `col-6` for mobile. Implements hover scale effects and portrait aspect ratios consistent with the homepage "Services" section.
12. **About Me Page:** Split layout featuring two story sections with alternating photo alignment. Includes a stylized quote section and a "Let's tell your story!" CTA linking to the Contact page.
13. **FAQ Page:** Frequently Asked Questions list with minimalist divider lines, bold question titles, and a dedicated email contact footer.

# Visual Style Guide & Constraints

## 1. Color Palette (Strict)
Apply these custom CSS variables or hex codes only:
- --color-bg: #F5EBE6 (Soft Cream - Main Background)
- --color-text-main: #2C2520 (Deep Espresso - Headings & Text)
- --color-accent: #D4A373 (Muted Gold - CTA borders, subtle lines)

## 2. Typography Rules
- **Navbar's title:** Must use the font "MADE Mirage" (or a suitable serif fallback if not available).
- **All other text:** Must use the font "Spectral" with `serif` as a backup.
- Every heading (h1, h2, h3) should feel elegant and spaced.

## 3. Component & Layout Constraints (Bootstrap 5)
- **Grid Layouts:** Use `row-cols-1 row-cols-md-3 g-4` for portfolio grids to keep cards uniform.
- **Card Styling:** Always use `.border-0` and `.rounded-0` on cards. No default Bootstrap borders or heavy shadows are allowed.
- **Spacing:** Maintain deep vertical whitespace. Use `py-5` or `my-5` on all major container sections. Never use `py-2` or `py-3` for top-level layout sections.