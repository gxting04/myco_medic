/**
 * Build-time renderer, loaded by scripts/prerender.mjs through Vite's SSR
 * module loader. Never shipped to the browser.
 *
 * render(path) runs the real route tree for a URL and returns its HTML plus
 * the props its <PageSEO> was given, so every prerendered file carries the
 * same content and head that the browser would produce after JavaScript ran.
 */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom'
import { routes } from './routes'
import { CartProvider } from './context/CartContext'
import { QuoteProvider } from './context/QuoteContext'
import { UIProvider } from './context/UIContext'
import Data from './shared/Data'
import { getProductPath } from './utils/productUrl'
import { SITE_URL, SeoCollectorContext, categoryPath } from './utils/seo'

const handler = createStaticHandler(routes)

export async function render(path) {
  const context = await handler.query(new Request(new URL(path, SITE_URL)))
  if (context instanceof Response) {
    throw new Error(`${path} redirects (status ${context.status}) — only canonical URLs should be prerendered`)
  }

  const router = createStaticRouter(handler.dataRoutes, context)
  const collector = { props: null }

  const html = renderToString(
    <StrictMode>
      <SeoCollectorContext.Provider value={collector}>
        <CartProvider>
          <QuoteProvider>
            <UIProvider>
              {/* hydrate={false}: the client re-renders with createRoot, so no hydration payload. */}
              <StaticRouterProvider router={router} context={context} hydrate={false} />
            </UIProvider>
          </QuoteProvider>
        </CartProvider>
      </SeoCollectorContext.Provider>
    </StrictMode>
  )

  return { html, seoProps: collector.props }
}

const STATIC_PATHS = ['/', '/about', '/contact', '/career', '/internship', '/products']

/** Every indexable URL the site has, with the images each one should list in the sitemap. */
export function getPrerenderRoutes() {
  return [
    ...STATIC_PATHS.map((path) => ({ path, images: [] })),
    ...Data.productCategories.map((category) => ({ path: categoryPath(category.name), images: [] })),
    ...Data.initialProducts.map((product) => ({
      path: getProductPath(product),
      images: product.images?.length ? product.images : product.image ? [product.image] : []
    }))
  ]
}

export const PRODUCT_COUNT = Data.initialProducts.length
