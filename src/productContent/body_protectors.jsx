import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BodyProtectorsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Body protectors designed to fix the body and joints securely, helping to avoid damage from shear and pressure during procedures.

**Clinical use:**
To fix body and joints, avoiding damage on the body.

**Models & sizing:**
Available in a range of shapes and sizes, as indicated in the Body Protectors 3106 series.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BodyProtectorsPage
