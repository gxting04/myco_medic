import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function SensoryBrush20Page({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Product: Sensory Therapy Brush 2.0 x 1 piece

**Product Description:**

**Material:** Soft nylon bristles + Standard handle plastic handle

**Color:** Blue (May be different depending on availability)

**Size:** L10.5cm x W3.5cm x H3.5cm (Small in size and fully portable)

**Features:**
• Latex free`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SensoryBrush20Page

