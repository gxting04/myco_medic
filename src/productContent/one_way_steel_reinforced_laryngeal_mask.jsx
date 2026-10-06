import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The One Way Steel Reinforced Laryngeal Mask features embedded steel reinforcement that prevents kinking and maintains airway patency even when the tube is bent or compressed. This specialized design is essential for procedures requiring extreme patient positioning or when the airway device must navigate around obstacles.

**Key Features:**
• Steel-reinforced construction – embedded reinforcement prevents kinking and maintains patency
• One-way valve design – prevents gas leakage and ensures effective ventilation
• Kink-resistant design – maintains airway patency regardless of positioning
• Medical-grade silicone cuff – provides secure seal with superior biocompatibility
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates various patient populations
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• Procedures requiring extreme patient positioning (prone, lateral, head-down)
• Head and neck surgeries where tube routing is complex
• Neurosurgical procedures
• Maxillofacial surgeries
• Any scenario where kink resistance is essential

**Clinical Benefits:**
• Kink resistance – maintains airway patency even when bent or compressed
• Reliable ventilation – ensures continuous gas delivery regardless of positioning
• Versatile positioning – enables safe patient positioning without compromising ventilation
• Superior biocompatibility – silicone cuff reduces tissue reaction

**Technical Specifications:**
• Steel-reinforced construction
• One-way valve mechanism
• Medical-grade silicone cuff
• Universal 15mm connector
• Available in multiple sizes
• Designed for sterilization and reuse

The One Way Steel Reinforced Laryngeal Mask provides healthcare professionals with a kink-resistant solution for supraglottic airway management in challenging clinical scenarios, ensuring reliable ventilation regardless of patient positioning.`

function OneWaySteelReinforcedLaryngealMaskPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default OneWaySteelReinforcedLaryngealMaskPage
