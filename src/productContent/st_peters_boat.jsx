import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'SP18', value: 'SP18' }
]

function StPetersBoatPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical St. Peter's Boat containers designed for clinical and surgical use. Durable plastic containers perfect for holding solutions, medications, and small medical items during procedures.

**Product Features:**
• Durable plastic construction for medical use
• Boat-shaped design for easy handling and access
• Ideal for holding solutions, medications, and small medical items
• Sterilizable and reusable design
• Easy to clean and maintain
• Compact design for efficient use in clinical settings

**Available Models:**

SP18
• Description: St. Peter's Boat container`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default StPetersBoatPage
