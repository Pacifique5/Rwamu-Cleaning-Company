import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable caching in development for immediate updates
  reactStrictMode: true,
  
  // Empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;
