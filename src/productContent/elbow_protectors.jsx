import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Elbow Protectors are specialized positioning devices designed to protect patients' elbows from pressure injuries during surgical procedures. These pads provide comfortable elbow support while maintaining proper elbow alignment and preventing ulnar nerve compression.

**Key Features:**
• Elbow-specific design – optimized for elbow protection
• Pressure relief – reduces risk of elbow pressure injuries
• Nerve protection – prevents ulnar nerve compression
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents elbow movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Elbow protection during procedures
• Pressure relief for elbows
• Long-duration procedures
• Patient comfort during surgery
• Nerve protection
• Various surgical positions

**Clinical Benefits:**
• Pressure relief – prevents elbow pressure injuries
• Nerve protection – prevents ulnar nerve compression
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents elbow movement

**Technical Specifications:**
• Elbow-specific protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Elbow Protectors provide healthcare professionals with effective elbow protection, ensuring patient comfort and preventing pressure injuries and nerve compression during procedures.`

function ElbowProtectorsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ElbowProtectorsPage
