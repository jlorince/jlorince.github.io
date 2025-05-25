/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Override the default output directory to match gh-pages expectation
  distDir: 'out',
};

module.exports = nextConfig;

