import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BowlShapedHorseshoeHeadPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Bowl-shaped horseshoe pads designed for re-supine or lateral positioning, helping patients feel more comfortable and stable while preserving access for anesthesia.

**Clinical use:**
• Designed for re-supine or lateral positioning surgery to improve comfort and stability
• Facilitates general anesthesia intubation during surgery

**Models & sizing:**
Offered in various models and sizes to match different patient types and positioning needs.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BowlShapedHorseshoeHeadPadsPage
