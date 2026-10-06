import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Pillow Shaped Pad is a specialized positioning device featuring a pillow-like design designed to provide comfortable support and pressure relief during surgical procedures. This pad provides soft, comfortable support similar to a pillow.

**Key Features:**
• Pillow-shaped design – soft, pillow-like support
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Versatile application – suitable for various positioning needs
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Comfortable body support during procedures
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pillow-like support needs

**Clinical Benefits:**
• Pressure relief – prevents pressure injuries
• Patient comfort – pillow-like design provides comfortable support
• Versatile application – suitable for various positioning needs
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Pillow-shaped design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Pillow Shaped Pad provides healthcare professionals with comfortable, pillow-like support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function PillowShapedPadPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PillowShapedPadPage
