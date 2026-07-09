# Project Guide — thejhaus.com portfolio

This is the single reference for maintaining and iterating on the Jasmine
Markinson portfolio site. If you (or Claude Code) come back after a break,
**read this file first** — it explains what everything is, where it lives,
how to change it, and how it gets deployed.

> ⚠️ **Never put passwords, tokens, or API keys in this file.** It's committed
> to a public GitHub repo. Secrets belong in your password manager and in
> `.env.local` (which is gitignored) / Vercel's Environment Variables. This
> guide only records *where* those things live, not their values.

---

## 1. The quick version

- **Live site:** https://thejhaus.com (and `www.thejhaus.com`)
- **What it is:** a Next.js portfolio — work galleries, process pages, about,
  resume, contact.
- **How to change content:** edit plain files (mostly in `data/`), commit, and
  `git push origin main`. **Vercel redeploys automatically on every push to
  `main`** — there is no separate "deploy" step.
- **To preview locally:** `npm run dev`, then open http://localhost:3000.

---

## 2. Accounts & where they live

| Thing | Detail | Where to log in / manage |
|---|---|---|
| **GitHub repo** | `jasminemarkinson-svj/portfolio-website-main`, default branch `main` | https://github.com/jasminemarkinson-svj/portfolio-website-main — sign in with the `jasminemarkinson-svj` GitHub account |
| **Git remote URL** | `https://github.com/jasminemarkinson-svj/portfolio-website-main.git` | already set as `origin` in this repo |
| **Vercel** (hosting) | Project imported from the GitHub repo above; auto-deploys `main` | https://vercel.com — sign in (GitHub login), open the portfolio project |
| **Domain** | `thejhaus.com`, purchased on **GoDaddy** | https://godaddy.com (DNS) + Vercel → Settings → Domains |
| **Supabase** (contact form DB) | stores contact-form submissions in a `messages` table | https://supabase.com dashboard |
| **Contact email** | jasminemarkinson@gmail.com | shown on the site; also this account's login email |

**Credentials:** GitHub, Vercel, GoDaddy, and Supabase passwords are **not**
stored here — retrieve them from your password manager. On this Mac, `git push`
usually works without a prompt because the GitHub credential is cached in the
macOS Keychain / git credential helper. If a push ever asks for a password,
GitHub no longer accepts account passwords over HTTPS — generate a **Personal
Access Token** (GitHub → Settings → Developer settings → Personal access tokens)
and use that as the password, or use the `gh` CLI (`gh auth login`).

---

## 3. Running it locally

```bash
cd "path/to/port web main"
npm install        # first time only, or after dependency changes
npm run dev        # starts the dev server at http://localhost:3000
```

- Node 24 / npm 11 (a recent LTS Node is fine).
- The page hot-reloads as you edit files.
- **If a CSS or image change won't show up** even after reload, the Turbopack
  cache is stuck: stop the server, `rm -rf .next`, and run `npm run dev` again.

---

## 4. The stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Supabase** — only for the contact form
- Fonts via `next/font` (serif headings + sans body)
- Hosted on **Vercel**; `vercel.json` pins `{ "framework": "nextjs" }`

---

## 5. Project structure — where to change what

Everything is **data-driven**: content lives in a few TypeScript files under
`data/` and `lib/`, and the pages read from them. You rarely need to touch the
page components themselves.

| To change… | Edit this |
|---|---|
| Site name, role, tagline, email, location, domain, nav | `lib/site-config.ts` |
| **Work projects / collections** (title, year, cover, images, sections, description) | `data/projects.ts` |
| **Process pages** (Research to Concept, Drawing Iterations, etc.) | `data/process.ts` |
| Resume experience / education / skills | `data/resume.ts` |
| About-page copy | `app/about/page.tsx` |
| About-page photo | `public/portfolio/about-portrait.jpg` (replace file, or repoint in `app/about/page.tsx`) |
| Splash / landing image | `app/page.tsx` |

### Routes (pages)
- `/` — splash / landing (single image + "Enter" → `/work`)
- `/work` — full-screen scroll-snap grid of all projects
- `/work/[slug]` — a single project's page (hero + description + gallery/sections)
- `/process` and `/process/[slug]` — process writeups
- `/about`, `/resume`, `/contact`

The **WORK** nav item has a dropdown of all collections (`components/WorkNav.tsx`),
generated from `data/projects.ts`.

---

## 6. Images — the pipeline

**Source photos** (originals, ~7952×5304) live on the Mac at:
`~/Desktop/website folder/<look-name>/` — e.g. `patchwork jacket/`,
`patchwork jeans/`, `corset bra/`. Some also in `~/Desktop/phtoto shoot photos/`.

**Site images** live in `public/portfolio/<project-slug>/` and are referenced
from `data/projects.ts` as `/portfolio/<slug>/<file>.jpg` (the `public/` prefix
is dropped in the path).

**To resize an original into the site** (long edge 2400px, converted to JPEG):
```bash
sips -s format jpeg -Z 2400 "SOURCE.JPG" --out "public/portfolio/<slug>/01.jpg"
# check dimensions (needed for data/projects.ts width/height):
sips -g pixelWidth -g pixelHeight "public/portfolio/<slug>/01.jpg"
```
Convention: name them `01.jpg`, `02.jpg`, … A landscape 7952×5304 source
becomes `2400×1601`. Record the real width/height in `data/projects.ts`.

> **Pasted screenshots vs. real files:** when a screenshot is pasted into Claude
> Code chat, its macOS temp path deletes within seconds — but the chat shows the
> **source filename** (e.g. `DSC04328.JPG`). Find the real file with
> `find ~/Desktop -iname "DSC04328.JPG"` and use that. If no filename is shown,
> the actual high-res file is needed — drag the real file in, or save a fresh
> screenshot with ⌘⇧4 (lands as a real file on the Desktop).

---

## 7. The project data model (`data/projects.ts`)

Projects are ordered **newest → oldest** by year; that order drives both `/work`
and the WORK dropdown. Each project:

```ts
{
  slug: "eyes-on-you",          // URL: /work/eyes-on-you  (also the image folder name)
  title: "Eyes on You",
  year: "2023",
  category: "Collection",
  description: "…",             // shown under the title; use "" to hide it
  coverImage: "/portfolio/eyes-on-you/02.jpg",   // thumbnail on /work
  heroImage: "/portfolio/eyes-on-you/hero.jpg",  // optional big photo at top of the page (falls back to coverImage)
  heroPosition: "50% 10%",      // optional object-position to keep heads in frame (default "center")
  images: [                     // the gallery
    { src: "/portfolio/eyes-on-you/02.jpg", width: 2400, height: 1601 },
    …
  ],
  sections: [                   // OPTIONAL — splits the page into labeled sub-galleries
    { title: "", images: [ … ] },              // empty title = no heading (avoids duplicating the page title)
    { title: "Beaded Underwire Bra", images: [ … ] },
  ],
}
```

**Common edits:**
- *Add a project:* copy a block, set a new `slug`, drop images in
  `public/portfolio/<slug>/`, place the block in the array at the right year.
- *Add/remove images:* edit the `images` array.
- *Change the big top photo:* set/point `heroImage`.
- *Head getting cropped in the hero:* add `heroPosition: "50% 0%"` (top).
- *Combine two projects on one page with headings:* use `sections` (see the
  Lingerie project — it holds a "Lingerie" section + a "Beaded Underwire Bra"
  section).

---

## 8. Current site inventory (as of last update)

**Work projects** (newest → oldest):
| Slug | Title | Year |
|---|---|---|
| `grounded-within-the-flow` | Grounded Within The Flow | 2026 |
| `bonded-in-craft` | Bonded in Craft | 2025 |
| `take-a-joke` | Take a Joke | 2024 |
| `eyes-on-you` | Eyes on You | 2023 |
| `upcycle-project` | Upcycle Project | 2023 |
| `stitched-together` | Stitched Together | 2022 |
| `lingerie` | Lingerie (+ Beaded Underwire Bra section) | 2022 |

**Process pages** (`data/process.ts`): Research to Concept · Drawing Iterations
· Pattern to Sample · Technical Flats. The `/process` listing notes the work is
from the most recent collection, *Grounded Within The Flow*. Process images live
in `public/portfolio/process/`.

Descriptions still using placeholder / empty text: **Upcycle Project**,
**Bonded in Craft** hero note (has real copy), **Lingerie** (intentionally
blank). Fill these in `data/projects.ts` when copy is ready.

---

## 9. Contact form (Supabase)

Submissions save to a Supabase `messages` table (insert-only). Config:
- `supabase/schema.sql` — the table definition (run once in Supabase SQL editor).
- Local: copy `.env.local.example` → `.env.local` and fill `SUPABASE_URL` +
  `SUPABASE_ANON_KEY` (from Supabase → Project Settings → API). `.env.local` is
  gitignored.
- Production: the same two variables are set in **Vercel → Settings →
  Environment Variables**.
- Read submissions in Supabase → **Table Editor → messages**.

---

## 10. Deploying & the domain

**Deploying:** just `git push origin main`. Vercel builds and deploys
automatically; watch progress in the Vercel dashboard. No manual step.

**Domain (`thejhaus.com`, on GoDaddy):** already connected. If it ever needs
redoing:
1. Vercel → project → **Settings → Domains** → add `thejhaus.com` (+ `www`).
2. Vercel shows DNS records. Easiest is pointing GoDaddy's **nameservers** to
   Vercel's (GoDaddy → My Products → thejhaus.com → DNS → Nameservers → Change).
   Alternative: keep GoDaddy DNS and add the `A` / `CNAME` records Vercel lists.
3. Propagation takes minutes to a few hours; Vercel's Domains page shows a green
   check when live.

---

## 11. Committing changes

```bash
git add -A
git commit -m "Describe the change"
git push origin main          # triggers the Vercel deploy
```

Work on `main` for this project (that's what deploys). If you want to preview a
change safely first, run it locally with `npm run dev` before pushing.

---

## 12. Gotchas worth knowing

- **Tailwind v4 / Lightning CSS silently drops CSS rules it can't parse.** If a
  custom animation or property "does nothing," it was likely dropped — rewrite
  it in a simpler, standards form rather than assuming a logic bug.
- **View-transition animations can't be verified in an automated browser tab**
  (a hidden/background tab makes the browser skip transitions). Check them in a
  real, focused browser window.
- **EXIF orientation:** these shoot files are genuine landscape (7952×5304);
  `sips` bakes orientation on convert. If an image ever looks rotated on the
  site, check the source orientation before assuming a CSS problem.
- **Turbopack cache:** see §3 — `rm -rf .next` and restart if edits won't show.
- **Verifying a page renders quickly:** `curl -s -o /dev/null -w "%{http_code}\n"
  http://localhost:3000/work/<slug>` (expects `200`).
