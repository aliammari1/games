/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the game can be hosted on Cloudflare Pages (and any static host).
  output: "export",
  // Served from /ttt on the combined Cloudflare Pages project (see wrangler.toml).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
