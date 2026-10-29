import type { NextConfig } from "next";

/**
 * Static export → `.out/` after `npm run build`.
 * Upload ALL of `.out/` (including `_next/`) into: public_html/home
 *
 * NEXT_PUBLIC_BASE_PATH:
 * - "/home" → site URL is https://domain.com/home/
 * - ""      → public_html/home is the domain/subdomain document root
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  distDir: ".out",
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
