import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Toothbrush-style brush with stainless steel bristles and a small horn profile for detail work. Rubber handle with O-ring / hanging loop for drying after use.

**Materials**
• Bristles: stainless steel
• Handle: rubber, comfortable grip with non-slip design

**Product features**
• High bristle density for effective cleaning and dust removal
• Handle shaped for a secure, comfortable hold
• Rectangle loop at the end for hanging to air-dry after cleaning
• Materials intended for safe use; non-recycled bristle material

**Well suited for**
• Confined or tight areas
• Instrument cleaning
• Laboratory and veterinary use
• General-purpose cleaning, household, and factory environments

Contact us for pricing, packs, and availability.`

function StainlessSteelToothBrushStyleWithSmallHornPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default StainlessSteelToothBrushStyleWithSmallHornPage
