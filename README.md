# clauze-landing-page

Public marketing site for Clauze, served at **https://clauze.tn** (the app itself lives at https://app.clauze.tn).

Next.js 16 (App Router). One statically rendered page per locale: `/fr` (default), `/ar` (RTL), `/en`. `proxy.ts` redirects `/` to the visitor's language from `Accept-Language`.

```bash
pnpm install
pnpm dev          # http://localhost:3000/fr
pnpm build && pnpm start
```

## Where things are

- `lib/dictionaries/{fr,en,ar}.ts`: all copy. `fr.ts` is the source shape (`Dict`); the others must match it. The Arabic copy is machine-authored and needs a native legal writer's review before launch.
- `app/[lang]/page.tsx`: the page, built from `Article` sections (main text column + margin notes).
- `components/demos.tsx`, `components/assistant-demo.tsx`: the live product demos. Demo clients/matters are fictional and labelled as such; statutes and article text are real.
- `components/motion.tsx`: staged reveals and the citation leader line. Demos render complete when JS is off or `prefers-reduced-motion` is set.
- `lib/testimonials.ts`: empty on purpose. The testimonials section only appears once real, approved quotes are added.
- `public/clauze-promo.mp4`: copied from `../promo-video/`.

## Content pages, SEO and GEO

Besides the home page, the site has feature, use-case and comparison pages, an FAQ and (draft) a security page, each in fr/ar/en:

- `lib/pages.ts`: the page registry: ids, section, localized slugs (`/fr/fonctionnalites/recherche-juridique`, `/en/features/legal-research`; Arabic reuses the English slugs), `updated` date, `draft`. A `draft` page is not built, linked or listed.
- `lib/content/{fr,en,ar}.ts`: the pages' copy, typed by `lib/content/types.ts`; a page missing from one language fails `pnpm typecheck`. Written answer-first: a `summary` quotable on its own, then blocks (prose, points, steps, comparison table, FAQ). Same rule as the home page: real product behaviour only, nothing invented. Arabic is machine-authored and needs native review.
- `components/page-view.tsx`, `components/section-view.tsx`: the two templates. To add a page: add an id in `lib/pages.ts`, its copy in the three content files, done; routes, sitemap, `llms.txt`, social image, footer and JSON-LD follow.
- `lib/seo.ts`: per-route metadata (canonical, hreflang with `x-default` → fr, Open Graph) and the schema.org graph (Organization, WebSite, SoftwareApplication, WebPage + BreadcrumbList, FAQPage). No prices, ratings or reviews.
- `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt`, `app/llms-full.txt`: crawler files. All crawlers are allowed, AI training bots included (a deliberate choice: being known to AI assistants is the point). `llms*.txt` are generated from the content files.
- `app/**/opengraph-image.tsx` + `lib/og.tsx`: a 1200×630 card per page and language, rendered at build. Satori can't lay out Arabic, so Arabic titles are shaped with HarfBuzz into SVG (`lib/og-arabic.ts`); fonts are in `assets/fonts/`.
- Vercel previews are `noindex` (meta + `X-Robots-Tag` + a disallow-all robots.txt); only `VERCEL_ENV=production` is indexable.
- Switches: `LEGAL_LIVE` in `lib/i18n.ts` adds the app's CGAU/privacy pages to the footer and sitemap once they are published. The `security` page in `lib/pages.ts` stays `draft` until the DPA and privacy policy name the AWS hosting it describes; publish both together.
- `pnpm indexnow` after a production deploy pings IndexNow (Bing → ChatGPT search, Copilot) with every sitemap URL; the key file is `public/0148346594714100962af690948b3b8e.txt`.

The canonical host is `https://clauze.tn` (no `www`): in Vercel → Settings → Domains, `clauze.tn` must be the primary domain and `www.clauze.tn` must redirect to it.

After this merges, run `bash scripts/seo-setup-wizard.sh`: it walks through the Vercel domain flip, Google Search Console and Bing verification (DNS), sitemap submission and the first IndexNow ping, checking each step from the terminal.

## Deploy on Vercel

1. Push this folder to its own Git repo (or set Vercel's **Root Directory** to `clauze-landing-page` in a monorepo) and import it. Framework preset: Next.js, no env vars.
2. Project → Settings → Domains: add `clauze.tn` and `www.clauze.tn` (redirect `www` → `clauze.tn`; the apex is canonical).
3. At the DNS provider:
   - `clauze.tn` → the `A` record Vercel shows for the apex
   - `www` → `CNAME` to the value Vercel shows (e.g. `cname.vercel-dns.com`)
   - Leave the `app` and `dev` records alone: they belong to the app, not this site.

