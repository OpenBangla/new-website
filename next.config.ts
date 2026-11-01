// https://nextjs.org/docs/messages/export-image-api

import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: "/new-website",
  assetPrefix: "/new-website",
  distDir: "out/new-website",
};

export default withMDX(config);
