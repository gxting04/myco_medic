import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Donut Head Pads with Cissoid are specialized positioning devices featuring a circular, donut-shaped design with a central opening and an additional cissoid (curved) feature for enhanced head support. These pads provide comfortable head support while relieving pressure on the occipital region and accommodating head contours.

**Key Features:**
• Donut-shaped design with cissoid feature – circular pad with central opening and curved support
• Occipital pressure relief – central opening prevents pressure on back of head
• Enhanced contour support – cissoid feature accommodates head contours
• Comfortable padding – soft material provides patient comfort
• Versatile positioning – suitable for various head positions
• Secure support – prevents head movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Head positioning during procedures
• Pressure relief for occipital region
• Enhanced head contour accommodation
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Post-operative positioning

**Clinical Benefits:**
• Pressure relief – prevents occipital pressure injuries
• Enhanced comfort – cissoid feature accommodates head contours
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs
• Secure support – prevents head movement

**Technical Specifications:**
• Donut-shaped design with cissoid feature
• Central opening for occipital relief
• Soft padding material
• Secure support system
• Compatible with standard positioning needs
• Available in various sizes

The Donut Head Pads with Cissoid provide healthcare professionals with enhanced head support and pressure relief, ensuring patient comfort and preventing pressure injuries while accommodating natural head contours during procedures.`

function DonutHeadPadsWithCissoidPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DonutHeadPadsWithCissoidPage
