import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Isolation Gown is a protective garment designed to protect healthcare workers and patients from contamination during isolation procedures and patient care activities. This essential personal protective equipment provides body coverage while maintaining comfort and infection control.

**Key Features:**
• Full-body coverage – protects torso and arms from contamination
• Tied closure – secure fit prevents exposure
• Comfortable fit – allows freedom of movement
• Breathable material – reduces heat buildup during wear
• Disposable design – single-use ensures hygiene
• Fluid-resistant properties – protects against liquid contamination

**Clinical Applications:**
• Isolation procedures
• Patient care activities
• Contact precautions
• Infection control protocols
• Contamination prevention
• Healthcare worker protection

**Clinical Benefits:**
• Body protection – shields against contamination
• Infection control – disposable design prevents cross-contamination
• Patient safety – protects patients from healthcare worker contamination
• Comfortable wear – breathable material maintains comfort

**Technical Specifications:**
• Full-body protective design
• Tied closure system
• Breathable material
• Fluid-resistant properties
• Disposable, single-use design

The Isolation Gown provides healthcare professionals with essential body protection during isolation procedures, ensuring safety for both healthcare workers and patients.`

function IsolationGownPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default IsolationGownPage
