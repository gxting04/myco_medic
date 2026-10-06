import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The AWELD Portable Breathing Oxygen Inhaler (600 ml) is a portable oxygen delivery device designed for patients requiring supplemental oxygen therapy. This convenient device provides oxygen enrichment for breathing support in various clinical and home care settings.

**Key Features:**
• Portable design – lightweight, easy-to-carry oxygen delivery system
• 600ml capacity – provides adequate oxygen volume for extended use
• Easy to use – simple operation for patients and caregivers
• Comfortable interface – patient-friendly breathing interface
• Durable construction – designed for reliable clinical use
• Versatile application – suitable for various oxygen therapy needs

**Clinical Applications:**
• Supplemental oxygen therapy
• Home oxygen therapy
• Post-operative oxygen support
• Chronic respiratory conditions
• Emergency oxygen delivery
• Patient mobility support

**Clinical Benefits:**
• Portable oxygen delivery – enables patient mobility during oxygen therapy
• Patient comfort – comfortable interface improves patient tolerance
• Easy operation – simple design for patient and caregiver use
• Versatile application – suitable for various clinical settings

**Technical Specifications:**
• 600ml capacity
• Portable design
• Comfortable breathing interface
• Durable clinical construction
• Compatible with standard oxygen sources

The AWELD Portable Breathing Oxygen Inhaler provides healthcare professionals and patients with a convenient, portable solution for oxygen therapy, ensuring effective oxygen delivery while maintaining patient mobility.`

function AWELDPortableBreathingOxygenInhalerPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default AWELDPortableBreathingOxygenInhalerPage
