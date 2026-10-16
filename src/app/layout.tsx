import Navbar from '@/components/Navbar';
import { business } from '@/lib/business';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: `${business.legalName} is a software consulting firm led by ${business.founder}.`,
  openGraph: {
    title: business.name,
    description: business.tagline,
    url: business.url,
    siteName: business.name,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://harsha.so/avatar.jpg',
        width: 1200,
        height: 630,
        alt: business.founder,
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
    title: business.name,
    card: 'summary_large_image',
  },
  verification: {
    other: {
      'facebook-domain-verification': 'hxcrualsge1d0lrkki1tja3juwzjan',
    },
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
            <footer className="mt-16 pt-6 border-t border-neutral-800 text-sm text-neutral-500 flex flex-wrap gap-x-4 gap-y-2">
              <span>
                © {new Date().getFullYear()} {business.legalName}
              </span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
