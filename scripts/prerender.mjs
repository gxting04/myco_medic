/**
 * Bakes a real <head> into a static HTML file for every route.
 *
 * The app is a client-rendered SPA behind a catch-all rewrite, so before this
 * script every URL served the same shell: the homepage's title, the homepage's
 * description, and — most damagingly — <link rel="canonical"> pointing at the
 * homepage. Every product page was therefore telling crawlers that the canonical
 * version of itself was the front page. Titles and canonicals only became
 * correct once React mounted and applySEO ran in a useEffect, which is invisible
 * to anything that does not execute JavaScript (link unfurlers in WhatsApp,
 * Facebook and LinkedIn among them) and is deprioritised even by crawlers that do.
 *
 * Output: dist/<route>/index.html per route. Vercel checks the filesystem before
 * applying rewrites, so these win over the SPA fallback; the rewrite stays as the
 * catch-all for anything not prerendered. The same JS bundle still hydrates each
 * file, and applySEO recomputes identical values, so there is no flicker or drift.
 *
 * Metadata is imported from the app's own modules via esbuild rather than parsed
 * out of the source, so the prerendered head cannot drift from the runtime head.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.mycomedic.com.my').replace(/\/$/, '')

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  throw new Error('prerender: dist/index.html not found — run vite build first.')
}

// ---------------------------------------------------------------------------
// Load the app's real data and SEO helpers. They are browser modules, but the
// pure functions used here never touch document; only applySEO does, and it is
// not called. import.meta.env is stubbed for Node.
// ---------------------------------------------------------------------------
const tmpEntry = path.join(root, '.prerender-entry.mjs')
const tmpOut = path.join(root, '.prerender-bundle.mjs')

fs.writeFileSync(
  tmpEntry,
  `export { default as Data } from './src/shared/Data.jsx'
export * from './src/utils/seo.js'
export { getProductPath, getProductSeoTitle, getProductSeoDescription } from './src/utils/productUrl.js'
`
)

await build({
  entryPoints: [tmpEntry],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmpOut,
  logLevel: 'silent',
  external: ['react', 'react-dom', 'react-router-dom'],
  define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(SITE_URL) }
})

const mod = await import(`${tmpOut}?t=${Date.now()}`)
fs.rmSync(tmpEntry, { force: true })
fs.rmSync(tmpOut, { force: true })

const {
  Data,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  SITE_NAME,
  absoluteUrl,
  truncate,
  organizationJsonLd,
  localBusinessJsonLd,
  productJsonLd,
  breadcrumbJsonLd,
  getProductPath,
  getProductSeoTitle,
  getProductSeoDescription
} = mod

const categorySlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

// ---------------------------------------------------------------------------
// Route table — mirrors the props each page hands to <PageSEO> so the static
// head matches the runtime head exactly.
// ---------------------------------------------------------------------------
const routes = [
  {
    path: '/',
    title: 'Medical Supplies & Equipment Malaysia',
    description: DEFAULT_DESCRIPTION,
    jsonLd: organizationJsonLd()
  },
  {
    path: '/about',
    title: 'About Us',
    description:
      'Learn about Myco Medic — trusted medical supplies and equipment partner serving hospitals, clinics, and healthcare providers in Malaysia.'
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description:
      'Contact Myco Medic for medical supply enquiries, product quotes, and support. Email sales@mycomedic.com.my or reach us in Puchong, Selangor.',
    jsonLd: localBusinessJsonLd()
  },
  {
    path: '/career',
    title: 'Careers',
    description:
      'Join Myco Medic — career opportunities in medical supplies and healthcare distribution across Malaysia.'
  },
  {
    path: '/internship',
    title: 'Internship',
    description:
      'Myco Medic internship programme for students interested in medical supplies, sales, and healthcare business in Malaysia.'
  },
  { path: '/products', title: 'Products', description: DEFAULT_DESCRIPTION }
]

for (const category of Data.productCategories) {
  routes.push({
    path: `/products/category/${categorySlug(category.name)}`,
    title: category.name,
    description: category.description || `${category.name} medical products from Myco Medic Malaysia.`
  })
}

for (const product of Data.initialProducts) {
  const productPath = getProductPath(product)
  const description = getProductSeoDescription(product)
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    product.category && {
      name: product.category,
      path: `/products/category/${categorySlug(product.category)}`
    },
    { name: product.name, path: productPath }
  ].filter(Boolean)

  routes.push({
    path: productPath,
    title: getProductSeoTitle(product),
    description,
    image: product.images?.[0] || product.image,
    type: 'product',
    jsonLd: [productJsonLd(product, description), breadcrumbJsonLd(trail)].filter(Boolean)
  })
}

// ---------------------------------------------------------------------------
// Head construction
// ---------------------------------------------------------------------------
const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function buildHead({ title, description, path: routePath, image, type = 'website', jsonLd }) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageDescription = truncate(description || DEFAULT_DESCRIPTION)
  const pageImage = absoluteUrl(image || DEFAULT_IMAGE)
  const canonical = absoluteUrl(routePath)

  const tags = [
    `<title>${esc(pageTitle)}</title>`,
    `<meta name="description" content="${esc(pageDescription)}" />`,
    `<meta name="keywords" content="${esc(DEFAULT_KEYWORDS)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta name="author" content="${esc(SITE_NAME)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(pageTitle)}" />`,
    `<meta property="og:description" content="${esc(pageDescription)}" />`,
    `<meta property="og:type" content="${esc(type)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(pageImage)}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_MY" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(pageTitle)}" />`,
    `<meta name="twitter:description" content="${esc(pageDescription)}" />`,
    `<meta name="twitter:image" content="${esc(pageImage)}" />`
  ]

  if (jsonLd && (!Array.isArray(jsonLd) || jsonLd.length)) {
    // </script> inside JSON would close the tag early.
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json" id="page-json-ld">${json}</script>`)
  }

  return tags.map((tag) => `    ${tag}`).join('\n')
}

// Strip the tags applySEO owns, so the shell's homepage defaults cannot survive
// into a product page's head.
function stripManagedTags(head) {
  return head
    .replace(/[ \t]*<title>[\s\S]*?<\/title>\r?\n?/gi, '')
    .replace(/[ \t]*<meta\s+name="(description|keywords|robots|author|twitter:[^"]*)"[^>]*>\r?\n?/gi, '')
    .replace(/[ \t]*<meta\s+property="og:[^"]*"[^>]*>\r?\n?/gi, '')
    .replace(/[ \t]*<link\s+rel="canonical"[^>]*>\r?\n?/gi, '')
    .replace(/[ \t]*<script[^>]*id="page-json-ld"[\s\S]*?<\/script>\r?\n?/gi, '')
}

const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const headMatch = shell.match(/<head>([\s\S]*?)<\/head>/i)
if (!headMatch) throw new Error('prerender: could not locate <head> in dist/index.html')

let written = 0
const seen = new Set()

for (const route of routes) {
  if (seen.has(route.path)) {
    throw new Error(`prerender: duplicate route ${route.path} — two entries would overwrite each other.`)
  }
  seen.add(route.path)

  const head = `${stripManagedTags(headMatch[1]).replace(/\s*$/, '')}\n${buildHead(route)}\n  `
  const html = shell.replace(headMatch[0], `<head>${head}</head>`)

  const outDir = route.path === '/' ? dist : path.join(dist, route.path)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  written += 1
}

console.log(`Prerendered ${written} routes with per-page head → dist/`)
