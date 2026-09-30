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

## Deploy on Vercel

1. Push this folder to its own Git repo (or set Vercel's **Root Directory** to `clauze-landing-page` in a monorepo) and import it. Framework preset: Next.js, no env vars.
2. Project → Settings → Domains: add `clauze.tn` and `www.clauze.tn` (redirect `www` → `clauze.tn`).
3. At the DNS provider, replace the current records (they point at the app server, 31.70.150.159):
   - `clauze.tn` → `A 216.198.79.1` (or whatever Vercel shows for the apex)
   - `www` → `CNAME` to the value Vercel shows (e.g. `cname.vercel-dns.com`)
   - Leave `app` → `A 31.70.150.159` untouched.
4. Once DNS moves, the app server's nginx block that 301s `clauze.tn`/`www.clauze.tn` to the app stops receiving that traffic; it can be removed from `clauze-backend/deploy/nginx.conf` later, along with the old `clauze.tn` certificate.

