import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: '4105', value: '4105' },
  { name: '4105-1', value: '4105-1' }
]

function AnkleProtectorsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Ankle protectors designed to fix and cushion the ankle, helping prevent pressure and shear injuries during lower-limb positioning.

**Clinical use:**
To fix and protect ankle during procedures.

**Models & sizing:**
Includes models 4105 and 4105-1 for different ankle sizes and support needs.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default AnkleProtectorsPage
