import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/sln.js',
        destination: 'https://cdn.seline.so/seline.js',
      },
      {
        source: '/_sln/:path*',
        destination: 'https://api.seline.so/:path*',
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
