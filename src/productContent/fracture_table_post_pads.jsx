import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Fracture Table Post Pads are specialized positioning devices designed for use with fracture tables during orthopedic procedures. These pads provide comfortable support around fracture table posts while preventing pressure injuries and maintaining patient comfort.

**Key Features:**
• Fracture table-specific design – optimized for fracture table use
• Post accommodation – accommodates fracture table post positioning
• Pressure relief – reduces risk of pressure injuries around posts
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Fracture table procedures
• Orthopedic surgery positioning
• Lower extremity procedures
• Traction procedures
• Patient comfort during surgery
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – reduces risk of pressure injuries around posts
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement during procedures
• Fracture table compatibility – designed for fracture table use

**Technical Specifications:**
• Fracture table-specific design
• Post accommodation design
• Soft padding material
• Secure positioning system
• Available in various sizes

The Fracture Table Post Pads provide healthcare professionals with comfortable support for fracture table procedures, ensuring patient safety and comfort during orthopedic surgical procedures.`

function FractureTablePostPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default FractureTablePostPadsPage
