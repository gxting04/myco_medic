import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Instrument Tray with Lid is a complete system combining an instrument tray with an integrated lid, providing organized instrument storage with protection and sterility maintenance. This system ensures instruments remain protected and sterile.

**Key Features:**
• Complete system – tray with integrated lid
• Instrument organization design – provides organized storage for surgical instruments
• Sterility protection – lid maintains instrument sterility
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Secure fit – lid provides secure coverage

**Clinical Applications:**
• Surgical instrument organization
• Operating room procedures
• Instrument storage with sterility protection
• Clinical procedure organization
• Instrument containment
• Sterile field maintenance

**Clinical Benefits:**
• Complete solution – tray and lid system provides comprehensive instrument management
• Sterility protection – maintains instrument sterility
• Organized workflow – facilitates efficient instrument organization
• Versatile application – suitable for various clinical needs

**Technical Specifications:**
• Instrument tray with integrated lid
• Secure fit mechanism
• Durable construction material
• Easy-to-clean surfaces
• Compatible with standard surgical procedures

The Instrument Tray with Lid provides healthcare professionals with a complete system for organized instrument storage with sterility protection, ensuring efficient workflow and infection control.`

function InstrumentTrayWithLidPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InstrumentTrayWithLidPage
