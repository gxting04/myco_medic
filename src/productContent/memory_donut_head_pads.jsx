import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Donut Head Pads are specialized positioning devices featuring memory foam construction and a circular, donut-shaped design with a central opening to support the head while relieving pressure on the occipital region. These pads provide superior comfort through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to head contours for superior comfort
• Donut-shaped design – circular pad with central opening
• Occipital pressure relief – central opening prevents pressure on back of head
• Pressure relief – memory foam reduces risk of head pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Easy to use – simple setup and placement

**Clinical Applications:**
• Head positioning during procedures
• Pressure relief for occipital region
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Post-operative positioning

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Occipital protection – prevents pressure on back of head
• Patient comfort – memory foam conforms to head shape for optimal comfort
• Secure support – prevents head movement

**Technical Specifications:**
• Memory foam construction
• Donut-shaped design with central opening
• Secure support system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Donut Head Pads provide healthcare professionals with superior comfort and pressure relief for head support, ensuring patient comfort and preventing pressure injuries during procedures.`

function MemoryDonutHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryDonutHeadPadsPage
