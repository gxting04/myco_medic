import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Compartmented Instrument Tray is a specialized container featuring multiple compartments designed for organizing and separating different surgical instruments during medical procedures. This tray provides enhanced organization through its compartmentalized design.

**Key Features:**
• Compartmentalized design – multiple compartments for instrument separation
• Enhanced organization – facilitates organized instrument storage
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Versatile application – suitable for various surgical procedures

**Clinical Applications:**
• Surgical instrument organization
• Operating room procedures
• Instrument separation and organization
• Clinical procedure organization
• Instrument containment
• Enhanced material management

**Clinical Benefits:**
• Enhanced organization – compartmentalized design facilitates instrument separation
• Organized workflow – facilitates efficient instrument organization
• Easy access – provides easy access to organized instruments
• Versatile application – suitable for various clinical needs

**Technical Specifications:**
• Compartmentalized tray design
• Multiple compartments
• Durable construction material
• Easy-to-clean surfaces
• Compatible with standard surgical procedures

The Compartmented Instrument Tray provides healthcare professionals with enhanced organization for surgical instruments through compartmentalized design, ensuring efficient workflow and organized instrument access.`

function CompartmentedInstrumentTrayPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CompartmentedInstrumentTrayPage
