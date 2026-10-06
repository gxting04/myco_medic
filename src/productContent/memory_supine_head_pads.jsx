import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Memory Supine Head Pads are specialized positioning devices featuring memory foam construction designed to support patients' heads in the supine (face-up) position during surgical procedures. These pads provide superior comfort and pressure relief through their memory foam material that conforms to head contours.

**Key Features:**
• Memory foam construction – conforms to head contours for superior comfort
• Supine positioning support – designed for face-up patient positioning
• Pressure relief – memory foam reduces risk of head and neck pressure injuries
• Comfortable padding – memory foam provides exceptional patient comfort
• Secure positioning – prevents patient head movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• General surgical procedures
• Supine positioning surgeries
• Head and neck procedures
• Long-duration supine positioning
• Surgical procedures requiring supine position
• Patient comfort during procedures

**Clinical Benefits:**
• Superior pressure relief – memory foam provides excellent pressure distribution
• Patient comfort – memory foam conforms to head shape for optimal comfort
• Secure positioning – prevents head movement during procedures
• Anatomical fit – memory foam accommodates head contours

**Technical Specifications:**
• Memory foam construction
• Supine positioning design
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Memory Supine Head Pads provide healthcare professionals with superior comfort and pressure relief for supine patient positioning, ensuring patient safety and exceptional comfort during surgical procedures.`

function MemorySupineHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MemorySupineHeadPadsPage
