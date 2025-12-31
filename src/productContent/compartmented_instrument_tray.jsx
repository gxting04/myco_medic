import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  {
    code: 'CIT270',
    label: 'CIT270',
    dimensions: '270mm'
  }
]

const COLOR_OPTIONS = [
  { code: 'red', name: 'Red', hex: '#EF4444' },
  { code: 'blue', name: 'Blue', hex: '#3B82F6' },
  { code: 'white', name: 'White', hex: '#FFFFFF' },
  { code: 'yellow', name: 'Yellow', hex: '#FBBF24' },
  { code: 'mint', name: 'Mint', hex: '#6EE7B7' },
  { code: 'lavender', name: 'Lavender', hex: '#C4B5FD' },
  { code: 'green', name: 'Green', hex: '#10B981' },
  { code: 'orange', name: 'Orange', hex: '#F97316' },
  { code: 'purple', name: 'Purple', hex: '#9333EA' }
]

function CompartmentedInstrumentTrayPage({ product }) {
  const enhancedProduct = {
    ...product,

    variants: {
      sizes: SIZE_OPTIONS,
      colors: COLOR_OPTIONS
    },

    description:
      product?.description ||
      `High-quality compartmented medical instrument trays designed for clinical and surgical use.

**Product Features:**
• Durable plastic construction for medical use  
• Multiple compartments for organized instrument storage  
• Available in multiple colors for easy identification  
• Designed for organizing and sterilizing surgical instruments  
• Sterilizable and reusable  
• Easy to clean and maintain  

**Available Size**
• CIT270 – 270mm compartmented instrument tray`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CompartmentedInstrumentTrayPage