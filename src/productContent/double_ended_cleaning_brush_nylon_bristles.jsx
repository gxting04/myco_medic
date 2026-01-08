import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DoubleEndedCleaningBrushNylonBristlesPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `**Filament Material:** Nylon Bristles

**Color:** Black

**Total Length:** 18 cm

**Features:**
• Reusable
• Double-ended design for versatile cleaning
• Durable nylon bristles for effective cleaning
• Suitable for medical equipment maintenance`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DoubleEndedCleaningBrushNylonBristlesPage

