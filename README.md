# thejhaus.com — portfolio site

A minimal, editorial portfolio built with Next.js, Tailwind CSS, and a
Supabase-backed contact form. Four sections: work gallery, about, resume,
contact.

## Running it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-updates
as you edit files.

## Adding your own content

Nothing here is wired to a CMS — everything is a plain file you edit by
hand and redeploy (Vercel redeploys automatically on every `git push`).

- **Site name, tagline, email, social links, nav** — `lib/site-config.ts`
- **Portfolio projects** — `data/projects.ts`. Each project points at image
  files in `public/portfolio/`. Drop your photos in that folder (any
  filename), then update the `coverImage`/`images` paths in `data/projects.ts`
  to match. The placeholder `.svg` files there can be deleted once replaced.
- **About page text/photo** — `app/about/page.tsx` for the copy, and
  `public/portfolio/about-portrait.svg` for the photo (replace the file, or
  point to a different path in `app/about/page.tsx`).
- **Resume content** — `data/resume.ts` for the on-page experience/
  education/skills. For the "Download PDF" button, replace
  `public/resume.pdf` with your real resume (same filename).

## Setting up the contact form (Supabase)

The contact form saves messages to a free Supabase database instead of
sending email.

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard, go to **SQL Editor → New query**, paste the
   contents of `supabase/schema.sql`, and run it. This creates a
   `messages` table that only accepts new inserts (no one can read other
   people's messages through the public key).
3. Go to **Project Settings → API**. Copy the **Project URL** and the
   **anon public** key.
4. Copy `.env.local.example` to `.env.local` and fill in those two values:
   ```bash
   cp .env.local.example .env.local
   ```
5. Restart `npm run dev`. Submissions now appear in
   **Table Editor → messages** in Supabase.

`.env.local` is gitignored and never committed — when you deploy to
Vercel, you'll add the same two values there separately (below).

## Deploying to Vercel

1. Push this project to a GitHub repository (create one on GitHub, then
   `git remote add origin <url>`, `git push -u origin main`).
2. In [Vercel](https://vercel.com/new), import that GitHub repo. Vercel
   detects Next.js automatically — no config needed.
3. Before the first deploy (or after, in **Project Settings →
   Environment Variables**), add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

   using the same values from your `.env.local`.
4. Deploy. Every future `git push` to `main` redeploys automatically.

## Connecting thejhaus.com (bought on GoDaddy)

1. In your Vercel project, go to **Settings → Domains** and add
   `thejhaus.com` (and `www.thejhaus.com` if you want both).
2. Vercel will show you DNS records to add. The simplest option it offers
   is usually changing your domain's nameservers to Vercel's — in GoDaddy,
   go to **My Products → thejhaus.com → DNS → Nameservers → Change**, and
   enter the nameservers Vercel gave you.
   - Alternative: instead of changing nameservers, add the specific `A`
     and `CNAME` records Vercel shows you under GoDaddy's **DNS Records**
     section, if you'd rather keep GoDaddy managing DNS.
3. DNS changes can take anywhere from a few minutes to a few hours to
   propagate. Vercel's Domains page will show a green checkmark once it's
   live.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Supabase](https://supabase.com) (contact form storage)
- Fonts: Fraunces (serif, headings) + Inter (sans, body) via `next/font`
