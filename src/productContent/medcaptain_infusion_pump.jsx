import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Medcaptain Infusion Pump (SYS-6010) is a precision medical device designed for accurate and controlled delivery of intravenous fluids, medications, and blood products. This advanced infusion pump provides healthcare professionals with reliable, programmable control over infusion rates, ensuring safe and effective medication administration.

**Key Features:**
• Precise flow rate control – accurate delivery from micro-drips to high-volume infusions
• Programmable settings – allows customization of infusion parameters
• Safety alarms – multiple alarm systems for occlusion, air-in-line, and low battery
• Large, clear display – easy-to-read interface for monitoring infusion status
• Multiple infusion modes – continuous, intermittent, and patient-controlled options
• Battery operation – portable design with extended battery life
• Easy-to-use interface – intuitive controls for quick setup and operation

**Clinical Applications:**
• Continuous medication infusion in critical care
• Post-operative fluid management
• Chemotherapy administration
• Total parenteral nutrition (TPN) delivery
• Blood product administration
• Pediatric and adult patient care

**Clinical Benefits:**
• Accurate delivery – ensures precise medication dosing
• Patient safety – multiple safety features prevent adverse events
• Versatile application – suitable for various infusion needs
• Reliable performance – consistent operation in clinical environments

**Technical Specifications:**
• Wide flow rate range
• Multiple infusion modes
• Safety alarm systems
• Battery-powered operation
• Compatible with standard IV sets

The Medcaptain Infusion Pump provides healthcare professionals with a reliable, accurate solution for intravenous therapy administration, ensuring safe and effective medication delivery for optimal patient care.`

function MedcaptainInfusionPumpPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MedcaptainInfusionPumpPage
