import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The C-Bona Closed Suction Systems provide a closed-circuit method for removing secretions from the airway without disconnecting the patient from the ventilator. This advanced system maintains ventilation while enabling safe, effective airway hygiene, reducing the risk of complications associated with open suctioning.

**Key Features:**
• Closed-circuit design – maintains ventilation during suctioning procedures
• In-line suction capability – eliminates need to disconnect from ventilator
• Reduced infection risk – closed system prevents environmental contamination
• Single-patient-use catheter – disposable design ensures infection control
• Easy to use – simple operation for healthcare providers
• Compatible with standard endotracheal and tracheostomy tubes

**Clinical Applications:**
• Long-term mechanical ventilation in intensive care units
• Patients requiring frequent airway suctioning
• Ventilator-dependent patients
• Critical care airway management
• Infection control-sensitive environments

**Clinical Benefits:**
• Maintains ventilation – continuous respiratory support during suctioning
• Reduced VAP risk – closed system reduces risk of ventilator-associated pneumonia
• Improved patient safety – eliminates desaturation events from disconnection
• Enhanced infection control – closed circuit prevents cross-contamination

**Technical Specifications:**
• Closed-circuit suction design
• Compatible with standard breathing circuits
• Single-patient-use disposable catheters
• Available in adult and pediatric sizes
• Easy-to-use control mechanism

The C-Bona Closed Suction Systems provide healthcare professionals with an advanced solution for airway hygiene, combining effective secretion removal with enhanced patient safety and infection control.`

function CBonaClosedSuctionSystemsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CBonaClosedSuctionSystemsPage
