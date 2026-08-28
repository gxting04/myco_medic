import { getProductPath } from './productUrl'

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

// Single source of truth for the trading address, mirrored from the contact page.
const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'No. 2A-G Jalan Sierra 10/3, Section 16 Sierra',
  addressLocality: 'Puchong',
  addressRegion: 'Selangor',
  postalCode: '47120',
  addressCountry: 'MY'
}

const TELEPHONE = '+60389570599'
const SHOPEE_URL = 'https://shopee.com.my/healthcare_marts'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: 'Myco Medic Sdn Bhd',
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_IMAGE),
    address: POSTAL_ADDRESS,
    telephone: TELEPHONE,
    email: 'sales@mycomedic.com.my',
    areaServed: 'MY',
    sameAs: [SHOPEE_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: TELEPHONE,
      email: 'sales@mycomedic.com.my',
      areaServed: 'MY',
      availableLanguage: ['English', 'Malay']
    }
  }
}

/**
 * LocalBusiness node for the contact page — the address and map are the point of
 * that page, and this is what feeds local ("medical supplies Puchong") results.
 * No openingHoursSpecification: the site publishes no opening hours, and guessing
 * them would send buyers to a closed door.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#office`,
    name: SITE_NAME,
    legalName: 'Myco Medic Sdn Bhd',
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_IMAGE),
    logo: absoluteUrl(DEFAULT_IMAGE),
    address: POSTAL_ADDRESS,
    telephone: TELEPHONE,
    email: 'sales@mycomedic.com.my',
    areaServed: 'MY',
    sameAs: [SHOPEE_URL]
  }
}

/**
 * BreadcrumbList — gives Google the catalogue hierarchy for a product page and
 * replaces the bare URL in the search result with a readable trail.
 */
export function breadcrumbJsonLd(trail = []) {
  const items = trail.filter((item) => item && item.name && item.path)
  if (!items.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  }
}

export function productJsonLd(product, description) {
  if (!product) return null
  const images = product.images?.length ? product.images : product.image ? [product.image] : []
  const url = absoluteUrl(getProductPath(product))

  const node = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: truncate(description || product.description || product.name, 500),
    image: images.map((img) => absoluteUrl(img)),
    url
  }

  const sku = product.articleCode || product.specifications?.['Product Code']
  if (sku) node.sku = sku

  // The manufacturer, not the shop. This previously claimed every item was
  // branded 'Myco Medic', which is wrong for a distributor — a TruCorp manikin
  // is a TruCorp product that Myco Medic sells. Omitted when unknown rather
  // than misattributed.
  const brandName = product.brand || product.specifications?.Brand
  if (brandName) node.brand = { '@type': 'Brand', name: brandName }

  // schema.org Offer requires a price; emitting priceCurrency without one is
  // invalid markup and shows up as an error in Search Console. The catalogue is
  // quote-based, so an offer is attached only when a real price exists. Google
  // may note a missing 'offers' field — that is a warning, and preferable to
  // asserting a price and stock status that were never set.
  if (product.price != null) {
    const offer = {
      '@type': 'Offer',
      url,
      priceCurrency: product.priceCurrency || 'MYR',
      price: product.price,
      seller: { '@type': 'Organization', name: SITE_NAME }
    }
    // Only claim availability we actually hold as data — this used to say
    // InStock for all ~175 products unconditionally.
    if (product.readyStock) offer.availability = 'https://schema.org/InStock'
    node.offers = offer
  }

  return node
}

export {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  SITE_NAME,
  absoluteUrl,
  truncate
}
