import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Pediatric Rota-Trach™ Tracheostomy Tube is specifically designed for pediatric airway management, featuring a rotatable design optimized for smaller anatomical structures. This specialized tracheostomy tube provides secure airway access while accommodating the unique needs of pediatric patients.

**Key Features:**
• Pediatric-specific sizing – designed to accommodate smaller pediatric airway anatomy
• Rotatable design – 360-degree rotation capability for optimal positioning in pediatric patients
• Soft, flexible material – reduces risk of tracheal trauma in delicate pediatric airways
• Disposable construction – single-patient-use design ensures infection control and eliminates cross-contamination
• Cuffed and uncuffed options – accommodates various pediatric clinical requirements
• Standard connector – universal 15mm connector compatible with pediatric breathing circuits
• Radiopaque line – visible on X-ray for accurate positioning verification in pediatric patients
• Gentle design – minimizes pressure on surrounding tissues

**Clinical Applications:**
• Pediatric intensive care unit airway management
• Long-term respiratory support in pediatric patients
• Congenital airway anomaly management
• Pediatric surgical procedures requiring secure airway access
• Neonatal and infant tracheostomy care

**Clinical Benefits:**
• Size-appropriate design – specifically engineered for pediatric anatomy
• Reduced trauma risk – soft materials and appropriate sizing minimize airway injury
• Enhanced comfort – rotatable design reduces pressure points and improves patient tolerance
• Infection control – disposable design eliminates cross-contamination risks

**Technical Specifications:**
• Pediatric-specific sizes (typically 3.0mm to 5.5mm inner diameter)
• Standard 15mm universal connector
• Cuffed and uncuffed variants available
• Radiopaque material for X-ray visibility
• Single-patient-use disposable design

The Disposable Pediatric Rota-Trach™ Tracheostomy Tube provides pediatric healthcare professionals with a specialized, reliable solution for tracheostomy airway management in pediatric patients, ensuring optimal care while maintaining infection control standards.`

function DisposablePediatricRotaTrachTracheostomyTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposablePediatricRotaTrachTracheostomyTubePage
