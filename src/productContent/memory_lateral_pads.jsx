import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-CW01 – 760 mm x 500 mm x 160 mm', value: 'OKL-CW01' },
  { name: 'OKL-CW03 – 500 mm x 500 mm x 210 mm', value: 'OKL-CW03' },
  { name: 'OKL-CW04 – 680 mm x 500 mm x 120 mm', value: 'OKL-CW04' }
]

function MemoryLateralPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Lateral position memory foam pads designed to protect the shoulder and upper limbs, alleviate pressure on nerve tissues, and provide stable support for all types of lateral surgeries.

**Key benefits:**
• Applicable to all lateral position surgeries where stable torso and shoulder support is needed
• Provides protection for the shoulder and upper limbs to help minimise pressure-related injury
• Helps alleviate pressure on nerve tissues while maintaining a secure lateral position

**Models & sizing:**

OKL-CW01
• Size: 760 mm x 500 mm x 160 mm
• Description: Large lateral pad providing broad support surface for the torso and shoulder in lateral surgeries.

OKL-CW03
• Size: 500 mm x 500 mm x 210 mm
• Description: Thicker pad design to improve cushioning and pressure redistribution over a more compact area.

OKL-CW04
• Size: 680 mm x 500 mm x 120 mm
• Description: Medium length lateral pad for general lateral procedures requiring shoulder and upper limb protection.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryLateralPadsPage
