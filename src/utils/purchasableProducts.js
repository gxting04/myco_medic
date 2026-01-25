const allowedProductNames = new Set([
  'Seluar Sunat Khatan / Circumcision Underwear',
  'Adult & Pediatric- Tracheostomy Tube Holder / Neck Strap',
  'Body Wipes',
  'Shampoo Cap',
  'Suction Toothbrush'
])

export function isPurchasableProduct(product) {
  if (!product) return false
  return allowedProductNames.has(product.name)
}

export function getPurchasableNames() {
  return Array.from(allowedProductNames)
}
