import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'WB350B', value: 'WB350B' }
]

function WashbowlPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical washbowls designed for clinical and surgical use. Durable plastic bowls perfect for washing, cleaning, and holding water or solutions during medical procedures.

**Product Features:**
• Durable plastic construction for medical use
• Designed for washing, cleaning, and holding water or solutions
• Ideal for clinical and surgical procedures
• Sterilizable and reusable design
• Easy to clean and maintain
• Wide opening for easy access

**Available Models:**

WB350B
• Description: Medical washbowl`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default WashbowlPage
