import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Medcaptain Syringe Pump (SYS-50) is a specialized infusion device designed for precise delivery of small-volume medications and fluids using standard syringes. This compact pump provides accurate, controlled administration of critical medications requiring precise dosing, such as vasoactive drugs, inotropes, and pediatric medications.

**Key Features:**
• Precise micro-infusion capability – accurate delivery of small-volume medications
• Syringe compatibility – works with standard syringe sizes
• Programmable rate control – allows precise dosing adjustments
• Safety alarms – occlusion detection and syringe empty alarms
• Compact design – space-efficient for bedside use
• Battery operation – portable for various clinical locations
• Easy-to-use interface – simple controls for quick setup

**Clinical Applications:**
• Critical care medication administration
• Vasoactive drug infusion
• Pediatric medication delivery
• Inotrope administration
• Small-volume fluid replacement
• Intensive care unit medication management

**Clinical Benefits:**
• Precise dosing – accurate delivery of critical medications
• Safety features – alarms prevent medication errors
• Compact design – ideal for space-constrained environments
• Versatile application – suitable for various medication types

**Technical Specifications:**
• Micro-infusion capability
• Standard syringe compatibility
• Programmable rate control
• Safety alarm systems
• Battery-powered operation

The Medcaptain Syringe Pump provides healthcare professionals with precise control over small-volume medication administration, ensuring accurate delivery of critical medications for optimal patient care.`

function MedcaptainSyringePumpPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MedcaptainSyringePumpPage
