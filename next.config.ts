import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@jamsrui/react"],
  },
  transpilePackages: ["@jamsrui/react"],
};

export default nextConfig;
