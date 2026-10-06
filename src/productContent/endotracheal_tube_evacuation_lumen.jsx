import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Endotracheal Tube with Evacuation Lumen features an integrated suction channel that allows continuous or intermittent removal of secretions from above the cuff without disconnecting the breathing circuit. This advanced design enhances airway hygiene and reduces the risk of ventilator-associated pneumonia.

**Key Features:**
• Integrated evacuation lumen – dedicated channel for secretion removal above the cuff
• Continuous or intermittent suction capability – allows flexible secretion management
• Subglottic secretion drainage – removes pooled secretions that can lead to aspiration
• Standard endotracheal tube design – maintains all standard features and functionality
• Cuffed design – provides secure airway seal while enabling secretion evacuation
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates various patient populations

**Clinical Benefits:**
• Reduced VAP risk – subglottic secretion drainage reduces risk of ventilator-associated pneumonia
• Enhanced airway hygiene – continuous removal of secretions maintains cleaner airway
• Improved patient outcomes – reduced infection rates and shorter ventilation duration
• Cost-effective infection prevention – reduces healthcare costs associated with VAP

**Clinical Applications:**
• Long-term mechanical ventilation in intensive care units
• Patients at high risk for ventilator-associated pneumonia
• Post-operative airway management
• Critical care settings requiring extended ventilation
• Patients with excessive secretions

**Technical Specifications:**
• Integrated evacuation lumen for subglottic secretion drainage
• Standard endotracheal tube design with cuffed option
• Universal 15mm connector
• Compatible with standard suction systems
• Available in multiple sizes

The Endotracheal Tube with Evacuation Lumen provides healthcare professionals with an advanced solution for airway management, combining standard ventilation capabilities with enhanced infection prevention through subglottic secretion drainage.`

function EndotrachealTubeEvacuationLumenPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default EndotrachealTubeEvacuationLumenPage
