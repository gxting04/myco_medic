import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DonutHeadPadsPage({ product }) {
  // Enhance product with additional description details
  const enhancedProduct = {
    ...product,
    description: product.description || `Donut-style head cradles that protect and stabilize the patient's head across ENT, plastic, general, and ophthalmic procedures, with adult and pediatric sizing.

**Key Benefits:**
• Cradles and protects the head; helps maintain neutral alignment during surgery
• Suitable for ENT, plastic, general, and ophthalmic procedures
• Available in multiple sizes, including dedicated pediatric sizing

**Models & Sizing:**

1102 Series (1102-1 to 1102-11)
• Type: Standard donut head pads
• Size: Multiple adult sizes
• Notes: Protects and cradles the patient's head across a variety of procedures

1102-3 (Pediatric)
• Type: Pediatric donut head pad
• Size: 14 cm × 5 cm × 3 cm
• Notes: Sized for pediatric use; supports stable positioning`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DonutHeadPadsPage

