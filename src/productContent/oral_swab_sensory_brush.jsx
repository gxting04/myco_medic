import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Oral Swab Sensory Brush is a specialized oral care device combining oral swab functionality with sensory brush features, designed for patients requiring oral hygiene and sensory stimulation. This innovative device provides oral care while offering tactile sensory input.

**Key Features:**
• Combined design – oral swab with sensory brush features
• Oral care design – provides effective oral cavity cleaning
• Sensory stimulation – provides tactile sensory input
• Easy to use – simple operation for healthcare providers
• Patient comfort – gentle cleaning and stimulation action
• Versatile application – suitable for oral care and sensory therapy

**Clinical Applications:**
• Patient oral care
• Sensory integration therapy
• Bedridden patient care
• Intensive care unit oral hygiene
• Post-surgical oral care
• Patients requiring sensory stimulation

**Clinical Benefits:**
• Effective oral care – provides thorough oral cavity cleaning
• Sensory stimulation – provides tactile sensory input
• Patient comfort – gentle cleaning and stimulation action
• Versatile application – suitable for multiple therapeutic needs

**Technical Specifications:**
• Combined oral swab and sensory brush design
• Oral care functionality
• Sensory stimulation features
• Easy-to-use design
• Suitable for various patient populations

The Oral Swab Sensory Brush provides healthcare professionals with a versatile solution for patient oral care and sensory stimulation, ensuring comprehensive patient care.`

function OralSwabSensoryBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default OralSwabSensoryBrushPage
