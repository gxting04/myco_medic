import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'Pack of 1 - RM 9.50', value: 'pack-of-1', price: 9.5 },
  { name: 'Pack of 5 - RM 47.50', value: 'pack-of-5', price: 47.5 }
]

function AdultPediatricTracheostomyTubeHolderNeckStrapPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Soft | Quality | Adjustable with Elastic Band

Tracheostomy Tube Holder is to secure the tracheostomy tube on proper position quickly and easily. It has superior two-piece fastener neck straps with a portion of stretch material to ease the discomfort from pressures such as edema or sudden coughs.

**Available Options:**
• Pack of 1 - RM 9.50
• Pack of 5 - RM 47.50

**Product Features:**
• 2-piece adjustable design fit for pediatric and adult patients
• Elastic band to absorb instant pressure caused by sneeze or cough
• Soft material design with gentle touch
• Easy wear
• Reduce chances of accidental tube dislodge
• Application instructions will be included for user`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default AdultPediatricTracheostomyTubeHolderNeckStrapPage

