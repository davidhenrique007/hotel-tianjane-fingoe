import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  // outputFileTracingRoot agora é nível raiz, não dentro de experimental
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
