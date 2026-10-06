import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Sterile Coverall is a full-body protective garment designed for sterile surgical procedures and environments requiring aseptic technique. This essential personal protective equipment provides comprehensive body coverage while maintaining sterility and infection control.

**Key Features:**
• Sterile packaging – ensures aseptic technique during procedures
• Full-body coverage – protects entire body from contamination
• Sterile design – suitable for sterile surgical procedures
• Comfortable fit – allows freedom of movement
• Breathable material – reduces heat buildup during wear
• Single-use design – ensures sterility and hygiene

**Clinical Applications:**
• Sterile surgical procedures
• Operating room activities
• Sterile field maintenance
• Aseptic technique procedures
• Infection control-sensitive environments
• Surgical site protection

**Clinical Benefits:**
• Sterility maintenance – sterile packaging ensures aseptic technique
• Body protection – shields against contamination
• Infection control – single-use design prevents cross-contamination
• Surgical safety – maintains sterile field integrity

**Technical Specifications:**
• Sterile packaging
• Full-body protective design
• Sterile construction
• Breathable material
• Single-use disposable design

The Sterile Coverall provides healthcare professionals with essential sterile body protection during surgical procedures, ensuring aseptic technique and infection control.`

function SterileCoverallPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SterileCoverallPage
