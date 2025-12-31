import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'IT200B', value: 'IT200B' },
  { name: 'ITL200B', value: 'ITL200B' }
]

function InstrumentTrayLidPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical instrument tray lids designed for clinical and surgical use. Durable plastic lids perfect for covering and protecting instrument trays during sterilization and storage.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes to fit different instrument trays
• Designed to securely cover and protect instrument trays
• Prevents contamination during sterilization and storage
• Sterilizable and reusable design
• Easy to clean and maintain
• Snap-fit design for secure closure

**Available Sizes:**

IT200B
• Description: Instrument tray lid

ITL200B
• Description: Instrument tray lid`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default InstrumentTrayLidPage
