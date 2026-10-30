# Changelog — JABIR MAHMUD KAWSAR Portfolio

All notable changes to this project are documented here.
Format: [YYYY-MM-DD] — Type — Description

---

## [2026-10-31] — Audit & Modular Reorganisation

### ADDED

| File | Reason |
|---|---|
| `src/config/siteConfig.ts` | Centralised configuration — single source of truth for designer info, URLs, navigation, and categories. Eliminates hard-coded strings scattered across components. |
| `src/utils/security.ts` | Security sanitisation utilities: `sanitizeHeaderInput`, `sanitizeMessageBody`, `isSafeUrl`, `generateSafeMailto`. Prevents email header injection on the contact form. |
| `src/components/common/CustomCursor.tsx` | Moved from `src/components/CustomCursor.tsx` to organised subdirectory. |
| `src/components/common/MagneticButton.tsx` | Moved from `src/components/MagneticButton.tsx`. |
| `src/components/common/ImageUploadNotice.tsx` | Moved from `src/components/ImageUploadNotice.tsx`. |
| `src/components/layout/Navbar.tsx` | Moved from `src/components/Navbar.tsx`. |
| `src/components/layout/Footer.tsx` | Moved from `src/components/Footer.tsx`. |
| `src/components/portfolio/ProjectCard.tsx` | Moved from `src/components/ProjectCard.tsx`. |
| `src/components/portfolio/ProjectModal.tsx` | Moved from `src/components/ProjectModal.tsx`. |
| `src/components/portfolio/ProjectArtworkFallback.tsx` | Moved from `src/components/ProjectArtworkFallback.tsx`. |
| `src/components/animations/FloatingCreativeObject.tsx` | Moved from `src/components/FloatingCreativeObject.tsx`. |
| `src/sections/Hero/Hero.tsx` | Moved from `src/components/Hero.tsx`. |
| `src/sections/About/About.tsx` | Moved from `src/components/About.tsx`. |
| `src/sections/Projects/SelectedWork.tsx` | Moved from `src/components/SelectedWork.tsx`; updated imports to use `../../config/siteConfig`. |
| `src/sections/Skills/SkillsAndProcess.tsx` | Moved from `src/components/SkillsAndProcess.tsx`; fixed missing `React` import. |
| `src/sections/Contact/Contact.tsx` | Moved from `src/components/Contact.tsx`; integrated `generateSafeMailto` from security utils; inline sanitisation on all input fields; replaced raw `generateMailtoLink` with hardened version. |
| `public/_headers` | Security response headers for Netlify/Cloudflare Pages deployments. |
| `public/images/profile/` | Placeholder directory for portrait photos. |
| `public/images/projects/` | Placeholder directory for project thumbnails. |
| `public/images/branding/` | Placeholder directory for OG image and monogram. |
| `docs/PROJECT_STRUCTURE.md` | Complete documented file tree. |
| `docs/SECURITY_AUDIT.md` | Security findings and remediation record. |
| `docs/CHANGELOG.md` | This file. |
| `docs/TEST_REPORT.md` | Test execution results. |
| `docs/DEPLOYMENT_GUIDE.md` | Step-by-step deployment instructions. |
| `.env.example` | Safe environment variable reference (no secrets). |

---

### CHANGED

| File | Change |
|---|---|
| `src/App.tsx` | Updated all imports to point to new `src/sections/*` and `src/components/*/` paths. Removed stale flat-directory imports. Grouped by concern with comments. |
| `index.html` | Added: security meta headers (CSP, Referrer-Policy, X-Content-Type-Options, Permissions-Policy), complete Open Graph + Twitter Card tags, `<link rel="canonical">`, Schema.org JSON-LD `ProfilePage` structured data, `prefers-reduced-motion` CSS, `<link rel="apple-touch-icon">`, `<link rel="manifest">`. Preserved: Google Fonts loading, viewport, theme-color, original title and description. |

---

### PRESERVED (unchanged by design)

- All 7 Behance project entries in `src/data/behanceProjects.ts`
- All portfolio project URLs (`behance.net/jabirmahmudk` deep links)
- Original Tailwind design token palette (ivory, ink, cobalt, magenta, cyanAccent, burgundy)
- All Framer Motion animation configurations
- Hero cinematic entrance sequence
- Portrait parallax and floating motion
- Custom cursor implementation
- Magnetic button effect
- Project modal with image lightbox
- Category filter with animated pill
- Contact form mailto launcher
- Responsive Navbar with mobile menu
- Footer link to Behance

---

### REMOVED (obsolete duplicate flat-directory files)

> These files still exist in `src/components/` as the old flat copies.
> They are safe to remove once you confirm the new section paths work correctly.
> Run `npm run build` first to verify. Then delete:

```
src/components/Hero.tsx          → replaced by src/sections/Hero/Hero.tsx
src/components/About.tsx         → replaced by src/sections/About/About.tsx
src/components/SelectedWork.tsx  → replaced by src/sections/Projects/SelectedWork.tsx
src/components/SkillsAndProcess.tsx → replaced by src/sections/Skills/SkillsAndProcess.tsx
src/components/Contact.tsx       → replaced by src/sections/Contact/Contact.tsx
src/components/Navbar.tsx        → replaced by src/components/layout/Navbar.tsx
src/components/Footer.tsx        → replaced by src/components/layout/Footer.tsx
src/components/CustomCursor.tsx  → replaced by src/components/common/CustomCursor.tsx
src/components/MagneticButton.tsx → replaced by src/components/common/MagneticButton.tsx
src/components/ImageUploadNotice.tsx → replaced by src/components/common/ImageUploadNotice.tsx
src/components/ProjectCard.tsx   → replaced by src/components/portfolio/ProjectCard.tsx
src/components/ProjectModal.tsx  → replaced by src/components/portfolio/ProjectModal.tsx
src/components/ProjectArtworkFallback.tsx → replaced by src/components/portfolio/ProjectArtworkFallback.tsx
src/components/FloatingCreativeObject.tsx → replaced by src/components/animations/FloatingCreativeObject.tsx
```

> **Do not delete until `npm run build` succeeds without errors (already confirmed ✅).**
