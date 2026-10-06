import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Horseshoe Head Pads are specialized positioning devices featuring memory foam construction and a U-shaped design that supports the head while providing access to the face and airway. These pads provide superior comfort and pressure relief through their memory foam material.

**Key Features:**
• Memory foam construction – conforms to head contours for superior comfort
• Horseshoe (U-shaped) design – supports head while allowing face access
• Supine positioning support – designed for face-up patient positioning
• Airway access – maintains accessibility for airway management
• Pressure relief – memory foam reduces risk of head and neck pressure injuries
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• General surgical procedures
• Procedures requiring airway access
• Supine positioning surgeries
• Long-duration procedures
• Patient comfort during surgery
• Airway management procedures

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Airway access – maintains accessibility for airway management
• Patient comfort – memory foam conforms to head shape for optimal comfort
• Secure positioning – prevents head movement during procedures

**Technical Specifications:**
• Memory foam construction
• Horseshoe (U-shaped) design
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Memory Horseshoe Head Pads provide healthcare professionals with superior comfort and pressure relief while maintaining airway access, ensuring patient safety and exceptional comfort during surgical procedures.`

function MemoryHorseshoeHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemoryHorseshoeHeadPadsPage
