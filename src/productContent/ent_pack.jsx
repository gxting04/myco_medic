import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The ENT Pack is a comprehensive, sterile disposable kit designed specifically for Ear, Nose, and Throat (ENT) procedures. This all-in-one pack provides healthcare professionals with all essential components needed for efficient ENT examinations and minor procedures.

**Key Features:**
1.Isolation: isolating contaminated areas from operating areas.
2.Barrier: preventing fluid and microbial penetration.
3.Fluid Control: collecting body fluid and irrigation fluids.
4.Comfortable: light gram, soft, breathable.
5.Soft, lint free, lightweight, compact moisture resistant, nonirritating, and static free.


**Components:**
• 1 x Mayo Stand Cover 58 x 137cm
• 1 x ENT Drape 112 x 152cm
• 2 x Absorbents Towels 30 x 40cm
• 2 x Side Drapes 100 x 100cm
• 1 x Wrap 100 x 100cm

**Applications:**
• ENT examinations and consultations
• Minor ENT procedures
• Outpatient ENT clinics
• Emergency ENT care
• General practice ENT procedures

The ENT Pack streamlines ENT procedures by providing a complete, ready-to-use kit that ensures efficiency, safety, and convenience for healthcare providers and patients alike.`

function ENTPackPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ENTPackPage
