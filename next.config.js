/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react", "sanity"],
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com"],
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
      ".jsx": [".jsx", ".tsx"],
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
