import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Catheter Mount is a flexible connector that provides the interface between the endotracheal tube and the breathing circuit or ventilator. This essential component accommodates patient movement while maintaining a secure connection and optimal gas flow.

**Key Features:**
• Flexible design – accommodates patient positioning and movement without disconnection
• Standardized connections – compatible with standard endotracheal tubes and breathing circuits
• Low resistance – optimized internal diameter maintains efficient gas flow
• Durable construction – designed to withstand clinical use and sterilization processes
• Easy to connect – simple, secure attachment to breathing system components
• Various lengths available – accommodates different clinical requirements

**Clinical Applications:**
• Mechanical ventilation systems
• Anesthesia breathing circuits
• Transport ventilation equipment
• Long-term respiratory support
• Pediatric and adult ventilation applications

**Technical Specifications:**
• Standard 15mm connector for endotracheal tube connection
• Standard 22mm connector for breathing circuit attachment
• Flexible corrugated design prevents kinking
• Compatible with standard breathing system components
• Available in various lengths to suit clinical needs

The Catheter Mount ensures reliable connection between patient airway and breathing systems, accommodating patient movement while maintaining optimal ventilation delivery.`

function CatheterMountPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CatheterMountPage
