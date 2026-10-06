import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Air Cushion Face Mask is a single-patient-use respiratory device designed for effective mask ventilation during anesthesia induction, emergency resuscitation, and respiratory support procedures. The inflatable air cushion provides a secure seal and comfortable fit.

**Key Features:**
• Inflatable air cushion – creates secure seal with minimal pressure on patient's face
• Transparent design – allows visualization of patient's mouth and nose for monitoring
• Soft, flexible material – provides comfortable fit and reduces risk of facial trauma
• Disposable construction – single-patient-use design eliminates infection control concerns
• Standard connector – compatible with breathing bags and resuscitation equipment
• Various sizes available – accommodates pediatric through adult patients

**Clinical Applications:**
• Anesthesia induction and maintenance
• Emergency bag-mask ventilation
• Pre-hospital emergency medical services
• Intensive care unit respiratory support
• Transport ventilation procedures

**Technical Specifications:**
• Standard 22mm connector for breathing circuit attachment
• Inflatable air cushion for optimal seal
• Transparent material for patient monitoring
• Available in multiple sizes (pediatric, small, medium, large)
• Single-patient-use disposable design

The Disposable Air Cushion Face Mask provides healthcare professionals with a reliable, hygienic solution for effective mask ventilation, ensuring optimal patient care during respiratory support procedures.`

function DisposableAirCushionFaceMaskPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableAirCushionFaceMaskPage
