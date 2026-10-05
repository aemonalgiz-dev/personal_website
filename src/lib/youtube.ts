import { site } from '../data/site';

export interface Video {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  description: string | null;
}

export interface VideoResult {
  videos: Video[];
  /** Non-null when the listing could not be fetched; surfaced on the page. */
  error: string | null;
  /** Which route produced the list, so the page can explain a short one. */
  source: 'api' | 'rss' | 'none';
  /** True when the RSS route capped the list at its 15-entry maximum. */
  truncated: boolean;
}

const EMPTY: VideoResult = { videos: [], error: null, source: 'none', truncated: false };

/** The handful of XML entities that actually turn up in video titles. */
function decode(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

interface PlaylistItem {
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    resourceId: { videoId: string };
  };
}

/**
 * The full catalogue, via the Data API. A channel's uploads playlist id is its
 * channel id with the `UC` prefix swapped for `UU`, which saves a channels.list
 * round trip.
 */
async function viaApi(channelId: string, key: string): Promise<VideoResult> {
  const uploads = `UU${channelId.slice(2)}`;
  const videos: Video[] = [];
  let pageToken = '';

  for (let page = 0; page < 10; page++) {
    const url =
      'https://www.googleapis.com/youtube/v3/playlistItems' +
      `?part=snippet&maxResults=50&playlistId=${uploads}` +
      (pageToken ? `&pageToken=${pageToken}` : '') +
      `&key=${key}`;

    const res = await fetch(url);
    if (!res.ok) {
      return {
        ...EMPTY,
        error: `The YouTube Data API returned ${res.status}.`,
      };
    }

    const json = (await res.json()) as {
      items?: PlaylistItem[];
      nextPageToken?: string;
    };

    for (const item of json.items ?? []) {
      const { title, description, publishedAt, resourceId } = item.snippet;
      // Deleted and private uploads stay in the playlist as placeholders.
      if (title === 'Deleted video' || title === 'Private video') continue;
      videos.push({
        id: resourceId.videoId,
        title,
        url: `https://www.youtube.com/watch?v=${resourceId.videoId}`,
        publishedAt,
        description: description?.trim() || null,
      });
    }

    if (!json.nextPageToken) break;
    pageToken = json.nextPageToken;
  }

  videos.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  return { videos, error: null, source: 'api', truncated: false };
}

/** The 15 most recent, with no API key. */
async function viaRss(channelId: string): Promise<VideoResult> {
  const res = await fetch(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
  );
  if (!res.ok) {
    return { ...EMPTY, error: `The YouTube feed returned ${res.status}.` };
  }

  const xml = await res.text();
  const videos: Video[] = [];

  for (const [, entry] of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    const published = entry.match(/<published>(.*?)<\/published>/)?.[1];
    if (!id || !title || !published) continue;

    const description = entry.match(
      /<media:description>([\s\S]*?)<\/media:description>/,
    )?.[1];

    videos.push({
      id,
      title: decode(title).trim(),
      url: `https://www.youtube.com/watch?v=${id}`,
      publishedAt: published,
      description: description ? decode(description).trim() || null : null,
    });
  }

  videos.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  return {
    videos,
    error: null,
    source: 'rss',
    // The feed serves at most 15 entries, so a full one means there are more.
    truncated: videos.length >= 15,
  };
}

/**
 * Fetches the channel's videos at build time. Never throws: no channel id, no
 * network or a bad response degrades to an empty list and a message the page
 * renders, rather than failing the build.
 *
 * With `YOUTUBE_API_KEY` set this returns the whole catalogue. Without it, the
 * public RSS feed returns the 15 most recent and nothing older.
 */
export async function getVideos(): Promise<VideoResult> {
  const channelId = site.youtube.channelId?.trim();
  if (!channelId) {
    return { ...EMPTY, error: 'No YouTube channel id configured in src/data/site.ts.' };
  }

  const key = import.meta.env.YOUTUBE_API_KEY ?? process.env.YOUTUBE_API_KEY;

  try {
    if (key) {
      const result = await viaApi(channelId, key);
      // A bad or over-quota key should not cost the whole listing.
      if (!result.error) return result;
    }
    return await viaRss(channelId);
  } catch (err) {
    return {
      ...EMPTY,
      error: `Could not reach YouTube (${(err as Error).message}).`,
    };
  }
}
