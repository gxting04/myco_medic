import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Lateral Pads are specialized positioning devices featuring memory foam construction designed to support patients in the lateral (side-lying) position during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Lateral positioning design – optimized for side-lying position
• Pressure relief – memory foam reduces risk of lateral pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Lateral positioning surgeries
• Side-lying procedures
• Long-duration lateral positioning
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper lateral alignment

**Technical Specifications:**
• Memory foam construction
• Lateral positioning design
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Memory Lateral Pads provide healthcare professionals with superior comfort and pressure relief for lateral positioning, ensuring patient safety and exceptional comfort during side-lying surgical procedures.`

function MemoryLateralPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryLateralPadsPage
