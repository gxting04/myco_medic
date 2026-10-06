import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Prostrate Pads are specialized positioning devices designed to support patients in the prone position during surgical procedures. These pads provide comfortable body support while maintaining proper alignment and preventing pressure injuries.

**Key Features:**
• Prone positioning design – optimized for face-down positioning
• Pressure relief – reduces risk of body pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper prone body alignment
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Prone positioning surgeries
• Spinal surgery procedures
• Posterior approach surgeries
• Long-duration prone positioning
• Patient comfort during surgery
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – reduces risk of body pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper prone alignment

**Technical Specifications:**
• Prone positioning design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Prostrate Pads provide healthcare professionals with comfortable prone positioning support, ensuring patient safety and comfort during face-down surgical procedures.`

function ProstratePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ProstratePadsPage
