import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Ankle Protectors are specialized positioning devices designed to protect patients' ankles from pressure injuries during surgical procedures. These pads provide comfortable ankle support while maintaining proper ankle alignment and preventing pressure injuries.

**Key Features:**
• Ankle-specific design – optimized for ankle protection
• Pressure relief – reduces risk of ankle pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents ankle movement during procedures
• Versatile application – suitable for various positioning needs
• Easy to use – simple setup and placement

**Clinical Applications:**
• Ankle protection during procedures
• Pressure relief for ankles
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – prevents ankle pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents ankle movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Ankle-specific protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Ankle Protectors provide healthcare professionals with effective ankle protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function AnkleProtectorsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default AnkleProtectorsPage
