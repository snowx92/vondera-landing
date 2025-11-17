import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vondera.app';
  const locales = ['ar', 'en']; // Arabic first as primary market
  const currentDate = new Date();

  // Define routes with their SEO priorities and change frequencies
  const routes = [
    // High priority pages (1.0 - 0.9)
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/vmedia', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/vpay', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/vfunnel', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/vdomain', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/vinbox', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/vcommunity', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },

    // Medium-high priority pages (0.8)
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.8, changeFrequency: 'weekly' as const },

    // Medium priority pages (0.7)
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/developers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/apps', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tutorials', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/investment', priority: 0.7, changeFrequency: 'monthly' as const },

    // Legal pages (0.5)
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/refund', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and route
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route.path}`,
            en: `${baseUrl}/en${route.path}`,
          },
        },
      });
    });
  });

  return sitemap;
}
