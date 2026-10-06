import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable CPR Resuscitation System features self-inflating bags that provide reliable positive pressure ventilation for emergency respiratory support.

**Key Features:**
• Self-inflating design – automatically fills after compression, pulling oxygen or air into the bag
• Always inflated – remains ready for immediate use at all times
• No compressed gas required – can deliver positive pressure ventilation without a compressed gas source
• High oxygen delivery – with oxygen reservoir attachment, delivers 90% to 100% oxygen concentration
• Cost-effective solution – designed to manage healthcare costs efficiently

Mercury Medical® offers comprehensive resuscitation systems engineered for superior performance and reliability in critical care situations.`

function DisposableCPRResuscitationSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableCPRResuscitationSystemPage
