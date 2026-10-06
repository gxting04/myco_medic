import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Cleaning brush for test tube / tracheostomy tube.

**Item code: FBC3-70042L**
• Material: nylon cleaning brush with stainless steel handle
• Brush length: 13 cm
• Brush head: 13 mm × 50 mm

**Item code: FBC3-70042S**
• Material: nylon cleaning brush with stainless steel handle
• Brush length: 13.5 cm
• Brush head: 10 mm × 40 mm

Contact us for pricing, availability, and the size best suited to your tubes.`

function TrachealTubeBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default TrachealTubeBrushesPage
