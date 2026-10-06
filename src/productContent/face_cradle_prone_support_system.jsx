import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Face-Cradle Prone Support System is a specialized positioning device designed to support patients in the prone position during surgical procedures and medical treatments. This innovative system provides secure, comfortable positioning while maintaining airway access and preventing pressure injuries.

**Key Features:**
• Prone positioning support – enables safe patient positioning face-down
• Face cradle design – supports head and face while maintaining airway access
• Adjustable components – accommodates various patient sizes
• Pressure relief – reduces risk of pressure injuries
• Secure fixation – prevents patient movement during procedures
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Spinal surgery procedures
• Neurosurgical procedures
• Posterior approach surgeries
• Prone positioning for respiratory therapy
• Surgical procedures requiring prone position
• Long-duration prone positioning

**Clinical Benefits:**
• Safe positioning – enables secure prone positioning
• Pressure relief – reduces risk of facial and body pressure injuries
• Airway access – maintains accessibility for airway management
• Patient comfort – reduces discomfort during prone positioning

**Technical Specifications:**
• Adjustable support components
• Face cradle design
• Secure fixation system
• Compatible with standard operating tables
• Available in various sizes

The Face-Cradle Prone Support System provides healthcare professionals with a safe, effective solution for prone patient positioning, ensuring patient safety and comfort during surgical procedures.`

function FaceCradleProneSupportSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default FaceCradleProneSupportSystemPage
