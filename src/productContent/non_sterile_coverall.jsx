import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Non-Sterile Coverall is a full-body protective garment designed to protect healthcare workers from contamination during non-sterile procedures and activities. This essential personal protective equipment provides comprehensive body coverage while maintaining comfort and mobility.

**Key Features:**
• Full-body coverage – protects entire body from contamination
• Non-sterile design – suitable for non-sterile procedures
• Comfortable fit – allows freedom of movement
• Breathable material – reduces heat buildup during wear
• Easy to don and doff – simple application and removal
• Disposable design – single-use ensures hygiene

**Clinical Applications:**
• Non-sterile medical procedures
• Patient care activities
• Environmental cleaning
• Laboratory work
• Emergency medical procedures
• Infection control protocols

**Clinical Benefits:**
• Body protection – shields against contamination
• Infection control – disposable design prevents cross-contamination
• Comfortable wear – breathable material maintains comfort
• Easy use – simple application for healthcare workers

**Technical Specifications:**
• Full-body protective design
• Non-sterile construction
• Breathable material
• Disposable, single-use design
• Available in various sizes

The Non-Sterile Coverall provides healthcare professionals with essential body protection during non-sterile procedures, ensuring safety while maintaining comfort and mobility.`

function NonSterileCoverallPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default NonSterileCoverallPage
