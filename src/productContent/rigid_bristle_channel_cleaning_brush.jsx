import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `The Rigid Bristle Channel Cleaning Brush is designed to clean internal channels of reusable airway and endoscopy equipment where firm bristle action helps dislodge biofilm and debris from narrow lumens.

**Key features:**
• Rigid bristle construction for effective mechanical cleaning of channels
• Suited to working channels and instrument ports where thorough brushing is required
• Supports routine reprocessing workflows alongside approved detergents and sterilization protocols

**Typical uses:**
• Cleaning and maintenance of reusable device channels after clinical use
• CSSD and endoscopy reprocessing areas following local SOPs
• Complementing flushing and automated washer steps for stubborn residue

**Notes:**
• Always follow the device manufacturer’s IFU and your facility’s reprocessing policy
• Inspect the brush and device channels before and after use; replace the brush when worn or damaged

Contact us for sizing compatibility with your equipment and for bulk supply options.`

function RigidBristleChannelCleaningBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default RigidBristleChannelCleaningBrushPage
