const SITE_NAME = 'Myco Medic'
const DEFAULT_TITLE = 'Myco Medic | Medical Supplies & Equipment Malaysia'
const DEFAULT_DESCRIPTION =
  'Myco Medic supplies medical devices, airway management products, patient hygiene care, PPE, and hospital essentials across Malaysia. Browse our catalogue or contact us for quotes.'
const DEFAULT_IMAGE = '/Myco_Medic.png'
const DEFAULT_KEYWORDS =
  'Myco Medic, medical supplies Malaysia, hospital equipment, airway management, medical devices, patient hygiene, surgical supplies'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.mycomedic.com.my').replace(/\/$/, '')

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

function absoluteUrl(path = '/') {
  if (!path) return SITE_URL
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function truncate(text, max = 160) {
  if (!text) return DEFAULT_DESCRIPTION
  const plain = text.replace(/\*\*/g, '').replace(/^•\s*/gm, '').replace(/\s+/g, ' ').trim()
  if (plain.length <= max) return plain
  return `${plain.slice(0, max - 1).trim()}…`
}

export function applySEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noindex = false,
  jsonLd = null
} = {}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageDescription = truncate(description || DEFAULT_DESCRIPTION)
  const pageImage = absoluteUrl(image || DEFAULT_IMAGE)
  const canonical = absoluteUrl(path)

  document.title = pageTitle

  upsertMeta('name', 'description', pageDescription)
  upsertMeta('name', 'keywords', DEFAULT_KEYWORDS)
  upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

  upsertMeta('property', 'og:title', pageTitle)
  upsertMeta('property', 'og:description', pageDescription)
  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', pageImage)
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:locale', 'en_MY')

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', pageTitle)
  upsertMeta('name', 'twitter:description', pageDescription)
  upsertMeta('name', 'twitter:image', pageImage)

  upsertLink('canonical', canonical)
  upsertJsonLd('page-json-ld', jsonLd)
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_IMAGE),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@mycomedic.com.my',
      areaServed: 'MY',
      availableLanguage: ['English', 'Malay']
    }
  }
}

export function productJsonLd(product, description) {
  if (!product) return null
  const images = product.images?.length ? product.images : product.image ? [product.image] : []
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: truncate(description || product.description || product.name, 500),
    image: images.map((img) => absoluteUrl(img)),
    url: absoluteUrl(`/product/${product.id}`),
    brand: {
      '@type': 'Brand',
      name: SITE_NAME
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/product/${product.id}`),
      priceCurrency: 'MYR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_NAME
      }
    }
  }
}

export { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, truncate }
