import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the tracing root to this project so `standalone` output lands at
  // .next/standalone/server.js (not nested under a wrongly-inferred root).
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
