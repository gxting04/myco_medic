import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Stainless Steel Dins are specialized containers constructed from stainless steel, designed for holding and organizing materials during medical procedures. These durable containers provide reliable containment for various clinical materials.

**Key Features:**
• Stainless steel construction – durable, corrosion-resistant material
• Material containment design – suitable for holding various materials
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth stainless steel surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs

**Clinical Applications:**
• Material containment during procedures
• Solution containment
• Instrument organization
• Operating room procedures
• Clinical procedure organization
• Durable material containment

**Clinical Benefits:**
• Durable construction – stainless steel withstands repeated clinical use
• Corrosion resistance – stainless steel resists corrosion
• Organized workflow – facilitates efficient procedure organization
• Easy to clean – smooth surfaces facilitate cleaning

**Technical Specifications:**
• Stainless steel construction
• Durable material containment design
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Stainless Steel Dins provide healthcare professionals with durable, corrosion-resistant containers for material containment during medical procedures, ensuring reliable performance and efficient workflow.`

function StainlessSteelDinsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default StainlessSteelDinsPage
