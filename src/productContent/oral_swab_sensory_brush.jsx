import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function OralSwabSensoryBrushPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Disposable Toothette Oral Swab

**Specifications:**
• Stick Size: 16 cm
• Colour: Blue

**Single-Use Directions:**
1. Moisten swab with water or mint solution, if desired
2. Clean mouth for approx. one minute
3. Discard after use

**Important Safety Information:**
• Intended for single oral use only
• Use a bite block when performing oral care on patients with altered levels of consciousness
• Ensure foam is intact after use. If not, remove any particles from the oral cavity
• Children under 12 years of age should be supervised in the use of this product
• Suitable for patients with oral disease`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default OralSwabSensoryBrushPage

