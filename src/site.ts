import github from '@/icons/github.svg?raw';
import instagram from '@/icons/instagram.svg?raw';
import linkedin from '@/icons/linkedin.svg?raw';
import substack from '@/icons/substack.svg?raw';
import tiktok from '@/icons/tiktok.svg?raw';
import x from '@/icons/x.svg?raw';
import youtube from '@/icons/youtube.svg?raw';

export const business = {
  legalName: 'Harsha Technologies LLC',
  founder: 'Harsha Somisetty',
  email: 'contact@harsha.so',
  url: 'https://harsha.so',
};

// Date shown on the privacy and terms pages. Change it when either page changes.
export const policiesUpdated = 'October 16, 2026';

// One code per domain: harsha.so, harshasomisetty.com.
export const facebookDomainVerification = [
  'hxcrualsge1d0lrkki1tja3juwzjan',
  'uaiupa3wadsils21q6cn8ndl248prf',
];

export const nav = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: 'https://substack.com/@harshasomisetty', name: 'Blog' },
  { href: '/projects', name: 'Projects' },
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

export const projects = [
  {
    title: 'Gameshift',
    link: 'https://gameshift.dev',
    description: 'Crypto API infrastructure on Solana for game studios',
    tech: 'Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/managed-wallets.jpg',
  },
  {
    title: 'Shopify Solana Pay',
    link: 'https://shopifydocs.solanapay.com',
    description:
      'Built a Shopify Payment processor that accepts USDC on Solana, thats done 100M in transaction volume',
    tech: 'React, Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/solanapay-shopify.jpg',
  },
  {
    title: 'Perpetuals Exchange',
    link: 'https://github.com/solana-labs/perpetuals',
    description:
      'Perpetuals Exchange built on Solana, with a focus on low fees and high throughput',
    tech: 'React, Typescript, Solana, Rust, Web3, Next.js, Tailwind, Vercel',
    image: '/perps-ui.jpg',
  },
  {
    title: 'TwitBlog',
    link: 'https://youtu.be/jrBStgziAyA',
    description:
      "Twitter Thread Aggregator that identifies all of a User's Threads, and identifies relevant topics",
    tech: 'MERN (Mongodb, Express, React, Node), Tailwind, NginX, multi-container Docker architecture, Python Data Processing. Deployed on DigitalOcean.',
    image: '/twit-blog.jpg',
  },
  {
    title: 'Checkra',
    link: 'https://youtu.be/fUmwLnyFbLY',
    description:
      'Podcast aggregator that creates podcast notes, timestamps, and identifies keywords/entities',
    tech: 'Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku.',
    image: '/checkra.jpg',
  },
];
