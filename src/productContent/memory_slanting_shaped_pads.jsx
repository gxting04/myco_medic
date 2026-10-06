import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Slanting Shaped Pads are specialized positioning devices featuring memory foam construction and a slanting, angled design designed to provide support and pressure relief during surgical procedures. These pads provide superior comfort through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Slanting design – angled shape provides elevated support
• Pressure relief – memory foam reduces risk of pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Elevated support – provides support for elevated body areas
• Easy to use – simple setup and placement

**Clinical Applications:**
• Elevated body area support
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Angled positioning needs

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Elevated support – provides support for elevated areas
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Memory foam construction
• Slanting angled design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Slanting Shaped Pads provide healthcare professionals with superior comfort and angled support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemorySlantingShapedPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemorySlantingShapedPadsPage
