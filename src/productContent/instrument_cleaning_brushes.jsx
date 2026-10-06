import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Instrument Cleaning Brushes are versatile cleaning tools designed for thorough cleaning and maintenance of various surgical and medical instruments. These brushes effectively remove debris, blood, and biological material from instrument surfaces and crevices, ensuring proper hygiene and device functionality.

**Key Features:**
• Versatile design – suitable for various instrument types
• Effective cleaning – removes debris and biological material
• Durable bristles – stainless steel or nylon bristles withstand repeated use
• Multiple sizes and styles – accommodates various instrument sizes
• Double-ended options – provides multiple cleaning surfaces
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Surgical instrument cleaning
• Medical device maintenance
• Central sterile supply cleaning
• Device reprocessing
• Operating room instrument care
• Endoscopy equipment cleaning

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of debris
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Versatile application – suitable for various instrument types

**Technical Specifications:**
• Stainless steel or nylon bristles
• Multiple sizes and styles available
• Double-ended options
• Designed for sterilization and reuse
• Compatible with standard cleaning protocols

The Instrument Cleaning Brushes provide healthcare professionals with versatile tools for maintaining cleanliness and functionality of surgical and medical instruments, ensuring proper device care and infection control.`

function InstrumentCleaningBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InstrumentCleaningBrushesPage
