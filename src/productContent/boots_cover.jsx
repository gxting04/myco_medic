import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BootsCoverPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `PPE medical protective boots/shoes cover. Non-woven, 60gsm, breathable, waterproof, dust-proof, antibacterial. Elastic ankle for secure fit; one size fits all.

**Key Details:**
• Material: Non-woven + PE film, 60gsm
• Features: Breathable, waterproof, dust-proof, antibacterial
• Elastic ankle; one size fits all; unisex
• 1 unit = 1 pair; suitable for hospitals, labs, factories, disinfection work`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BootsCoverPage
