import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BowlShapedHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Bowl-shaped supports designed for horizontal positioning surgeries such as neurosurgery and ENT, providing stable support and protection for the head.

**Clinical use:**
• Designed for horizontal positioning surgery (neurosurgery and ENT surgery)
• Supports and protects the head throughout the procedure

**Models & sizing:**
Available in different models and sizes to suit patient anatomy and procedural needs.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BowlShapedHeadPadsPage
