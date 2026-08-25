import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dyj6gt4964deb.cloudfront.net",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/carta",
        destination: "https://oddmenu.com/es/p/ilovelubnan",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
