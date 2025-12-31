import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ArmShieldPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Arm shield pads designed to fix and support the upper limbs in supine surgery, helping to keep the arm stable and protected throughout the procedure.

**Product details:**
Fix upper limbs in supine surgery for stable positioning.

**Size:**
40 cm × 20 cm × 1.8 cm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default ArmShieldPadsPage
