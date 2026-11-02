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
  'So I taught myself to code at 15, triple majored in Math, CS, and Stats at 20, semi-retired at 22, and finished my bucket list at 24.',
];
export const hook = "But after achieving everything I wanted, I'm at the part of life that comes after.";
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

// summary = the one-line description on the home page and /projects; tech = /projects only.
export const projects = [
  {
    title: 'FullFrame',
    year: 2026,
    summary: 'CRM and content manager for Instagram',
    link: 'https://getfullframe.com',
    tech: 'Next.js, TypeScript, Postgres, LLM drafting agent.',
    image: '/fullframe.jpg',
  },
  {
    title: 'Gameshift',
    year: 2024,
    summary: 'Crypto gaming infrastructure on Solana',
    link: 'https://gameshift.dev',
    tech: 'Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/managed-wallets.jpg',
  },
  {
    title: 'Shopify X Solana',
    year: 2023,
    summary: 'Enabling crypto payments for merchants, $100M tx volume',
    link: 'https://shopifydocs.solanapay.com',
    tech: 'React, Typescript, Solana, Next.js, Tailwind, Vercel',
    image: '/solanapay-shopify.jpg',
  },
  {
    title: 'Perpetuals',
    year: 2023,
    summary: 'Low-fee perpetuals on Solana',
    link: 'https://github.com/solana-labs/perpetuals',
    tech: 'React, Typescript, Solana, Rust, Web3, Next.js, Tailwind, Vercel',
    image: '/perps-ui.jpg',
  },
  {
    title: 'TwitBlog',
    year: 2021,
    summary: 'Twitter thread aggregator',
    link: 'https://youtu.be/jrBStgziAyA',
    tech: 'MERN (Mongodb, Express, React, Node), Tailwind, NginX, multi-container Docker architecture, Python Data Processing. Deployed on DigitalOcean.',
    image: '/twit-blog.jpg',
  },
  {
    title: 'Checkra',
    year: 2020,
    summary: 'Podcast notes, timestamps, and keywords',
    link: 'https://youtu.be/fUmwLnyFbLY',
    tech: 'Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku.',
    image: '/checkra.jpg',
  },
];
