import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Wrist Protectors are specialized positioning devices designed to protect patients' wrists from pressure injuries during surgical procedures. These pads provide comfortable wrist support while maintaining proper wrist alignment and preventing nerve compression.

**Key Features:**
• Wrist-specific design – optimized for wrist protection
• Pressure relief – reduces risk of wrist pressure injuries
• Nerve protection – prevents median nerve compression
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents wrist movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Wrist protection during procedures
• Pressure relief for wrists
• Long-duration procedures
• Patient comfort during surgery
• Nerve protection
• Various surgical positions

**Clinical Benefits:**
• Pressure relief – prevents wrist pressure injuries
• Nerve protection – prevents median nerve compression
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents wrist movement

**Technical Specifications:**
• Wrist-specific protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Wrist Protectors provide healthcare professionals with effective wrist protection, ensuring patient comfort and preventing pressure injuries and nerve compression during procedures.`

function WristProtectorsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default WristProtectorsPage
