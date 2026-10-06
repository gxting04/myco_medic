import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Heel Pads are specialized positioning devices designed to protect patients' heels from pressure injuries during surgical procedures. These pads provide comfortable heel support while preventing pressure injuries and maintaining proper heel alignment.

**Key Features:**
• Heel-specific design – optimized for heel protection
• Pressure relief – reduces risk of heel pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents heel movement during procedures
• Versatile application – suitable for various positioning needs
• Easy to use – simple setup and placement

**Clinical Applications:**
• Heel protection during procedures
• Pressure relief for heels
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – prevents heel pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents heel movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Heel-specific protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Heel Pads provide healthcare professionals with effective heel protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function HeelPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default HeelPadsPage
