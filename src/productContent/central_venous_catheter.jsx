import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Central Venous Catheter is a specialized vascular access device inserted into large central veins for administration of medications, fluids, blood products, and hemodynamic monitoring. This essential device enables reliable venous access for critical care and surgical patients.

**Key Features:**
• Multi-lumen design – multiple channels for simultaneous administration of different therapies
• Radiopaque material – visible on X-ray for accurate positioning verification
• Soft, flexible tip – reduces risk of vascular trauma
• Secure fixation – designed for stable placement and reduced dislodgement risk
• Standard connectors – compatible with standard IV administration sets
• Multiple sizes available – accommodates various patient populations

**Clinical Applications:**
• Critical care fluid and medication administration
• Total parenteral nutrition (TPN) delivery
• Hemodynamic monitoring (central venous pressure)
• Blood product administration
• Long-term venous access

**Clinical Benefits:**
• Reliable venous access – provides secure route for critical therapies
• Multi-lumen capability – enables simultaneous administration of multiple medications
• Hemodynamic monitoring – allows measurement of central venous pressure
• Long-term use – suitable for extended patient care

**Technical Specifications:**
• Multi-lumen design (typically 2-4 lumens)
• Radiopaque material for X-ray visibility
• Soft, flexible tip construction
• Standard IV connectors
• Available in various sizes and configurations

The Central Venous Catheter provides healthcare professionals with reliable vascular access for critical care patients, enabling safe administration of medications, fluids, and hemodynamic monitoring.`

function CentralVenousCatheterPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CentralVenousCatheterPage
