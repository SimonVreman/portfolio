import { promises as fs } from 'fs'
import path from 'path'

async function getArticleSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  })

  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(dir, path.join(entry.parentPath ?? entry.path, entry.name))
      return path.dirname(relativePath)
    })
    .map((slug) => slug.replace(/\\/g, '/'))
}

export default async function sitemap() {
  const articlesDirectory = path.join(process.cwd(), 'src', 'app', 'a')
  const slugs = await getArticleSlugs(articlesDirectory)

  return slugs.map((slug) => ({
    url: `https://simonvreman.nl/a/${slug}`,
    lastModified: new Date().toISOString(),
  }))
}
