import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'CS18', value: 'CS18' }
]

function SpatulaPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical spatulas designed for clinical and surgical use. Durable plastic spatulas perfect for mixing, spreading, and applying medications, creams, and other medical substances.

**Product Features:**
• Durable plastic construction for medical use
• Ergonomic design for comfortable handling
• Ideal for mixing, spreading, and applying medications and creams
• Flexible blade design for precise application
• Sterilizable and reusable design
• Easy to clean and maintain
• Non-reactive material suitable for various medical applications

**Available Models:**

CS18
• Description: Medical spatula`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SpatulaPage

