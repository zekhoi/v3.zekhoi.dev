/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  env: {
    MEDIUM_API_URL: process.env.MEDIUM_API_URL,
    RESOURCES_API_URL: process.env.RESOURCES_API_URL,
    MYDOMAIN: process.env.MYDOMAIN,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // https://github.com/vercel/next.js/issues/7755
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          "builtin-modules": false,
          worker_threads: false,
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
