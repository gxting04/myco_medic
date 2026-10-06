import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Donut Head Pads are specialized positioning devices featuring a circular, donut-shaped design with a central opening to support the head while relieving pressure on the occipital region. These pads provide comfortable head support while preventing pressure injuries.

**Key Features:**
• Donut-shaped design – circular pad with central opening
• Occipital pressure relief – central opening prevents pressure on back of head
• Comfortable padding – soft material provides patient comfort
• Versatile positioning – suitable for various head positions
• Secure support – prevents head movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Head positioning during procedures
• Pressure relief for occipital region
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Post-operative positioning

**Clinical Benefits:**
• Pressure relief – prevents occipital pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs
• Secure support – prevents head movement

**Technical Specifications:**
• Donut-shaped design with central opening
• Soft padding material
• Secure support system
• Compatible with standard positioning needs
• Available in various sizes

The Donut Head Pads provide healthcare professionals with effective pressure relief and head support, ensuring patient comfort and preventing pressure injuries during procedures.`

function DonutHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DonutHeadPadsPage
