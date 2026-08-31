import { TrackedVideo } from '@/components/tracked-video';

const siteUrl = 'https://5minsunsetinwhitesands.world';
const videoUrl =
  'https://raw.githubusercontent.com/ecarralt/5min-sunset-white-sands/3857f94c8acc0583946571837417f3e4ca6e0033/public/white-sands-sunset.mp4';
const videoPublishedDate = '2026-08-30';

export default function Home() {
  const videoSchema = {
    '@context': 'https://schema.org', '@type': 'VideoObject',
    name: '5 Minutes at White Sands',
    description: 'A five-minute sunset filmed among the white gypsum dunes of White Sands, New Mexico.',
    thumbnailUrl: [`${siteUrl}/og.png`],
    uploadDate: videoPublishedDate,
    contentUrl: videoUrl,
    embedUrl: `${siteUrl}/#film`,
    duration: 'PT5M4S',
    inLanguage: 'en-US',
    isFamilyFriendly: true,
    keywords: [
      'White Sands sunset',
      'White Sands National Park',
      'New Mexico sunset',
      'relaxing nature video',
      'five minute meditation',
    ],
    about: {
      '@type': 'Place',
      name: 'White Sands National Park',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'New Mexico',
        addressCountry: 'US',
      },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <header className="site-header">
        <a className="wordmark" href="#film" aria-label="5 Minutes at White Sands, home">
          <span className="sun-mark" aria-hidden="true" /><span>5 Minutes at White Sands</span>
        </a>
        <a className="skip-link" href="#about">About this film</a>
      </header>
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">White Sands, New Mexico</div>
        <h1 id="page-title">Five minutes.<br />One sunset.</h1>
        <p className="intro">Step away for a moment. Watch the light move across the world’s largest gypsum dunefield.</p>
      </section>
      <section className="film-wrap" id="film" aria-label="Sunset film">
        <div className="film-frame">
          <TrackedVideo videoUrl={videoUrl} />
        </div>
        <div className="film-meta" aria-label="Film details"><span>05:04</span><span>Sunset study</span><span>Sound on</span></div>
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <div><p className="section-number">01 / About</p><h2 id="about-title">A small window<br />into the evening.</h2></div>
        <div className="about-copy">
          <p>White Sands is unlike anywhere else: wave after wave of pale gypsum, holding the last colors of the day. This unhurried five-minute film is simply an invitation to pause and watch.</p>
          <p className="location-note">White Sands National Park<br />New Mexico, United States</p>
        </div>
      </section>
      <footer><span>Made for slower moments.</span><a href="#page-title">Back to the sun ↑</a></footer>
    </main>
  );
}
