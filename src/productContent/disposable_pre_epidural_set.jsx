import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Pre-Epidural Set provides a complete, sterile package containing all essential components for epidural anesthesia procedures. This convenient kit ensures anesthesiologists have immediate access to all necessary equipment for safe, effective epidural placement.

**Key Features:**
• Complete kit – includes epidural needle, catheter, syringes, and essential components
• Sterile packaging – ensures aseptic technique during procedures
• Single-patient-use design – eliminates infection control concerns
• Standard components – universally compatible equipment
• Convenient packaging – easy to store and access
• Multiple sizes available – accommodates various patient populations

**Kit Contents:**
2 x Gallipots (60ml)
5x Gauze Swabs (7.5 x 7.5cm x 8 Ply)
1x Kidney Dish (750ml)
1x Stainless Steel Rampley Sponge Holding Forceps
1x Green Crepe Sterile Field (60cm x 60cm)

**Clinical Applications:**
• Labor and delivery epidural anesthesia
• Post-operative pain management
• Chronic pain management procedures
• Surgical anesthesia
• Regional anesthesia techniques

**Clinical Benefits:**
• Time-saving – all components in one package
• Infection control – sterile, single-patient-use design
• Convenience – eliminates need to gather individual components
• Standardization – ensures consistent equipment availability

**Technical Specifications:**
• Sterile, single-patient-use packaging
• Standard epidural equipment
• Compatible with standard epidural techniques
• Available in various sizes

The Disposable Pre-Epidural Set provides anesthesiologists with a convenient, complete solution for epidural anesthesia, ensuring all necessary components are readily available for successful epidural placement.`

function DisposablePreEpiduralSetPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposablePreEpiduralSetPage
