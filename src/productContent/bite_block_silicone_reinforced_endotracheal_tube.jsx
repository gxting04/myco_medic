import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Bite Block Silicone Reinforced Endotracheal Tube combines the benefits of silicone reinforcement with an integrated bite block design. This specialized tube prevents patient biting while maintaining flexibility and kink resistance, making it ideal for procedures where patient movement or positioning could compromise the airway.

**Key Features:**
• Silicone-reinforced construction – provides kink resistance while maintaining flexibility
• Integrated bite block – prevents patient biting and tube occlusion
• Soft, biocompatible material – reduces risk of oral trauma
• Cuffed design – provides secure airway seal
• Radiopaque line – visible on X-ray for positioning verification
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates various patient populations

**Clinical Applications:**
• Procedures requiring light anesthesia where patient movement is possible
• Neurological procedures where patient positioning is critical
• Long-term ventilation in awake or semi-conscious patients
• Pediatric procedures where biting is a concern
• Any scenario where tube protection is essential

**Clinical Benefits:**
• Bite protection – prevents tube occlusion from patient biting
• Kink resistance – silicone reinforcement maintains airway patency
• Reduced trauma risk – soft materials minimize oral injury
• Reliable ventilation – ensures continuous gas delivery

**Technical Specifications:**
• Silicone-reinforced construction
• Integrated bite block design
• Cuffed variant
• Universal 15mm connector
• Radiopaque material for X-ray visibility
• Available in multiple sizes

The Bite Block Silicone Reinforced Endotracheal Tube provides healthcare professionals with a specialized solution for airway management in scenarios where bite protection and kink resistance are essential for patient safety.`

function BiteBlockSiliconeReinforcedEndotrachealTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BiteBlockSiliconeReinforcedEndotrachealTubePage
