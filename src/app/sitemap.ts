import { routes } from '../lib/constants';

export default async function sitemap() {
  const routeUrls = Object.keys(routes).map((route) => ({
    url: `https://harshasomisetty.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routeUrls];
}
