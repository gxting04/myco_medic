import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Large Instrument Cleaning Brush is designed for thorough cleaning and maintenance of large surgical and medical instruments. This robust brush effectively removes debris, blood, and biological material from large instrument surfaces, ensuring proper hygiene and device functionality.

**Key Features:**
• Large brush design – sized for large instrument cleaning
• Effective cleaning – removes debris and biological material
• Durable bristles – stainless steel or nylon bristles withstand repeated use
• Robust construction – designed for heavy-duty cleaning tasks
• Reusable design – can be sterilized for multiple uses
• Versatile application – suitable for various large instrument types

**Clinical Applications:**
• Large surgical instrument cleaning
• Medical device maintenance
• Central sterile supply cleaning
• Device reprocessing
• Operating room instrument care
• Orthopedic instrument cleaning

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of debris
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Robust design – suitable for heavy-duty cleaning tasks

**Technical Specifications:**
• Large brush design
• Stainless steel or nylon bristles
• Robust construction
• Designed for sterilization and reuse
• Compatible with standard cleaning protocols

The Large Instrument Cleaning Brush provides healthcare professionals with a robust tool for maintaining cleanliness and functionality of large surgical and medical instruments, ensuring proper device care and infection control.`

function LargeInstrumentCleaningBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default LargeInstrumentCleaningBrushPage
