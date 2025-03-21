/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['localhost', 'blacklabelagency.com'],
  },
};

export default nextConfig;
