import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Presentation Gel Pads are specialized positioning devices featuring gel-filled construction designed to provide superior pressure relief and comfort during surgical procedures. These pads conform to body contours while providing excellent pressure distribution.

**Key Features:**
• Gel-filled construction – provides superior pressure relief
• Conforming design – adapts to body contours
• Pressure distribution – distributes pressure evenly
• Comfortable support – gel material provides patient comfort
• Versatile application – suitable for various positioning needs
• Easy to use – simple setup and placement

**Clinical Applications:**
• Pressure relief during procedures
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Pressure injury prevention
• Body contour accommodation

**Clinical Benefits:**
• Superior pressure relief – gel construction provides excellent pressure distribution
• Patient comfort – conforming design reduces discomfort
• Pressure distribution – distributes pressure evenly
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Gel-filled construction
• Conforming design
• Soft gel material
• Compatible with standard positioning needs
• Available in various sizes

The Presentation Gel Pads provide healthcare professionals with superior pressure relief and comfort, ensuring patient comfort and preventing pressure injuries during surgical procedures.`

function PresentationGelPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PresentationGelPadsPage
