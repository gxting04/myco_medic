import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Easydrop Flow Regulator is a precision device designed to control and regulate the flow rate of intravenous fluids and medications. This essential component ensures accurate delivery of IV therapies, providing healthcare professionals with precise control over infusion rates.

**Key Features:**
• Precise flow control – allows accurate regulation of infusion rates
• Easy-to-use design – simple adjustment mechanism for quick rate changes
• Visual flow indicator – enables monitoring of fluid delivery
• Compatible with standard IV sets – works with most IV administration systems
• Durable construction – designed for reliable performance in clinical use
• Multiple flow rate options – accommodates various clinical requirements

**Clinical Applications:**
• Intravenous fluid administration
• Medication infusion control
• Pediatric and adult IV therapy
• Critical care fluid management
• Operating room fluid administration

**Clinical Benefits:**
• Accurate delivery – ensures precise infusion rates
• Easy adjustment – allows quick rate modifications
• Visual monitoring – enables verification of fluid flow
• Versatile application – suitable for various IV therapy needs

**Technical Specifications:**
• Adjustable flow rate control
• Compatible with standard IV sets
• Visual flow indicator
• Durable clinical construction
• Available in various flow rate ranges

The Easydrop Flow Regulator provides healthcare professionals with precise control over IV fluid and medication delivery, ensuring accurate administration of therapies for optimal patient care.`

function EasydropFlowRegulatorPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default EasydropFlowRegulatorPage
