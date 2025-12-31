import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'OTJ001', value: 'OTJ001' },
  { name: 'OTJ003', value: 'OTJ003' },
  { name: 'OTJ004', value: 'OTJ004' }
]

function AdjustableStirrupsForLithotomySurgeriesPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `OKLand® adjustable stirrups that provide all-direction control of leg positioning in lithotomy surgeries, reducing staff workload and enhancing surgical efficiency and safety.

**1. All Direction Adjustment**
Easy and complete control of lithotomy and abduction angles helps enlarge the operative field. Even during surgery, clinical staff can reposition or adjust the legs in a sterile state with minimal effort.

**2. Easy, Safe, and Accurate Adjustment**
Pneumatic Lift Assist Stirrups make it extremely easy to adjust the legs to the desired position. The unique protecting wings reduce pressure on the popliteal fossa and gastrocnemius muscles, while the boots automatically adjust to reduce pressure on the calf.

The foot, ankle and calf are fully wrapped in a protective cover pad, and positioning angles are accurately indicated on the Meter Reader for precise, repeatable setups.

**3. Zero Pressure on Legs & Nerve Protection**
The protecting wings of the stirrups are designed to eliminate potential damage to peroneal nerves and greatly reduce pressure on the calves. In high-degree lithotomy positions, these wings also help protect the knees from dropping outward and downward, preventing excessive stretching of groin and lumbar muscles.

**Parameters & Accessories**
The system is available in multiple models such as OTJ001 / OTJ004 and OTJ003 to support different lithotomy setups.

A dedicated storage cart (OTJ01-TC, 101 × 45 × 45 cm) is available to simplify storage and transport of the stirrups within the operating suite.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default AdjustableStirrupsForLithotomySurgeriesPage
