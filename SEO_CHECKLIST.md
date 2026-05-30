# SEO Checklist: ankesefotos

A comprehensive guide to optimizing the ankesefotos website for search engines.

## 1. On-Page SEO (Content & Meta)
- [ ] **Unique Page Titles:** Every page must have a unique `<title>` tag including keywords (e.g., "Wedding Photographer Pretoria | ankesefotos").
- [ ] **Meta Descriptions:** Compelling 150-160 character summaries for every page to improve click-through rates.
- [ ] **Semantic HTML:** Ensure `<h1>` is used for the main title of each page, `<h2>` for sub-sections, etc.
- [ ] **Alt Text for Images:** Crucial for photographers. Every image needs a descriptive `alt` attribute (e.g., `alt="Bride and groom sunset portrait at Oakfield Farm wedding venue"`).
- [ ] **Keyword Integration:** Naturally weave keywords into the copy during the text update session (e.g., "wedding photography," "engagement shoots," "Pretoria," "South Africa").

## 2. Technical SEO (Performance & Structure)
- [x] **Sitemap.xml:** Generate a sitemap so Google can find all portfolio shoots.
- [x] **Robots.txt:** Guide search engine crawlers.
- [ ] **Image Optimization:** We are already using Astro's `<Image />` component; ensure `format="webp"` or `avif` is used throughout.
- [ ] **Mobile-Friendliness:** (Already a priority) Ensure the mobile experience is flawless, as Google uses mobile-first indexing.
- [ ] **Schema Markup (JSON-LD):** Add "LocalBusiness" and "ImageGallery" schema to tell Google exactly what the site is about.

## 3. Local SEO (The "Secret Sauce")
- [ ] **Google Business Profile:** (Action for Anke) Create/Optimize a Google Business Profile linked to the site.
- [ ] **NAP Consistency:** Ensure Name, Address, and Phone number are consistent across the site and the web.
- [ ] **Location Landing Pages:** Use individual portfolio shoots to mention venues and locations specifically.

## 4. Content Strategy
- [ ] **Blog/Stories:** Regularly add new portfolio shoots via the Content Collection system.
- [ ] **Venue Guides:** (Potential future feature) Create a page for "Top Wedding Venues in Pretoria" featuring Anke's photos.

## 5. Social & Backlinks
## 6. Strategic Implementation (In Progress)
- [ ] **Dynamic Meta Tags:** Automate `<title>` and `<meta description>` for every portfolio shoot.
    - Format: `{title} | {Category} in {location} | ankesefotos`
    - Description: Auto-extract first 150 chars from the photographer's narrative.
- [ ] **High-Value Keyword Injection:**
    - **Alt Text:** Don't just describe the photo; include locations and venue names (e.g., "Bride and Groom at Oakfield Farm, Pretoria").
    - **Headings:** Ensure the location is mentioned in `<h1>` or `<h2>` tags where natural.
- [ ] **Automated Schema.org Injection:** Generate JSON-LD `ImageGallery` and `PhotographyBusiness` schema for every shoot page to capture "Rich Results" in Google.
- [ ] **'More Stories' Internal Linking:** Add a "Discover more stories" section at the bottom of each shoot page to increase session duration and internal crawlability.
- [ ] **Social Preview Optimization:** Automate Open Graph (OG) tags using the shoot's cover image and description for high-impact sharing on Instagram and Facebook.

## 7. Grilling Notes & Decisions
- [x] **Required Alt Text:** Schema updated to enforce alt text for every portfolio image.
- [x] **Data Structure:** Content Layer (v5) implemented for better performance and SEO scalability.
