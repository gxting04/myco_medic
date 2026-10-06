import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Plastic Apron (Sleeveless) is a lightweight protective garment designed to protect healthcare workers from contamination during patient care activities. This essential personal protective equipment provides front body coverage while maintaining comfort and mobility.

**Key Features:**
• Sleeveless design – provides front body coverage with arm freedom
• Lightweight material – comfortable for extended wear
• Easy to use – simple application and removal
• Disposable design – single-use ensures hygiene
• Water-resistant properties – protects against liquid contamination
• Tied closure – secure fit prevents exposure

**Clinical Applications:**
• Patient care activities
• Feeding and hygiene procedures
• Contamination prevention
• Infection control protocols
• Healthcare worker protection
• General medical procedures

**Clinical Benefits:**
• Body protection – shields against contamination
• Comfortable wear – lightweight, sleeveless design maintains mobility
• Infection control – disposable design prevents cross-contamination
• Easy use – simple application for healthcare workers

**Technical Specifications:**
• Sleeveless protective design
• Lightweight plastic material
• Tied closure system
• Water-resistant properties
• Disposable, single-use design

The Disposable Plastic Apron provides healthcare professionals with essential front body protection during patient care activities, ensuring safety while maintaining comfort and mobility.`

function DisposablePlasticApronPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposablePlasticApronPage
