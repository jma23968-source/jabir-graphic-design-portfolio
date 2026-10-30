# Project Structure — JABIR MAHMUD KAWSAR Portfolio

> Generated: 2026-10-31 | Build: `jabir-mahmud-kawsar-portfolio@1.0.0` | Framework: Vite + React 18 + TypeScript

---

## Root Directory

```
jabir-graphic-design-portfolio/
├── index.html                    # Entry HTML: SEO, CSP meta tags, JSON-LD, reduced-motion CSS
├── package.json                  # Project metadata & scripts
├── package-lock.json             # Locked dependency tree
├── vite.config.ts                # Vite build config (base: './')
├── tsconfig.json                 # TypeScript project config
├── tsconfig.app.json             # App-specific TS config
├── tsconfig.node.json            # Node tool TS config
├── tailwind.config.js            # Tailwind CSS theme & custom tokens
├── postcss.config.js             # PostCSS (Autoprefixer)
├── .gitignore                    # Git exclusions (node_modules, dist, .env, *.rar)
├── .env.example                  # Safe variable name reference (no real secrets)
├── README.md                     # Developer setup & contribution guide
│
├── public/                       # Static assets served verbatim (not processed by Vite)
│   ├── _headers                  # Netlify/Cloudflare security response headers
│   ├── favicon.svg               # Site icon
│   ├── site.webmanifest          # PWA manifest (referenced in index.html)
│   └── images/
│       ├── profile/              # Portrait photos (jabir-portrait.jpg etc.)
│       ├── projects/             # Project thumbnail images
│       └── branding/             # JM monogram, OG preview image
│
├── src/                          # All application source code
│   ├── main.tsx                  # React DOM entry point
│   ├── App.tsx                   # Root component — section composition & routing
│   ├── index.css                 # Global styles, Tailwind directives, custom animations
│   ├── vite-env.d.ts             # Vite type declarations
│   │
│   ├── types/                    # Shared TypeScript type definitions
│   │   └── index.ts              # BehanceProject, ProjectCategory, SkillItem, ProcessStep
│   │
│   ├── data/                     # Static project data (no server calls)
│   │   └── behanceProjects.ts    # 7 verified Behance projects + DESIGNER_INFO + categories
│   │
│   ├── config/                   # Centralised site configuration
│   │   └── siteConfig.ts         # SITE_CONFIG: designer info, meta, navigation, categories
│   │
│   ├── utils/                    # Pure utility functions
│   │   └── security.ts           # sanitizeHeaderInput, sanitizeMessageBody,
│   │                             #   isSafeUrl, generateSafeMailto
│   │
│   ├── components/               # Reusable UI components (used across multiple sections)
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx        # Magnetic custom cursor (desktop only)
│   │   │   ├── MagneticButton.tsx      # Magnetic-pull hover wrapper (link or div)
│   │   │   └── ImageUploadNotice.tsx   # Developer notice for missing portrait asset
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Floating nav with active-section highlight
│   │   │   └── Footer.tsx              # Minimal branded footer with social link
│   │   │
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.tsx         # Individual Behance project card with hover effect
│   │   │   ├── ProjectModal.tsx        # Full-screen project detail overlay
│   │   │   └── ProjectArtworkFallback.tsx  # Illustrated placeholder when no image loaded
│   │   │
│   │   └── animations/
│   │       └── FloatingCreativeObject.tsx  # Decorative floating geometry in Hero
│   │
│   └── sections/                 # Full-page sections (one folder per section)
│       ├── Hero/
│       │   └── Hero.tsx          # Cinematic hero with portrait parallax & text reveal
│       ├── About/
│       │   └── About.tsx         # Designer bio, values, design philosophy
│       ├── Projects/
│       │   └── SelectedWork.tsx  # Filterable Behance project gallery
│       ├── Skills/
│       │   └── SkillsAndProcess.tsx  # 8 skill cards + 4-step workflow
│       └── Contact/
│           └── Contact.tsx       # Contact cards + secure mailto form assistant
│
├── dist/                         # Production build output (git-ignored)
│   └── assets/                   # Hashed CSS + JS bundles
│
└── docs/                         # Project documentation
    ├── PROJECT_STRUCTURE.md      # This file
    ├── SECURITY_AUDIT.md
    ├── CHANGELOG.md
    ├── TEST_REPORT.md
    └── DEPLOYMENT_GUIDE.md
```

---

## Key Architecture Decisions

| Concern | Solution |
|---|---|
| Data source | Static TypeScript arrays in `src/data/` — no backend, no database |
| Centralised config | `src/config/siteConfig.ts` is the single source of truth for URLs, email, designer info |
| Security utilities | `src/utils/security.ts` — all form sanitisation goes through typed functions |
| Section isolation | Each section lives in its own folder under `src/sections/` |
| Reusable components | Shared UI in `src/components/` with sub-folders by concern |
| Styling | Tailwind CSS with a custom design-token theme in `tailwind.config.js` |
| Animation | Framer Motion throughout; `prefers-reduced-motion` disables via CSS + Framer's built-in support |
| Build | `vite build` — outputs to `dist/` with `base: './'` for GitHub Pages sub-path hosting |

---

## Design Token Quick Reference (Tailwind)

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#FAF8F4` | Primary light background |
| `ink` | `#1A1614` | Primary text |
| `cobalt` | `#2255D8` | Electric blue accent |
| `magenta` | `#D41A7A` | Interactive highlight |
| `cyanAccent` | `#00D4FF` | Cinematic accent on dark sections |
| `burgundy` | `#280A12` | Deep dark section background |
