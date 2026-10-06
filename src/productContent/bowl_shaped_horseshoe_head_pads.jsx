import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Bowl Shaped Horseshoe Head Pads combine the bowl-shaped design with a horseshoe opening, providing secure head support while maintaining access to the face and airway. These pads offer the benefits of both designs for optimal positioning.

**Key Features:**
• Combined design – bowl-shaped with horseshoe opening
• Secure head positioning – prevents head movement during procedures
• Airway access – maintains accessibility for airway management
• Comfortable padding – soft material provides patient comfort
• Pressure distribution – distributes pressure evenly
• Versatile positioning – suitable for various positioning needs

**Clinical Applications:**
• Procedures requiring airway access
• Secure head positioning
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Airway management procedures

**Clinical Benefits:**
• Secure positioning – prevents head movement during procedures
• Airway access – maintains accessibility for airway management
• Pressure distribution – distributes pressure evenly
• Patient comfort – comfortable padding reduces discomfort

**Technical Specifications:**
• Bowl-shaped with horseshoe opening design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Bowl Shaped Horseshoe Head Pads provide healthcare professionals with secure head support while maintaining airway access, ensuring patient safety and comfort during procedures.`

function BowlShapedHorseshoeHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BowlShapedHorseshoeHeadPadsPage
