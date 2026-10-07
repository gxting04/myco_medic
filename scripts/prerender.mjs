/**
 * Prerenders every indexable route to static HTML, after `vite build`.
 *
 * The app is a client-rendered SPA, so without this every URL served the same
 * empty shell: <div id="root"></div> and the homepage's <head>. Google renders
 * JavaScript eventually, but link unfurlers (WhatsApp, Facebook, LinkedIn), most
 * AI crawlers and many smaller search engines never do, and even Google indexes
 * raw HTML first. Each route now ships its real content and its own head.
 *
 * How: src/entry-server.jsx renders the same route tree the browser uses, via
 * Vite's SSR module loader (so the @/ alias, JSX and env all behave as in the
 * app). <PageSEO> reports its props to a collector during that render, and the
 * head is built with the same getSeoTags() the browser uses — the static head
 * cannot drift from the runtime one, and there is no route table to keep in sync.
 *
 * Output (dist/):
 *   <route>/index.html  one per indexable route; Vercel serves files before rewrites
 *   404.html            the not-found page; Vercel serves it, with a 404 status,
 *                       for any URL that matches no file, redirect or rewrite
 *   app.html            empty, noindex shell for client-only routes (search,
 *                       checkout, legacy redirects) — see vercel.json rewrites
 *   sitemap.xml         exactly the routes that rendered as indexable
 *
 * The browser bundle replaces the prerendered markup on load (createRoot in
 * main.jsx), so per-browser state such as the quote list appears as before.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load React's production build for the render, as the shipped bundle does.
process.env.NODE_ENV = 'production'

const { createServer } = await import('vite')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')

const templatePath = path.join(dist, 'index.html')
if (!fs.existsSync(templatePath)) {
  throw new Error('prerender: dist/index.html not found — run vite build first.')
}
const template = fs.readFileSync(templatePath, 'utf8')

const ROOT_DIV = '<div id="root"></div>'
const headMatch = template.match(/<head>([\s\S]*?)<\/head>/i)
if (!headMatch || !template.includes(ROOT_DIV)) {
  throw new Error(
    `prerender: dist/index.html has no empty ${ROOT_DIV} — it is either not Vite's output or was already prerendered. Run \`npm run build\`.`
  )
}

// Strip the tags getSeoTags() owns, so the shell's homepage defaults cannot
// survive into another page's head.
const baseHead = headMatch[1]
  .replace(/[ \t]*<title>[\s\S]*?<\/title>\r?\n?/gi, '')
  .replace(/[ \t]*<meta\s+name="(description|keywords|robots|twitter:[^"]*)"[^>]*>\r?\n?/gi, '')
  .replace(/[ \t]*<meta\s+property="og:[^"]*"[^>]*>\r?\n?/gi, '')
  .replace(/[ \t]*<link\s+rel="canonical"[^>]*>\r?\n?/gi, '')
  .replace(/[ \t]*<script[^>]*id="page-json-ld"[\s\S]*?<\/script>\r?\n?/gi, '')
  .replace(/\s*$/, '')

function page(headTags, body = '') {
  const head = `${baseHead}\n${headTags.map((tag) => `    ${tag}`).join('\n')}\n  `
  return template.replace(headMatch[0], `<head>${head}</head>`).replace(ROOT_DIV, `<div id="root">${body}</div>`)
}

function writeRoute(routePath, html) {
  const outDir = routePath === '/' ? dist : path.join(dist, routePath)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
}

const xmlEscape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const vite = await createServer({
  root,
  mode: 'production',
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  // react-router-dom's "node" export is CommonJS unless module-sync is asked
  // for, and its named exports cannot be imported from the CJS build.
  ssr: { resolve: { externalConditions: ['module-sync'] } }
})

try {
  const { render, getPrerenderRoutes, PRODUCT_COUNT } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const { getSeoTags, seoHeadHtml, absoluteUrl } = await vite.ssrLoadModule('/src/utils/seo.js')

  const routes = getPrerenderRoutes()

  const seen = new Set()
  for (const { path: routePath } of routes) {
    if (seen.has(routePath)) {
      throw new Error(`prerender: duplicate route ${routePath} — two entries would overwrite each other.`)
    }
    seen.add(routePath)
  }
  const productRoutes = routes.filter((r) => r.path.startsWith('/product/')).length
  if (productRoutes !== PRODUCT_COUNT) {
    throw new Error(`prerender: ${productRoutes} product routes for ${PRODUCT_COUNT} products — every product needs a URL.`)
  }

  const sitemap = []
  const warnings = []

  for (const route of routes) {
    let result
    try {
      result = await render(route.path)
    } catch (error) {
      // Failing the build keeps the last good deployment live, instead of
      // quietly shipping a page with no content or head.
      throw new Error(`prerender: ${route.path} failed to render — ${error.message}`, { cause: error })
    }
    const { html, seoProps } = result

    if (!seoProps) throw new Error(`prerender: ${route.path} rendered no <PageSEO>`)
    const seo = getSeoTags(seoProps)
    if (!seo.title) throw new Error(`prerender: ${route.path} has no title`)
    if (seo.canonical && seo.canonical !== absoluteUrl(route.path)) {
      throw new Error(`prerender: ${route.path} declares canonical ${seo.canonical} — prerendered routes must be canonical`)
    }

    const h1s = (html.match(/<h1[\s>]/g) || []).length
    if (h1s !== 1) warnings.push(`${route.path}: ${h1s} <h1> elements (expected 1)`)

    writeRoute(route.path, page(seoHeadHtml(seo), html))
    if (seo.canonical) sitemap.push({ loc: seo.canonical, images: route.images })
  }

  // 404 page: any path the router does not know renders <NotFound>.
  const notFound = await render('/__prerender-not-found__')
  fs.writeFileSync(path.join(dist, '404.html'), page(seoHeadHtml(getSeoTags(notFound.seoProps)), notFound.html))

  // Shell for routes that only make sense in the browser. noindex in the raw
  // HTML is right for all of them: search results, checkout, and URLs that
  // redirect client-side to their canonical page.
  fs.writeFileSync(
    path.join(dist, 'app.html'),
    page(['<title>Myco Medic</title>', '<meta name="robots" content="noindex, follow" />'])
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemap
  .map(({ loc, images }) => {
    const imageTags = images
      .map((src) => `\n    <image:image>\n      <image:loc>${xmlEscape(encodeURI(absoluteUrl(src)))}</image:loc>\n    </image:image>`)
      .join('')
    return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${imageTags}\n  </url>`
  })
  .join('\n')}
</urlset>
`
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml)

  for (const warning of warnings) console.warn(`prerender warning: ${warning}`)
  console.log(
    `Prerendered ${routes.length} routes (+404.html, app.html); sitemap.xml lists ${sitemap.length} indexable URLs → dist/`
  )
} finally {
  await vite.close()
}
