# Amped landing

Single-page marketing site for **Amped** (Next.js App Router, TypeScript, Tailwind CSS).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy [`.env.example`](.env.example) to `.env.local` and set:

- **`NEXT_PUBLIC_SITE_URL`** — Canonical site URL with no trailing slash (e.g. `https://www.example.com`). Used for Open Graph / Twitter absolute URLs. For local dev you can omit it; it defaults to `http://localhost:3000`.

Optional Figma REST snapshot (not required if you use Cursor’s Figma MCP):

- **`FIGMA_ACCESS_TOKEN`** — [Figma personal access token](https://www.figma.com/settings).
- **`FIGMA_FILE_KEY`** — Defaults to the Amped file key in the example.

Then run:

```bash
npm run figma:pull
```

Writes `design/figma-snapshot.json` (create `design/` automatically).

## Hero video

Add a looping background file at **`public/hero.mp4`**. The page always shows **`public/hero-poster.png`** first (good for LCP); the video loads after idle via a `HEAD` request—if `hero.mp4` is missing, the poster stays. **`prefers-reduced-motion: reduce`** keeps the poster only.

## “Get in Touch”

Update the `mailto:` in [`src/components/landing/content-section.tsx`](src/components/landing/content-section.tsx) to your real address.

## Deploy (Vercel + Cloudflare)

1. Push the repo and import it in [Vercel](https://vercel.com).
2. Set **`NEXT_PUBLIC_SITE_URL`** in Vercel to your production URL.
3. In Cloudflare, point DNS at Vercel (or proxy to Vercel’s origin) using the same pattern as your other sites. Keep HTML caching conservative if you personalize later; long-cache static assets under `/_next/static` and `public/`.

Open Graph and Twitter cards use [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) and [`src/app/twitter-image.tsx`](src/app/twitter-image.tsx). Favicons are theme-aware SVGs in `public/`.
