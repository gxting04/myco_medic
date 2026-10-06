import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Prostrate Head Pads are specialized positioning devices designed to support patients in the prone position during surgical procedures. These pads provide comfortable head and face support while maintaining airway access and preventing pressure injuries.

**Key Features:**
• Prone positioning support – designed for face-down patient positioning
• Pressure relief – reduces risk of facial and head pressure injuries
• Comfortable padding – soft material provides patient comfort
• Airway access – maintains accessibility for airway management
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Spinal surgery procedures
• Neurosurgical procedures
• Posterior approach surgeries
• Prone positioning for respiratory therapy
• Long-duration prone positioning
• Surgical procedures requiring prone position

**Clinical Benefits:**
• Pressure relief – reduces risk of pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Airway access – maintains accessibility for airway management
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Prone positioning design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Prostrate Head Pads provide healthcare professionals with comfortable, effective support for prone patient positioning, ensuring patient safety and comfort during surgical procedures.`

function ProstrateHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ProstrateHeadPadsPage
