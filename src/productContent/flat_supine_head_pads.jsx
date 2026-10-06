import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Flat Supine Head Pads are specialized positioning devices featuring a flat design for supporting patients' heads in the supine (face-up) position during surgical procedures. These pads provide comfortable, level head support while preventing pressure injuries.

**Key Features:**
• Flat design – provides level head support
• Supine positioning support – designed for face-up patient positioning
• Pressure distribution – distributes pressure evenly across head
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents head movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• General surgical procedures
• Supine positioning surgeries
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Post-operative positioning

**Clinical Benefits:**
• Pressure distribution – distributes pressure evenly
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents head movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Flat supine positioning design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Flat Supine Head Pads provide healthcare professionals with comfortable, level head support for supine patient positioning, ensuring patient comfort and preventing pressure injuries.`

function FlatSupineHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default FlatSupineHeadPadsPage
