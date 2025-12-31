import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'LB200B', value: 'LB200B' },
  { name: 'LB150B', value: 'LB150B' },
  { name: 'LB250B', value: 'LB250B' }
]

function LotionBowlsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical lotion bowls designed for clinical and surgical use. Durable plastic bowls perfect for holding lotions, solutions, and other medical liquids during procedures.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes for various clinical applications
• Designed for holding lotions, solutions, and medical liquids
• Ideal for clinical and surgical procedures
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Models:**

LB200B
• Description: Lotion bowl

LB150B
• Description: Lotion bowl

LB250B
• Description: Lotion bowl`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default LotionBowlsPage
