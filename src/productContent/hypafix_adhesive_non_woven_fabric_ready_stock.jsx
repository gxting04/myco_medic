import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: '2.5 cm x 10 m - RM 36.00', value: '2.5cm-10m', price: 36.00 },
  { name: '5 cm x 10 m - RM 40.00', value: '5cm-10m', price: 40.00 },
  { name: '10 cm x 10 m - RM 62.00', value: '10cm-10m', price: 62.00 },
  { name: '15 cm x 10 m - RM 80.00', value: '15cm-10m', price: 80.00 },
  { name: '20 cm x 10 m - RM 120.00', value: '20cm-10m', price: 120.00 }
]

function HypafixAdhesiveNonWovenFabricReadyStockPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `What is the function of hypafix?

Hypafix is used in wide-area fixation of large post-operative wound dressings, gauze and absorbent compresses.

**Available Sizes & Prices:**
• 2.5 cm x 10 m - RM 36.00
• 5 cm x 10 m - RM 40.00
• 10 cm x 10 m - RM 62.00
• 15 cm x 10 m - RM 80.00
• 20 cm x 10 m - RM 120.00

**Product Features:**
• Skin-friendly
• Split liner for easy removal of release paper
• Square frame printing on release paper provides guideline for cutting
• Secure fixation on all parts of the body

**Shelf Life:** 5 years`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default HypafixAdhesiveNonWovenFabricReadyStockPage

