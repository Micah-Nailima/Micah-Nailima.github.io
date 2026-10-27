// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkSpoiler from './src/plugin/remark-spoiler.js';
import remarkLinkPreview from './src/plugin/remark-link-preview.js';
import remarkPostLinks from './src/plugin/remark-post-links.js';
import remarkImageOptimize from './src/plugin/remark-image-optimize.js';

import svelte from '@astrojs/svelte';
import expressiveCode from 'astro-expressive-code';
import path from 'path';
import { siteConfig } from "./src/config/site.config.ts";

export default defineConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  image: {
    domains: [
      'docs.astro.build',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'res.cloudinary.com'
    ],
  },
  integrations: [
    svelte(),

    expressiveCode({
      themes: ['kanagawa-wave', 'kanagawa-lotus'],
      styleOverrides: {
        borderRadius: '8px',
        borderColor: 'var(--border-color)',
        codeFontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      },
      // Configure theme selector mapping
      themeCssSelector: (theme) => {
        // Map our theme toggle values to Expressive Code themes
        if (theme.name === 'kanagawa-wave') {
          return '[data-theme="dark"]';
        }
        if (theme.name === 'kanagawa-lotus') {
          return '[data-theme="light"]';
        }
        return false;
      },
      // Use the dark mode media query
      useDarkModeMediaQuery: true,
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkMath, remarkSpoiler,
        [remarkPostLinks, { base: siteConfig.base }],
        remarkLinkPreview, remarkImageOptimize,
      ],
      rehypePlugins: [rehypeKatex],
    }),
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      },
    },
  },
});
