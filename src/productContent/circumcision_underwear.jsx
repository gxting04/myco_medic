import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'XS', value: 'XS' },
  { name: 'S', value: 'S' },
  { name: 'M', value: 'M' },
  { name: 'L', value: 'L' },
  { name: 'XL', value: 'XL' },
  { name: 'XXL', value: 'XXL' },
  { name: 'XXXL', value: 'XXXL' }
]

function CircumcisionUnderwearPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Circumcision underwear/pants available in sizes XS–XXXL. Provides post-procedure comfort and support; colors supplied randomly.

**Details:**
• Sizes: XS, S, M, L, XL, XXL, XXXL
• Colors supplied randomly
• Designed for comfort after circumcision procedures`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CircumcisionUnderwearPage
