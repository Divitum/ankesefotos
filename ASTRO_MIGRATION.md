# Astro Migration Plan: ankesefotos

This document outlines the step-by-step plan to migrate the current static HTML project to **Astro**. This move will improve SEO, enable reusable components, and provide superior image optimization for photography.

---

## Phase 1: Environment & Project Setup [DONE]
1.  **Initialize Astro:** Run the Astro installation wizard in the current directory. [DONE]
2.  **Clean Up Structure:** Move existing assets (`/assets`, `/css`, `/js`) into the Astro-specific folders: [DONE]
    -   Images to `/src/assets/` (for Astro's image optimization). [DONE]
    -   Styles to `/src/styles/`. [DONE]
    -   Scripts to `/src/scripts/`. [DONE]
3.  **Configure Tailwind (Optional) / CSS:** Ensure the existing `style.css` and Bootstrap are correctly linked. [DONE]

## Phase 2: Core Components Extraction [DONE]
1.  **Create Layout:** Create a `MainLayout.astro` file in `/src/layouts/`. This will contain the `<head>` and global structure. [DONE]
2.  **Extract Navbar:** Create `Navbar.astro` in `/src/components/`. [DONE]
3.  **Extract Footer:** Create `Footer.astro` in `/src/components/`. [DONE]
4.  **Integrate Components:** Place `Navbar` and `Footer` inside `MainLayout.astro` so they wrap every page automatically. [DONE]

## Phase 3: Page Conversion [DONE]
1.  **Homepage (`index.html` -> `src/pages/index.astro`):** [DONE]
    -   Move the content of `<main>` into the new Astro page. [DONE]
    -   Replace standard `<img>` tags with Astro's `<Image />` component for automatic optimization. [DONE]
2.  **Contact Page (`contact.html` -> `src/pages/contact.astro`):** [DONE]
    -   Convert the scaffolded contact page to an Astro file. [DONE]
3.  **Dynamic Routing (Future):** Set up a system for the "Gallery" pages using Astro's collections if needed. [DEFERRED - No gallery content yet]

## Phase 4: Verification & Optimization
1.  **Link Checking:** Ensure all internal links (`/`, `/contact`) work correctly without the `.html` extension.
2.  **Performance Check:** Audit the site using Lighthouse to verify the improvement in "Largest Contentful Paint" (LCP) thanks to Astro's image handling.
3.  **Build & Deploy:** Configure GitHub Actions to build the Astro site and deploy it to GitHub Pages.

---

## How to proceed
Tell me **"Run Phase 4"** when you are ready to finalize the migration and verify performance.
