import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://5minsunsetinwhitesands.world/sitemap.xml', host: 'https://5minsunsetinwhitesands.world' }; }
