import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposablePlasticApronPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Sleeveless LDPE plastic apron (0.03mm, blue, 70x115cm). Water-repellent, anti-dust, lightweight. Pack of 100; single-use for hygiene and splash protection.

**Key Details:**
• Material: 100% LDPE polyethylene; 0.03mm thickness
• Size: one size (70x115cm); color: blue
• Water-repellent, anti-dust, lightweight
• Packaging: 100 pieces per pack; single-use
• Applications: healthcare, hygiene, food handling, cleaning, housekeeping`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposablePlasticApronPage
