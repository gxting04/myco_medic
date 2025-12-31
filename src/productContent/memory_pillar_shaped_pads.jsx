import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-Y08 – 450 mm x 230 mm x 150 mm', value: 'OKL-Y08' },
  { name: 'OKL-Y02 – 500 mm x 210 mm x 170 mm', value: 'OKL-Y02' },
  { name: 'OKL-A01 – 400 mm x 150 mm x 100 mm', value: 'OKL-A01' }
]

function MemoryPillarShapedPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Pillar-shaped memory foam pads designed to offer positioning and provide protection and support for ankle, knee and shoulder in re-supine surgeries. They can also be used to protect and support the shoulder, chest and hipbone in prostrate surgeries, and to protect the armpit in lateral surgeries.

**Clinical use:**
• Designed to offer positioning and provide protection and support for ankle, knee and shoulder in re-supine surgeries
• Can be used to protect and support shoulder, chest and hipbone in prostrate surgeries
• Helps protect the armpit in lateral surgeries

**Models & sizing:**

OKL-Y08
• Size: 450 mm x 230 mm x 150 mm
• Typical use: Larger pillar for broad support of ankle, knee or shoulder, or for torso support in prostrate positioning.

OKL-Y02
• Size: 500 mm x 210 mm x 170 mm
• Typical use: Longer configuration offering extended coverage along the limb or trunk.

OKL-A01
• Size: 400 mm x 150 mm x 100 mm
• Typical use: Compact pillar suited for more localised support or smaller-frame patients.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryPillarShapedPadsPage
