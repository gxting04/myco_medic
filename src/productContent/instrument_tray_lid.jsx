import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Instrument Tray Lid is a specialized cover designed to fit instrument trays, providing protection and maintaining sterility of instruments. This lid ensures instruments remain protected and sterile during storage and transport.

**Key Features:**
• Tray cover design – fits standard instrument trays
• Sterility protection – maintains instrument sterility
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Secure fit – provides secure coverage for instrument trays

**Clinical Applications:**
• Instrument tray coverage
• Sterility maintenance
• Instrument protection during storage
• Instrument transport
• Sterile field maintenance
• Infection control protocols

**Clinical Benefits:**
• Sterility protection – maintains instrument sterility
• Instrument protection – protects instruments during storage and transport
• Organized workflow – facilitates efficient instrument management
• Versatile application – suitable for various tray sizes

**Technical Specifications:**
• Tray lid design
• Secure fit mechanism
• Durable construction material
• Easy-to-clean surfaces
• Compatible with standard instrument trays

The Instrument Tray Lid provides healthcare professionals with protection and sterility maintenance for instrument trays, ensuring instrument safety and infection control.`

function InstrumentTrayLidPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InstrumentTrayLidPage
