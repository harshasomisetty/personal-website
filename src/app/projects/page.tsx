import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  location: string;
  link: string;
  image?: string;
}

const projectsData: Record<string, ProjectCardProps> = {
  Gameshift: {
    title: 'Gameshift',
    link: 'https://gameshift.dev',
    description: 'Crypto API infrastructure on Solana for game studios',
    location: 'Web',
    tech: 'Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/managed-wallets.png',
  },
  ShopifySolanaPay: {
    title: 'Shopify Solana Pay',
    link: 'https://shopifydocs.solanapay.com',
    description:
      'Built a Shopify Payment processor that accepts USDC on Solana, thats done 100M in transaction volume',
    location: 'Web',
    tech: 'React, Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/solanapay-shopify.png',
  },
  PerpetualsExchange: {
    title: 'Perpetuals Exchange',
    link: 'https://github.com/solana-labs/perpetuals',
    description:
      'Perpetuals Exchange built on Solana, with a focus on low fees and high throughput',
    location: 'Web',
    tech: 'React, Typescript, Solana, Rust, Web3, Next.js, Tailwind, Vercel',
    image: '/perps-ui.png',
  },
  TwitBlog: {
    title: 'TwitBlog',
    link: 'https://youtu.be/jrBStgziAyA',
    description:
      "Twitter Thread Aggregator that identifies all of a User's Threads, and identifies relevant topics",
    location: 'Web',
    tech: 'MERN (Mongodb, Express, React, Node), Tailwind, NginX, multi-container Docker architecture, Python Data Processing. Deployed on DigitalOcean.',
    image: '/twit-blog.png',
  },
  Checkra: {
    title: 'Checkra',
    link: 'https://youtu.be/fUmwLnyFbLY',
    description:
      'Podcast aggregator that creates podcast notes, timestamps, and identifies keywords/entities',
    location: 'Web',
    tech: 'Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku.',
    image: '/checkra.png',
  },
};

export default function ExplorationsPage() {
  console.log('Rendering projects page');

  return (
    <PageLayout title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(projectsData).map(([key, project]) => (
          <Link
            href={
              project.link.startsWith('http')
                ? project.link
                : `http://${project.link}`
            }
            target="_blank"
            key={key}
            className="block group"
          >
            <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20">
              {project.image && (
                <div className="relative w-full h-56 overflow-hidden bg-black/10">
                  <Image
                    src={
                      project.image.startsWith('/')
                        ? project.image
                        : `/${project.image}.png`
                    }
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={key === 'Gameshift'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* <CardDescription className="text-sm text-muted-foreground">
                  {project.location}
                </CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">{project.description}</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-medium uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <p className="leading-relaxed">{project.tech}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
