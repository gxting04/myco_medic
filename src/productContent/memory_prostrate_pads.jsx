import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OKL-FW02 – 640 mm x 420 mm x 120 mm (reduces chest pressure; supports respiratory and circulatory function)', value: 'OKL-FW02' },
  { name: 'OKL-FW04 – 640 mm x 440 mm x 120 mm (assembled design to adjust the size)', value: 'OKL-FW04' },
  { name: 'OKL-FW05 – 900 mm x 460 mm x 120 mm (assembled design to adjust the size)', value: 'OKL-FW05' }
]

function MemoryProstratePadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Memory foam prostrate pads designed to reduce pressure on the chest and help maintain good respiratory and circulatory function during cervical and lumbar spinal surgeries, with assembled designs that can be adjusted to fit different patient sizes.

**Clinical use:**
Used in prone positioning for spinal surgery, these pads help offload pressure from the chest and abdomen, supporting respiratory mechanics and circulation. The modular designs (OKL-FW04 and OKL-FW05) can be adjusted to accommodate different patient builds and table setups.

**Models & sizing:**

OKL-FW02
• Size: 640 mm x 420 mm x 120 mm
• Description: Reduces chest pressure and helps maintain good respiratory and circulatory functioning in cervical and lumbar spinal surgeries.

OKL-FW04
• Size: 640 mm x 440 mm x 120 mm
• Description: Assembled design that allows size adjustment to suit different patients and table setups.

OKL-FW05
• Size: 900 mm x 460 mm x 120 mm
• Description: Larger assembled pad, offering extended support area while still allowing size adjustment.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default MemoryProstratePadsPage
