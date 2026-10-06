import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Reusable CPR Resuscitation System is a full line of resuscitators manufactured with Silicone and Polysulfone material providing superior lung compliance "feel" with exceptional responsiveness.

Designed to be fully autoclavable, with the exception of certain accessories and replacement items such as the reservoir bag, oxygen tubing and accessories.

**Benefits:**
• Optional Colour-Coded Manometer, accuracy is ± 3 cm H₂O between 0 - 15cm H₂O
• Monitors both Airway and PEEP Pressure
• Fast re-expansion/high breath-per-minute capability
• Medical-grade Silicone and Polysulfone material
• Autoclavable temperature 132°C (except reservoir bag, oxygen tubing and disposable accessories)
• Optional CO₂ detector accessory
• Patient valve detaches to add Omni-Link tubing that provides greater reach capability. Ideal for neonatal and MRI needs
• Optional Exhalation Filter and MR Conditional Peep Valve accessory`

function ReusableCPRResuscitationSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ReusableCPRResuscitationSystemPage
