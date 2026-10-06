import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Chest-Hipbone Pads are specialized positioning devices featuring memory foam construction designed to support patients' chest and hip areas during prone positioning procedures. These pads provide superior comfort and pressure relief through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Chest and hip support – provides support for both chest and hip areas
• Prone positioning design – optimized for face-down positioning
• Pressure relief – memory foam reduces risk of chest and hip pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
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
• Dual support – supports both chest and hip areas

**Technical Specifications:**
• Memory foam construction
• Chest and hip support design
• Prone positioning optimized
• Secure positioning system
• Available in various sizes

The Memory Chest-Hipbone Pads provide healthcare professionals with superior comfort and pressure relief for prone positioning, ensuring patient safety and exceptional comfort during surgical procedures.`

function MemoryChestHipbonePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryChestHipbonePadsPage
