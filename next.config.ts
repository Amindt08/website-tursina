import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    unoptimized: true, 
    domains: [
      "via.placeholder.com",
      "scontent.cdninstagram.com",
    ],
  },
  trailingSlash: true, 
};

export default nextConfig;
