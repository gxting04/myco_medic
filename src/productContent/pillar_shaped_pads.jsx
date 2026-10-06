import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Pillar Shaped Pads are specialized positioning devices featuring a cylindrical, pillar-shaped design designed to provide support and pressure relief during surgical procedures. These pads are versatile positioning tools suitable for various body areas.

**Key Features:**
• Pillar-shaped design – cylindrical shape provides versatile support
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Versatile application – suitable for various body areas
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Body support during procedures
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Versatile positioning needs

**Clinical Benefits:**
• Pressure relief – prevents pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Pillar-shaped cylindrical design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Pillar Shaped Pads provide healthcare professionals with versatile positioning support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function PillarShapedPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PillarShapedPadsPage
