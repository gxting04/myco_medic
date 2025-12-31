import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-SD02 – 640 mm x 460 mm x 220 mm', value: 'OKL-SD02' },
  { name: 'OKL-SD03 – 550 mm x 460 mm x 200 mm', value: 'OKL-SD03' }
]

function MemoryTunnelPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Tunnel pads designed to offer protection and support of legs in lateral position.

**Clinical use:**
Designed for lateral positioning, tunnel pads help support and protect the legs while redistributing pressure over a broader area.

**Models & sizing:**

OKL-SD02
• Size: 640 mm x 460 mm x 220 mm

OKL-SD03
• Size: 550 mm x 460 mm x 200 mm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryTunnelPadsPage
