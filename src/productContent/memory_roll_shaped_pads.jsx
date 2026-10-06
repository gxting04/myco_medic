import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Roll Shaped Pads are specialized positioning devices featuring memory foam construction and a roll-shaped design designed to provide support and pressure relief during surgical procedures. These pads provide superior comfort through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Roll-shaped design – cylindrical roll shape provides versatile support
• Pressure relief – memory foam reduces risk of pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Versatile application – suitable for various body areas
• Easy to use – simple setup and placement

**Clinical Applications:**
• Body support during procedures
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Versatile positioning needs

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Versatile application – suitable for various positioning needs
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Memory foam construction
• Roll-shaped cylindrical design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Roll Shaped Pads provide healthcare professionals with superior comfort and versatile positioning support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemoryRollShapedPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryRollShapedPadsPage
