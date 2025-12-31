import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-Y01 – 500 mm x 400 mm x 60/20 mm', value: 'OKL-Y01' }
]

function MemoryWaistPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Memory foam waist pads designed to support and protect the lumbar, hepatic and splenic areas in lateral supine surgeries while helping to fully extend the operative vision field for surgeons.

**Clinical use:**
Designed specifically for lateral supine positioning, the waist pad supports the lumbar, hepatic and splenic regions. By elevating and stabilising these areas, it helps relieve pressure and creates more working space, improving surgical exposure for the operative team.

**Model & size:**

OKL-Y01
• Size: 500 mm x 400 mm x 60/20 mm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryWaistPadsPage
