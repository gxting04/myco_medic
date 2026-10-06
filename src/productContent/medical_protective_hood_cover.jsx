import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Medical Protective Hood Cover is a head and neck protective device designed to protect healthcare workers from contamination during medical procedures. This essential personal protective equipment provides comprehensive head coverage while maintaining comfort and visibility.

**Key Features:**
• Head and neck coverage – protects head and neck from contamination
• Comfortable fit – lightweight design reduces fatigue
• Easy to use – simple application and removal
• Disposable design – single-use ensures hygiene
• Breathable material – reduces heat buildup
• Compatible with other PPE – works with face shields and masks

**Clinical Applications:**
• Medical procedures requiring head protection
• Patient care activities
• Emergency medical procedures
• Laboratory work
• Infection control protocols
• Contamination prevention

**Clinical Benefits:**
• Head protection – shields against contamination
• Infection control – disposable design prevents cross-contamination
• Comfortable wear – lightweight, breathable design
• Easy use – simple application for healthcare workers

**Technical Specifications:**
• Head and neck protective design
• Lightweight construction
• Breathable material
• Disposable, single-use design
• Compatible with standard PPE

The Medical Protective Hood Cover provides healthcare professionals with essential head and neck protection, ensuring safety during medical procedures while maintaining comfort.`

function MedicalProtectiveHoodCoverPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MedicalProtectiveHoodCoverPage
