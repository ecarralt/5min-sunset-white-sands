const siteUrl = 'https://5minsunsetinwhitesands.world';
const videoUrl =
  'https://raw.githubusercontent.com/ecarralt/5min-sunset-white-sands/3857f94c8acc0583946571837417f3e4ca6e0033/public/white-sands-sunset.mp4';

export function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>2026-08-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <video:video>
      <video:thumbnail_loc>${siteUrl}/og.png</video:thumbnail_loc>
      <video:title>5 Minutes at White Sands</video:title>
      <video:description>A quiet five-minute sunset filmed among the white gypsum dunes of White Sands National Park, New Mexico.</video:description>
      <video:content_loc>${videoUrl}</video:content_loc>
      <video:duration>304</video:duration>
      <video:publication_date>2026-08-30</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:tag>White Sands sunset</video:tag>
      <video:tag>White Sands National Park</video:tag>
      <video:tag>New Mexico</video:tag>
      <video:tag>relaxing nature video</video:tag>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
