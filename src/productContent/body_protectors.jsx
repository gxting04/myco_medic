import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Body Protectors are specialized positioning devices designed to protect patients' bodies from pressure injuries during surgical procedures. These pads provide comprehensive body protection while maintaining proper body alignment and patient comfort.

**Key Features:**
• Comprehensive body protection – provides protection for various body areas
• Pressure relief – reduces risk of body pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Versatile application – suitable for various body positions
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Body protection during procedures
• Pressure relief for body areas
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention

**Clinical Benefits:**
• Pressure relief – prevents body pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Comprehensive body protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Body Protectors provide healthcare professionals with comprehensive body protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function BodyProtectorsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BodyProtectorsPage
