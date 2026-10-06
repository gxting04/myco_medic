import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Waist Pads are specialized positioning devices featuring memory foam construction designed to protect patients' waist area from pressure injuries during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Waist-specific design – optimized for waist area protection
• Pressure relief – memory foam reduces risk of waist pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Waist protection during procedures
• Pressure relief for waist area
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Secure positioning – prevents patient movement during procedures
• Waist protection – protects waist area from pressure injuries

**Technical Specifications:**
• Memory foam construction
• Waist-specific protective design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Waist Pads provide healthcare professionals with superior comfort and pressure relief for waist protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemoryWaistPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryWaistPadsPage
