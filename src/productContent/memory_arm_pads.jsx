import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-A04 – 600 mm x 160 mm x 60 mm (knee / upper arm, prostrate & lateral surgery)', value: 'OKL-A04' },
  { name: 'OKL-A05 – 320/180 mm x 100 mm (upper limbs, supine surgery)', value: 'OKL-A05' },
  { name: 'OKL-A07 – 350 mm x 160 mm x 100 mm (upper limbs, prostrate surgery)', value: 'OKL-A07' }
]

function MemoryArmPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Memory foam arm pads designed to protect the upper limbs and knee by redistributing pressure and helping maintain stable positioning in supine, prostrate and lateral procedures.

**Clinical use:**
These contoured arm pads are intended to support and protect the upper limbs and knee from pressure injury during lengthy procedures. Different models are sized and shaped for supine, prostrate and lateral positioning needs, helping maintain alignment while improving patient comfort.

**Models & sizing:**

OKL-A04
• Size: 600 mm x 160 mm x 60 mm
• Description: To protect knee and upper arm in prostrate and lateral surgery, providing broad support and pressure redistribution.

OKL-A05
• Size: 320/180 mm x 100 mm
• Description: Designed to protect upper limbs in supine surgery where more compact arm support is required.

OKL-A07
• Size: 350 mm x 160 mm x 100 mm
• Description: For protection of upper limbs in prostrate surgery, offering thicker cushioning and stability.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryArmPadsPage
