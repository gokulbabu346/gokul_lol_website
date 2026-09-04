# Gokul D_Bog — The Ledger Legend

**Live at [https://gokul.lol](https://gokul.lol)**

Personal site of Gokul D_Bog — accountant, ledger legend, Chartered-in-training.
Fully fabricated exploits, lovingly reconciled.

## Stack

- **Astro** — static site (built to `dist/`)
- **Hono** — worker API running on Cloudflare Workers
- **Cloudflare Workers static assets** — serves the Astro build; unknown paths fall through to the worker
- **Custom domain** — `gokul.lol` attached as a Workers custom domain (see `routes` in `wrangler.jsonc`)

## Endpoints

- `/` — the legend itself
- `/health` — returns `200` with body `A, Ok`
- anything else — a fully reconciled 404 page

## Commands

```bash
npm install
npm run dev      # Astro dev server (site only, at http://localhost:4321)
npm run serve    # build + wrangler dev (full worker + /health, at http://localhost:8787)
npm run deploy   # build + deploy to Cloudflare Workers
```

First deploy will ask you to log in via `npx wrangler login`.

## Personalise before going viral

- Contact details (phone, email, Instagram, WhatsApp): `src/components/Contact.astro`
- Chartership progress %: `src/components/Quest.astro` (both the label and `data-pct`)
- The "true stories": `src/components/Exploits.astro`
- Stats: `src/components/Stats.astro`
- Site name in `wrangler.jsonc` if you want a different worker name
