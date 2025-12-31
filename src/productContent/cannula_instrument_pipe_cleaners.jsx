import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CannulaInstrumentPipeCleanersPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Pipe-style cleaners tailored for cannula and instrument lumens. Flexible shafts and sized bristles help maintain internal cleanliness and reduce debris buildup.

**Details:**
• Designed for cannula and instrument lumens
• Flexible shafts improve reach and maneuverability
• Bristles sized to remove debris without damaging tubing`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CannulaInstrumentPipeCleanersPage
