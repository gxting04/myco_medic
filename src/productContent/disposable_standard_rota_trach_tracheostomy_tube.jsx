import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Standard Rota-Trach™ Tracheostomy Tube is a single-patient-use airway management device designed for secure tracheostomy procedures. This innovative tracheostomy tube features a rotatable design that facilitates easy positioning and optimal patient comfort during long-term airway management.

**Key Features:**
• Rotatable design – allows 360-degree rotation for optimal positioning without disconnecting from the breathing circuit
• Disposable construction – single-patient-use design eliminates infection control concerns and cross-contamination risks
• Cuffed and uncuffed options available – accommodates various clinical requirements and patient needs
• Standard connector – universal 15mm connector compatible with breathing circuits and ventilators
• Soft, flexible material – reduces risk of tracheal trauma and enhances patient comfort
• Clear pilot balloon – enables easy cuff pressure monitoring and inflation control
• Radiopaque line – visible on X-ray for accurate positioning verification
• Available in multiple sizes – accommodates pediatric through adult patients

**Clinical Applications:**
• Long-term airway management in intensive care units
• Surgical procedures requiring secure airway access
• Chronic respiratory support in home care settings
• Emergency tracheostomy procedures
• Post-operative airway maintenance

**Technical Specifications:**
• Standard 15mm universal connector
• Multiple sizes available (typically 6.0mm to 10.0mm inner diameter)
• Cuffed and uncuffed variants
• Radiopaque material for X-ray visibility
• Single-patient-use disposable design

The Disposable Standard Rota-Trach™ Tracheostomy Tube provides healthcare professionals with a reliable, hygienic solution for tracheostomy airway management, combining innovative rotatable design with infection control benefits.`

function DisposableStandardRotaTrachTracheostomyTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableStandardRotaTrachTracheostomyTubePage
