import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Sterile Basic Kit is a comprehensive, sterile disposable pack designed for general medical procedures and examinations. This essential kit provides healthcare professionals with all fundamental sterile components needed for safe, effective patient care.

**Key Features:**
1.Isolation: isolating contaminated areas from operating areas.
2.Barrier: preventing fluid and microbial penetration.
3.Fluid Control: collecting body fluid and irrigation fluids.
4.Comfortable: light gram, soft, breathable.
5.Soft, lint free, lightweight, compact moisture resistant, nonirritating, and static free.

**Components Included:**
• 1 x Mayo Stand Cover
• 1 x Limpet Bag
• 2 x Absorbents Towels 30x40cm
• 4 x Adhesive Drape
• 1 x Fan Folded Drape 152cm x 112cm
• 1 x Folded Drape 152cm x 193cm
• 1 x Table Cover

**Applications:**
• General medical examinations
• Minor medical procedures
• Outpatient clinics
• Emergency care settings
• General practice procedures
• Wound care and dressing changes

The Basic Sterile Kit streamlines medical procedures by providing a complete, ready-to-use sterile pack that ensures efficiency, safety, and convenience for healthcare providers and patients alike.`

function BasicSterileKitPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BasicSterileKitPage
