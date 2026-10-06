import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The PVC Wire Reinforced Endotracheal Tube features an embedded wire spiral that prevents kinking and maintains tube patency even when bent or compressed. This specialized design is essential for procedures requiring extreme patient positioning or when the tube must navigate around obstacles.

**Key Features:**
• Wire-reinforced construction – embedded spiral wire prevents kinking and maintains airway patency
• Flexible yet kink-resistant – accommodates patient positioning while maintaining structural integrity
• Cuffed and uncuffed options – accommodates various clinical requirements
• Soft, rounded tip – reduces risk of airway trauma during insertion
• Radiopaque line – visible on X-ray for accurate positioning verification
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates various patient populations

**Clinical Applications:**
• Procedures requiring extreme patient positioning (prone, lateral, head-down)
• Head and neck surgeries where tube routing is complex
• Neurosurgical procedures
• Maxillofacial surgeries
• Any scenario where tube kinking is a concern

**Clinical Benefits:**
• Kink resistance – maintains airway patency even when bent or compressed
• Reliable ventilation – ensures continuous gas delivery regardless of positioning
• Reduced risk of airway obstruction – wire reinforcement prevents tube collapse
• Versatile positioning – enables safe patient positioning without compromising ventilation

**Technical Specifications:**
• Wire-reinforced PVC construction
• Cuffed and uncuffed variants
• Universal 15mm connector
• Radiopaque material for X-ray visibility
• Available in multiple sizes

The PVC Wire Reinforced Endotracheal Tube provides healthcare professionals with a reliable solution for airway management in challenging clinical scenarios, ensuring continuous ventilation regardless of patient positioning or tube routing.`

function PvcWireReinforcedEndotrachealTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PvcWireReinforcedEndotrachealTubePage
