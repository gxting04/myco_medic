import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function SuctionToothbrushPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Suction Toothbrush Treated with Sodium Bicarbonate with Mouth Wash and Moisturizer - Nursing Care

Suction Toothbrush treated with Sodium Bicarbonate.

**Product Features:**
• Individually wrapped and prepack
• Toothpaste, oral rinse and mouth moisturizer included
• Material: Sponge head with stick
• Suction toothbrush has foam on one side and super soft bristles on the other
• Easy to control with thumb port suction when removing fluid from the oral cavity
• Able to connect to standard suction tubing

**Application:**
Medical using, homecare, wound care.

**Benefits:**
• Helps to lower the risk of infections and contributes to an overall sense of patient well-being
• Suitable for ICU, bed-ridden patient and patient with a sore mouth`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SuctionToothbrushPage

