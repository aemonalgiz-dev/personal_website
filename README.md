# jeffreygordon.dev

A personal site, built as static HTML. Astro renders it at build time, so what
ships is markup, one stylesheet per page and two self-hosted fonts; the only
JavaScript is the theme toggle.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/ as it will be served
```

Node 18.20+ or 20.3+.

## Where The Content Lives

Nothing that reads as copy lives in a template. Edit these and the pages follow.

| | |
|---|---|
| `src/data/site.ts` | Name, tagline, email, GitHub handle, tutorial site URL, nav |
| `src/data/experience.ts` | Every role, its figures, its bullets; education, skills, languages |
| `src/data/writing.ts` | Papers and articles that link out |
| `src/data/community.ts` | Open source involvement and personal interests |
| `src/data/repos.ts` | Which GitHub repos are featured, which are hidden |
| `src/content/writing/` | Markdown posts, rendered at `/writing/<filename>` |

`src/data/site.ts` is also read by `astro.config.mjs`, so the canonical URL and
the sitemap follow from the same `url` field.

## The GitHub Listing

`/code` fetches your public repositories from the GitHub API **at build time**,
so the page is static but the star counts and languages are current as of the
last deploy. Redeploy to refresh.

`getRepos` in `src/lib/github.ts` never throws. A rate limit, a wrong handle or
no network at all returns an empty listing and a message the page renders in
place of the repos, because a personal site should not fail to build over
someone else's API. Set `GITHUB_TOKEN` in the environment to raise the limit
from 60 requests an hour to 5,000. Worth doing on Amplify, unnecessary locally.

Repos in `featured` are pulled to the top in order and use the `blurb` you write
rather than the GitHub description. A name that matches nothing is skipped
silently. With no picks at all, the three most-starred repos are featured
instead, so the page is useful before the file is filled in.

## Adding A Post

Drop a markdown file in `src/content/writing/`:

```markdown
---
title: Why voice agent KPIs lie to you
description: Containment looks healthy right until you look at who hung up.
date: 2026-09-01
topics: ['Voice AI', 'Evaluation']
draft: false
---
```

`draft: true` shows in `npm run dev` and is excluded from the build. Files
starting with `_` are ignored entirely. Until the first post exists the build
logs a warning that the collection is empty, which is accurate and harmless.

## Design

One stylesheet of tokens in `src/styles/global.css`; everything else is scoped
to its component. Light is the base palette and dark redefines only the colors,
in two places: a `prefers-color-scheme` block for the system setting and a
`[data-theme]` block so the toggle wins in both directions. Every text color
clears WCAG AA against its background in both themes.

Two self-hosted families through Astro's font pipeline: Source Serif 4 for
reading, IBM Plex Mono for labels and metadata. No external font requests.

## Deploying

The site is hosted on AWS Amplify, connected to the GitHub repository. Every
push to `main` rebuilds and redeploys it. `amplify.yml` holds the build
settings: Node 22, `npm ci`, `npm run build`, output in `dist`. Add
`GITHUB_TOKEN` as an environment variable in the Amplify console, and keep
`site.url` in `src/data/site.ts` set to the real domain so canonical URLs and
the sitemap are right.
