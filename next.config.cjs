/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // This is to ensure that any server-only packages are not included in the client-side bundle.
    if (!isServer) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
        };
    }
    return config;
  },
};

module.exports = nextConfig;
