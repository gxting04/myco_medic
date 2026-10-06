import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Basic Pack, also known as a sterile basic pack, provides essential sterile components for various minor surgical and medical procedures. This versatile pack contains fundamental items needed for maintaining aseptic technique during clinical procedures.

**Key Features:**
• Essential components – includes drapes, gauze, and basic sterile supplies
• Sterile packaging – ensures aseptic technique during procedures
• Single-patient-use design – eliminates infection control concerns
• Versatile application – suitable for various minor procedures
• Convenient packaging – easy to store and access
• Standard components – universally compatible supplies

**Pack Contents:**
• Sterile drapes
• Gauze pads
• Cotton balls
• Antiseptic swabs
• Basic dressing materials
• Disposable gloves

**Clinical Applications:**
• Minor surgical procedures
• Wound care and dressing changes
• Injection procedures
• Catheter insertion
• Basic sterile procedures
• Outpatient clinic procedures

**Clinical Benefits:**
• Infection control – sterile, single-patient-use design
• Convenience – essential supplies in one package
• Cost-effective – provides basic sterile supplies
• Versatile application – suitable for various procedures

**Technical Specifications:**
• Sterile, single-patient-use packaging
• Standard sterile supplies
• Compatible with standard clinical procedures
• Available in various sizes

The Disposable Basic Pack provides healthcare professionals with essential sterile supplies for maintaining aseptic technique during various minor procedures, ensuring infection control and convenience.`

function DisposableBasicPackPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableBasicPackPage
