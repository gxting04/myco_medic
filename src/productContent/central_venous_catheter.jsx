import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CentralVenousCatheterPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Designed for safe and reliable central venous access. Features movable clamps, depth markings, and soft tips to minimize trauma.

**Features & Benefits:**
• Movable clamp allows anchorage at puncture site regardless of depth, minimizing trauma and irritation
• Depth marking assists in accurate placement from the right or left subclavian or jugular vein
• Soft tip reduces trauma to vessel, minimizing vessel erosion, hemothorax, and cardiac tamponade
• Available in Single, Double, Triple, and Quad lumen choices

**Standard Kits Include:**
1. Central Venous Catheter
2. Guide-wire
3. Vessel Dilator
4. Clamp
5. Fastener: Catheter Clamp
6. Introducer Needle
7. Introducer Syringe
8. Injection Needle
9. Injection Cap

**Optional Compound Kits Include:**
1. Standard Kit Accessories
2. 5ml Syringe
3. Surgical Gloves
4. Surgical Pledget
5. Surgery Sheet
6. Surgery Towel
7. Sterile Brush
8. Gauze Pad
9. Suture of Needle
10. Wound Dressing
11. Scalpel`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CentralVenousCatheterPage
