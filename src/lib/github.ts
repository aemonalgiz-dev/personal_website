import { site } from '../data/site';
import { featured, hidden, maxOther, minStars } from '../data/repos';

export interface Repo {
  name: string;
  url: string;
  description: string | null;
  /** Your own framing, for featured repos. Overrides `description` when set. */
  blurb?: string;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  pushedAt: string;
  homepage: string | null;
  archived: boolean;
}

export interface RepoResult {
  featured: Repo[];
  other: Repo[];
  /** Non-null when the listing could not be fetched; surfaced on the page. */
  error: string | null;
  totalStars: number;
}

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  pushed_at: string;
  homepage: string | null;
  archived: boolean;
  fork: boolean;
}

const EMPTY: RepoResult = { featured: [], other: [], error: null, totalStars: 0 };

function toRepo(r: GitHubRepo): Repo {
  return {
    name: r.name,
    url: r.html_url,
    description: r.description,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    topics: r.topics ?? [],
    pushedAt: r.pushed_at,
    homepage: r.homepage || null,
    archived: r.archived,
  };
}

/**
 * Fetches public repositories at build time. Never throws: a network failure,
 * a rate limit, or an unset handle degrades to an empty listing with an
 * explanatory message rather than failing the build.
 */
export async function getRepos(): Promise<RepoResult> {
  const user = site.github?.trim();
  if (!user) {
    return { ...EMPTY, error: 'No GitHub handle configured in src/data/site.ts.' };
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': `${user}-personal-site`,
  };

  // Optional: lifts the rate limit from 60/hr to 5,000/hr on CI.
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const all: GitHubRepo[] = [];

  try {
    for (let page = 1; page <= 4; page++) {
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(user)}/repos` +
          `?per_page=100&sort=pushed&page=${page}`,
        { headers },
      );

      if (!res.ok) {
        const reason =
          res.status === 404
            ? `GitHub user "${user}" not found.`
            : res.status === 403
              ? 'GitHub API rate limit reached. Set GITHUB_TOKEN to raise it.'
              : `GitHub API returned ${res.status}.`;
        return { ...EMPTY, error: reason };
      }

      const batch = (await res.json()) as GitHubRepo[];
      all.push(...batch);
      if (batch.length < 100) break;
    }
  } catch (err) {
    return {
      ...EMPTY,
      error: `Could not reach the GitHub API (${(err as Error).message}).`,
    };
  }

  const hiddenSet = new Set(hidden.map((n) => n.toLowerCase()));
  const visible = all
    .filter((r) => !r.fork && !hiddenSet.has(r.name.toLowerCase()))
    .map(toRepo);

  const byName = new Map(visible.map((r) => [r.name.toLowerCase(), r]));

  const featuredRepos: Repo[] = [];
  for (const pick of featured) {
    const found = byName.get(pick.name.toLowerCase());
    if (found) {
      featuredRepos.push({ ...found, blurb: pick.blurb });
      byName.delete(pick.name.toLowerCase());
    }
  }

  // No explicit picks yet? Feature the three most-starred repos instead, so the
  // page is useful before the curation file is filled in.
  if (featuredRepos.length === 0) {
    const top = [...byName.values()]
      .filter((r) => r.stars > 0 || r.description)
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 3);
    for (const r of top) {
      featuredRepos.push(r);
      byName.delete(r.name.toLowerCase());
    }
  }

  const other = [...byName.values()]
    .filter((r) => r.stars >= minStars)
    .sort(
      (a, b) =>
        b.stars - a.stars || Date.parse(b.pushedAt) - Date.parse(a.pushedAt),
    )
    .slice(0, maxOther);

  return {
    featured: featuredRepos,
    other,
    error: null,
    totalStars: visible.reduce((sum, r) => sum + r.stars, 0),
  };
}

/** Rough, readable language colors matching GitHub's palette. */
export const languageColor: Record<string, string> = {
  Python: '#3572A5',
  Rust: '#dea584',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Go: '#00ADD8',
  Java: '#b07219',
  'C#': '#178600',
  C: '#555555',
  'C++': '#f34b7d',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Astro: '#ff5a03',
};
