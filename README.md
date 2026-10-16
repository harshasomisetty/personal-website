# harsha.so

Personal site for Harsha Somisetty and Harsha Technologies LLC. Built with
Astro and Tailwind, deployed by Cloudflare Pages (project `harsha-so`) on each
push to `master`. Also served at harshasomisetty.com.

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site in dist/
```

- Content: `content/` (about, blog posts, books), loaded in `src/content.config.ts`.
- Site data (contact info, socials, projects, Facebook verification codes): `src/site.ts`.
- Redirects (`/blog`, `/ig`, `/x`, `/yt`): `public/_redirects`.
