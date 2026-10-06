import Data from '@/shared/Data'

// Groups that exist in the data but are not shown in the public catalogue.
// 2 = Medical Equipment, 7 = Medical Furniture.
export const HIDDEN_GROUP_IDS = new Set([2, 7])
// Procedure Packs is reachable but kept out of navigation menus.
export const NAV_HIDDEN_GROUP_IDS = new Set([2, 5, 7])

// The catalogue can be overridden from localStorage (legacy admin tooling).
// A malformed value used to throw inside render and blank the whole page.
export function getAllProducts() {
  try {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('myco_products') : null
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length) return parsed
    }
  } catch {
    /* fall through to the bundled catalogue */
  }
  return Data.initialProducts
}

export function getCatalogProducts() {
  return getAllProducts().filter((p) => !HIDDEN_GROUP_IDS.has(p.groupId))
}

export function getNavGroups() {
  return Data.productGroups.filter((g) => !NAV_HIDDEN_GROUP_IDS.has(g.id))
}

export function getGroup(groupId) {
  return Data.productGroups.find((g) => g.id === groupId) || null
}

/**
 * Some groups (e.g. Medical Bowls & Utility Containers) hold their products
 * through categories rather than a direct groupId, so membership has to check
 * both. Filtering on groupId alone left those groups looking empty.
 */
export function productInGroup(product, groupId) {
  if (!product) return false
  if (product.groupId === groupId) return true
  if (!product.category) return false
  return Data.productCategories.some((c) => c.groupId === groupId && c.name === product.category)
}

export function getProductLabel(product) {
  if (product?.category) return product.category
  return getGroup(product?.groupId)?.name || ''
}

export function getProductImage(product) {
  return product?.image || product?.images?.[0] || '/Myco_Medic.png'
}

const normalise = (s) =>
  String(s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/**
 * Ranked product search. Every word of the query has to appear somewhere in the
 * product's name, category or group; name hits (and especially prefix hits)
 * rank above category/group hits. Substring matching on the raw query used to
 * miss "endotracheal pvc" for "PVC Endotracheal Tube".
 */
export function searchProducts(query, products = getCatalogProducts(), limit = Infinity) {
  const q = normalise(query)
  if (!q) return []
  const terms = q.split(' ')

  const scored = []
  for (const product of products) {
    const name = normalise(product.name)
    const meta = normalise(`${product.category || ''} ${getGroup(product.groupId)?.name || ''} ${product.description || ''}`)
    let score = 0
    let ok = true
    for (const term of terms) {
      if (name.startsWith(term)) score += 6
      else if (name.includes(` ${term}`)) score += 4
      else if (name.includes(term)) score += 3
      else if (meta.includes(term)) score += 1
      else {
        ok = false
        break
      }
    }
    if (!ok) continue
    if (name === q) score += 10
    scored.push({ product, score })
  }

  scored.sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name))
  return scored.slice(0, limit).map((s) => s.product)
}

/** Products from the same category (or group) as `product`, excluding itself. */
export function getRelatedProducts(product, limit = 4) {
  if (!product) return []
  const all = getCatalogProducts().filter((p) => p.id !== product.id)
  const sameCategory = product.category ? all.filter((p) => p.category === product.category) : []
  const sameGroup = all.filter((p) => p.groupId === product.groupId && !sameCategory.includes(p))
  return [...sameCategory, ...sameGroup].slice(0, limit)
}
