import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'R&W Tree Service LLC | Tree Removal, Trimming & Stump Grinding in Elizabeth, NJ',
  description: 'Top-rated tree service in Elizabeth, NJ. R&W Tree Service LLC offers expert tree removal, trimming, stump grinding, and 24/7 emergency response. Call (908) 449-9517.',
  keywords: 'tree service Elizabeth NJ, tree removal Elizabeth NJ, stump grinding NJ, emergency tree service NJ, Union County tree service',
  alternates: {
    canonical: 'https://www.rwtreeservicenj.com',
  },
  openGraph: {
    title: 'R&W Tree Service LLC | Tree Removal, Trimming & Stump Grinding in Elizabeth, NJ',
    description: 'Top-rated tree service in Elizabeth, NJ. R&W Tree Service LLC offers expert tree removal, trimming, stump grinding, and 24/7 emergency response. Call (908) 449-9517.',
    url: 'https://www.rwtreeservicenj.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'R&W Tree Service LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R&W Tree Service LLC | Tree Removal, Trimming & Stump Grinding in Elizabeth, NJ',
    description: 'Top-rated tree service in Elizabeth, NJ. R&W Tree Service LLC offers expert tree removal, trimming, stump grinding, and 24/7 emergency response. Call (908) 449-9517.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.position': '40.6640;-74.2107',
    'geo.placename': 'Elizabeth',
    'geo.region': 'US-NJ',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} bg-forest text-cream scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased overflow-x-hidden selection:bg-lime selection:text-forest">
        {children}
      </body>
    </html>
  );
}
