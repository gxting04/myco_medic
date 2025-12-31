import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposablePreEpiduralSetPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `EO-sterile pre-epidural set including gallipots, gauze, kidney dish, forceps, and sterile field. Ready for single-use procedures to minimize infection risk and setup time.

**Set Contains:**
• 2 x 60 mL gallipots
• 5 x 8ply 7.5cm x 7.5cm gauze swabs
• 1 x 750 mL kidney dish
• 1 x 18cm stainless steel Rampley sponge holding forceps
• 1 x green crepe sterile field (60 x 60cm)`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposablePreEpiduralSetPage
