import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Double Ended Cleaning Brush with Nylon Bristles is a versatile cleaning tool designed for thorough cleaning and maintenance of various medical devices and instruments. This brush features nylon bristles on both ends, providing efficient cleaning of different-sized components.

**Key Features:**
• Double-ended design – provides two cleaning surfaces for efficient use
• Nylon bristles – gentle yet effective cleaning without scratching surfaces
• Versatile application – suitable for various instrument types
• Effective cleaning – removes debris and biological material
• Multiple sizes available – accommodates various device sizes
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Medical instrument cleaning
• Device maintenance
• Central sterile supply cleaning
• Device reprocessing
• Operating room instrument care
• General medical device cleaning

**Clinical Benefits:**
• Effective cleaning – ensures thorough removal of debris
• Device maintenance – prolongs device lifespan
• Infection control – proper cleaning reduces infection risk
• Versatile design – suitable for various cleaning tasks

**Technical Specifications:**
• Double-ended brush design
• Nylon bristle construction
• Multiple sizes available
• Designed for sterilization and reuse
• Compatible with standard cleaning protocols

The Double Ended Cleaning Brush provides healthcare professionals with a versatile tool for maintaining cleanliness and functionality of medical devices and instruments, ensuring proper device care and infection control.`

function DoubleEndedCleaningBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DoubleEndedCleaningBrushPage
