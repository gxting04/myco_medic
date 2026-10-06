import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Lateral Pads are specialized positioning devices designed to support patients in the lateral (side-lying) position during surgical procedures. These pads provide comfortable side support while maintaining proper body alignment and preventing pressure injuries.

**Key Features:**
• Lateral positioning design – optimized for side-lying position
• Pressure relief – reduces risk of lateral pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper lateral body alignment
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Lateral positioning surgeries
• Side-lying procedures
• Long-duration lateral positioning
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – reduces risk of lateral pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement during procedures
• Body alignment – maintains proper lateral alignment

**Technical Specifications:**
• Lateral positioning design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Lateral Pads provide healthcare professionals with comfortable lateral positioning support, ensuring patient safety and comfort during side-lying surgical procedures.`

function LateralPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default LateralPadsPage
