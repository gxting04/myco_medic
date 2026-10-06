import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Sensory Brush 2.0 is an advanced therapeutic tool designed for sensory integration therapy and tactile stimulation. This improved version provides enhanced tactile input to help regulate sensory processing and improve sensory integration in individuals with sensory processing disorders.

**Key Features:**
• Advanced therapeutic design – provides enhanced controlled tactile stimulation
• Improved bristles – optimized for effective sensory input
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
• Enhanced sensory regulation – improved design helps regulate sensory processing
• Improved integration – enhances sensory integration abilities
• Therapeutic tool – supports various therapeutic interventions
• Patient comfort – gentle tactile input

**Technical Specifications:**
• Advanced therapeutic brush design
• Improved bristle construction
• Portable design
• Available in various sizes
• Designed for therapeutic use

The Sensory Brush 2.0 provides therapists and healthcare professionals with an enhanced tool for sensory integration therapy, supporting improved sensory processing and integration in patients with sensory processing challenges.`

function SensoryBrush20Page({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SensoryBrush20Page
