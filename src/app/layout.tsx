import Navbar from "../components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Harsha Somisetty",
    template: "%s | Harsha Somisetty",
  },
  description: "Harsha's Hub",
  openGraph: {
    title: "Harsha Somisetty",
    description: "Harsha's Hub",
    url: "https://harshasomisetty.me",
    siteName: "Harsha Somisetty",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Harsha Somisetty",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //     <html
    //   lang="en"
    //   className={clsx(
    //     'text-black bg-white dark:text-white dark:bg-[#111010]',
    //     kaisei.variable
    //   )}
    // >
    //   <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
    //     <Sidebar />
    //     <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
    //       {children}
    //       <Analytics />
    //     </main>
    //   </body>
    // </html>
    <html lang="en">
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 text-left">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
