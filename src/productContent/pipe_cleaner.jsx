import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Pipe cleaner for airway and tracheal tube cleaning. Flexible wire core bends easily to follow different tube shapes while the fluff body helps remove debris from the lumen.

**Features**
• Suitable for cleaning airway tubes and tracheal tubes
• Easy to bend for different shapes and curves
• Aglet ends for a secure, comfortable grip

**Specifications**
• Material: fluff + wire
• Color: white fluff with red aglet
• Length: 30 cm
• Diameter: approx. ± 6 mm

Contact us for pricing, packs, and availability.`

function PipeCleanerPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PipeCleanerPage
