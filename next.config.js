const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export, served by Cloudflare Pages.
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
