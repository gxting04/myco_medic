import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-T04 – 220 mm x 80 mm x 50 mm', value: 'OKL-T04' },
  { name: 'OKL-T05 – 160 mm x 65 mm x 50 mm', value: 'OKL-T05' },
  { name: 'OKL-T06 – 120 mm x 50 mm x 35 mm', value: 'OKL-T06' }
]

function MemoryHorseshoeHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Horseshoe-shaped memory foam head pads that provide a clear passageway for respiration and the introduction of anesthetic pipes for patients in prone or lateral surgery.

**Clinical use:**
Designed to offer a clear passageway for respiration and to accommodate anesthetic tubing when patients are positioned prone or lateral. The horseshoe profile helps protect facial structures while maintaining airway access.

**Models & sizing:**

OKL-T04
• Size: 220 mm x 80 mm x 50 mm

OKL-T05
• Size: 160 mm x 65 mm x 50 mm

OKL-T06
• Size: 120 mm x 50 mm x 35 mm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryHorseshoeHeadPadsPage
