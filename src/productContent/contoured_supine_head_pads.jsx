import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ContouredSupineHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Contoured pads designed to protect and support the head and neck in supine procedures, and to cushion shoulders, hips and knees in lateral positioning.

**Key benefits:**
• Protect and support the head and neck in supine surgery
• Used for protection of shoulder, hip, and knee in lateral surgery
• Contoured profile helps distribute pressure and enhance patient comfort

**Size:**
18 cm × 18 cm × 8 cm`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default ContouredSupineHeadPadsPage
