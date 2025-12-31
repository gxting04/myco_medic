import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableAirCushionFaceMaskPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Surgical Disposable Anesthesia Breathing Mask

**Product Features:**
• Surgical Disposable Anesthesia Breathing Mask
• The transparent mask shell helps the medical care personnel to see complicating disease like vomit as soon as possible
• Soft air cushion can keep mask sealed; Use only once, avoid cross-infection`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableAirCushionFaceMaskPage
