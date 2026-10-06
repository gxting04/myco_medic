import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Hip Pads are specialized positioning devices designed to protect patients' hips from pressure injuries during surgical procedures. These pads provide comfortable hip support while maintaining proper hip alignment and preventing pressure injuries to the hip bones.

**Key Features:**
• Hip-specific design – optimized for hip protection
• Pressure relief – reduces risk of hip pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents hip movement during procedures
• Versatile application – suitable for various positioning needs
• Easy to use – simple setup and placement

**Clinical Applications:**
• Hip protection during procedures
• Pressure relief for hips
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – prevents hip pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents hip movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Hip-specific protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Hip Pads provide healthcare professionals with effective hip protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function HipPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default HipPadsPage
