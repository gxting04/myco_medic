import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'ITL32B', value: 'ITL32B' }
]

const COLOR_OPTIONS = [
  { name: 'Red', value: 'red', hex: '#EF4444' },
  { name: 'Blue', value: 'blue', hex: '#3B82F6' }
]

function InstrumentTrayWithLidPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      colors: COLOR_OPTIONS,
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical instrument trays with matching lids designed for clinical and surgical use. Complete set with durable plastic tray and lid perfect for organizing, sterilizing, and storing surgical instruments during procedures.

**Product Features:**
• Durable plastic construction for medical use
• Complete set includes tray and matching lid
• Available in multiple colors for easy identification and organization
• Designed for organizing and sterilizing surgical instruments
• Lid provides secure closure and prevents contamination
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Sizes:**

ITL32B
• Description: Instrument tray with lid set`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default InstrumentTrayWithLidPage

