import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The St. Peter's Boat is a specialized container designed for holding and organizing small instruments and materials during medical procedures. This boat-shaped container provides convenient organization for various clinical items.

**Key Features:**
• Boat-shaped design – ergonomic shape facilitates organization
• Small instrument organization – designed for organizing small items
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Versatile application – suitable for various clinical needs

**Clinical Applications:**
• Small instrument organization
• Material organization during procedures
• Operating room procedures
• Clinical procedure organization
• Instrument containment
• Material management

**Clinical Benefits:**
• Organized workflow – facilitates efficient procedure organization
• Versatile application – suitable for various clinical needs
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Boat-shaped design
• Durable construction material
• Easy-to-clean surfaces
• Compatible with standard clinical procedures
• Suitable for small instrument organization

The St. Peter's Boat provides healthcare professionals with a convenient container for organizing small instruments and materials during medical procedures, ensuring efficient workflow and organization.`

function StPetersBoatPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default StPetersBoatPage
