import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Intubating Stylet is a flexible, malleable guide wire used to shape and support endotracheal tubes during intubation procedures. This essential accessory facilitates difficult intubations by allowing customization of tube curvature to match patient anatomy.

**Key Features:**
• Malleable design – can be shaped to match patient airway anatomy
• Flexible yet supportive – provides structural support without compromising tube flexibility
• Smooth surface – facilitates easy insertion and removal
• Standard length – accommodates various endotracheal tube sizes
• Reusable design – can be sterilized for multiple uses
• Compatible with standard endotracheal tubes – works with most tube types

**Clinical Applications:**
• Difficult airway intubations
• Patients with limited mouth opening
• Cervical spine restrictions
• Anatomical variations requiring custom tube shaping
• Emergency airway management scenarios

**Clinical Benefits:**
• Facilitates difficult intubations – custom shaping improves success rates
• Improved tube control – provides better manipulation during insertion
• Versatile tool – useful in various challenging airway scenarios
• Cost-effective – reusable design provides long-term value

**Technical Specifications:**
• Malleable metal construction
• Standard length for various tube sizes
• Smooth, polished surface
• Designed for sterilization and reuse
• Compatible with standard endotracheal tubes

The Intubating Stylet is an essential accessory for challenging intubation procedures, providing healthcare professionals with the ability to customize endotracheal tube shape for optimal airway management.`

function IntubatingStyletPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default IntubatingStyletPage
