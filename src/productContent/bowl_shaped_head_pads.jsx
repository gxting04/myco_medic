import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Bowl Shaped Head Pads are specialized positioning devices featuring a bowl-shaped, concave design that cradles the head for secure positioning during surgical procedures. These pads provide comfortable head support while preventing movement.

**Key Features:**
• Bowl-shaped design – concave shape cradles the head
• Secure head positioning – prevents head movement during procedures
• Comfortable padding – soft material provides patient comfort
• Pressure distribution – distributes pressure evenly across head
• Versatile positioning – suitable for various head positions
• Easy to use – simple setup and placement

**Clinical Applications:**
• Head positioning during procedures
• Secure head support
• Long-duration procedures
• Patient comfort during surgery
• Various surgical positions
• Procedures requiring stable head position

**Clinical Benefits:**
• Secure positioning – prevents head movement during procedures
• Pressure distribution – distributes pressure evenly
• Patient comfort – comfortable padding reduces discomfort
• Versatile application – suitable for various positioning needs

**Technical Specifications:**
• Bowl-shaped concave design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Bowl Shaped Head Pads provide healthcare professionals with secure, comfortable head support, ensuring stable head positioning and patient comfort during procedures.`

function BowlShapedHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BowlShapedHeadPadsPage
