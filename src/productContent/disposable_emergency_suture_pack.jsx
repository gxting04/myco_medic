import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableEmergencySuturePackPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Ready-to-use EO sterilized pack for everyday wound management and suturing. Designed to minimize infection risk and deliver a reliable single-use stitching procedure.

**Benefits:**
• Single-use pack minimizes cross infection risk
• Reliable for a full stitching procedure in emergencies
• EO sterilized and ready to use

**Use Cases:**
• Everyday wound management and suturing
• Emergency department use
• Ideal when sterilization turnaround is a constraint`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableEmergencySuturePackPage
