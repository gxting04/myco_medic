import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Infrared Thermometer is a non-contact temperature measurement device designed for quick, hygienic temperature screening. This advanced device measures body temperature from a distance without physical contact, making it ideal for infection control and rapid screening applications.

**Key Features:**
• Non-contact measurement – measures temperature without physical contact
• Fast reading – provides temperature reading in seconds
• Hygienic design – eliminates cross-contamination risks
• Easy to use – simple point-and-shoot operation
• Digital display – clear, easy-to-read temperature display
• Memory function – stores previous readings for tracking

**Clinical Applications:**
• Patient temperature screening
• Fever detection
• Infection control screening
• Emergency department triage
• Outpatient clinic screening
• Public health screening

**Clinical Benefits:**
• Infection control – non-contact design prevents cross-contamination
• Rapid screening – quick temperature measurement
• Patient comfort – no physical contact required
• Versatile application – suitable for various screening needs

**Technical Specifications:**
• Non-contact infrared technology
• Fast measurement time
• Digital display
• Memory storage capability
• Battery-powered operation

The Infrared Thermometer provides healthcare professionals with a hygienic, efficient solution for temperature screening, ensuring rapid assessment while maintaining infection control standards.`

function InfraredThermometerPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InfraredThermometerPage
