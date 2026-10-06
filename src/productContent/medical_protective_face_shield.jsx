import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Medical Protective Face Shield is a transparent barrier device designed to protect healthcare workers' faces from splashes, sprays, and droplets during medical procedures. This essential personal protective equipment provides comprehensive facial protection while maintaining visibility and comfort.

**Key Features:**
• Transparent visor – provides clear visibility while protecting face
• Full-face coverage – shields eyes, nose, and mouth from splashes
• Lightweight design – comfortable for extended wear
• Adjustable headband – accommodates various head sizes
• Disposable and reusable options – accommodates various clinical preferences
• Anti-fog coating – maintains clear vision during use

**Clinical Applications:**
• Surgical procedures
• Patient care activities
• Emergency medical procedures
• Dental procedures
• Laboratory work
• Infection control protocols

**Clinical Benefits:**
• Facial protection – shields against splashes and droplets
• Eye protection – prevents exposure to infectious materials
• Comfortable wear – lightweight design reduces fatigue
• Clear visibility – maintains visual clarity during procedures

**Technical Specifications:**
• Transparent visor material
• Adjustable headband
• Anti-fog properties
• Available in disposable and reusable configurations
• Compatible with other PPE

The Medical Protective Face Shield provides healthcare professionals with essential facial protection, ensuring safety during medical procedures while maintaining comfort and visibility.`

function MedicalProtectiveFaceShieldPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MedicalProtectiveFaceShieldPage
