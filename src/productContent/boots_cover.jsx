import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Boots Cover, also known as shoe covers, is a protective footwear covering designed to prevent contamination of footwear and protect sterile environments. This essential personal protective equipment provides foot and shoe protection while maintaining mobility and comfort.

**Key Features:**
• Foot and shoe coverage – protects footwear from contamination
• Slip-resistant sole – provides traction on various surfaces
• Easy to use – simple application and removal
• Disposable design – single-use ensures hygiene
• Elastic opening – secure fit around footwear
• Water-resistant material – protects against liquid contamination

**Clinical Applications:**
• Operating room procedures
• Sterile environment maintenance
• Patient care activities
• Laboratory work
• Infection control protocols
• Contamination prevention

**Clinical Benefits:**
• Foot protection – shields footwear from contamination
• Infection control – disposable design prevents cross-contamination
• Slip resistance – reduces risk of falls
• Easy use – simple application for healthcare workers

**Technical Specifications:**
• Foot and shoe protective design
• Slip-resistant sole
• Elastic opening
• Water-resistant material
• Disposable, single-use design

The Boots Cover provides healthcare professionals with essential foot protection, ensuring contamination prevention and maintaining sterile environments.`

function BootsCoverPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BootsCoverPage
