import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The IOB Forced Air Warming System is an advanced patient temperature management device designed to prevent and treat hypothermia during surgical procedures and in critical care settings. This system delivers warm air through specialized blankets to maintain optimal patient body temperature.

**Key Features:**
• Forced air technology – delivers consistent, controlled warm air to patient
• Adjustable temperature settings – allows precise temperature management
• Multiple blanket options – various sizes and designs for different procedures
• Quiet operation – minimizes noise disruption in clinical environments
• Easy to use – intuitive controls for quick setup and operation
• Portable design – enables use in various clinical locations

**Clinical Applications:**
• Surgical procedures requiring temperature maintenance
• Post-operative warming
• Intensive care unit temperature management
• Emergency department hypothermia treatment
• Pediatric and adult patient warming

**Clinical Benefits:**
• Prevents hypothermia – maintains optimal body temperature during procedures
• Improved patient outcomes – temperature management reduces complications
• Enhanced comfort – warm air provides patient comfort
• Versatile application – suitable for various clinical scenarios

**Technical Specifications:**
• Adjustable temperature range
• Multiple blanket sizes available
• Portable unit design
• Quiet operation
• Easy-to-use control interface

The IOB Forced Air Warming System provides healthcare professionals with an effective solution for patient temperature management, ensuring optimal thermal care during surgical procedures and critical care situations.`

function IOBForcedAirWarmingSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default IOBForcedAirWarmingSystemPage
