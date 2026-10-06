import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Chest-Hipbone Pads are specialized positioning devices designed to support patients' chest and hip areas during prone positioning procedures. These pads provide comfortable support while preventing pressure injuries to the chest and hip bones.

**Key Features:**
• Chest and hip support – provides support for both chest and hip areas
• Prone positioning design – optimized for face-down positioning
• Pressure relief – reduces risk of chest and hip pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Prone positioning surgeries
• Spinal surgery procedures
• Posterior approach surgeries
• Long-duration prone positioning
• Patient comfort during surgery
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – reduces risk of chest and hip pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement during procedures
• Dual support – supports both chest and hip areas

**Technical Specifications:**
• Chest and hip support design
• Prone positioning optimized
• Soft padding material
• Secure positioning system
• Available in various sizes

The Chest-Hipbone Pads provide healthcare professionals with comfortable chest and hip support for prone positioning, ensuring patient safety and comfort during surgical procedures.`

function ChestHipbonePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ChestHipbonePadsPage
