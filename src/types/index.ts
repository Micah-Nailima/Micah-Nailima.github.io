/**
 * Global type definitions
 */

import type { CollectionEntry } from 'astro:content'

/** Post image */
export interface PostImage {
  url: string;
  alt?: string;
}

/** Post frontmatter */
export interface PostFrontmatter {
  title: string;
  description?: string;
  date: Date;
  tags?: string[];
  image?: PostImage;
  author?: string;
  updated?: Date;
  url?: string;
  pinned?: boolean;
  draft?: boolean;
}

/** Post data */
export interface PostData {
  id: string;
  url: string;
  title: string;
  date: string | Date;
  tags: string[];
  description?: string;
  excerptHtml: string;
  pinned?: boolean;
}

/** Post collection entry */
export type PostEntry = CollectionEntry<'posts'>;

/** Structured data */
export interface StructuredData {
  '@context'?: string;
  '@type'?: string;
  [key: string]: unknown;
}

/** Navigation item */
export interface NavItem {
  href: string;
  label: string;
}

/** Social link */
export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
}
