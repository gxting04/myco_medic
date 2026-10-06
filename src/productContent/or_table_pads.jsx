import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The O.R. Table Pads are specialized positioning devices designed to provide comprehensive support and pressure relief on operating room tables. These pads provide comfortable patient support while preventing pressure injuries during surgical procedures.

**Key Features:**
• Operating table-specific design – optimized for OR table use
• Comprehensive coverage – provides support across table surface
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Operating room table support
• Pressure relief during procedures
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – prevents pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Comprehensive support – provides support across table surface
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Operating table-specific design
• Comprehensive coverage design
• Soft padding material
• Secure positioning system
• Available in various sizes

The O.R. Table Pads provide healthcare professionals with comprehensive operating room table support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function ORTablePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ORTablePadsPage
