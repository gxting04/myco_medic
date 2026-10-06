import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Prostrate Pads are specialized positioning devices featuring memory foam construction designed to support patients in the prone position during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material that conforms to body contours.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Prone positioning design – optimized for face-down positioning
• Pressure relief – memory foam reduces risk of body pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Prone positioning surgeries
• Spinal surgery procedures
• Posterior approach surgeries
• Long-duration prone positioning
• Patient comfort during surgery
• Pressure injury prevention

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper prone alignment

**Technical Specifications:**
• Memory foam construction
• Prone positioning design
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Memory Prostrate Pads provide healthcare professionals with superior comfort and pressure relief for prone positioning, ensuring patient safety and exceptional comfort during face-down surgical procedures.`

function MemoryProstratePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryProstratePadsPage
