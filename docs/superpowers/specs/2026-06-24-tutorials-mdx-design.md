# Design: Local MDX Tutorials Section

**Date:** 2026-06-24
**Repo:** `akashp1712/akashp1712` (akashpanchal.com)
**Status:** Approved design — ready for implementation planning

## Problem

Akash wants to publish long-form, code-heavy technical tutorials (e.g. "Build a Harness Agent", "Build a Voice Agent", "Observability for AI Agents") with attractive inline diagrams and illustrations — in the style of [aihero.dev](https://aihero.dev) and the [Ark UI blog](https://ark-ui.com/blog) (article layout, not docs).

The current blogging path is **Hashnode** (`blog.akashpanchal.com`, surfaced on the homepage via `app/api/hashnode/route.ts` + `components/blog-posts.tsx`). Pain points that make Hashnode unsuitable for this content:

- Converting Markdown into Hashnode's editor is slow and lossy.
- SEO metadata must be filled manually per post.
- Arbitrary inline React diagrams/illustrations are impossible.

## Goal

A self-owned, in-repo **tutorials** section authored as local MDX, rendered with the site's own design, where:

- Writing = drop a `.mdx` file, fill ~4 frontmatter fields, `git push`.
- SEO (OG/Twitter/JSON-LD/sitemap/RSS) is generated automatically from frontmatter.
- Custom React diagrams/illustrations are first-class, droppable inline.

## Non-Goals

- **No migration** of existing Hashnode posts. The Hashnode route and homepage "Latest Articles" section stay untouched.
- **No docs-style sidebar nav tree.** This is an article/blog layout.
- **No Next.js / Tailwind version upgrade.** Build on the existing stack.
- **No shadcn/Radix.** This is a reading surface, not app UI.
- No comments, no newsletter, no per-post analytics (can come later).

## Existing Stack (ground truth from repo)

- **Next.js 13.5** App Router, no `src/` dir, path alias `@/`
- **React 18**, **Tailwind 3.3** (`darkMode: "class"`), **framer-motion 10**
- Font: **Inter** via `next/font/google` (NOT Geist)
- Aesthetic: **light-first** (`bg-gray-50` / `dark:bg-gray-900`), pink/purple gradient-blur blobs, fixed rounded-pill nav, rounded cards, `react-icons`
- `next/image` configured for unsplash + hashnode remote hosts
- `app/`: `layout.tsx`, `page.tsx` (section-anchored homepage), `globals.css`, `tools/`, `api/hashnode/route.ts`
- Nav links in `lib/data.ts`; header filters out `Blog` and `Skills` from the pill nav

**The tutorials section MUST inherit this look** — Inter, light-first, rounded cards, gradient accents, framer-motion. It must NOT introduce a dark-monochrome aesthetic.

## Decisions

- **Route:** `/tutorials` (keeps `/blog` free; "tutorials" matches long-form framing).
- **Content location:** `content/tutorials/*.mdx`.
- **Content layer:** **Velite** — type-safe, schema-validated frontmatter at build time (missing required field = build error → SEO can't silently break). Actively maintained, unlike Contentlayer.
- **Code highlighting:** **Shiki** (via Velite's `rehype` pipeline), static at build time.
- **Prose styling:** `@tailwindcss/typography` (`prose` classes) tuned to match the site, NOT a generic theme.
- **Coexistence:** Hashnode "Latest Articles" homepage section is left as-is. Tutorials are a separate, additive surface.

## Architecture

### Content model (Velite schema)

`content/tutorials/<slug>.mdx`, frontmatter:

```yaml
title:        string   (required)
description:  string   (required, used for SEO + card)
publishedAt:  date     (required)
updatedAt:    date     (optional)
tags:         string[] (optional)
coverImage:   string   (optional, path under /public or remote)
draft:        boolean  (optional, default false — excluded from prod listing & sitemap)
```

Velite derives: `slug`, `readingTime` (computed), `toc` (heading tree), compiled MDX `code`.

### Routes (all net-new, additive)

| Route | Purpose |
|-------|---------|
| `app/tutorials/page.tsx` | Index: cards (cover, title, description, date, reading time, tags), newest first, drafts hidden in prod. Reuses site card/gradient styling. |
| `app/tutorials/[slug]/page.tsx` | Article: back-link → header (title, description, date, reading time) → centered prose column (~680–720px) → optional right-rail sticky TOC (desktop only). `generateMetadata` + `generateStaticParams`. |
| `app/tutorials/[slug]/opengraph-image.tsx` | Auto-generated OG image (light theme, matches site), built from frontmatter via `next/og`. |
| `app/tutorials/rss.xml/route.ts` | RSS feed generated from Velite data. |

Sitemap: add a `app/sitemap.ts` (or extend if present) to include published tutorials.

### MDX components (`components/mdx/`)

Owned, site-styled components mapped into the MDX renderer:

- `<Callout type="info|warn|tip">` — rounded, gradient-tinted note box
- `<Figure src alt caption>` — wraps `next/image` with caption
- `<Diagram>` — container for inline custom React illustrations
- Code blocks — Shiki output with filename label + copy button
- Headings — auto-anchored (slugified) for TOC links

### Data flow

```
content/tutorials/*.mdx
        │  (build time)
        ▼
     Velite  ── validates frontmatter, compiles MDX, runs Shiki, computes TOC + readingTime
        │
        ▼
  .velite/ generated data (typed `tutorials` array)
        │
        ├──► app/tutorials/page.tsx        (index listing)
        ├──► app/tutorials/[slug]/page.tsx (article + metadata + OG)
        ├──► app/tutorials/rss.xml         (feed)
        └──► app/sitemap.ts                (sitemap entries)
```

### SEO (automated from frontmatter)

- `generateMetadata` → title, description, canonical, OpenGraph, Twitter card
- JSON-LD `Article` schema injected per article page
- OG image auto-generated per article
- Sitemap + RSS include only non-draft tutorials

### Config touch points

- `next.config.js` — integrate Velite (build hook); `app/tutorials` is a normal route group otherwise. Add any new remote image hosts if used.
- `tailwind.config.js` — add `@tailwindcss/typography` plugin; ensure `content/**` and `.velite` globs covered as needed.
- `.gitignore` — ignore `.velite/` generated output.
- `package.json` — add `velite`, `@tailwindcss/typography`, `shiki` (+ rehype plugins as needed); wire `velite` into `dev`/`build` scripts.
- **Nav:** add a "Tutorials" entry (decide: pill nav vs. footer/secondary link). Default: surface in footer + a homepage link near the existing Articles section, to avoid crowding the pill nav. Final placement confirmed during implementation.

## Authoring workflow (end state)

1. Create `content/tutorials/build-a-voice-agent.mdx`.
2. Fill frontmatter (title, description, publishedAt, tags).
3. Write Markdown; drop `<Figure>`, `<Callout>`, `<Diagram>`, code fences inline.
4. `git push` → Vercel builds → Velite validates → published. SEO auto-generated.

## Testing / Verification

- **Build gate:** `next build` (with Velite) succeeds; a deliberately malformed frontmatter fails the build (schema validation proof).
- **Render check:** one sample tutorial renders with working code highlighting, a `<Figure>`, a `<Callout>`, and a TOC.
- **SEO check:** view-source shows OG/Twitter/JSON-LD; OG image route returns an image; `/tutorials/rss.xml` validates; sitemap includes the tutorial; draft posts excluded in prod build.
- **Regression check:** homepage "Latest Articles" (Hashnode) still renders; existing routes unaffected.
- **Responsive/dark check:** article + index look correct in light/dark and mobile/desktop, consistent with site aesthetic.

## Risks & Mitigations

- **Velite + Next 13.5 integration:** verify the supported wiring for this Next version early (build hook vs. plugin). If friction, fall back to `next-mdx-remote` + a small typed frontmatter parser (same content model, more manual).
- **Shiki build cost:** static at build; acceptable for a small number of long tutorials.
- **Aesthetic drift:** explicitly tune `prose` to the site rather than accept defaults.
