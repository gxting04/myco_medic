import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-Z02 – 200 mm x 100 mm x 80 mm', value: 'OKL-Z02' },
  { name: 'OKL-Z03 – 400 mm x 100 mm x 100 mm', value: 'OKL-Z03' }
]

function MemoryHeelPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Heel pads designed to secure and protect the ankle and heel area without hook-and-loop attachment by placing the patient's heel in the cup cut-out.

**Clinical use:**
By cradling the heel inside a cut-out cup, the pad helps offload pressure and protect the ankle/heel area during procedures—without needing straps or hook-and-loop attachment.

**Models & sizing:**

OKL-Z02
• Size: 200 mm x 100 mm x 80 mm

OKL-Z03
• Size: 400 mm x 100 mm x 100 mm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryHeelPadsPage
