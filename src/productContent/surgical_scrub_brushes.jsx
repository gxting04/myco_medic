import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Disposable surgical scrub brushes are designed for pre-operative hand and nail scrubbing when used with your facility’s approved antiseptic protocol. The brush helps remove transient flora and debris from skin and subungual areas before gloving.

**Key features:**
• Scrubbing filaments suited to nails, cuticles, and interdigital spaces
• Single-use design to support infection prevention where disposable brushes are mandated
• Compatible with common chlorhexidine, iodophor, and alcohol-based scrub routines per manufacturer and hospital policy

**Typical uses:**
• Surgical hand preparation and repeat scrubs per local SOP
• Operating theatre, CSSD, and procedure areas requiring standardised scrub practice

**Notes:**
• Always follow your antiseptic manufacturer’s contact time and application instructions
• Discard after use per waste-stream rules; do not reuse

Contact us for pack sizes, pricing, and compatibility with your dispenser or storage workflow.`

function SurgicalScrubBrushesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SurgicalScrubBrushesPage
