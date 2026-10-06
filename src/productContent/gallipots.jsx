import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Gallipots are small, shallow containers designed for holding solutions, medications, or small instruments during medical procedures. These versatile containers are essential tools for organizing and containing various materials during clinical procedures.

**Key Features:**
• Small container design – suitable for holding solutions and small items
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs
• Versatile application – suitable for various medical procedures

**Clinical Applications:**
• Solution containment during procedures
• Medication preparation
• Small instrument organization
• Operating room procedures
• Clinical procedure organization
• Material containment

**Clinical Benefits:**
• Organized workflow – facilitates efficient procedure organization
• Versatile application – suitable for various clinical needs
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Small container design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Gallipots provide healthcare professionals with versatile containers for organizing and containing materials during medical procedures, ensuring efficient workflow and organization.`

function GallipotsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default GallipotsPage
