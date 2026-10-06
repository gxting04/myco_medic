import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Heel Pads are specialized positioning devices featuring memory foam construction designed to protect patients' heels from pressure injuries during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material that conforms to heel contours.

**Key Features:**
• Memory foam construction – conforms to heel contours for superior comfort
• Heel-specific design – optimized for heel protection
• Pressure relief – memory foam reduces risk of heel pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents heel movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Heel protection during procedures
• Pressure relief for heels
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to heel shape for optimal comfort
• Secure positioning – prevents heel movement during procedures
• Anatomical fit – memory foam accommodates heel contours

**Technical Specifications:**
• Memory foam construction
• Heel-specific protective design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Heel Pads provide healthcare professionals with superior comfort and pressure relief for heel protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemoryHeelPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryHeelPadsPage
