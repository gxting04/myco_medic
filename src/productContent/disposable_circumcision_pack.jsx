import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableCircumcisionPackPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Ready-to-use EO sterile circumcision pack engineered for a single complete procedure. Minimizes infection risk and eliminates decontamination turnaround.

**Benefits:**
• Perform reliably for a single full circumcision procedure
• EO sterile pack minimizes infection and cross-infection risk
• Reduces time and cost tied to decontamination and sterilization

**Use Cases:**
• Clinics and hospitals needing fast turnaround for minor procedures
• Settings focused on infection control with single-use solutions
• Situations where reusable instrument reprocessing is impractical`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableCircumcisionPackPage
