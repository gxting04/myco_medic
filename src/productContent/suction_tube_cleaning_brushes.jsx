import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Suction Tube Cleaning Brushes (Baron & Frazier) are specialized cleaning tools designed for thorough cleaning and maintenance of suction tubes and catheters. These brushes effectively remove secretions, debris, and biological material from tube lumens, ensuring proper hygiene and device functionality.

**Key Features:**
• Suction tube-specific design – sized for Baron and Frazier suction tubes
• Effective cleaning – removes secretions and biological material
• Durable bristles – withstands repeated use and sterilization
• Multiple sizes available – accommodates various tube sizes
• Flexible design – accommodates tube curvature
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Suction tube cleaning and maintenance
• Frazier and Baron suction device care
• Medical device reprocessing
• Central sterile supply cleaning
• Device reprocessing departments
• Operating room equipment maintenance

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of secretions
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Cost-effective – reusable design provides long-term value

**Technical Specifications:**
• Suction tube-specific brush design
• Durable bristle construction
• Multiple sizes available
• Flexible construction
• Designed for sterilization and reuse

The Suction Tube Cleaning Brushes provide healthcare professionals with effective tools for maintaining cleanliness and functionality of suction tubes and catheters, ensuring proper device care and infection control.`

function SuctionTubeCleaningBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SuctionTubeCleaningBrushesPage
