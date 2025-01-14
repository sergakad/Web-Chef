import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },
};

export default nextConfig;
