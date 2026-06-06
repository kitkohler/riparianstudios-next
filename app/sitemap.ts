import type { MetadataRoute } from 'next';
import { JOURNAL_POSTS } from '@/lib/journal-posts';

const BASE_URL = 'https://www.riparianstudios.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/work`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/services`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/journal`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const journalPages = JOURNAL_POSTS.map(post => ({
    url: `${BASE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...journalPages];
}
