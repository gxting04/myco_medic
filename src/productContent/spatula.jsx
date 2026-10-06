import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Spatula is a versatile medical tool designed for mixing, spreading, and handling various materials during medical procedures. This essential instrument facilitates precise material handling and mixing in clinical settings.

**Key Features:**
• Versatile design – suitable for mixing, spreading, and handling materials
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various medical procedures

**Clinical Applications:**
• Material mixing during procedures
• Medication preparation
• Solution preparation
• Clinical procedure support
• Material handling
• Mixing applications

**Clinical Benefits:**
• Versatile tool – suitable for various material handling needs
• Organized workflow – facilitates efficient procedure organization
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Versatile spatula design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Spatula provides healthcare professionals with a versatile tool for material handling and mixing during medical procedures, ensuring efficient workflow and precise material management.`

function SpatulaPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SpatulaPage
