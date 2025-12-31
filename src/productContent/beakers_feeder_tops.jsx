import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'BK1N', value: 'BK1N' },
  { name: 'TWW', value: 'TWW' },
  { name: 'TFN', value: 'TFN' }
]

function BeakersFeederTopsPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical beakers and feeder tops designed for clinical use. Durable plastic containers perfect for measuring, mixing, and feeding liquids during medical procedures.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes and types (beakers and feeder tops)
• Designed for measuring, mixing, and feeding liquids
• Ideal for clinical and surgical procedures
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Models:**

BK1N
• Type: Beaker

TWW
• Type: Feeder Top

TFN
• Type: Feeder Top`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BeakersFeederTopsPage
