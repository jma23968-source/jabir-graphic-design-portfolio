# Deployment Guide — JABIR MAHMUD KAWSAR Portfolio

> Framework: Vite + React 18 + TypeScript | Hosting: GitHub Pages (primary)

---

## Environment Variables

This project is a fully static SPA. **It has no required runtime environment variables.**

The only configurable values (designer name, email, Behance URL, site URL) live in:
```
src/config/siteConfig.ts
```

Edit that file directly — it is type-checked and version-controlled safely.

See `.env.example` for future expansions (e.g. if a contact API is ever added).

---

## Local Development

### Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | ≥ 18 LTS | `node --version` |
| npm | ≥ 9 | Bundled with Node |
| Git | ≥ 2.40 | For version control |

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/jma23968-source/jabir-graphic-design-portfolio.git
cd jabir-graphic-design-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → http://localhost:5173/
```

---

## Production Build

```bash
npm run build
```

Output is written to `dist/`. Verify it:

```bash
npm run preview
# → http://localhost:4173/
```

### Build Output (Reference)

```
dist/index.html                   ~1.7 kB
dist/assets/index-*.css          ~46 kB  (~8 kB gzip)
dist/assets/index-*.js          ~350 kB (~106 kB gzip)
```

---

## GitHub Pages Deployment (Current Setup)

The repository uses a **GitHub Actions workflow** at `.github/workflows/deploy.yml` that:

1. Triggers on every push to `main`
2. Runs `npm install` + `npm run build`
3. Deploys the `dist/` folder to the `gh-pages` branch
4. Makes it live at: **https://jma23968-source.github.io/jabir-graphic-design-portfolio/**

### Critical Vite Setting

The `vite.config.ts` must have:
```ts
base: './'
```
This ensures all asset paths are relative, which is required for GitHub Pages sub-path hosting. **Do not change this.**

### Manual Deployment (if GitHub Actions is unavailable)

```bash
npm run build
npx gh-pages -d dist
```

### GitHub Actions — Required Repository Secret

The workflow requires a `GITHUB_TOKEN` secret. This is **automatically provided by GitHub** for all repositories — you do not need to add it manually.

---

## Netlify Deployment (Alternative / Recommended for Security Headers)

> Netlify is recommended if you need proper HTTP security headers, since GitHub Pages does not support `_headers` files.

1. Connect your repository at https://app.netlify.com
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. The `public/_headers` file will be automatically applied, enabling:
   - `Content-Security-Policy`
   - `Strict-Transport-Security`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy`
   - `Permissions-Policy`

No additional environment variables are required.

---

## Security Header Configuration

### GitHub Pages
GitHub Pages does not allow custom HTTP response headers. Security is provided by:
- Meta-tag CSP in `index.html` *(defense-in-depth)*
- GitHub Pages' built-in HTTPS enforcement
- Referrer-Policy and X-Content-Type-Options meta tags

### Netlify / Cloudflare Pages
`public/_headers` is applied automatically. No manual configuration needed.

### Self-Hosted (Nginx)

Add to your server block:

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:;" always;
```

---

## Production Verification Checklist

After each deployment, verify the following:

- [ ] Site loads at the live URL without blank screen
- [ ] Google Fonts (Space Grotesk, Space Mono, Caveat, Inter) render correctly
- [ ] Hero section animation plays on first load
- [ ] Portrait image loads (or the styled fallback appears cleanly)
- [ ] Navbar scroll-spy highlights the correct section
- [ ] Mobile menu opens and closes correctly
- [ ] All 7 Behance project cards render
- [ ] Category filters work (ALL WORKS / individual categories)
- [ ] Clicking a project card opens the detail modal
- [ ] "View on Behance" links open `behance.net/jabirmahmudk` correctly
- [ ] Contact form generates a mailto link with correct subject and body
- [ ] Email copy button copies `jabirmahmudk@gmail.com` to clipboard
- [ ] Footer Behance link is correct
- [ ] No console errors on first load
- [ ] Page is responsive at 375 px (mobile), 768 px (tablet), 1440 px (desktop)
- [ ] Check `https://securityheaders.com` with the live URL (if using Netlify)

---

## Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update minor/patch versions (safe)
npm update

# Audit for new vulnerabilities
npm audit

# Update a specific package to a new major version (test carefully)
npm install framer-motion@latest
npm run build   # verify build still passes
```

---

## Git Workflow

```bash
# Create a feature branch
git checkout -b feature/your-change

# Stage and commit
git add .
git commit -m "feat: describe your change"

# Push and create a PR
git push origin feature/your-change
```

**Branches:**
| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys via GitHub Actions |
| `audit-backup` | Backup snapshot before this audit |
| `backup/initial-state` | Original state before any changes |
