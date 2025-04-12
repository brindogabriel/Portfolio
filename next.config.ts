import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      pathname: '/photo-1542831371-29b0f74f9713'
          },
          {
              protocol: 'https',
              hostname: 'placehold.co',
              pathname: '/40x40/png'
                
        }
    ],
  },
};

export default nextConfig;
