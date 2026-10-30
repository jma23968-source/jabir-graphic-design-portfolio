# Security Audit — JABIR MAHMUD KAWSAR Portfolio

> Audit date: 2026-10-31 | Auditor: Automated static analysis + manual code review
> Scope: Frontend-only SPA (React 18 / Vite). No backend, no database.

---

## Executive Summary

The portfolio is a fully static single-page application served via GitHub Pages. There is no server-side logic, no authentication, no database, and no third-party API integrations beyond Google Fonts. The attack surface is therefore small. All findings below relate to client-side best practices, dependency hygiene, and safe static-hosting configuration.

**Overall risk level: LOW** — no critical findings. All medium-severity issues have been resolved during this audit.

---

## Findings

### ✅ RESOLVED — Medium — Email Header Injection Prevention

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Status** | **FIXED** |
| **Affected file** | `src/sections/Contact/Contact.tsx`, `src/utils/security.ts` |
| **Description** | The contact form generates a `mailto:` URI from user-supplied name and project type fields. Without sanitisation, a malicious value containing `\r\n` characters could inject extra email headers (e.g. `Bcc:` injection) when the device's mail client processes the URI. |
| **Fix applied** | `sanitizeHeaderInput()` in `src/utils/security.ts` strips `\r`, `\n`, null bytes, and all other C0 control characters from single-line inputs. `sanitizeMessageBody()` strips null bytes and dangerous control characters from the message textarea. Both functions also enforce maximum lengths (name: 100 chars, body: 2000 chars). The Contact component now calls these functions on every field change and at submission. `generateSafeMailto()` wraps all four fields through sanitisation before building the URI. |
| **Residual risk** | None for header injection. The mailto client still opens the user's local email app — no data is sent to a server, so server-side validation is not applicable. |

---

### ✅ RESOLVED — Medium — Missing Security Response Headers

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Status** | **FIXED (with platform caveat)** |
| **Affected files** | `index.html`, `public/_headers` |
| **Description** | The original site served no security-specific HTTP response headers, leaving it open to clickjacking, MIME-sniffing, and reflected XSS in older browsers. |
| **Fix applied** | `public/_headers` now declares `X-Content-Type-Options`, `Strict-Transport-Security`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`, and `Cross-Origin-Opener-Policy`. Defense-in-depth meta-tag equivalents were added to `index.html` for environments that do not support `_headers` files (including GitHub Pages). |
| **Platform caveat** | **GitHub Pages does not honour `_headers` files** and does not allow custom HTTP response headers. The meta-tag CSP in `index.html` is the operative control on GitHub Pages. If the site is ever migrated to Netlify, Cloudflare Pages, or a VPS, `public/_headers` will take effect automatically. |
| **Residual risk** | Low. HSTS has no effect on GitHub Pages (they already enforce HTTPS) but does apply on self-hosted deployments. |

---

### ✅ CONFIRMED SAFE — No Exposed Credentials

| Field | Detail |
|---|---|
| **Severity** | N/A |
| **Status** | **No issue found** |
| **Evidence** | Full project source searched for: API keys, tokens, passwords, database URLs, service account credentials. None present. The only "secrets" are the designer's public email address (`jabirmahmudk@gmail.com`) and Behance URL — both are intentionally public contact details. `.gitignore` correctly excludes `.env`, `.env.local`, `*.rar`, and `dist/`. |

---

### ✅ CONFIRMED SAFE — No XSS Vectors

| Field | Detail |
|---|---|
| **Severity** | N/A |
| **Status** | **No issue found** |
| **Evidence** | The application renders only static TypeScript data arrays and React JSX. No `dangerouslySetInnerHTML` calls exist anywhere in the codebase. No content from external APIs is rendered. No query-parameter values are reflected into the DOM. React's default JSX escaping provides automatic output encoding. |

---

### ✅ CONFIRMED SAFE — Dependency Audit (npm audit)

| Field | Detail |
|---|---|
| **Severity** | N/A |
| **Status** | **0 vulnerabilities found** |
| **Command** | `npm audit` (run 2026-10-31 with network access) |
| **Result** | `found 0 vulnerabilities` |

---

### ✅ CONFIRMED SAFE — No Source Map Exposure

| Field | Detail |
|---|---|
| **Severity** | N/A |
| **Status** | **No issue found** |
| **Evidence** | `vite.config.ts` does not enable source maps for production builds. No `.map` files appear in `dist/`. Internal file names and logic are not exposed to the browser in production. |

---

### ℹ️ INFORMATIONAL — Content Security Policy uses `unsafe-inline` for scripts

| Field | Detail |
|---|---|
| **Severity** | Low / Informational |
| **Status** | **Accepted with justification** |
| **Description** | The CSP includes `script-src 'self' 'unsafe-inline'`. In a static Vite build, no actual inline `<script>` tags are emitted — the build outputs hashed `.js` bundle files. However, the meta-tag CSP must include `unsafe-inline` because meta-tag CSPs cannot use `nonce-` or `hash-` based allowlists (they are not delivered per-request). The HTTP-header CSP in `_headers` can be tightened with a nonce when deploying to Netlify or Cloudflare. |
| **Recommendation** | If migrating to Netlify, replace `unsafe-inline` in the `_headers` CSP with a `nonce-` directive generated per request. |

---

### ℹ️ INFORMATIONAL — Personal Access Token (GitHub)

| Field | Detail |
|---|---|
| **Severity** | Critical if exposed |
| **Status** | **Never stored — token rotation recommended** |
| **Description** | A GitHub PAT was supplied by the user during the deployment session to push to the repository. This token was used only transiently via CLI environment variables and was never written to source code, config files, or git history. |
| **Recommendation** | Because the token was typed directly in the chat session, rotate it immediately at https://github.com/settings/tokens — this is standard practice after any one-time-use token exchange. |

---

## Security Configuration Still Requiring Manual Action

| # | Action | Priority |
|---|---|---|
| 1 | Rotate the GitHub PAT used during deployment | **High** |
| 2 | If migrating to Netlify: tighten CSP in `_headers` by removing `unsafe-inline` and adding nonce | Medium |
| 3 | Create an OG preview image at `public/images/og-preview.jpg` (1200×630 px) | Low |
| 4 | Optionally add `public/site.webmanifest` for PWA installability | Low |
