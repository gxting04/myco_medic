import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Washbowl is a specialized container designed for holding water and solutions during patient care activities, particularly for washing and hygiene procedures. This essential container facilitates various patient care tasks.

**Key Features:**
• Washing solution containment – suitable for holding water and solutions
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various patient care activities

**Clinical Applications:**
• Patient washing procedures
• Hygiene care activities
• Wound care procedures
• Patient care activities
• Clinical procedure support
• Solution containment

**Clinical Benefits:**
• Organized workflow – facilitates efficient patient care organization
• Versatile application – suitable for various clinical needs
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Washing solution containment design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard patient care procedures

The Washbowl provides healthcare professionals with a convenient container for patient washing and hygiene procedures, ensuring efficient workflow and patient care.`

function WashbowlPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default WashbowlPage
