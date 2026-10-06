import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Instrument Tray is a specialized container designed for organizing and holding surgical instruments during medical procedures. This essential tray provides organized storage and easy access to instruments during procedures.

**Key Features:**
• Instrument organization design – provides organized storage for surgical instruments
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various surgical procedures

**Clinical Applications:**
• Surgical instrument organization
• Operating room procedures
• Instrument storage during procedures
• Clinical procedure organization
• Instrument containment
• Material management

**Clinical Benefits:**
• Organized workflow – facilitates efficient instrument organization
• Easy access – provides easy access to instruments during procedures
• Versatile application – suitable for various clinical needs
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Instrument tray design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard surgical procedures

The Instrument Tray provides healthcare professionals with organized storage for surgical instruments during medical procedures, ensuring efficient workflow and easy instrument access.`

function InstrumentTrayPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InstrumentTrayPage
