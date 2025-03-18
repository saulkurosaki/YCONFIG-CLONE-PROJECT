/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react", "sanity"],
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com"],
  },
  experimental: {
    esmExternals: "loose",
  },
};

export default nextConfig;
