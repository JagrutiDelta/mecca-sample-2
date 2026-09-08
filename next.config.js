const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "pdfjs-dist$": path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.min.mjs"),
        "pdfjs-dist/build/pdf.mjs$": path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.min.mjs"),
      };
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
