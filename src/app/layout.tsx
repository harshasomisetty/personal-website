import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: {
    default: 'Harsha Somisetty',
    template: '%s | Harsha Somisetty',
  },
  description: "Harsha's personal website",
  openGraph: {
    title: 'Harsha Somisetty',
    description: "Harsha's personal website",
    url: 'https://harsha.so',
    siteName: 'Harsha Somisetty',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://harsha.so/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Harsha Profile Picture',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Harsha Somisetty',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row">
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 md:pl-8 w-full overflow-hidden">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
