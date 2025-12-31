import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-T10 – 440 mm × 500 mm × 100 mm', value: 'OKL-T10' }
]

function MemorySupineHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Memory foam supine head pads designed to protect and support the head, neck and shoulders during supine procedures.

**Product details:**
• To protect and support head, neck and shoulder in supine surgery
• Made from memory foam to help distribute pressure and enhance patient comfort

**Model & size:**

OKL-T10
• Size: 440 mm × 500 mm × 100 mm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemorySupineHeadPadsPage
