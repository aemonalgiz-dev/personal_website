# Writing

Add a markdown file here and it appears on `/published` and at
`/published/<filename>`. Files starting with `_` (like this one) are ignored.

```markdown
---
title: Why voice agent KPIs lie to you
description: Containment looks healthy right up until you look at who is hanging up.
date: 2026-09-01
topics: ['Voice AI', 'Evaluation']
draft: false
---

Your first paragraph becomes the opening of the piece...
```

`draft: true` keeps a file out of production builds while still showing it in
`npm run dev`.

Externally published papers and articles live in `src/data/writing.ts` instead;
they link out rather than rendering here.
