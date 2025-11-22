import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['nail-reader-activated-para.trycloudflare.com'],
  },
  allowedDevOrigins: ['*'], // Add your dev origin here
  reactStrictMode: false,
};

export default nextConfig;
