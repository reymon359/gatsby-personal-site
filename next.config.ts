import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/map',
        destination: 'https://www.google.com/maps/d/viewer?mid=1O0IseePWpXqpT0v6srZyZMRDAvHhpWDg',
        permanent: false,
      },
      {
        source: '/chat',
        destination: 'https://calendar.app.google/oR6Lt3FS5evzANkbA',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
