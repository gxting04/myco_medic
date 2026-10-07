import { createContext } from 'react'
import { getProductPath } from './productUrl'
import { COMPANY } from '@/lib/site'

const SITE_NAME = 'Myco Medic'
const DEFAULT_TITLE = 'Myco Medic | Medical Supplies & Equipment Malaysia'
const DEFAULT_DESCRIPTION =
  'Myco Medic supplies medical devices, airway management products, patient hygiene care, PPE, and hospital essentials across Malaysia. Browse our catalogue or contact us for quotes.'
const DEFAULT_IMAGE = '/Myco_Medic.png'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.mycomedic.com.my').replace(/\/$/, '')

// Stable node ids so the Organization, WebSite and LocalBusiness graphs on
// different pages are understood as one entity rather than three.
const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
// References repeat the type and name: a bare {'@id'} only resolves when the
// full node is on the same page, which it is not on most of them.
const ORGANIZATION_REF = { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME }
const WEBSITE_REF = { '@type': 'WebSite', '@id': WEBSITE_ID, name: SITE_NAME, url: `${SITE_URL}/` }

/**
 * Set by the build-time prerenderer (src/entry-server.jsx). Effects never run
 * there, so PageSEO hands its props to this collector during render instead,
 * and the static <head> is built from exactly what the page asked for.
 */
export const SeoCollectorContext = createContext(null)

export function categorySlug(name = '') {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export function categoryPath(name = '') {
  return `/products/category/${categorySlug(name)}`
}

// "Laryngeal Mask Supplier in Malaysia" matches how buyers search for a
// category; the bare name alone gave the title no commercial or local intent.
export function categorySeoTitle(name = '') {
  return `${name} Supplier in Malaysia`
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

/**
 * The one definition of a page's head tags, used by applySEO in the browser
 * and by scripts/prerender.mjs at build time, so the two cannot drift.
 *
 * noindex pages get no canonical: "don't index this" and "the real version is
 * over there" are contradictory signals, and the 404 page used to send both.
 * There is no keywords meta — search engines ignore it, and one identical list
 * on every page said nothing about any of them.
 */
export function getSeoTags({ title, description, path = '/', image, type = 'website', noindex = false, jsonLd = null } = {}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageDescription = truncate(description || DEFAULT_DESCRIPTION)
  const pageImage = absoluteUrl(image || DEFAULT_IMAGE)
  const url = absoluteUrl(path)

  return {
    title: pageTitle,
    canonical: noindex ? null : url,
    jsonLd: jsonLd && (!Array.isArray(jsonLd) || jsonLd.length) ? jsonLd : null,
    meta: [
      ['name', 'description', pageDescription],
      ['name', 'robots', noindex ? 'noindex, follow' : 'index, follow'],
      ['property', 'og:title', pageTitle],
      ['property', 'og:description', pageDescription],
      ['property', 'og:type', type],
      ['property', 'og:url', url],
      ['property', 'og:image', pageImage],
      ['property', 'og:site_name', SITE_NAME],
      ['property', 'og:locale', 'en_MY'],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', pageTitle],
      ['name', 'twitter:description', pageDescription],
      ['name', 'twitter:image', pageImage]
    ]
  }
}

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** getSeoTags() serialised for a static HTML <head>. */
export function seoHeadHtml(seo) {
  const tags = [`<title>${escapeHtml(seo.title)}</title>`]
  for (const [attr, key, content] of seo.meta) {
    tags.push(`<meta ${attr}="${key}" content="${escapeHtml(content)}" />`)
  }
  if (seo.canonical) tags.push(`<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`)
  if (seo.jsonLd) {
    // </script> inside JSON would close the tag early.
    const json = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json" id="page-json-ld">${json}</script>`)
  }
  return tags
}

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
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!href) {
    el?.remove()
    return
  }
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

export function applySEO(props) {
  const seo = getSeoTags(props)
  document.title = seo.title
  for (const [attr, key, content] of seo.meta) upsertMeta(attr, key, content)
  upsertLink('canonical', seo.canonical)
  upsertJsonLd('page-json-ld', seo.jsonLd)
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
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: 'Myco Medic Sdn Bhd',
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_IMAGE),
    foundingDate: String(COMPANY.since),
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
 * WebSite node for the homepage — this is what Google reads to show
 * "Myco Medic" as the site name above results instead of the bare domain.
 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    alternateName: ['Myco Medic Sdn Bhd', 'MycoMedic'],
    url: `${SITE_URL}/`,
    inLanguage: 'en-MY',
    publisher: ORGANIZATION_REF
  }
}

/**
 * LocalBusiness node for the contact page — the address and map are the point of
 * that page, and this is what feeds local ("medical supplies Puchong") results.
 * Opening hours come from COMPANY.hours, the same data the page displays.
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
    hasMap: COMPANY.mapUrl,
    telephone: TELEPHONE,
    email: 'sales@mycomedic.com.my',
    areaServed: 'MY',
    openingHoursSpecification: COMPANY.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes
    })),
    parentOrganization: ORGANIZATION_REF,
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

/** CollectionPage + ItemList for a category listing: which products it holds, in order. */
export function collectionPageJsonLd({ name, description, path, products = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description: truncate(description, 500),
    url: absoluteUrl(path),
    isPartOf: WEBSITE_REF,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(getProductPath(product)),
        name: product.name
      }))
    }
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

  if (product.category) node.category = product.category

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
      seller: ORGANIZATION_REF
    }
    // Only claim availability we actually hold as data — this used to say
    // InStock for all ~175 products unconditionally.
    if (product.readyStock) offer.availability = 'https://schema.org/InStock'
    node.offers = offer
  }

  return node
}

export { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_TITLE, SITE_NAME, absoluteUrl, truncate }
