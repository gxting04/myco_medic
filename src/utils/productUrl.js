import slugify from './slugify'
import Data from '@/shared/Data'

export function getProductSlug(product) {
  if (!product) return ''
  return product.pageId || slugify(product.name)
}

export function getProductPath(product) {
  const slug = getProductSlug(product)
  return slug ? `/product/${slug}` : '/products'
}

export function findProductByRouteParam(param, products = Data.initialProducts) {
  if (!param) return null
  const str = String(param)
  if (/^\d+$/.test(str)) {
    return products.find((p) => Number(p.id) === Number(str)) || null
  }
  return products.find((p) => getProductSlug(p) === str) || null
}

export function getProductImageAlt(product, viewLabel = '') {
  const base = product?.imageAlt || product?.name || 'Product'
  return viewLabel ? `${base} ${viewLabel}` : base
}

export function getProductSeoTitle(product) {
  return product?.seoTitle || product?.name
}

export function getProductSeoDescription(product) {
  if (product?.seoDescription) return product.seoDescription
  if (product?.description) return product.description
  if (product?.longDescription) return product.longDescription
  return `${product?.name} — medical supply from Myco Medic Malaysia.`
}

export function resolveProductPath(productOrId, products = Data.initialProducts) {
  if (productOrId && typeof productOrId === 'object') {
    return getProductPath(productOrId)
  }
  const product = products.find((p) => Number(p.id) === Number(productOrId))
  return product ? getProductPath(product) : `/product/${productOrId}`
}
