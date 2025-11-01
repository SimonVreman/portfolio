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

const baseUrl = 'https://simonvreman.nl'

export default async function sitemap() {
  const articlesDirectory = path.join(process.cwd(), 'src', 'app', '(pages)', 'a')
  const slugs = await getArticleSlugs(articlesDirectory)
  const articles = slugs.map((slug) => ({
    url: `${baseUrl}/a/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [
    ...articles,
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ]
}
