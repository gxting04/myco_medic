import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Reusable flat brush with nylon bristles and a strong ABS plastic flat handle, including a hanging feature (O-ring / loop) for drying after use. Overall length 22 cm (approx. 9 in).

**Materials**
• Brush: nylon bristles
• Handle: strong ABS plastic flat profile, comfortable grip with non-slip design

**Bristle grades (four options)**
• Soft, medium, medium hard, and hard

**Colour coding (typical lineup)**
• Red — extra-soft bristles
• Yellow — soft bristles
• Green — stiff bristles
• Blue — extra-stiff bristles

**Product features**
• High bristle density for effective cleaning and dust removal
• Handle shaped for a secure, comfortable hold
• Hanging loop at the end for air-drying after cleaning
• Materials intended for safe use; non-recycled bristle material

**Well suited for**
• Confined or detail areas
• Instrument cleaning
• Laboratory and veterinary use
• General-purpose cleaning, household, and factory environments

Contact us for colour or stiffness availability, packs, and pricing.`

function ReusableFlatBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ReusableFlatBrushPage
