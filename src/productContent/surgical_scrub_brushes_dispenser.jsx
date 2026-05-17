import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Wall-mounted surgical scrub brush dispensers organise brushes at scrub sinks, support tidy traffic flow, and reduce handling of loose stock. Choose acrylic or stainless steel models per your environment and capacity needs.

**A. Material: Acrylic**

Type: Single (ABD250)
Size: H 50 cm × W 12 cm × L 9 cm

Type: Double (ABD480)
Size: H 50 cm × W 12 cm × L 17.5 cm

**Specifications (acrylic):**
• Upper and lower hanging holes at the back for easy wall mounting
• Suitable for disposable surgical scrub brushes and surgical scrub brushes with povidone iodine

**B. Material: Stainless steel**

Type: Single (OTBD1)
Size: H 49 cm × W 12 cm × L 10 cm

**Specifications (stainless steel):**
• Can fit 13 brushes, approx.
• Comes with screws for wall mounting

**Notes:**
• Mounting, cleaning, and restocking should follow your facility’s infection prevention and engineering checks
• Confirm brush compatibility (disposable and/or povidone iodine impregnated) for the model you select

Contact us for models ABD250, ABD480, and OTBD1, spare parts, and refill bundles.`

function SurgicalScrubBrushesDispenserPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SurgicalScrubBrushesDispenserPage
