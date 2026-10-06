import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Funnels are specialized tools designed for transferring liquids and solutions from one container to another during medical procedures. These essential tools facilitate safe, controlled liquid transfer in clinical settings.

**Key Features:**
• Liquid transfer design – facilitates controlled liquid transfer
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various liquid transfer needs

**Clinical Applications:**
• Liquid transfer during procedures
• Solution preparation
• Medication preparation
• Clinical procedure support
• Liquid material management
• Controlled liquid transfer

**Clinical Benefits:**
• Controlled transfer – facilitates safe, controlled liquid transfer
• Organized workflow – facilitates efficient procedure organization
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Liquid transfer design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Funnels provide healthcare professionals with essential tools for safe, controlled liquid transfer during medical procedures, ensuring efficient workflow and safety.`

function FunnelsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default FunnelsPage
