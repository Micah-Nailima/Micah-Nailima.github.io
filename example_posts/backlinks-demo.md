---
title: "Backlinks Demo"
date: 2025-06-11
tags: ["tech", "backlinks", "showcase"]
description: "This post demonstrates the backlinks feature of the Astro Pudding theme."
---

This post links to the main showcase article: [Welcome to Pudding: Feature Showcase](./theme-showcase.md).

After running `pnpm build`, follow the link above to the showcase article and scroll to the bottom. You will see an automatically generated **references timeline** containing a card for this post. The number of references depends on how many published posts link to it.

**How it works:**
The Astro Pudding build script scans every Markdown post for local links and organizes them into a graph. When post B links to post A, a "backlink" from post B automatically appears at the bottom of post A. This is well suited to building a knowledge base such as a personal digital garden or wiki.

[Reference-style links][extensions] are supported too. The target file sets a custom slug, but the link still uses the source Markdown path, so you never have to maintain generated URLs by hand. Drafts, self-links and external links do not create backlinks.

[extensions]: ./plugins-and-extensions.md#article-links
