import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function PvcEndotrachealTubePage({ product }) {
  const enhancedProduct = {
    ...product,
    description: product.description || `Medical PVC, DEHP free, transparent.

**Key Features:**
• High volume low pressure cuff reduces the pressure to trachea
• Radio opaque line for x-ray visualization
• Murphy eye
• Package: 10pcs/box, 100pcs/carton

**Cuffed Sizes:**
3.0 - ETT3011C | 3.5 - ETT3511C | 4.0 - ETT4011C | 4.5 - ETT4511C | 5.0 - ETT5011C | 5.5 - ETT5511C | 6.0 - ETT6011C | 6.5 - ETT6511C | 7.0 - ETT7011C | 7.5 - ETT7511C | 8.0 - ETT8011C | 8.5 - ETT8511C | 9.0 - ETT9011C | 9.5 - ETT9511C | 10.0 - ETT10011C

**Uncuffed Sizes:**
2.0 - ETT2011 | 2.5 - ETT2511 | 3.0 - ETT3011 | 3.5 - ETT3511 | 4.0 - ETT4011 | 4.5 - ETT4511 | 5.0 - ETT5011 | 5.5 - ETT5511 | 6.0 - ETT6011 | 6.5 - ETT6511 | 7.0 - ETT7011 | 7.5 - ETT7511 | 8.0 - ETT8011 | 8.5 - ETT8511 | 9.0 - ETT9011 | 9.5 - ETT9511 | 10.0 - ETT10011`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default PvcEndotrachealTubePage
