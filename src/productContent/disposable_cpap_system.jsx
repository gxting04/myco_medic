import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable CPAP System is a single-patient-use continuous positive airway pressure device designed for respiratory support in various clinical settings. This convenient system provides non-invasive positive pressure ventilation, helping maintain airway patency and improve oxygenation without requiring endotracheal intubation.

**Key Features:**
• Single-patient-use design – eliminates infection control concerns
• Non-invasive ventilation – provides respiratory support without intubation
• Adjustable pressure settings – allows customization for patient needs
• Easy to use – simple setup and operation for healthcare providers
• Complete system – includes mask, tubing, and pressure delivery components
• Lightweight design – comfortable for patient use

**Clinical Applications:**
• Respiratory distress management
• Post-operative respiratory support
• Sleep apnea treatment
• Chronic obstructive pulmonary disease (COPD) management
• Emergency respiratory support
• Pediatric and adult patient care

**Clinical Benefits:**
• Non-invasive – avoids complications of endotracheal intubation
• Patient comfort – well-tolerated alternative to invasive ventilation
• Infection control – disposable design eliminates cross-contamination
• Versatile application – suitable for various respiratory conditions

**Technical Specifications:**
• Adjustable CPAP pressure
• Non-invasive mask interface
• Single-patient-use disposable design
• Compatible with standard oxygen delivery systems
• Available in various sizes

The Disposable CPAP System provides healthcare professionals with a convenient, non-invasive solution for respiratory support, ensuring effective airway management while maintaining patient comfort and infection control standards.`

function DisposableCPAPSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableCPAPSystemPage
