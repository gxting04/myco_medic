import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Dome Shaped Pads are specialized positioning devices featuring a dome-shaped, convex design designed to provide support and pressure relief during surgical procedures. These pads are ideal for supporting elevated body areas.

**Key Features:**
• Dome-shaped design – convex shape provides elevated support
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Elevated support – provides support for elevated body areas
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Elevated body area support
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Elevated positioning needs

**Clinical Benefits:**
• Pressure relief – prevents pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Elevated support – provides support for elevated areas
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Dome-shaped convex design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Dome Shaped Pads provide healthcare professionals with elevated support and pressure relief, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function DomeShapedPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DomeShapedPadsPage
