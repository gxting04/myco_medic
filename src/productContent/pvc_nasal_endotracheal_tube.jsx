import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The PVC Nasal Endotracheal Tube is designed for nasotracheal intubation, providing an alternative route for airway management when oral intubation is not feasible or preferred. This flexible tube accommodates the nasal passage while maintaining secure airway access.

**Key Features:**
• Nasal route design – specifically shaped for comfortable nasotracheal insertion
• Flexible PVC material – accommodates nasal anatomy and reduces trauma risk
• Cuffed and uncuffed options – accommodates various clinical requirements
• Soft, tapered tip – facilitates smooth insertion through nasal passages
• Radiopaque line – visible on X-ray for positioning verification
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates various patient populations

**Clinical Applications:**
• Oral surgery procedures where oral intubation is contraindicated
• Maxillofacial surgeries
• Dental procedures requiring general anesthesia
• Long-term ventilation where nasal route is preferred
• Patients with oral trauma or pathology

**Clinical Benefits:**
• Alternative airway route – provides option when oral intubation is not suitable
• Reduced oral trauma – eliminates risk of dental damage
• Improved patient comfort – nasal route may be better tolerated in some patients
• Secure airway access – maintains effective ventilation and airway protection

**Technical Specifications:**
• Nasal-specific design and sizing
• Cuffed and uncuffed variants
• Standard 15mm universal connector
• Radiopaque material for X-ray visibility
• Available in multiple sizes

The PVC Nasal Endotracheal Tube provides healthcare professionals with a reliable solution for nasotracheal intubation, ensuring secure airway management when the nasal route is clinically indicated.`

function PvcNasalEndotrachealTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PvcNasalEndotrachealTubePage
