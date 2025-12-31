import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CannulaCleaningBrushesPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Cannula cleaning brushes designed for effective lumen cleaning across sizes. Durable bristles and flexible shafts help maintain equipment hygiene.

**Details:**
• Multiple sizes to match cannula diameters
• Sturdy bristles for effective debris removal
• Flexible shafts aid maneuverability and reach`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CannulaCleaningBrushesPage
