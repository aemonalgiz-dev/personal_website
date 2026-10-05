// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      provider: fontProviders.google(),
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Iowan Old Style', 'Charter', 'Georgia', 'serif'],
    },
    {
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],
});
