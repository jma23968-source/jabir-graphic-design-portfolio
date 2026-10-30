# JABIR MAHMUD KAWSAR — Graphic Design Portfolio

> **Live site:** https://jma23968-source.github.io/jabir-graphic-design-portfolio/
> **Behance:** https://www.behance.net/jabirmahmudk
> **Contact:** jabirmahmudk@gmail.com

A premium, motion-rich graphic design portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features a cinematic hero section, filterable Behance project gallery, interactive project modals, and a secure contact form.

---

## Quick Start

```bash
# Clone
git clone https://github.com/jma23968-source/jabir-graphic-design-portfolio.git
cd jabir-graphic-design-portfolio

# Install
npm install

# Develop
npm run dev
# → http://localhost:5173/

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| Lucide React | — | Icons |

---

## Project Structure

```
src/
  App.tsx                  — Root component
  components/
    common/                — CustomCursor, MagneticButton, ImageUploadNotice
    layout/                — Navbar, Footer
    portfolio/             — ProjectCard, ProjectModal, ProjectArtworkFallback
    animations/            — FloatingCreativeObject
  sections/
    Hero/                  — Cinematic landing section
    About/                 — Designer bio & values
    Projects/              — Behance gallery with category filters
    Skills/                — 8 skill cards + 4-step process
    Contact/               — Secure mailto contact form
  data/
    behanceProjects.ts     — 7 verified projects + designer info
  config/
    siteConfig.ts          — Single source of truth for all site metadata
  utils/
    security.ts            — Input sanitisation & safe mailto generation
  types/
    index.ts               — Shared TypeScript interfaces
```

Full structure documented in [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md).

---

## Adding / Updating Portfolio Projects

Edit `src/data/behanceProjects.ts`. Each project follows this shape:

```ts
{
  id: 'unique-id',
  title: 'Project Title',
  category: 'Packaging Design',     // Must match BEHANCE_CATEGORIES
  description: 'Short description',
  tags: ['Tag1', 'Tag2'],
  behanceUrl: 'https://www.behance.net/gallery/...',
  imageUrl: '/images/projects/filename.jpg',  // Optional; fallback shown if missing
  featured: true,                             // Shown prominently in grid
  colSpan: 7,                                 // 1–12 grid columns
}
```

---

## Available npm Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server |
| `build` | `npm run build` | TypeScript check + Vite production build |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | ESLint check |

---

## Deployment

Deployment is automated via GitHub Actions on every push to `main`.

See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md) for:
- Manual deployment steps
- Netlify setup (recommended for HTTP security headers)
- Security header configuration for various hosting platforms
- Production verification checklist

---

## Security

This is a frontend-only static site with no backend, no database, and no authentication.

Security measures in place:
- Email header injection prevention (CRLF sanitisation in `src/utils/security.ts`)
- Content Security Policy (meta tags in `index.html` + `_headers` for Netlify)
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`
- Zero dependencies with known vulnerabilities (`npm audit` clean)
- No credentials, tokens, or secrets in source code

Full security audit: [`docs/SECURITY_AUDIT.md`](docs/SECURITY_AUDIT.md)

---

## Maintenance

### Update dependencies safely

```bash
npm outdated          # See what's out of date
npm update            # Apply minor/patch updates
npm audit             # Check for new vulnerabilities
npm run build         # Verify build still passes
```

### After making design changes

1. `npm run dev` — preview locally
2. `npm run build` — verify no TypeScript or build errors
3. `git add . && git commit -m "your message"` — commit
4. `git push origin main` — triggers automatic deployment

---

## License

All design work and portfolio content © Jabir Mahmud Kawsar. All rights reserved.
The website source code may be referenced for personal portfolio learning purposes.

---

*Built and maintained by Jabir Mahmud Kawsar — Comilla, Bangladesh.*
