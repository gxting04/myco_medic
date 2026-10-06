import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Bacterial Virus Filter (BVF) is a high-efficiency filtration device designed to protect breathing systems from contamination by bacteria and viruses. This essential component ensures infection control in mechanical ventilation and anesthesia delivery systems.

**Key Features:**
• High filtration efficiency – effectively removes bacteria and viruses from respiratory gases
• Low resistance design – maintains optimal ventilation parameters without increasing work of breathing
• Compact construction – minimal dead space and lightweight design
• Easy installation – simple connection to standard breathing circuit components
• Single-patient-use – disposable design eliminates cross-contamination risks
• Reliable performance – consistent filtration throughout device lifespan

**Clinical Applications:**
• Mechanical ventilation systems in intensive care units
• Anesthesia breathing circuits in operating rooms
• Long-term respiratory support systems
• Transport ventilation equipment
• Infection control in high-risk patient populations

**Technical Specifications:**
• High-efficiency particulate air (HEPA) grade filtration
• Low airflow resistance for optimal ventilation
• Standard 22mm connector compatibility
• Designed for single-patient use
• Meets international standards for breathing system filters

The Bacterial Virus Filter provides essential protection for breathing systems, ensuring infection control and patient safety in respiratory care applications.`

function BVFFilterPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BVFFilterPage
