import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Horseshoe Head Pads are specialized positioning devices featuring a U-shaped design that supports the head while providing access to the face and airway. These pads are ideal for procedures requiring face-up positioning with airway access.

**Key Features:**
• Horseshoe (U-shaped) design – supports head while allowing face access
• Supine positioning support – designed for face-up patient positioning
• Airway access – maintains accessibility for airway management
• Pressure relief – reduces risk of head and neck pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents head movement during procedures

**Clinical Applications:**
• General surgical procedures
• Procedures requiring airway access
• Supine positioning surgeries
• Long-duration procedures
• Patient comfort during surgery
• Airway management procedures

**Clinical Benefits:**
• Airway access – maintains accessibility for airway management
• Pressure relief – reduces risk of pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Horseshoe (U-shaped) design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Horseshoe Head Pads provide healthcare professionals with comfortable head support while maintaining airway access, ensuring patient safety and comfort during surgical procedures.`

function HorseshoeHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default HorseshoeHeadPadsPage
