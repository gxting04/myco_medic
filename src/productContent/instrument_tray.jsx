import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'IT300', value: 'IT300' },
  { name: 'IT200', value: 'IT200' }
]

const COLOR_OPTIONS = [
  { name: 'Red', value: 'red', hex: '#EF4444' },
  { name: 'Blue', value: 'blue', hex: '#3B82F6' },
  { name: 'White', value: 'white', hex: '#FFFFFF' },
  { name: 'Yellow', value: 'yellow', hex: '#FBBF24' },
  { name: 'Mint', value: 'mint', hex: '#6EE7B7' },
  { name: 'Lavender', value: 'lavender', hex: '#C4B5FD' },
  { name: 'Green', value: 'green', hex: '#10B981' },
  { name: 'Orange', value: 'orange', hex: '#F97316' },
  { name: 'Purple', value: 'purple', hex: '#9333EA' }
]

function InstrumentTrayPage({ product }) {
  // Enhance product with variant data and description
  const enhancedProduct = {
    ...product,
    variants: {
      colors: COLOR_OPTIONS,
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical instrument trays designed for clinical and surgical use. Durable plastic trays perfect for organizing, sterilizing, and storing surgical instruments during procedures.

**Key Features:**
• Durable plastic construction for medical use
• Available in multiple sizes for various clinical applications
• Available in multiple colors for easy identification and organization
• Designed for organizing and sterilizing surgical instruments
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Sizes:**

IT300
• Description: Medical instrument tray

IT200
• Description: Medical instrument tray`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default InstrumentTrayPage

