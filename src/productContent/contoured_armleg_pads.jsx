import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Contoured Arm/Leg Pads are specialized positioning devices featuring a contoured design optimized for supporting patients' arms and legs during surgical procedures. These pads provide comfortable limb support while maintaining proper alignment and preventing pressure injuries.

**Key Features:**
• Contoured design – accommodates natural arm and leg anatomy
• Limb support – provides support for both arms and legs
• Pressure relief – reduces risk of limb pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents limb movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Arm and leg positioning during procedures
• Pressure relief for limbs
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Limb positioning support

**Clinical Benefits:**
• Pressure relief – prevents limb pressure injuries
• Patient comfort – contoured design provides natural support
• Secure positioning – prevents limb movement during procedures
• Anatomical fit – contoured design accommodates limb shape

**Technical Specifications:**
• Contoured arm and leg design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Contoured Arm/Leg Pads provide healthcare professionals with comfortable, anatomical limb support, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function ContouredArmLegPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ContouredArmLegPadsPage
