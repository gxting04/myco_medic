import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Cannula Cleaning Brushes are specialized cleaning tools designed for thorough cleaning and maintenance of cannulas and small-bore medical devices. These brushes effectively remove debris, blood, and biological material from narrow lumens, ensuring proper hygiene and device functionality.

**Key Features:**
• Small-bore design – specifically sized for cannula cleaning
• Effective cleaning – removes debris and biological material
• Durable bristles – withstands repeated use and sterilization
• Multiple sizes available – accommodates various cannula sizes
• Easy to use – simple insertion and cleaning process
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Cannula cleaning and maintenance
• Small-bore device cleaning
• Endotracheal tube cleaning
• Tracheostomy tube cleaning
• Medical device reprocessing
• Central line maintenance

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of debris
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Cost-effective – reusable design provides long-term value

**Technical Specifications:**
• Small-bore brush design
• Durable bristle construction
• Multiple sizes available
• Designed for sterilization and reuse
• Compatible with standard cleaning protocols

The Cannula Cleaning Brushes provide healthcare professionals with effective tools for maintaining cleanliness and functionality of cannulas and small-bore medical devices, ensuring proper device care and infection control.`

function CannulaCleaningBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CannulaCleaningBrushesPage
