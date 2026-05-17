import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Surgical sponge brush (MYSBB-B): dual-sided scrub brush with extra-soft bristles and sponge foam for gentle cleansing during surgical hand preparation, routine hand washing, and nail cleaning.

**Features**
• Dual-sided surgical scrub brush
• Extra-soft bristles and sponge foam
• Gentle on skin
• Sterile, individually packed
• Suitable for surgical hand cleaning, hand washing, and nail cleaning

**Specifications**
• Size: L 8 cm × W 5 cm × H 4 cm
• Color: Blue

High-quality medical cleaning brush for effective yet gentle cleansing in hospital, clinic, and medical settings.

Contact us for pricing, carton quantities, and supply options.`

function SurgicalSpongeBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SurgicalSpongeBrushPage
