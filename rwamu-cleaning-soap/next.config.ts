import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Turbopack config
  turbopack: {},
  
  // Disable all caching in production
  generateBuildId: async () => {
    // Generate unique build ID to bust cache
    return `build-${Date.now()}`;
  },
  
  // Add headers to prevent caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
