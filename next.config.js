/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
