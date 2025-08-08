import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

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

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
