import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The One Way Silicone Laryngeal Mask is a supraglottic airway device designed for airway management during general anesthesia and emergency situations. Constructed from medical-grade silicone, this mask provides a secure seal while offering superior biocompatibility and patient comfort.

**Key Features:**
• Medical-grade silicone construction – superior biocompatibility and reduced tissue reaction
• One-way valve design – prevents gas leakage and ensures effective ventilation
• Soft, flexible cuff – provides secure seal with minimal pressure on pharyngeal tissues
• Easy insertion – simplified placement technique compared to endotracheal intubation
• Standard connector – universal 15mm connector compatible with breathing circuits
• Multiple sizes available – accommodates pediatric through adult patients
• Reusable design – can be sterilized for multiple uses

**Clinical Applications:**
• General anesthesia for short to medium duration procedures
• Emergency airway management when intubation is difficult
• Spontaneous and controlled ventilation
• Procedures not requiring muscle relaxation
• Rescue airway device for failed intubation scenarios

**Clinical Benefits:**
• Easier insertion – less invasive than endotracheal intubation
• Reduced trauma risk – soft silicone minimizes pharyngeal injury
• Quick placement – faster airway establishment in emergency situations
• Patient comfort – well-tolerated in awake or lightly sedated patients

**Technical Specifications:**
• Medical-grade silicone construction
• One-way valve mechanism
• Standard 15mm universal connector
• Available in multiple sizes
• Designed for sterilization and reuse

The One Way Silicone Laryngeal Mask provides healthcare professionals with a reliable, less invasive alternative to endotracheal intubation, ensuring effective airway management with enhanced patient comfort.`

function OneWaySiliconeLaryngealMaskPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default OneWaySiliconeLaryngealMaskPage
