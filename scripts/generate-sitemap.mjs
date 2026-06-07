import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataPath = path.join(root, 'src/shared/Data.jsx')
const outPath = path.join(root, 'public/sitemap.xml')

const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.mycomedic.com.my').replace(/\/$/, '')

function slugify(value = '') {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const content = fs.readFileSync(dataPath, 'utf8')

const productsBlock = content.match(/const initialProducts = \[([\s\S]*?)\n\s*\]\s*\n\s*export default/)?.[1] || ''
const productSlugs = []
const productChunks = productsBlock.split(/\n    \{\n/).slice(1)

for (const chunk of productChunks) {
  const pageId = chunk.match(/pageId:\s*'([^']+)'/)?.[1]
  const name = chunk.match(/name:\s*'([^']+)'/)?.[1]
  if (pageId) productSlugs.push(pageId)
  else if (name) productSlugs.push(slugify(name))
}

const categoriesBlock = content.match(/const productCategories = \[([\s\S]*?)\n\s*\]\s*\n\s*const initialProducts/)?.[1] || ''
const categoryNames = [...categoriesBlock.matchAll(/name:\s*'([^']+)'/g)].map((m) => m[1])

const staticPaths = ['/', '/about', '/contact', '/career', '/internship', '/products']

const urls = [
  ...staticPaths.map((p) => ({ loc: `${SITE_URL}${p}`, priority: p === '/' ? '1.0' : '0.8' })),
  ...productSlugs.map((slug) => ({ loc: `${SITE_URL}/product/${slug}`, priority: '0.7' })),
  ...categoryNames.map((name) => ({
    loc: `${SITE_URL}/products/category/${name.toLowerCase().replace(/\s+/g, '-')}`,
    priority: '0.6'
  }))
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

fs.writeFileSync(outPath, xml)
console.log(`Generated sitemap with ${urls.length} URLs → public/sitemap.xml`)
