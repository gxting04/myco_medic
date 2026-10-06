import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Lower Limb Protector Pads are specialized positioning devices featuring memory foam construction designed to protect patients' lower limbs from pressure injuries during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to limb contours for superior comfort
• Lower limb protection design – optimized for leg and foot protection
• Pressure relief – memory foam reduces risk of lower limb pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents limb movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Lower limb protection during procedures
• Pressure relief for legs and feet
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to limb shape for optimal comfort
• Secure positioning – prevents limb movement during procedures
• Anatomical fit – memory foam accommodates limb contours

**Technical Specifications:**
• Memory foam construction
• Lower limb protective design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Lower Limb Protector Pads provide healthcare professionals with superior comfort and pressure relief for lower limb protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemoryLowerLimbPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryLowerLimbPadsPage
