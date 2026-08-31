import type { Metadata } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geist = Geist({ variable: '--font-sans', subsets: ['latin'] });
const instrument = Instrument_Serif({ variable: '--font-display', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://5minsunsetinwhitesands.world'),
  title: '5 Minutes at White Sands | A Sunset Film',
  description: 'Pause for a five-minute sunset across the white gypsum dunes of White Sands, New Mexico. A quiet, cinematic moment from the desert.',
  keywords: ['White Sands sunset', 'White Sands National Park video', 'New Mexico sunset', 'relaxing nature video', 'five minute meditation'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'video.other',
    url: '/',
    siteName: '5 Minutes at White Sands',
    title: '5 Minutes at White Sands | A Sunset Film',
    description: 'Watch a quiet five-minute sunset across the white gypsum dunes of White Sands National Park, New Mexico.',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'A warm sunset over the white gypsum dunes at White Sands National Park' }],
    videos: [{
      url: 'https://raw.githubusercontent.com/ecarralt/5min-sunset-white-sands/3857f94c8acc0583946571837417f3e4ca6e0033/public/white-sands-sunset.mp4',
      secureUrl: 'https://raw.githubusercontent.com/ecarralt/5min-sunset-white-sands/3857f94c8acc0583946571837417f3e4ca6e0033/public/white-sands-sunset.mp4',
      type: 'video/mp4',
      width: 1280,
      height: 720,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Minutes at White Sands | A Sunset Film',
    description: 'Watch a quiet five-minute sunset across the white gypsum dunes of White Sands National Park, New Mexico.',
    images: [{ url: '/og.png', alt: 'A warm sunset over the white gypsum dunes at White Sands National Park' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrument.variable}`}>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4TP6V3CQZK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-4TP6V3CQZK');`}
      </Script>
    </html>
  );
}
