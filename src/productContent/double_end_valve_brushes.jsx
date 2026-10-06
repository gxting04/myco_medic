import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Double End Valve Brushes are specialized cleaning tools designed for thorough cleaning and maintenance of valve mechanisms in medical devices. These brushes feature bristles on both ends, providing efficient cleaning of valve components and ensuring proper device functionality.

**Key Features:**
• Double-ended design – provides two cleaning surfaces for efficient use
• Valve-specific design – sized for valve mechanism cleaning
• Effective cleaning – removes debris and biological material
• Durable bristles – withstands repeated use and sterilization
• Multiple sizes available – accommodates various valve sizes
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Medical device valve cleaning
• Breathing circuit valve maintenance
• Anesthesia machine valve care
• Ventilator valve cleaning
• Medical device reprocessing
• Central sterile supply cleaning

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of debris
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Efficient design – double-ended brushes provide versatility

**Technical Specifications:**
• Double-ended brush design
• Durable bristle construction
• Multiple sizes available
• Designed for sterilization and reuse
• Compatible with standard cleaning protocols

The Double End Valve Brushes provide healthcare professionals with efficient tools for maintaining cleanliness and functionality of valve mechanisms in medical devices, ensuring proper device care and infection control.`

function DoubleEndValveBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DoubleEndValveBrushesPage
