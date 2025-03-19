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
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
