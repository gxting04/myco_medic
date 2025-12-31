import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BVFFilterPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Superior protection against airborne pathogens in respiratory care. Our Bacterial Virus Filter (BVF) provides high-efficiency filtration to protect patients and healthcare workers from cross-contamination during mechanical ventilation and anesthesia procedures.

**Key Features:**
• High Filtration Efficiency: >99.999% bacterial and viral filtration
• Bidirectional Protection: Protects both patient and equipment
• Low Resistance: Minimal impact on breathing mechanics
• Hydrophobic Media: Resistant to moisture and secretions
• Universal Compatibility: Fits standard breathing circuit connections

**Clinical Applications:**
• ICU: Critical care ventilation
• Operating Room: Anesthesia procedures
• Emergency: Transport ventilation
• Respiratory: Pulmonary function testing

**Infection Control Benefits:**

**Patient Safety:**
• Prevents cross-contamination
• Reduces infection risk
• Protects vulnerable patients

**Equipment Protection:**
• Extends equipment lifespan
• Reduces maintenance costs
• Prevents contamination buildup`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BVFFilterPage
