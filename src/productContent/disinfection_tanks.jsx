import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'EDP0-1-01 – 223mm x 149mm x 91mm (1 Litre)', value: 'EDP0-1-01' },
  { name: 'EDP0-3-01 – 315mm x 206mm x 125mm (3 Litre)', value: 'EDP0-3-01' },
  { name: 'EDP0-5-01 – 394mm x 260mm x 156mm (5 Litre)', value: 'EDP0-5-01' },
  { name: 'EDP0-10-01 – 496mm x 328mm x 195mm (10 Litre)', value: 'EDP0-10-01' },
  { name: 'EDP0-10D-01 – 870mm x 235mm x 160mm (10 Litre)', value: 'EDP0-10D-01' }
]

function DisinfectionTanksPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality disinfection tanks designed for clinical and surgical use. Durable plastic tanks perfect for disinfecting medical instruments and equipment.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes (1L, 3L, 5L, 10L)
• Designed for disinfecting medical instruments and equipment
• Ideal for clinical and surgical settings
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Models:**

EDP0-1-01
• Dimensions: 223mm x 149mm x 91mm
• Volume: 1 Litre

EDP0-3-01
• Dimensions: 315mm x 206mm x 125mm
• Volume: 3 Litre

EDP0-5-01
• Dimensions: 394mm x 260mm x 156mm
• Volume: 5 Litre

EDP0-10-01
• Dimensions: 496mm x 328mm x 195mm
• Volume: 10 Litre

EDP0-10D-01
• Dimensions: 870mm x 235mm x 160mm
• Volume: 10 Litre`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisinfectionTanksPage
