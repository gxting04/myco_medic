import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function SuctionSwabPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Helps to lower the risk of infections and contributes to an overall sense of patient's well-being.

Suitable for ICU, bed-ridden patient and patient with a sore mouth.

**Description:**

**Material:** Sponge head with stick

**Length:** 22 cm

**Size:** Customized

**Application:**
Medical using, Homecare, Wound care

**Compatibility:**
Compatible with all standard suction machine`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SuctionSwabPage

