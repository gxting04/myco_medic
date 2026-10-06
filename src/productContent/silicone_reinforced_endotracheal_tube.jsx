import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Silicone Reinforced Endotracheal Tube combines the biocompatibility of silicone with structural reinforcement to prevent kinking while maintaining flexibility. This advanced tube design provides reliable airway management in challenging clinical scenarios requiring both flexibility and kink resistance.

**Key Features:**
• Silicone-reinforced construction – embedded reinforcement prevents kinking while maintaining flexibility
• Superior biocompatibility – medical-grade silicone reduces risk of tissue reaction
• Kink-resistant design – maintains airway patency even when bent or compressed
• Soft, flexible material – accommodates airway anatomy and reduces trauma risk
• Cuffed and uncuffed options – accommodates various clinical requirements
• Radiopaque line – visible on X-ray for positioning verification
• Standard connector – universal 15mm connector compatible with breathing circuits

**Clinical Applications:**
• Procedures requiring extreme patient positioning
• Head and neck surgeries with complex tube routing
• Long-term ventilation where kink resistance is essential
• Patients requiring flexible yet durable airway management
• Neurosurgical and maxillofacial procedures

**Clinical Benefits:**
• Kink resistance – maintains airway patency regardless of positioning
• Biocompatibility – reduced risk of tissue reaction compared to PVC
• Flexibility – accommodates complex airway anatomy
• Durability – designed for extended use in challenging conditions

**Technical Specifications:**
• Silicone-reinforced construction
• Cuffed and uncuffed variants
• Universal 15mm connector
• Radiopaque material for X-ray visibility
• Available in multiple sizes

The Silicone Reinforced Endotracheal Tube provides healthcare professionals with a durable, biocompatible solution for airway management in challenging clinical scenarios, ensuring reliable ventilation regardless of patient positioning or tube routing.`

function SiliconeReinforcedEndotrachealTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SiliconeReinforcedEndotrachealTubePage
