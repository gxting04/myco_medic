import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Ophthalmic Head Pads are specialized positioning devices designed specifically for ophthalmic (eye) surgical procedures. These pads provide secure head positioning and support while allowing optimal access to the eye area for surgical procedures.

**Key Features:**
• Ophthalmic-specific design – optimized for eye surgery procedures
• Secure head positioning – prevents head movement during delicate eye procedures
• Comfortable padding – soft material provides patient comfort
• Surgical access – allows optimal access to eye area
• Pressure relief – reduces risk of head and neck pressure injuries
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Ophthalmic surgical procedures
• Eye surgery positioning
• Retinal procedures
• Cataract surgery
• Corneal procedures
• Ophthalmic examination positioning

**Clinical Benefits:**
• Secure positioning – prevents head movement during delicate procedures
• Surgical access – allows optimal access to eye area
• Patient comfort – comfortable padding reduces discomfort
• Pressure relief – reduces risk of pressure injuries

**Technical Specifications:**
• Ophthalmic-specific positioning design
• Soft padding material
• Secure positioning system
• Compatible with ophthalmic surgical tables
• Available in various sizes

The Ophthalmic Head Pads provide healthcare professionals with specialized support for ophthalmic procedures, ensuring secure head positioning and optimal surgical access.`

function OphthalmicHeadPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default OphthalmicHeadPadsPage
