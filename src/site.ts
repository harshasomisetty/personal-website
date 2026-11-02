import github from '@/icons/github.svg?raw';
import instagram from '@/icons/instagram.svg?raw';
import linkedin from '@/icons/linkedin.svg?raw';
import substack from '@/icons/substack.svg?raw';
import tiktok from '@/icons/tiktok.svg?raw';
import x from '@/icons/x.svg?raw';
import youtube from '@/icons/youtube.svg?raw';

// Home page bio and the question under it; together they are the default meta description.
export const bio = [
  'I thought societal success was all that mattered.',
  'So I taught myself programming at 15, triple majored in Math, CS, and Stats at 20, semi-retired at 22, and finished my bucket list at 24.',
];
export const hook = "But now I'm at the part of life that comes after.";
export const tagline = [...bio, hook].join(' ');

export const business = {
  legalName: 'Harsha Technologies LLC',
  founder: 'Harsha Somisetty',
  email: 'contact@harshasomisetty.com',
  // Shown on the home page and footer instead of a mailto link.
  emailText: 'contact [at] harshasomisetty.com',
  url: 'https://harsha.so',
};

// Date shown on the privacy and terms pages. Change it when either page changes.
export const policiesUpdated = 'October 27, 2026';

// One code per domain: harsha.so, harshasomisetty.com.
export const facebookDomainVerification = [
  'hxcrualsge1d0lrkki1tja3juwzjan',
  'uaiupa3wadsils21q6cn8ndl248prf',
];

// Home page order.
export const socials = [
  { title: 'Instagram', href: 'https://www.instagram.com/harshasomisetty', icon: instagram },
  { title: 'TikTok', href: 'https://www.tiktok.com/@harshasomisetty7', icon: tiktok },
  { title: 'Substack', href: 'https://substack.com/@harshasomisetty', icon: substack },
  { title: 'X', href: 'https://www.x.com/HarshaSomisetty', icon: x },
  { title: 'Youtube', href: 'https://www.youtube.com/@harshasomisetty', icon: youtube },
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/harshasomisetty', icon: linkedin },
  { title: 'Github', href: 'https://www.github.com/harshasomisetty', icon: github },
];

// summary = one line on the home page; description + tech = /projects.
export const projects = [
  {
    title: 'FullFrame',
    summary: 'CRM and content manager for Instagram',
    link: 'https://getfullframe.com',
    description:
      'Creator data management system and AI setter for coaches who sell through Instagram DMs: every lead from post to payment on one screen, replies drafted in the coach\'s voice, and content ranked by the calls it booked',
    tech: 'Next.js, TypeScript, Postgres, LLM drafting agent.',
    image: '/fullframe.jpg',
  },
  {
    title: 'Gameshift',
    summary: 'Crypto API infrastructure on Solana for game studios',
    link: 'https://gameshift.dev',
    description: 'Crypto API infrastructure on Solana for game studios',
    tech: 'Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/managed-wallets.jpg',
  },
  {
    title: 'Shopify Solana Pay',
    summary: 'USDC payments for Shopify, $100M in volume',
    link: 'https://shopifydocs.solanapay.com',
    description:
      "Built a Shopify Payment processor that accepts USDC on Solana, that's done $100M in transaction volume",
    tech: 'React, Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/solanapay-shopify.jpg',
  },
  {
    title: 'Perpetuals Exchange',
    summary: 'Low-fee perpetuals exchange on Solana',
    link: 'https://github.com/solana-labs/perpetuals',
    description:
      'Perpetuals Exchange built on Solana, with a focus on low fees and high throughput',
    tech: 'React, Typescript, Solana, Rust, Web3, Next.js, Tailwind, Vercel',
    image: '/perps-ui.jpg',
  },
  {
    title: 'TwitBlog',
    summary: 'Twitter thread aggregator',
    link: 'https://youtu.be/jrBStgziAyA',
    description:
      "Twitter Thread Aggregator that identifies all of a User's Threads, and identifies relevant topics",
    tech: 'MERN (Mongodb, Express, React, Node), Tailwind, NginX, multi-container Docker architecture, Python Data Processing. Deployed on DigitalOcean.',
    image: '/twit-blog.jpg',
  },
  {
    title: 'Checkra',
    summary: 'Podcast notes, timestamps, and keywords',
    link: 'https://youtu.be/fUmwLnyFbLY',
    description:
      'Podcast aggregator that creates podcast notes, timestamps, and identifies keywords/entities',
    tech: 'Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku.',
    image: '/checkra.jpg',
  },
];
