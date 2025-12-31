import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKT-T01 – 220 mm x 80 mm x 50 mm', value: 'OKT-T01' },
  { name: 'OKT-T02 – 160 mm x 65 mm x 50 mm', value: 'OKT-T02' },
  { name: 'OKT-T03 – 120 mm x 50 mm x 35 mm', value: 'OKT-T03' }
]

function MemoryDonutHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Memory foam donut head pads that protect and cradle the patient's head in a variety of surgical procedures including ENT, plastic, general and ophthalmic cases.

**Clinical use:**
Designed to gently support and stabilize the head while helping redistribute pressure. Ideal for ENT, plastic, general and ophthalmic procedures where consistent head positioning and protection are required.

**Models & sizing:**

OKT-T01
• Size: 220 mm x 80 mm x 50 mm
• Description: Standard adult donut head pad providing broad contact area and pressure redistribution.

OKT-T02
• Size: 160 mm x 65 mm x 50 mm
• Description: More compact sizing for smaller adult heads or adolescent patients.

OKT-T03
• Size: 120 mm x 50 mm x 35 mm
• Description: Smallest size for pediatric or very small frame patients while maintaining gentle support.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryDonutHeadPadsPage



