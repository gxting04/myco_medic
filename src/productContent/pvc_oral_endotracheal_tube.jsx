import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The PVC Oral Endotracheal Tube is the standard airway management device for orotracheal intubation, providing secure airway access for mechanical ventilation and airway protection. This essential device is used in virtually all general anesthesia and critical care scenarios.

**Key Features:**
• Standard orotracheal design – optimized for oral insertion and placement
• Flexible PVC construction – accommodates airway anatomy while maintaining structural integrity
• Cuffed and uncuffed options – accommodates pediatric and adult clinical requirements
• Soft, rounded tip – reduces risk of airway trauma during insertion
• Radiopaque line – visible on X-ray for accurate positioning verification
• Standard connector – universal 15mm connector compatible with all breathing circuits
• Multiple sizes available – accommodates neonatal through adult patients

**Clinical Applications:**
• General anesthesia for surgical procedures
• Intensive care unit mechanical ventilation
• Emergency airway management
• Cardiopulmonary resuscitation
• Long-term respiratory support

**Clinical Benefits:**
• Secure airway protection – cuffed tubes prevent aspiration
• Reliable ventilation – ensures effective gas exchange
• Standard design – familiar to all healthcare providers
• Cost-effective solution – widely available and affordable

**Technical Specifications:**
• Standard orotracheal design
• Cuffed and uncuffed variants
• Universal 15mm connector
• Radiopaque material for X-ray visibility
• Available in sizes from neonatal to large adult

The PVC Oral Endotracheal Tube is the fundamental airway management device, providing healthcare professionals with a reliable, standard solution for secure airway access and mechanical ventilation support.`

function PvcOralEndotrachealTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PvcOralEndotrachealTubePage
