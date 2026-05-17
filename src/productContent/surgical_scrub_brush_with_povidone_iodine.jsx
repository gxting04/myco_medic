import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Impregnated surgical scrub brush with povidone iodine 7.5% for antiseptic cleansing of hands and forearms before surgery when used according to your facility’s hand hygiene policy.

**Antiseptic**
• Povidone iodine 7.5%

**Use**
• For cleansing hands and arms prior to surgery

**Important**
• For external use only; do not use in the eye

**Directions**
• Wet hands and forearms with water. Clean under nails with the nail cleaner. Scrub for 3 minutes with the impregnated brush, paying close attention to the nails, cuticles, and interdigital spaces. Rinse thoroughly with running water. Repeat as required by your protocol.

**Inactive ingredients**
• Hydroxyethyl cellulose, nonylphenol ethoxylate, purified water

Contact us for pricing, packs, and documentation.`

function SurgicalScrubBrushWithPovidoneIodinePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SurgicalScrubBrushWithPovidoneIodinePage
