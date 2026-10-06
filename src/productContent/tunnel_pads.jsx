import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Tunnel Pads are specialized positioning devices featuring a tunnel or channel design that allows passage of tubes, wires, or other medical devices while providing support and pressure relief. These pads are ideal for procedures requiring device access.

**Key Features:**
• Tunnel design – channel allows passage of medical devices
• Device access – maintains access for tubes, wires, and devices
• Pressure relief – reduces risk of pressure injuries
• Comfortable padding – soft material provides patient comfort
• Secure positioning – prevents patient movement during procedures
• Easy to use – simple setup and placement

**Clinical Applications:**
• Procedures requiring device access
• Tube and wire management
• Pressure relief during procedures
• Long-duration procedures
• Patient comfort during surgery
• Medical device accommodation

**Clinical Benefits:**
• Device access – maintains access for medical devices
• Pressure relief – prevents pressure injuries
• Patient comfort – comfortable padding reduces discomfort
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Tunnel/channel design
• Soft padding material
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Tunnel Pads provide healthcare professionals with specialized support that accommodates medical devices, ensuring patient comfort and preventing pressure injuries while maintaining device access.`

function TunnelPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default TunnelPadsPage
