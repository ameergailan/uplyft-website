/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure static files are properly handled
  async rewrites() {
    return [
      {
        source: '/agency-growth-video.mp4',
        destination: '/agency-growth-video.mp4',
      },
    ];
  },
}

module.exports = nextConfig
