import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Sensory Brush is a therapeutic tool designed for sensory integration therapy and tactile stimulation. This specialized brush provides controlled tactile input to help regulate sensory processing and improve sensory integration in individuals with sensory processing disorders.

**Key Features:**
• Therapeutic design – provides controlled tactile stimulation
• Soft bristles – gentle yet effective sensory input
• Easy to use – simple application technique
• Portable design – convenient for use in various settings
• Durable construction – designed for repeated therapeutic use
• Multiple sizes available – accommodates various therapeutic needs

**Clinical Applications:**
• Sensory integration therapy
• Tactile defensiveness treatment
• Autism spectrum disorder therapy
• Sensory processing disorder intervention
• Occupational therapy
• Pediatric therapy

**Clinical Benefits:**
• Sensory regulation – helps regulate sensory processing
• Improved integration – enhances sensory integration abilities
• Therapeutic tool – supports various therapeutic interventions
• Patient comfort – gentle tactile input

**Technical Specifications:**
• Therapeutic brush design
• Soft bristle construction
• Portable design
• Available in various sizes
• Designed for therapeutic use

The Sensory Brush provides therapists and healthcare professionals with an effective tool for sensory integration therapy, supporting improved sensory processing and integration in patients with sensory processing challenges.`

function SensoryBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SensoryBrushPage
