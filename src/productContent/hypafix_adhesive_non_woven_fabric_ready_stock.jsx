import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Hypafix Adhesive Non-Woven Fabric is a versatile, breathable adhesive tape designed for securing dressings, catheters, and medical devices. This high-quality tape provides secure fixation while maintaining skin integrity and allowing air circulation.

**Key Features:**
• Breathable non-woven fabric – allows air circulation and moisture evaporation
• Strong adhesive – provides secure fixation without aggressive adhesives
• Gentle on skin – reduces risk of skin irritation and damage
• Water-resistant – maintains adhesion in moist environments
• Easy to remove – gentle removal without skin trauma
• Versatile application – suitable for various medical uses

**Clinical Applications:**
• Wound dressing fixation
• Catheter and tube securement
• IV line fixation
• Medical device attachment
• Post-operative dressing care
• Long-term device securement

**Clinical Benefits:**
• Secure fixation – reliable device and dressing attachment
• Skin protection – gentle adhesive reduces skin damage
• Breathability – allows air circulation for skin health
• Patient comfort – well-tolerated for extended use

**Technical Specifications:**
• Non-woven fabric construction
• Breathable adhesive design
• Water-resistant properties
• Available in various widths and lengths
• Single-use disposable design

The Hypafix Adhesive Non-Woven Fabric provides healthcare professionals with a reliable, skin-friendly solution for securing dressings and medical devices, ensuring patient comfort and device stability.`

function HypafixAdhesiveNonWovenFabricReadyStockPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default HypafixAdhesiveNonWovenFabricReadyStockPage
