import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Individually packed suction toothbrush treated with sodium bicarbonate.

**Features**
• Two-sided: foam on one side and super-soft bristles on the other
• Easy to control with thumb-port suction when removing secretions from the oral cavity
• Can be connected to standard suction tubing
• Suitable for ICU, bedridden patients, and patients with a sore mouth
• Helps lower the risk of infections and contributes to an overall sense of patient well-being`

function SuctionToothbrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SuctionToothbrushPage
