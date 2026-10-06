import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Tunnel Pads are specialized positioning devices featuring memory foam construction and a tunnel or channel design that allows passage of tubes, wires, or other medical devices while providing support and pressure relief. These pads provide superior comfort through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to body contours for superior comfort
• Tunnel design – channel allows passage of medical devices
• Device access – maintains access for tubes, wires, and devices
• Pressure relief – memory foam reduces risk of pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Easy to use – simple setup and placement

**Clinical Applications:**
• Procedures requiring device access
• Tube and wire management
• Pressure relief during procedures
• Long-duration procedures
• Patient comfort during surgery
• Medical device accommodation

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Device access – maintains access for medical devices
• Patient comfort – memory foam conforms to body shape for optimal comfort
• Secure positioning – prevents patient movement

**Technical Specifications:**
• Memory foam construction
• Tunnel/channel design
• Secure positioning system
• Compatible with standard positioning needs
• Available in various sizes

The Memory Tunnel Pads provide healthcare professionals with superior comfort and specialized support that accommodates medical devices, ensuring patient comfort and preventing pressure injuries while maintaining device access.`

function MemoryTunnelPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryTunnelPadsPage
