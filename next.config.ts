import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
};

export default nextConfig;
