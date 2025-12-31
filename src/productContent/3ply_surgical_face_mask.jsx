import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ThreePlySurgicalFaceMaskPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `3-layer surgical mask (non-woven + melt blown + non-woven), BFE ≥98%, with metal nose bar and latex-free earloops. Single-use; box of 50.

**Key Details:**
• Material: 3-ply non-woven / melt blown / non-woven (25+25+25gsm)
• Blue color; metal strip nose bar; latex-free earloops
• BFE ≥98%; single-use; box of 50 pcs
• Applications: general healthcare and daily use`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default ThreePlySurgicalFaceMaskPage
