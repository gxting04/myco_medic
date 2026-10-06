import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Nasopharyngeal Airway is a flexible tube inserted through the nasal passage to maintain airway patency in patients with reduced consciousness or upper airway obstruction. This simple yet effective device provides a non-invasive means of airway support without requiring advanced airway management skills.

**Key Features:**
• Flexible design – accommodates nasal anatomy and reduces trauma risk
• Soft, rounded tip – facilitates smooth insertion through nasal passages
• Multiple sizes available – accommodates various patient populations
• Radiopaque line – visible on X-ray for positioning verification
• Standard connector – universal 15mm connector compatible with breathing circuits
• Disposable and reusable options – accommodates various clinical preferences

**Clinical Applications:**
• Patients with reduced consciousness requiring airway support
• Upper airway obstruction management
• Pre-intubation airway preparation
• Emergency airway management
• Post-operative airway maintenance

**Clinical Benefits:**
• Non-invasive insertion – less traumatic than endotracheal intubation
• Easy placement – can be inserted by healthcare providers with basic training
• Maintains airway patency – prevents tongue obstruction and upper airway collapse
• Patient tolerance – generally well-tolerated in semi-conscious patients

**Technical Specifications:**
• Flexible material construction
• Soft, rounded tip design
• Standard 15mm connector
• Radiopaque material for X-ray visibility
• Available in multiple sizes

The Nasopharyngeal Airway provides healthcare professionals with a simple, effective solution for maintaining airway patency in patients requiring basic airway support, offering a less invasive alternative to advanced airway management techniques.`

function NasopharyngealAirwayPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default NasopharyngealAirwayPage
