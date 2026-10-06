import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Arm Shield Pads are specialized positioning devices designed to protect patients' arms from pressure injuries and provide comfortable arm support during surgical procedures. These pads provide comprehensive arm protection while maintaining proper arm alignment.

**Key Features:**
• Arm protection design – provides comprehensive arm coverage
• Pressure relief – reduces risk of arm pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents arm movement during procedures
• Versatile application – suitable for various arm positions
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Arm protection during procedures
• Pressure relief for arms
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Arm positioning support

**Clinical Benefits:**
• Pressure relief – prevents arm pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents arm movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Arm protective design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Arm Shield Pads provide healthcare professionals with comprehensive arm protection, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function ArmShieldPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ArmShieldPadsPage
