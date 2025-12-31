import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'GP80B', value: 'GP80B' },
  { name: 'GP80R', value: 'GP80R' },
  { name: 'G60B', value: 'G60B' },
  { name: 'GP40B', value: 'GP40B' }
]

function GallipotsPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical gallipots for use in clinical and surgical settings. Durable plastic containers designed for holding solutions, medications, and small medical items during procedures.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes for various clinical applications
• Designed for holding solutions, medications, and small medical items
• Ideal for clinical and surgical procedures
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Models:**

GP80B
• Description: Medical gallipot

GP80R
• Description: Medical gallipot

G60B
• Description: Medical gallipot

GP40B
• Description: Medical gallipot`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default GallipotsPage
