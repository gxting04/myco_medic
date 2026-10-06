import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Tracheal Tube Kit provides a complete, ready-to-use package containing all essential components for endotracheal intubation. This convenient kit eliminates the need to gather individual components, ensuring all necessary items are available for successful airway management.

**Key Features:**
• Complete kit – includes endotracheal tube, stylet, syringe, and essential accessories
• Single-patient-use design – eliminates infection control concerns
• Sterile packaging – ensures aseptic technique during intubation
• Standard components – includes universally compatible items
• Convenient packaging – easy to store and access in emergency situations
• Multiple sizes available – accommodates various patient populations

**Kit Contents:**
• Endotracheal tube (cuffed or uncuffed)
• Intubating stylet for tube shaping
• Syringe for cuff inflation
• Lubricating gel for smooth insertion
• Tape or securing device for tube fixation

**Clinical Applications:**
• Emergency airway management
• Operating room intubations
• Intensive care unit procedures
• Pre-hospital emergency medical services
• Rapid sequence intubation scenarios

**Clinical Benefits:**
• Time-saving – all components in one package
• Infection control – single-patient-use eliminates cross-contamination
• Convenience – eliminates need to gather individual components
• Standardization – ensures consistent equipment availability

**Technical Specifications:**
• Sterile, single-patient-use packaging
• Standard component sizes
• Compatible with standard intubation equipment
• Available in multiple kit sizes

The Disposable Tracheal Tube Kit provides healthcare professionals with a convenient, complete solution for endotracheal intubation, ensuring all necessary components are readily available for successful airway management.`

function DisposableTrachealTubeKitPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableTrachealTubeKitPage
