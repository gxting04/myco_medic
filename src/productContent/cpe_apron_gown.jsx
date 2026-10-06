import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The CPE Apron Gown (Thumb Loop) is a protective garment designed to protect healthcare workers from contamination during patient care activities. This essential personal protective equipment features thumb loops for secure fit and provides front body coverage while maintaining comfort.

**Key Features:**
• Thumb loop design – secure fit prevents exposure
• Front body coverage – protects torso from contamination
• Easy to use – simple application with thumb loops
• Disposable design – single-use ensures hygiene
• Lightweight material – comfortable for extended wear
• Water-resistant properties – protects against liquid contamination

**Clinical Applications:**
• Patient care activities
• Feeding and hygiene procedures
• Contamination prevention
• Infection control protocols
• Healthcare worker protection
• General medical procedures

**Clinical Benefits:**
• Body protection – shields against contamination
• Secure fit – thumb loops prevent exposure
• Infection control – disposable design prevents cross-contamination
• Comfortable wear – lightweight material maintains comfort

**Technical Specifications:**
• Thumb loop design
• Front body protective coverage
• Water-resistant material
• Disposable, single-use design
• Available in various sizes

The CPE Apron Gown provides healthcare professionals with essential body protection during patient care activities, ensuring safety while maintaining comfort and mobility.`

function CPEApronGownPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CPEApronGownPage
