import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableBasicPackPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Ready-to-use sterile basic pack designed to streamline common procedures, reducing setup time and infection risk with single-use convenience.

**Highlights:**
• Sterile pack supports a range of general procedures
• Single-use to minimize cross-infection risk
• Reduces setup and turnaround time in busy settings`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableBasicPackPage
