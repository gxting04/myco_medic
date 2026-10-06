import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Beakers & Feeder Tops are specialized containers designed for holding liquids and facilitating feeding or liquid administration to patients. These containers provide convenient solutions for patient feeding and liquid management.

**Key Features:**
• Liquid containment design – suitable for holding various liquids
• Feeder top design – facilitates controlled liquid administration
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs

**Clinical Applications:**
• Patient feeding
• Liquid administration
• Medication administration
• Patient care activities
• Clinical procedure support
• Liquid material containment

**Clinical Benefits:**
• Controlled administration – feeder top facilitates controlled liquid delivery
• Organized workflow – facilitates efficient patient care organization
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Liquid containment design
• Feeder top mechanism
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces

The Beakers & Feeder Tops provide healthcare professionals with convenient containers for patient feeding and liquid administration, ensuring efficient workflow and patient care.`

function BeakersFeederTopsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BeakersFeederTopsPage
