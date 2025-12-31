import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'F100N', value: 'F100N' },
  { name: 'F150N', value: 'F150N' }
]

function FunnelsPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical funnels designed for clinical and laboratory use. Durable plastic funnels perfect for transferring liquids, solutions, and medications with precision and ease.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes for various clinical applications
• Designed for precise liquid transfer and pouring
• Ideal for transferring liquids, solutions, and medications
• Sterilizable and reusable design
• Easy to clean and maintain
• Wide opening design for easy filling and controlled pouring

**Available Models:**

F100N
• Description: Medical funnel container

F150N
• Description: Medical funnel container`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default FunnelsPage
