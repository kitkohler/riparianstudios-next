// Blog posts migrated to lib/journal-posts.ts
// This file reserved for future Airtable-driven case studies

export interface WorkPost {
  slug: string;
  title: string;
  body: string;
  videoId?: string;
  needsVideo?: boolean;
  date?: string;
}

export const WORK_POSTS: WorkPost[] = [];

export function getPostBySlug(_slug: string): WorkPost | undefined {
  return undefined;
}
