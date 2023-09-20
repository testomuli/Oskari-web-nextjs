import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import path from 'path'
import * as url from 'url'

/** @type {import('next').NextConfig} */

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  options: {
    extension: /\.(md|mdx)?$/,
    remarkPlugins: [remarkGfm],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
