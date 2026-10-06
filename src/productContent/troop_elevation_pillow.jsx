import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Troop Elevation Pillow is a specialized positioning device designed to elevate and support patients' legs during surgical procedures. This pillow provides comfortable leg elevation while maintaining proper alignment and preventing pressure injuries.

**Key Features:**
• Leg elevation design – provides comfortable leg elevation
• Pressure relief – reduces risk of leg pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents leg movement during procedures
• Versatile application – suitable for various leg elevation needs
• Easy to use – simple setup and placement

**Clinical Applications:**
• Leg elevation during procedures
• Pressure relief for legs
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Leg positioning support

**Clinical Benefits:**
• Pressure relief – prevents leg pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents leg movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Leg elevation design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Troop Elevation Pillow provides healthcare professionals with comfortable leg elevation support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function TroopElevationPillowPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default TroopElevationPillowPage
