import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Large instrument cleaning brush with rubber–plastic handle and soft white nylon bristles for thorough yet controlled cleaning of surgical and medical instruments.

**Bristles**
• Soft white nylon; bristle length out approximately 3 cm

**Product details**
• Color: Beige (handle)
• Size: 33.7 cm × 2.1 cm
• Reusable when maintained per your reprocessing and inspection policy

Suitable for CSSD, theatre, and clinic settings where robust hand-held brushing is required alongside detergents and protocols approved for your devices.

Contact us for pricing and bulk supply.`

function LargeInstrumentCleaningBrushWithRubberPlasticHandlePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default LargeInstrumentCleaningBrushWithRubberPlasticHandlePage
