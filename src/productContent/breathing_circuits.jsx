import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Breathing circuits are essential components of mechanical ventilation systems, providing the connection between the ventilator and the patient's airway. These precision-engineered circuits ensure safe and effective delivery of respiratory gases while maintaining proper humidification and filtration.

**Key Features:**
• Flexible corrugated tubing – provides durability and resistance to kinking during patient movement
• Standardized connections – compatible with most mechanical ventilators and breathing system components
• Efficient gas delivery – optimized design minimizes dead space and resistance to airflow
• Easy assembly – color-coded connectors facilitate quick and correct setup
• Disposable options available – single-patient-use circuits eliminate cross-contamination risks
• Durable construction – reusable circuits designed for multiple uses with proper sterilization

**Clinical Applications:**
• Mechanical ventilation in intensive care units
• Operating room anesthesia delivery systems
• Long-term respiratory support in chronic care settings
• Transport ventilation systems
• Pediatric and neonatal ventilation applications

**Technical Specifications:**
• Standard 22mm and 15mm connector sizes for universal compatibility
• Various lengths available to accommodate different clinical needs
• Compatible with heat and moisture exchangers (HME) and filters
• Designed to minimize resistance and optimize gas flow
• Meets international standards for breathing system components

Breathing circuits are fundamental components of respiratory care, ensuring safe and effective mechanical ventilation support for patients requiring assisted breathing.`

function BreathingCircuitsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BreathingCircuitsPage
