import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Universal Armboard Pads are specialized positioning devices designed to support patients' arms during surgical procedures. These pads provide comfortable arm positioning while preventing pressure injuries and maintaining proper arm alignment.

**Key Features:**
• Universal design – accommodates various arm positioning needs
• Comfortable padding – soft material provides patient comfort
• Pressure relief – reduces risk of arm and elbow pressure injuries
• Secure positioning – prevents arm movement during procedures
• Easy to use – simple setup and adjustment
• Versatile application – suitable for various arm positions

**Clinical Applications:**
• Arm positioning during surgical procedures
• IV line access positioning
• Blood pressure monitoring positioning
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions

**Clinical Benefits:**
• Pressure relief – reduces risk of pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents arm movement during procedures
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Universal armboard design
• Soft padding material
• Secure positioning system
• Compatible with standard armboards
• Available in various sizes

The Universal Armboard Pads provide healthcare professionals with comfortable arm support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function UniversalArmboardPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UniversalArmboardPadsPage
