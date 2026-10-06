import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Emergency Suture Pack provides a complete, sterile package containing all essential components for wound closure and suturing procedures. This convenient kit ensures healthcare professionals have immediate access to all necessary instruments and materials for emergency wound repair.

**Key Features:**
• Complete kit – includes sutures, needles, forceps, scissors, and essential instruments
• Sterile packaging – ensures aseptic technique during procedures
• Single-patient-use design – eliminates infection control concerns
• Multiple suture types – various materials and sizes for different wound types
• Convenient packaging – easy to store and access in emergency situations
• Standard components – universally compatible instruments

**Kit Contents:**
• Sutures in various materials (absorbable and non-absorbable)
• Needles in different sizes and shapes
• Forceps for tissue manipulation
• Scissors for suture cutting
• Needle holder for precise suturing
• Sterile drapes and gauze

**Clinical Applications:**
• Emergency wound closure
• Laceration repair
• Surgical wound closure
• Trauma procedures
• Emergency department procedures

**Clinical Benefits:**
• Time-saving – all components in one package
• Infection control – sterile, single-patient-use design
• Convenience – eliminates need to gather individual components
• Standardization – ensures consistent equipment availability

**Technical Specifications:**
• Sterile, single-patient-use packaging
• Multiple suture types and sizes
• Standard surgical instruments
• Compatible with standard suturing techniques

The Disposable Emergency Suture Pack provides healthcare professionals with a convenient, complete solution for wound closure, ensuring all necessary components are readily available for successful suturing procedures.`

function DisposableEmergencySuturePackPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableEmergencySuturePackPage
