import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Arm Pads are specialized positioning devices featuring memory foam construction designed to support patients' arms during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material that conforms to arm contours.

**Key Features:**
• Memory foam construction – conforms to arm contours for superior comfort
• Arm support design – optimized for arm positioning
• Pressure relief – memory foam reduces risk of arm pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents arm movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Arm positioning during surgical procedures
• IV line access positioning
• Blood pressure monitoring positioning
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to arm shape for optimal comfort
• Secure positioning – prevents arm movement during procedures
• Anatomical fit – memory foam accommodates arm contours

**Technical Specifications:**
• Memory foam construction
• Arm support design
• Secure positioning system
• Compatible with standard armboards
• Available in various sizes

The Memory Arm Pads provide healthcare professionals with superior comfort and pressure relief for arm positioning, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function MemoryArmPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryArmPadsPage
