import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `The Nylon Bristle Tooth Brush is intended for gentle oral hygiene where soft, durable nylon filaments are preferred for cleaning teeth and gums in care settings.

**Key features:**
• Nylon bristles for effective yet gentle plaque removal
• Suitable for routine patient oral care under nursing or caregiver supervision
• Robust construction for single-patient or protocol-based use per your facility policy

**Typical uses:**
• Daily oral hygiene in wards, long-term care, and home-care kits
• Supporting oral health as part of broader nursing care plans

**Notes:**
• Replace the brush when bristles splay or after the interval defined by your infection-control policy
• Follow local guidelines for personal care items and disposal

Contact us for pricing, packaging options, and bulk supply.`

function NylonBristleToothBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default NylonBristleToothBrushPage
