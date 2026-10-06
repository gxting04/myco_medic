import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The UE Scope© Video Laryngoscope VL300 Series represents advanced airway management technology, combining high-definition video imaging with ergonomic design to facilitate successful endotracheal intubation in challenging clinical scenarios.

**Key Features:**
• High-definition video display – provides clear, real-time visualization of airway anatomy on integrated screen
• Improved first-pass success rate – enhanced visualization reduces intubation attempts and improves patient outcomes
• Ergonomic design – lightweight, balanced handle reduces operator fatigue during prolonged procedures
• Reusable video blade – durable construction designed for multiple uses with proper sterilization protocols
• Wide-angle viewing – superior optics provide comprehensive view of laryngeal structures
• Battery-powered operation – portable design enables use in various clinical settings including pre-hospital care
• Compatible with standard endotracheal tubes – works with conventional intubation equipment

**Clinical Advantages:**
• Enhanced visualization in difficult airway scenarios – particularly beneficial for patients with limited mouth opening, cervical spine restrictions, or anatomical variations
• Reduced intubation time – clear visual guidance accelerates successful tube placement
• Improved training tool – video display allows for real-time teaching and procedure documentation
• Lower complication rates – better visualization reduces risk of trauma and failed intubations

**Technical Specifications:**
• High-resolution LCD display for optimal image quality
• Rechargeable battery system for extended operational time
• Compatible with standard laryngoscope blade sizes
• Designed for easy cleaning and sterilization
• Meets international medical device standards

The UE Scope© Video Laryngoscope VL300 Series empowers healthcare professionals with advanced visualization technology, enabling safer and more effective airway management across diverse clinical environments.`

function UEScopeVideoLaryngoscopePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UEScopeVideoLaryngoscopePage
