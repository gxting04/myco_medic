import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Contoured Supine Head Pads are specialized positioning devices designed to support patients' heads in the supine (face-up) position during surgical procedures. These pads feature contoured design that accommodates natural head anatomy while providing pressure relief and comfort.

**Key Features:**
• Contoured design – accommodates natural head and neck anatomy
• Supine positioning support – designed for face-up patient positioning
• Pressure relief – reduces risk of head and neck pressure injuries
• Comfortable padding – soft material provides patient comfort
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
• Pressure relief – reduces risk of pressure injuries
• Patient comfort – contoured design provides natural support
• Secure positioning – prevents head movement during procedures
• Anatomical fit – contoured design accommodates head shape

**Technical Specifications:**
• Contoured supine positioning design
• Soft padding material
• Secure positioning system
• Compatible with standard operating tables
• Available in various sizes

The Contoured Supine Head Pads provide healthcare professionals with comfortable, anatomical support for supine patient positioning, ensuring patient safety and comfort during surgical procedures.`

function ContouredSupineHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ContouredSupineHeadPadsPage
