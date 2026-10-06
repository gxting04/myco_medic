import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The ASU-200 Battery and Rechargeable Aspirator is a portable, high-performance suction device designed for reliable operation in various clinical settings. This advanced aspirator combines powerful suction capabilities with convenient battery operation, ensuring continuous patient care without dependency on electrical outlets.

**Key Features:**
• Rechargeable battery system – provides extended operational time without power cord restrictions
• Powerful suction performance – delivers consistent vacuum pressure for effective fluid removal
• Portable design – lightweight construction enables use in multiple clinical locations
• Easy-to-use controls – intuitive interface allows for quick operation during emergency situations
• Durable construction – built to withstand demanding clinical environments
• Low noise operation – quiet performance reduces patient anxiety and environmental disruption
• Easy maintenance – designed for simple cleaning and routine maintenance procedures

**Clinical Applications:**
• Emergency department procedures requiring immediate suction
• Operating room use during surgical procedures
• Intensive care unit patient management
• Pre-hospital emergency medical services
• Home healthcare settings requiring portable suction capability

**Technical Specifications:**
• Rechargeable battery with extended life
• Adjustable suction pressure settings
• Compatible with standard suction catheters and accessories
• Designed for reliable performance in various environmental conditions
• Meets medical device safety and performance standards

The ASU-200 Battery and Rechargeable Aspirator provides healthcare professionals with a reliable, portable solution for patient airway and fluid management, ensuring optimal care delivery across diverse clinical scenarios.`

function RechargeableAspiratorPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default RechargeableAspiratorPage
