import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Universal Square Pads are versatile positioning devices featuring a square design suitable for various positioning needs during surgical procedures. These pads provide comfortable support while preventing pressure injuries.

**Key Features:**
• Square design – versatile shape suitable for various positioning needs
• Universal application – suitable for various body areas
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Versatile body support during procedures
• Pressure relief for various body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Universal positioning needs

**Clinical Benefits:**
• Pressure relief – prevents pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Square design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Universal Square Pads provide healthcare professionals with versatile positioning support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function UniversalSquarePadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UniversalSquarePadsPage
