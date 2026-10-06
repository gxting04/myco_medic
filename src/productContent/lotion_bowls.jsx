import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Lotion Bowls are specialized containers designed for holding lotions, solutions, and liquids during medical procedures. These bowls provide convenient containment for various liquids used in clinical care and procedures.

**Key Features:**
• Solution containment design – suitable for holding lotions and solutions
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various medical procedures

**Clinical Applications:**
• Lotion and solution containment
• Wound care procedures
• Patient care activities
• Operating room procedures
• Clinical procedure organization
• Liquid material containment

**Clinical Benefits:**
• Organized workflow – facilitates efficient procedure organization
• Versatile application – suitable for various clinical needs
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Solution containment design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Lotion Bowls provide healthcare professionals with convenient containers for holding lotions and solutions during medical procedures, ensuring efficient workflow and organization.`

function LotionBowlsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default LotionBowlsPage
