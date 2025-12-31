import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ContouredArmLegPadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Contoured pads designed to cradle and protect the knee and upper arm in prone and lateral positions, improving comfort and reducing pressure points.

**Clinical use:**
• Protect knee in prostrate (prone) and lateral surgery
• Protect upper arm in prostrate and lateral positions

**Models & sizing:**
Offered in multiple contoured configurations for arm and leg support, as in the 4102 series.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default ContouredArmLegPadsPage
